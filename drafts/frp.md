
---
title: FRP
---

# Explicit Functional Reactive Programming

* TOC
{: toc }

## 1. Introduction

Today software projects are so large that programmers cannot read every line. How is one to know which lines to read and which they can safely ignore? In other words, we wish to know the relationships between various pieces: are they dependent or independent?

This question is incredibly difficult to answer in imperative programming languages with mutable state, where variables can be modified anywhere they are in scope. In functional programming without mutable state, all terms explicitly list what they depend. Definitions are final and cannot be modified elsewhere in the code. This explicitness makes it incredibly easy to determine which parts of the code are dependent and independent of each other, and guide us towards what we do and do not need to read for our present purposes.

However, it is still possible to obfuscate the relationships between pieces of state in functional programming. One can simulate mutable state by passing around an arbitrarily large compound state value as an extra parameter to each function. This is considered an anti-pattern because "ease of reasoning is lost (we still know that each function is dependent only upon its arguments, but one of them has become so large and contains irrelevant values that the benefit of this knowledge as an aid to understanding is almost nothing)." [Out of the Tarpit]

Yet in Functional Reactive Programming (FRP), a variation on this anti-pattern has become the dominant architecture. Originally conceived for the Elm programming language, The Elm Architecture has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries.

This paper contrasts The Elm Architecture with a state management pattern that maintains explicit relationships from the perspective of comprehending independent pieces of a large application.

## 2. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell. It compiles to JavaScript. It is an FRP-inspired language that only allows first-order and non-cyclic streams for reasons discussed in **Section 5**.

The Elm Architecture follows directly from Elm's first-order, non-cyclic nature: because streams cannot contain other streams, nor be cyclic, the only way to construct user interfaces, which are inherently cyclical, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxudXBkYXRlLS0-IHMyKG5ldyBtb2RlbClcbnMyKG5ldyBtb2RlbCkgLS0-IHZpZXcgXG52aWV3LS0-fG1lc3NhZ2UsIG9sZCBtb2RlbHx1cGRhdGVcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19" frameborder="0" allowfullscreen></iframe>

Let's explore the architecture with a simple counter application. The full code can be [viewed here](https://gist.github.com/stevekrouse/5d763977c620c590d9f3434231348c76) and [edited in a live here](https://ellie-app.com/32jds3Yw2Nda1). The output of the application is:

<button onclick="num.innerText-=-1">+1</button>
<div id="num">0</div>
<button onclick="num.innerText-=1">-1</button>

The core of the architecture is its a compound state value, called the "model". It represents the entirety of an applications state at any given time. 

```elm
type alias Model =
    { count : Int }
```

Just like in imperative programming, the Elm Architecture is explicit only about the *initial* values of the model.

```elm
initialModel : Model
initialModel =
    { count = 0 }
```

The reducer steps the model forward in response to messages, thus simulating a bag of mutable variables that change over time. 

```elm
type Msg
    = Increment
    | Decrement

update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }
```

The view is a pure function of state. Messages are generated from events, such as the `Increment` and `Decrement` messages below, both from `onClick` events.

```elm
view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Increment ] [ text "+1" ]
        , div [] [ text <| toString model.count ]
        , button [ onClick Decrement ] [ text "-1" ]
        ]
```

This examples uses the `Html.beginnerProgram` to tie all the pieces together:

```elm
main : Program Never Model Msg
main =
    Html.beginnerProgram
        { model = initialModel
        , view = view
        , update = update
        }
```

## 3. Reflex

The Reflex library was built for Haskell web development via ghcjs. It features higher-order and cyclic streams, which means that streams can contain streams, and streams can reference streams that reference themselves. It is these features that are necessary to maintain explicitness in FRP.

Like in traditional FRP, Reflex has two main concepts: Events and Behaviors. Events are discrete occurrences in time, while Behaviors are continuously defined values for all points in time. For implementation reasons, Reflex also has another key concept, a Dynamic value, which has the properties of both Events and Behaviors, in that it is defined in all points in time as well as being able to notify you at the discrete points in time when it changes. In the following examples we use only Events and Dynamic values.

Here is the same button counter application in Reflex:

```haskell
bodyElement :: MonadWidget t m => m ()
bodyElement = do
  rec evIncr <- button "+1"
      el "div" $ display count
      evDecr <- button "-1"
      count <- foldDyn (+) 0 $ leftmost [1 <$ evIncr, -1 <$ evDecr]
  return ()
  
main :: IO ()
main = mainWidget bodyElement
```

Let's take it line by line. In Reflex, we use `do` syntax to lay out the order of HTML elements. 

```haskell
bodyElement = do
```

We first create a button `button "+1"` and bind its click event to the name `evIncr`. Then we create a div `el  "div"` that displays the count `display count`, which is defined below. Then we create another button, naming its event `evDecr`.  Notice that the statements are arranged vertically in the order in which they appear in the HTML DOM tree, not in the order they are "evaluated." In fact there is no explicit evaluation here. Instead this `do rec` syntax allow us to set up an event propagation network of events and behaviors *at the same time* that we lay our our HTML elements.

```haskell
  rec evIncr <- button "+1"
      el "div" $ display count
      evDecr <- button "-1"
```

Let's examine the final line from right-to-left:

```haskell
      count <- foldDyn (+) 0 $ leftmost [1 <$ evIncr, -1 <$ evDecr]
```

`evIncr` and `evDecr` are of type `Event ()`, but we wish to have events of type `Event Int`, so we use `<$ :: a -> Event b -> Event a` twice in `[1 <$ evIncr, -1 <$ evDecr]`, to obtain a list of type `[Event Int]`. We merge this list with the `leftmost` function of type `[Event a] -> Event a` (which is thus named because in the case when events occur simultaneously -- which is impossible in this example because only one button can be clicked at a time -- it chooses only the event leftmost in the list). To take stock, `leftmost [1 <$ evIncr, -1 <$ evDecr]` is of type `Event Int`, which you can think of as a list of all the mutations we want to take place on the `count`, which could look like `1 1 -1 1 1 -1 -1...`.  At the end we wish to have a `Dynamic Int` value that represents the count at any point in time, thus we must sum up these events with `foldDyn :: (a -> b -> b) -> b -> Event a -> m (Dynamic b)`.

It's not as meaningful in a small example, but even here you can see how `count` is defined much more explicitly than in the Elm example. If we wish to understand how `count` behaves we have a singular place to look for what  it depends upon (`evIncr` and `evDecr`), and precisely how (mapping them to 1 and -1, respectively, and summing up). We will see this benefit more clearly in a larger example.

However the architecture used here does not properly scale. For example, say we wanted to be able to set the value of the counter to a specific value, say another Dynamic, `dynNum1`, in response to a third button press. So instead of mapping our click `Event()` to `Event Int` and summing them up, let's map click `Event ()` to `Event (Int -> Int)`, which will take the previous value of `count` and step it forward.

```haskell
    count <- foldDyn ($) 0 $ leftmost 
      [ (+   1)  <$ evIncr
      , (+ (-1)) <$ evDecr
      , dynNum1 <$ evSet 
      ]  
```

Here we partially apply `+` to one argument to create a one input function that adds either `1` or `-1` to the previous value. The other confusing bit of this new definition is the `($) :: (a -> b) -> a -> b` operator. It represents functional application, so here it simply applies the function to the previous value.

This pattern is similar to the Elm Architecture in that it is a reduction over various events. However this is a local reduction solely for this piece of state. If there were other independent pieces of state in this application, they would have separate reductions, which could explicitly rely on the same or other events and dynamics. It is this clear independence between what is independent and dependence between what is dependent that we need to be able to effectively determine what parts of a large cod base to read and which to ignore. Let's step up the size of the codebase under examination a bit to see why.

## 4. TodoMVC Comparison 

ToDoMVC has become a standard application to compare front-end frameworks. It runs ~300 lines in both Elm and Reflex. We compare [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/166e5f2afc704629ee6d03de00deac892dfaeed0/Todo.elm) with [Reflex ToDoMVC](https://github.com/reflex-frp/reflex-todomvc/blob/cd15a37b0e6decf42840967ce5fba6a03cf278fa/src/Reflex/TodoMVC.hs).

![image](https://user-images.githubusercontent.com/2288939/43979574-2cef3b36-9cb9-11e8-98f9-7cb25b27326a.png)

Say we wish to understand the behavior of the list of todo items in both implementations.

### 4.1 Elm TodoMVC

In Elm, any message can modify any state. For example, in the reducer (called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm)), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42886488-ab1c24c4-8a71-11e8-92f5-13dc2f282ad4.png)

Thus there is no single place to look to understand how the todo items list, here called `entries`, behaves. We must Ctl-F for all occurrences of `entries =`.

![screenshot 2018-08-10 at 11 15 03 am](https://user-images.githubusercontent.com/2288939/43979683-95c27cfe-9cb9-11e8-805e-f2ab1e463f9f.png)

In other words, we cannot gain a complete understanding of any piece of state by looking in one place. We have to look through *all* messages to see if it affects the state in question, and then piece together *in our head* how the sum total of these effects come together to form an integrated behavior. In this way, the Elm Architecture simulates the "primitive word-at-a-time style of programming inherited from the von Neumann computer ... instead of encouraging us to think in terms of the larger conceptual units of the task at hand." [Can Programming Be Liberated...?]

There's a subtler way the Elm Architecture undermines explicitness: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Next, where do these messages come from? Unfortunately, any view element can emit any number of messages. We know from our Ctl-F above that the `Add`, `EditingEntry`, `UpdateEntry`, `Delete`, `DeleteComplete`, `Check`, and `CheckAll` events can affect `entries`, so now we'd have to Ctl-F for each of those events one-by-one to see which HTML elements emit those messages in response to which events. 

![screenshot 2018-08-11 at 12 09 39 pm](https://user-images.githubusercontent.com/2288939/43993685-9682fc58-9d5f-11e8-9766-e232c806f26d.png)

If we're looking to understand a single piece of state in Elm, we're not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece. Explicitness is lost as surely as if we passed around a compound state value to all of our functions, which is in fact what we've done.

### 4.2 Reflex ToDoMVC

By contrast, if we wish to understand the same piece of state in Reflex's TodoMVC, there is a single explicit place to look. As the code is dense and difficult to parse, I've taken the liberty to type annotate it and rearrange it a bit. First we begin with the top-level types. `MonadFix` and `MonadHold` allow us to create `Dynamic` values that retain state over time.

```haskell
todoMVC :: ( DomBuilder t m
           , DomBuilderSpace m ~ GhcjsDomSpace
           , MonadFix m
           , MonadHold t m
           , PostBuild t m
           )
        => m ()
todoMVC = do
```

We  first create a the outside `div` structure of the app, as well as include the `mainHeader`, defined elsewhere.

```haskell
  el "div" $ do
    elAttr "section" ("class" =: "todoapp") $ do
      mainHeader
```      
      
We come to the definition we care about: here the list of todo items, `tasks`, is defined as fold of `listTransformationEvent` applied to the previous list of `tasks`. (This is the same pattern we saw above for the counter. There we had `Event (Int -> Int)` and here we have `listTransformationEvent ::  Event (Map Int Task -> Map Int Task)`. Elsewhere `initialTasks` is defined as `Map.empty`. We also see here that the `rec` keyword will allow us to recursively define Events and Dynamics. 

```haskell
      rec tasks :: Dynamic (Map Int Task)
          tasks <- foldDyn ($) initialTasks listTransformationEvent
```

`tasks` depends only `listTransformationEvent`, and what it depends upon, etc. We can see that `listTransformationEvent` is defined as the merging of three events:

```haskell
      let listTransformationEvent ::  Event (Map Int Task -> Map Int Task)
          listTransformationEvent = leftmost  
            [ insertNewEvent
            , listModifyTasks
            , clearCompletedEvent
            ]
```

Let's take each event in turn. The `insertNewEvent` represents the addition of tasks to the list. This event is a mapping over the `newTask` event produced by `taskEntry`, defined elsewhere to produce the main text-box at the top of the page and emit events with the value of its contents when the enter button is pressed. Here we partially apply `insertNew_ :: Task ->  Map  Int  Task  ->  Map  Int  Task` over the new task event via `fmap` to create an event of type `Map Int Task -> Map Int Task`  that will accept the old `Map Int Task` and produce one with the addition of this task.

```haskell
      newtask :: Event Task
      newTask <- taskEntry
      let insertNewEvent :: Event (Map Int Task -> Map Int Task)
          insertNewEvent = fmap insertNew_ newTask
```

The `listModifyTasks` event is returned from the `taskList` widget, defined elsewhere to display the list of tasks, and allow them to be deleted, completed and edited. In response to these action to its interface, the `taskList` event of type `Event (Map Int Task -> Map Int Task)` emits functions that will appropriately modify the list of `tasks`. Note here that this definition depends on `tasks`. This circular, mutually recursive definition is key to maintain explicitness in user interfaces,  yet most FRP frameworks do not allow circular definitions.

```haskell
      listModifyTasks :: Event (Map Int Task -> Map Int Task)
      listModifyTasks <- taskList activeFilter tasks
```

The other parameter of `taskList` above, `activeFilter`, is also defined recursively below. It comes from the `control` widget displays the bottom of the todo list, which emits a `Dynamic Filter` value for which filter is currently selected, and and `Event ()` for when the "Clear Completed" button is clicked. We turn `clearCompleted` from an `Event ()` to `clearCompletedEvent :: Event (Map Int Task -> Map Int Task)` by creating a partially applied function that will filter out the completed tasks from the task list.

```haskell
      (activeFilter, clearCompleted) <- controls tasks
      let clearCompletedEvent :: Event (Map Int Task -> Map Int Task)
          clearCompletedEvent = fmap (\_ -> Map.filter $ not . taskCompleted) clearCompleted 
```

At the end we put the footer:

```
      return ()
      
    infoFooter
```

What we've learned from this definition is that there are exactly three places on the screen that can modify `tasks`:

* `insertNewEvent` is the only place where new tasks are added to the list
* `listModifyTasks` handles the vast majority of mutation, including deletions, completions (and their reversal), and text editing
* `clearCompletedEvent` filters out the completed tasks

Explictness allows us to see the shape of this application, how its pieces come together to make an integrated whole. Explictness also allows us to see where code is independent (such as `taskEntry`) and depedent (such as `taskList` on  `activeFilter` and `tasks`). If we only cared about one piece of behavior and its associated interface, we could rely on explicit independence to safely ignore the others in our reading.

<iframe width="1500px" height="700px" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggVERcblxubmV3VGFza0V2ZW50Pm5ld1Rhc2tFdmVudF0tLT4gdGFza3Ncbmxpc3RNb2RpZnlUYXNrcz5saXN0TW9kaWZ5VGFza3NdIC0tPiB0YXNrc1xuXG5jbGVhckNvbXBsZXRlZEV2ZW50PmNsZWFyQ29tcGxldGVkRXZlbnRdIC0tPiB0YXNrc1xudGFza3MgLS0-IHZpc2libGVUYXNrc1xuXG5hY3RpdmVGaWx0ZXItLT52aXNpYmxlVGFza3NcbnN1YmdyYXBoIHRhc2tMaXN0XG4gICAgdmlzaWJsZVRhc2tzLS0-aXRlbXNcbiAgICAgdG9nZ2xlQWxsQ2hlY2tib3h7dG9nZ2xlQWxsQ2hlY2tib3h9LS0-dG9nZ2xlQWxsPnRvZ2dsZUFsbF1cbiAgICB0b2dnbGVBbGwtLT5saXN0TW9kaWZ5VGFza3NcbiAgICBjaGFuZ2VTZWxmPmNoYW5nZVNlbGZdLS0-aXRlbXNcbiAgICAgZWRpdGluZy0tPml0ZW1zXG4gICAgaXRlbXMtLT5saXN0TW9kaWZ5VGFza3NcbiAgICAgc3ViZ3JhcGggdG9kb0l0ZW1cbiAgICAgICAgICBlZGl0Qm94e2VkaXRCb3h9LS0-c2V0RGVzY3JpcHRpb25cbiAgICAgICAgICBlZGl0Qm94LS0-Y2FuY2VsRWRpdFxuICAgICAgICAgIGRlc3Ryb3lCdXR0b257ZGVzdHJveUJ1dHRvbn0tLT5kZXN0cm95XG4gICAgICAgICAgZGVzY3JpcHRpb25MYWJlbHtkZXNjcmlwdGlvbkxhYmVsfS0tPnN0YXJ0RWRpdGluZ1xuICAgICAgICAgIGNvbXBsZWVkQ2hlY2tib3h7Y29tcGxldGVkQ2hlY2tib3h9LS0-c2V0Q29tcGxldGVkXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24tLT5lZGl0aW5nXG4gICAgICAgICAgc3RhcnRFZGl0aW5nPnN0YXJ0RWRpdGluZ10tLT5lZGl0aW5nXG4gICAgICAgICAgY2FuY2VsRWRpdD5jYW5jZWxFZGl0XS0tPmVkaXRpbmdcbiAgICAgICAgICBzZXRDb21wbGV0ZWQ-c2V0Q29tcGxldGVkXS0tPmNoYW5nZVNlbGZcbiAgICAgICAgICBkZXN0cm95PmRlc3Ryb3ldLS0-Y2hhbmdlU2VsZlxuICAgICAgICAgIHNldERlc2NyaXB0aW9uPnNldERlc2NyaXB0aW9uXSAtLT5jaGFuZ2VTZWxmXG4gICAgIGVuZFxuZW5kXG5cbnN1YmdyYXBoIGNvbnRyb2xzXG4gICAgYWxsQnV0dG9ue2FsbEJ1dHRvbn0gLS0-YWN0aXZlRmlsdGVyXG4gICAgYWN0aXZlQnV0dG9ue2FjdGl2ZUJ1dHRvbn0tLT5hY3RpdmVGaWx0ZXJcbiAgICBjb21wbGV0ZWRCdXR0b257Y29tcGxldGVkQnV0dG9ufSAtLT5hY3RpdmVGaWx0ZXJcbiAgICBjbGVhckNvbXBsZXRlZEJ1dHRvbntjbGVhckNvbXBsZXRlZEJ1dHRvbn0tLT5jbGVhckNvbXBsZXRlZEV2ZW50XG4gICAgdG9kb0NvdW50XG5lbmRcblxuc3ViZ3JhcGggdGFza0VudHJ5XG4gICBkZXNjcmlwdGlvbkJveHtkZXNjcmlwdGlvbkJveH0tLT5cbm5ld1Rhc2tFdmVudFxuZW5kXG5cbnRhc2tzIC0tPiB0b2RvQ291bnRcblxuXG5jbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2XG5jbGFzcyB0YXNrcyxhY3RpdmVGaWx0ZXIsdG9kb0NvdW50LHZpc2libGVUYXNrcyxlZGl0aW5nLGl0ZW1zIG9yYW5nZVxuXG5jbGFzc0RlZiBncmVlbiBmaWxsOiM0ZmZmNWFcbmNsYXNzIG5ld1Rhc2tFdmVudCxjbGVhckNvbXBsZXRlZEV2ZW50LHNldENvbXBsZXRlZCxkZXN0cm95LGNoYW5nZVNlbGYsc2V0RGVzY3JpcHRpb24sc3RhcnRFZGl0aW5nLGNhbmNlbEVkaXQsdG9nZ2xlQWxsLGxpc3RNb2RpZnlUYXNrcyBncmVlblxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

## 5. Is the cure worse than the disease?

* how the elm architecure is good (LOGO / one piece at a time is easy to reason about from a writing perspective)
* why higher order and cyclic streams are difficult
* Also note the dependency on lazy eval which is part of the reason for space leakiness.
* possible in JS without Haskell-y runtime?

## 6. Related Work

The field of program slicing takes a different tatic to this problem. It leaves the underlying imperative programming model the same, and uses both static analysis and execution traces to determine which sections of code are relevant. [4]

## 7. Future work

* Visualizations
* Building a langauge that's easier to use - maybe in JS

## 8. Conclusion


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
