
---
title: FRP
---

# Explictly Comprehensible Functional Reactive Programming

* TOC
{: toc }

## Abstract

Large Functional Reactive programs written in The Elm Architecture are difficult to comprehend without reading every line of code. A more scalable architecture would allow programmers to understand a small piece without reading the larger application. This paper articulates the comprehensibility benefits of such an alternative architecture based on higher-order and cyclic streams.

## 1. Introduction

Today software projects are so large that programmers cannot read every line. How is one to know which lines to read and which they can safely ignore? In other words, we wish to know the relationships between various pieces: are they dependent or independent?

This question is incredibly difficult to answer in languages with mutable state, where variables can be modified anywhere they are in scope. In functional programming without mutable state, all terms explicitly list what they depend. This explicitness makes it easy to mechanistically determine which parts of the code are dependent and independent of each other, and guide us towards what we do and do not need to read for our present purposes.

However, it is still possible to obfuscate the relationships between pieces of state in functional programming. One can simulate global mutable state by passing around an arbitrarily large compound state value as an extra parameter to each function. This is considered an anti-pattern because "ease of reasoning is lost (we still know that each function is dependent only upon its arguments, but one of them has become so large and contains irrelevant values that the benefit of this knowledge as an aid to understanding is almost nothing)." [[Out of the Tarpit](https://github.com/papers-we-love/papers-we-love/blob/master/design/out-of-the-tar-pit.pdf)]

Yet in Functional Reactive Programming (FRP), a variation on this anti-pattern has become the dominant architecture. Originally conceived for the Elm programming language, The Elm Architecture has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries.

This paper contrasts The Elm Architecture with a state management pattern that maintains explicit relationships from the perspective of comprehending independent pieces of a large application.

## 2. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell that compiles to JavaScript. It only allows first-order and non-cyclic streams for reasons discussed in **Section 5**.

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

The reducer steps the model forward in response to messages, simulating a global bag of mutable variables that change over time. 

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

We first create a button `button "+1"`, which gives us its click events `evIncr :: Event ()`. Then we create a div `el  "div"` that displays the count `display count`. Then we create another button.  Notice that the `count` is used before it is defined. In Reflex, statements are arranged vertically in the order in which they appear in the HTML DOM tree, not in the order they are "evaluated." There is no explicit evaluation order here. Instead this `do rec` syntax allow us to set up an event propagation network *at the same time* as we lay our our HTML elements.

```haskell
  rec evIncr <- button "+1"
      el "div" $ display count
      evDecr <- button "-1"
```

How do we calculate the `count` from the button click events? One way is to map each click event to either `1` or `-1`, merge the two event streams into a single event stream (which would look like `1 1 -1 1 1 -1 -1...`), and sum them up:

```haskell
      count <- foldDyn (+) 0 $ leftmost [1 <$ evIncr, -1 <$ evDecr]
```
We use `<$ :: a -> Event b -> Event a` to map over the click events, and merge them with the `leftmost` function of type `[Event a] -> Event a` (which is thus named because in the case when events occur simultaneously -- which is impossible in this example because only one button can be clicked at a time -- it chooses only the event leftmost in the list). To sum up these events, we use `foldDyn :: (a -> b -> b) -> b -> Event a -> m (Dynamic b)`.

However this architecture does not properly scale. For example, say we wanted to be able to set the value of the counter to a specific value, say another Dynamic, `dynNum1`, in response to a third button press. So instead of mapping our click `Event()` to `Event Int` and summing them up, let's map click `Event ()` to `Event (Int -> Int)`, which will take the previous value of `count` and step it forward.

```haskell
    count <- foldDyn ($) 0 $ leftmost 
      [ (+   1)         <$ evIncr
      , (+ (-1))        <$ evDecr
      , (\_ -> dynNum1) <$ evSet 
      ]  
```

Here we create two one-input functions `(+   1)` and `(+ (-1))` by partially applying the `+` operator. In Haskell `($) :: (a -> b) -> a -> b` represents functional application, so here it simply applies the event functions to the previous value of count.

This pattern is similar to the Elm Architecture in that it is a reduction over various events. However this is a local reduction solely for this piece of state. If there were other independent pieces of state in this application, they would have separate reductions, which could explicitly rely their events and dynamics. 

Even in this small example we here you can see how `count` is defined much more explicitly than in Elm. If we wished to understand how `count` behaves, we'd have a singular place to look for what  it depends upon (`evIncr` and `evDecr`), and precisely how (mapping them to`(+   1)` and `(+ (-1))`, respectively, and then merging and summing up). We will see these explicitness benefit more clearly in a larger example.

## 4. TodoMVC Comparison 

ToDoMVC has become a standard application to compare front-end frameworks. It runs ~300 lines in both Elm and Reflex. We compare [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/166e5f2afc704629ee6d03de00deac892dfaeed0/Todo.elm) with [Reflex ToDoMVC](https://github.com/reflex-frp/reflex-todomvc/blob/cd15a37b0e6decf42840967ce5fba6a03cf278fa/src/Reflex/TodoMVC.hs).

![image](https://user-images.githubusercontent.com/2288939/43979574-2cef3b36-9cb9-11e8-98f9-7cb25b27326a.png)

Say we wish to understand the behavior of the list of todo items in both implementations.

### 4.1 Elm TodoMVC

In Elm, any message can modify any state. For example, in the reducer (called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm)), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42886488-ab1c24c4-8a71-11e8-92f5-13dc2f282ad4.png)

Thus there is no single place to look to understand how the todo items list, here called `entries`, behaves. We must Ctl-F for all occurrences of `entries =`.

![screenshot 2018-08-10 at 11 15 03 am](https://user-images.githubusercontent.com/2288939/43979683-95c27cfe-9cb9-11e8-805e-f2ab1e463f9f.png)

In other words, we cannot gain a complete understanding of any piece of state by looking in one place. We have to look through *all* messages to see if it affects the state in question, and then piece together *in our head* how the sum total of these effects come together to form an integrated behavior. In this way, the Elm Architecture simulates the "primitive word-at-a-time style of programming inherited from the von Neumann computer ... instead of encouraging us to think in terms of the larger conceptual units of the task at hand." [[Can Programming Be Liberated from the von Neumann Style?](https://dl.acm.org/citation.cfm?id=359579)]

There's also a subtler way the Elm Architecture undermines explicitness: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Next, where do these messages come from? Unfortunately, any view element can emit any number of messages. We know from our Ctl-F above that the `Add`, `EditingEntry`, `UpdateEntry`, `Delete`, `DeleteComplete`, `Check`, and `CheckAll` events can affect `entries`, so now we'd have to Ctl-F for each of those events to see which HTML elements emit those messages in response to which events. 

![screenshot 2018-08-11 at 12 09 39 pm](https://user-images.githubusercontent.com/2288939/43993685-9682fc58-9d5f-11e8-9766-e232c806f26d.png)

If we're looking to understand a single piece of state in Elm, we're not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece. Explicitness is lost as surely as if we passed around a compound state value to all of our functions, which is in fact what we've done.

<iframe width="1000px" height="500px" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggVERcblxubW9kZWwtLT52aWV3SW5wdXRCb3hcbm1vZGVsLS0-Y2hlY2tBbGxCb3hcbm1vZGVsLS0-dG9kb0NoZWNrYm94XG5tb2RlbC0tPnRvZG9JbnB1dFxubW9kZWwtLT5hY3RpdmVCdXR0b257YWN0aXZlQnV0dG9ufVxubW9kZWwtLT5jb21wbGV0ZWRCdXR0b257Y29tcGxldGVkQnV0dG9ufVxubW9kZWwtLT5hbGxCdXR0b257YWxsQnV0dG9ufVxuXG52aWV3SW5wdXRCb3h7SW5wdXRCb3h9IC0tPiBBZGRcbnZpZXdJbnB1dEJveHtJbnB1dEJveH0gLS0-IFVwZGF0ZUZpZWxkXG5cbnN1YmdyYXBoIHZpZXdFbnRyaWVzXG4gIGNoZWNrQWxsQm94e2NoZWNrQWxsQm94fSAtLT4gQ2hlY2tBbGw-Q2hlY2tBbGxdXG4gIHN1YmdyYXBoIHZpZXdFbnRyeVxuICAgIHRvZG9DaGVja2JveHt0b2RvQ2hlY2tib3h9LS0-Q2hlY2s-Q2hlY2tdXG4gICAgZGVsZXRlQnV0dG9ue2RlbGV0ZUJ1dHRvbn0tLT5EZWxldGU-RGVsZXRlXVxuICAgIHRvZG9JbnB1dHt0b2RvSW5wdXR9IC0tPiBVcGRhdGVFbnRyeT5VcGRhdGVFbnRyeV1cbiAgICB0b2RvSW5wdXQgLS0-IEVkaXRpbmdFbnRyeT5FZGl0aW5nRW50cnldXG4gIGVuZFxuIFxuXG5lbmRcblxuQWRkPkFkZF0tLT5tb2RlbFxuQWRkLS0-bW9kZWxcbkFkZC0tPm1vZGVsXG5FZGl0aW5nRW50cnktLT5tb2RlbFxuVXBkYXRlRW50cnktLT5tb2RlbFxuRGVsZXRlLS0-bW9kZWxcbkNoZWNrLS0-bW9kZWxcbkNoZWNrQWxsLS0-bW9kZWxcblVwZGF0ZUZpZWxkPlVwZGF0ZUZpZWxkXS0tPm1vZGVsXG5cbnN1YmdyYXBoIGNvbnRyb2xzXG4gY2xlYXJDb21wbGV0ZUJ1dHRvbntjbGVhckNvbXBsZXRlQnV0dG9ufS0tPkRlbGV0ZUNvbXBsZXRlPkRlbGV0ZUNvbXBsZXRlXVxuYWN0aXZlQnV0dG9ue2FjdGl2ZUJ1dHRvbn0tLT5DaGFuZ2VWaXNpYmlsaXR5PkNoYW5nZVZpc2liaWxpdHldXG5jb21wbGV0ZWRCdXR0b257Y29tcGxldGVkQnV0dG9ufS0tPkNoYW5nZVZpc2liaWxpdHk-Q2hhbmdlVmlzaWJpbGl0eV1cbmFsbEJ1dHRvbnthbGxCdXR0b259LS0-Q2hhbmdlVmlzaWJpbGl0eT5DaGFuZ2VWaXNpYmlsaXR5XVxuZW5kXG5cbkNoYW5nZVZpc2liaWxpdHktLT5tb2RlbFxuRGVsZXRlQ29tcGxldGUtLT5tb2RlbFxuXG5jbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2XG5jbGFzcyBtb2RlbCBvcmFuZ2VcblxuY2xhc3NEZWYgZ3JlZW4gZmlsbDojNGZmZjVhXG5jbGFzcyBDaGVja0FsbCxDaGVjayxEZWxldGUsVXBkYXRlRW50cnksRWRpdGluZ0VudHJ5LFVwZGF0ZUZpZWxkLEFkZCxEZWxldGVDb21wbGV0ZSxDaGFuZ2VWaXNpYmlsaXR5IGdyZWVuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

TODO maybe [this graph](https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggVERcblxubW9kZWwtLT52aWV3SW5wdXRCb3hcbm1vZGVsLS0-Y2hlY2tBbGxCb3hcbm1vZGVsLS0-dG9kb0NoZWNrYm94XG5tb2RlbC0tPnRvZG9JbnB1dFxubW9kZWwtLT5hY3RpdmVCdXR0b257YWN0aXZlQnV0dG9ufVxubW9kZWwtLT5jb21wbGV0ZWRCdXR0b257Y29tcGxldGVkQnV0dG9ufVxubW9kZWwtLT5hbGxCdXR0b257YWxsQnV0dG9ufVxuXG5lbnRyaWVzLS0-bW9kZWxcbmZpZWxkLS0-bW9kZWxcbnVpZC0tPm1vZGVsXG5cbnZpZXdJbnB1dEJveHtJbnB1dEJveH0gLS0-IEFkZFxudmlld0lucHV0Qm94e0lucHV0Qm94fSAtLT4gVXBkYXRlRmllbGRcblxuc3ViZ3JhcGggdmlld0VudHJpZXNcbiAgY2hlY2tBbGxCb3h7Y2hlY2tBbGxCb3h9IC0tPiBDaGVja0FsbD5DaGVja0FsbF1cbiAgc3ViZ3JhcGggdmlld0VudHJ5XG4gICAgdG9kb0NoZWNrYm94e3RvZG9DaGVja2JveH0tLT5DaGVjaz5DaGVja11cbiAgICBkZWxldGVCdXR0b257ZGVsZXRlQnV0dG9ufS0tPkRlbGV0ZT5EZWxldGVdXG4gICAgdG9kb0lucHV0e3RvZG9JbnB1dH0gLS0-IFVwZGF0ZUVudHJ5PlVwZGF0ZUVudHJ5XVxuICAgIHRvZG9JbnB1dCAtLT4gRWRpdGluZ0VudHJ5PkVkaXRpbmdFbnRyeV1cbiAgZW5kXG4gXG5cbmVuZFxuXG5BZGQ-QWRkXS0tPmVudHJpZXNcbkFkZC0tPmZpZWxkXG5BZGQtLT51aWRcbkVkaXRpbmdFbnRyeS0tPmVudHJpZXNcblVwZGF0ZUVudHJ5LS0-ZW50cmllc1xuRGVsZXRlLS0-ZW50cmllc1xuQ2hlY2stLT5lbnRyaWVzXG5DaGVja0FsbC0tPmVudHJpZXNcblVwZGF0ZUZpZWxkPlVwZGF0ZUZpZWxkXS0tPmZpZWxkXG5cbnN1YmdyYXBoIGNvbnRyb2xzXG4gY2xlYXJDb21wbGV0ZUJ1dHRvbntjbGVhckNvbXBsZXRlQnV0dG9ufS0tPkRlbGV0ZUNvbXBsZXRlPkRlbGV0ZUNvbXBsZXRlXVxuYWN0aXZlQnV0dG9ue2FjdGl2ZUJ1dHRvbn0tLT5DaGFuZ2VWaXNpYmlsaXR5PkNoYW5nZVZpc2liaWxpdHldXG5jb21wbGV0ZWRCdXR0b257Y29tcGxldGVkQnV0dG9ufS0tPkNoYW5nZVZpc2liaWxpdHk-Q2hhbmdlVmlzaWJpbGl0eV1cbmFsbEJ1dHRvbnthbGxCdXR0b259LS0-Q2hhbmdlVmlzaWJpbGl0eT5DaGFuZ2VWaXNpYmlsaXR5XVxuZW5kXG5cbkNoYW5nZVZpc2liaWxpdHktLT52aXNpYmlsaXR5XG52aXNpYmlsaXR5LS0-bW9kZWxcblxuRGVsZXRlQ29tcGxldGUtLT5tb2RlbFxuXG5jbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2XG5jbGFzcyBlbnRyaWVzLGZpZWxkLHVpZCx2aXNpYmlsaXR5LG1vZGVsIG9yYW5nZVxuXG5jbGFzc0RlZiBncmVlbiBmaWxsOiM0ZmZmNWFcbmNsYXNzIENoZWNrQWxsLENoZWNrLERlbGV0ZSxVcGRhdGVFbnRyeSxFZGl0aW5nRW50cnksVXBkYXRlRmllbGQsQWRkLERlbGV0ZUNvbXBsZXRlLENoYW5nZVZpc2liaWxpdHkgZ3JlZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ) might be more fair...? 

### 4.2 Reflex ToDoMVC

By contrast, if we wish to understand the same piece of state in Reflex's TodoMVC, there is a single explicit place to look. As the code is dense and difficult to parse, I've taken the liberty to type annotate it and rearrange it a bit. First we begin with the top-level types. The interesting ones here are `MonadFix` and `MonadHold`, which allow us to create `Dynamic` values that retain state over time.

```haskell
todoMVC :: ( DomBuilder t m
           , DomBuilderSpace m ~ GhcjsDomSpace
           , MonadFix m
           , MonadHold t m
           )
        => m ()
todoMVC = do
```

We  first create the outside `div` structure of the app, as well as include the `mainHeader`, defined elsewhere.

```haskell
  el "div" $ do
    elAttr "section" ("class" =: "todoapp") $ do
      mainHeader
```      
      
We now come to the definition we care about. The list of todo items, `tasks`, is defined as fold of `listTransformationEvent` applied to the previous list of `tasks`. (This is the same pattern we saw above for the counter. There we had `Event (Int -> Int)` and here we have `listTransformationEvent ::  Event (Map Int Task -> Map Int Task)`. Elsewhere `initialTasks :: Map Int Task` is defined as `Map.empty`. We also see here that the `rec` keyword will allow us to recursively define events and dynamics. 

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

Let's take each event in turn. The `insertNewEvent` represents the addition of tasks to the list. This event is a mapping over the `newTask` event produced by `taskEntry`, defined elsewhere to produce the main text-box at the top of the page and emit events with the value of its contents when the enter button is pressed. Here we partially apply `insertNew_ :: Task -> Map  Int  Task -> Map  Int  Task` over the new task event via `fmap` to create an event of type `Map Int Task -> Map Int Task`  that will accept the old `Map Int Task` and produce one with the addition of one new task.

```haskell
      newtask :: Event Task
      newTask <- taskEntry
      let insertNewEvent :: Event (Map Int Task -> Map Int Task)
          insertNewEvent = fmap insertNew_ newTask
```

The `listModifyTasks` event is returned from the `taskList` widget, defined elsewhere to display the list of tasks, and allow them to be deleted, completed, and edited. In response to these action to its interface, the `taskList` event of type `Event (Map Int Task -> Map Int Task)` emits functions that will appropriately modify the list of `tasks`. Note here that this definition depends on `tasks`. This circular, mutually recursive definition is key to maintain explicitness in user interfaces,  yet most FRP frameworks do not allow circular definitions.

```haskell
      listModifyTasks :: Event (Map Int Task -> Map Int Task)
      listModifyTasks <- taskList activeFilter tasks
```

The other parameter of `taskList` above, `activeFilter`, is also defined recursively below. It comes from the `control` widget at the bottom of the todo list, which emits a `Dynamic Filter` value for which filter is currently selected, and a click event `Event ()` for when the "Clear Completed" button is clicked. We turn `clearCompleted` from an `Event ()` to `clearCompletedEvent :: Event (Map Int Task -> Map Int Task)` by creating a function that will filter out the completed tasks from the task list.

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
* `listModifyTasks` handles the vast majority of task mutations, including deletions, completions (and their reversal), and task text editing
* `clearCompletedEvent` filters out the currently-completed tasks all at once

Explicitness allows us to see the shape of this application, how its pieces come together to make an integrated whole. Explicitness also allows us to see where code is independent (such as `taskEntry`) and dependent (such as `taskList` on  `activeFilter` and `tasks`). If we only cared about one piece of behavior and its associated interface, we could rely on explicit independence to safely ignore the others in our reading.

<iframe width="1700px" height="1800px" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggVERcblxubmV3VGFza0V2ZW50Pm5ld1Rhc2tFdmVudF09PT4gdGFza3Ncbmxpc3RNb2RpZnlUYXNrcz5saXN0TW9kaWZ5VGFza3NdID09PiB0YXNrc1xuXG5jbGVhckNvbXBsZXRlZEV2ZW50PmNsZWFyQ29tcGxldGVkRXZlbnRdID09PiB0YXNrc1xudGFza3MgLS0-IHZpc2libGVUYXNrc1xuXG5hY3RpdmVGaWx0ZXItLT52aXNpYmxlVGFza3NcbnN1YmdyYXBoIHRhc2tMaXN0XG4gICAgdmlzaWJsZVRhc2tzLS0-Y29tcGxldGVkQ2hlY2tib3h7Y29tcGxldGVkQ2hlY2tib3h9XG4gICAgdmlzaWJsZVRhc2tzLS0-IGRlc2NyaXB0aW9uTGFiZWx7ZGVzY3JpcHRpb25MYWJlbH1cbiAgICB2aXNpYmxlVGFza3MtLT4gZWRpdEJveHtlZGl0Qm94fVxuICAgICB0b2dnbGVBbGxDaGVja2JveHt0b2dnbGVBbGxDaGVja2JveH0tLT50b2dnbGVBbGw-dG9nZ2xlQWxsXVxuICAgIHRvZ2dsZUFsbC0tPmxpc3RNb2RpZnlUYXNrc1xuICAgIHRvZ2dsZUFsbC0tPnRvZ2dsZVN0YXRlXG4gICB0b2dnbGVTdGF0ZS0tPnRvZ2dsZUFsbENoZWNrYm94XG4gICAgY2hhbmdlU2VsZj5jaGFuZ2VTZWxmXS0tPml0ZW1DaGFuZ2VzPml0ZW1DaGFuZ2VzXVxuICAgIGl0ZW1DaGFuZ2VzPml0ZW1DaGFuZ2VzXS0tPmxpc3RNb2RpZnlUYXNrc1xuICAgICBzdWJncmFwaCB0b2RvSXRlbVxuICAgICAgICAgIGVkaXRCb3h7ZWRpdEJveH0tLT5lZGl0Qm94RW50ZXI-ZWRpdEJveEVudGVyXVxuICAgICAgICAgIGVkaXRCb3gtLT5lZGl0Qm94VGV4dFZhbHVlXG4gICAgICAgICAgZWRpdEJveFRleHRWYWx1ZS0tPnNldERlc2NyaXB0aW9uPnNldERlc2NyaXB0aW9uXVxuICAgICAgICAgIGVkaXRCb3hFbnRlci0tPnNldERlc2NyaXB0aW9uPnNldERlc2NyaXB0aW9uXVxuICAgICAgICAgIGVkaXRCb3gtLT58b24gZXNjIGtleXxjYW5jZWxFZGl0XG4gICAgICAgICAgZGVzdHJveUJ1dHRvbntkZXN0cm95QnV0dG9ufS0tPmRlc3Ryb3lcbiAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVse2Rlc2NyaXB0aW9uTGFiZWx9LS0-fG9uIGRvdWJsZSBjbGlja3xzdGFydEVkaXRpbmdcbiAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveHtjb21wbGV0ZWRDaGVja2JveH0tLT5zZXRDb21wbGV0ZWRcbiAgICAgICAgICBlZGl0Qm94RW50ZXItLT5lZGl0aW5nXG4gICAgICAgICAgc3RhcnRFZGl0aW5nPnN0YXJ0RWRpdGluZ10tLT5lZGl0aW5nXG4gICAgICAgICAgY2FuY2VsRWRpdD5jYW5jZWxFZGl0XS0tPmVkaXRpbmdcbiAgICAgICAgICBzZXRDb21wbGV0ZWQ-c2V0Q29tcGxldGVkXS0tPmNoYW5nZVNlbGZcbiAgICAgICAgICBkZXN0cm95PmRlc3Ryb3ldLS0-Y2hhbmdlU2VsZlxuICAgICAgICAgIHNldERlc2NyaXB0aW9uPnNldERlc2NyaXB0aW9uXSAtLT5jaGFuZ2VTZWxmXG4gICAgICAgICAgZWRpdGluZy0tPnxoaWRlcy9zaG93cyB2aWEgY3NzfGVkaXRCb3hcbiAgICAgICAgICBlZGl0aW5nLS0-fGhpZGVzL3Nob3dzIHZpYSBjc3N8ZGVzY3JpcHRpb25MYWJlbFxuICAgICBlbmRcbmVuZFxuXG5zdWJncmFwaCBjb250cm9sc1xuICAgIGFsbEJ1dHRvbnthbGxCdXR0b259IC0tPmFsbEJ1dHRvbkNsaWNrZWQ-YWxsQnV0dG9uQ2xpY2tlZF1cbiAgICBhY3RpdmVCdXR0b257YWN0aXZlQnV0dG9ufS0tPmFjdGl2ZUJ1dHRvbkNsaWNrZWQ-YWN0aXZlQnV0dG9ubkNsaWNrZWRdXG4gICAgY29tcGxldGVkQnV0dG9ue2NvbXBsZXRlZEJ1dHRvbn0gLS0-Y29tcGxldGVkQnV0dG9uQ2xpY2tlZD5jb21wbGV0ZWRCdXR0b25DbGlja2VkXVxuICAgYWxsQnV0dG9uQ2xpY2tlZFxuICAgIGFsbEJ1dHRvbkNsaWNrZWQtLT5hY3RpdmVGaWx0ZXJcbiAgICBhY3RpdmVCdXR0b25DbGlja2VkLS0-YWN0aXZlRmlsdGVyXG4gICAgY29tcGxldGVkQnV0dG9uQ2xpY2tlZC0tPmFjdGl2ZUZpbHRlclxuICAgIGFjdGl2ZUZpbHRlci0tPmFjdGl2ZUJ1dHRvblxuICAgIGFjdGl2ZUZpbHRlci0tPmNvbXBsZXRlZEJ1dHRvblxuICAgIGFjdGl2ZUZpbHRlci0tPmFsbEJ1dHRvblxuICAgIGNsZWFyQ29tcGxldGVkQnV0dG9ue2NsZWFyQ29tcGxldGVkQnV0dG9ufS0tPmNsZWFyQ29tcGxldGVkRXZlbnRcbiAgICBhY3RpdmVGaWx0ZXItLT50b2RvUmVtYWluaW5nQ291bnRcbmVuZFxuXG5zdWJncmFwaCB0YXNrRW50cnlcbiAgIGRlc2NyaXB0aW9uQm94e2Rlc2NyaXB0aW9uQm94fS0tPlxuZGVzY3JpcHRpb25Cb3hFbnRlcj5kZXNjcmlwdGlvbkJveEVudGVyXVxuICBkZXNjcmlwdGlvbkJveHtkZXNjcmlwdGlvbkJveH0tLT5cbmRlc2NyaXB0aW9uQm94VmFsdWVcbiAgZGVzY3JpcHRpb25Cb3hFbnRlci0tPm5ld1Rhc2tFdmVudFxuICBkZXNjcmlwdGlvbkJveFZhbHVlLS0-bmV3VGFza0V2ZW50XG4gIGRlc2NyaXB0aW9uQm94RW50ZXItLT58Y2xlYXIgb24gZW50ZXJ8ZGVzY3JpcHRpb25Cb3h7ZGVzY3JpcHRpb25Cb3h9XG5lbmRcblxudGFza3MgLS0-IHRvZG9SZW1haW5pbmdDb3VudFxuXG5jbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2XG5jbGFzcyB0YXNrcyxhY3RpdmVGaWx0ZXIsdG9kb1JlbWFpbmluZ0NvdW50LHZpc2libGVUYXNrcyxlZGl0aW5nLGl0ZW1zLHRvZ2dsZVN0YXRlLGVkaXRCb3hUZXh0VmFsdWUsZGVzY3JpcHRpb25Cb3hWYWx1ZSBvcmFuZ2VcblxuY2xhc3NEZWYgZ3JlZW4gZmlsbDojNGZmZjVhXG5jbGFzcyBuZXdUYXNrRXZlbnQsY2xlYXJDb21wbGV0ZWRFdmVudCxzZXRDb21wbGV0ZWQsZGVzdHJveSxjaGFuZ2VTZWxmLHNldERlc2NyaXB0aW9uLHN0YXJ0RWRpdGluZyxjYW5jZWxFZGl0LHRvZ2dsZUFsbCxsaXN0TW9kaWZ5VGFza3MsYWxsQnV0dG9uQ2xpY2tlZCxhY3RpdmVCdXR0b25DbGlja2VkLGNvbXBsZXRlZEJ1dHRvbkNsaWNrZWQsZGVzY3JpcHRpb25Cb3hFbnRlcixpdGVtQ2hhbmdlcyxlZGl0Qm94RW50ZXIgZ3JlZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ" frameborder="0" allowfullscreen></iframe>

*HTML elements are rotated blue squares, Events are green rectangles, missing a triangle, and Dynamics are orange rectangles. Dependencies have arrows to what depends on them. The three arrows for the three dependencies of `tasks` are bolded.*

Contrast this graph with the Elm one above. Here we make explicit the relationships between Dynamics and HTML elements, where this is obfuscated in Elm by `model`.

## 5. Is the cure worse than the disease?

This paper argues for higher-order and cyclic streams for the purposes of *comprehensibility*. Yet the dense Reflex code and diagram above don't seem particularly easy to understand. The creator of Elm takes this stance, [arguing that explicit dependencies leads to a "crazy" graph of dependencies](https://youtu.be/DfLvDFxcAIA?t=27m32s).

The Elm Architecture has many benefits. For one, it simulates global mutable state, which is very familiar to most programmers. The one-message-at-a-time style does simplify the code writing process. It also reduces coupling between the view and the model. Finally, Elm's model variable is easily serialized, which allows for time-travel debugging, hot reloading, and easy-to-implement undo features.

However, I still believe we can gain more without this architecture. While it is unquestionable easier to *write* in the Elm Architecture when you have a small application, we are concerned with the much more common case of a very large application one does not know well and wishes to understand a small piece of. Here I'd prefer the complex Reflex diagram above because the clear relationships between states makes it clear how the application fits together, and what code we can ignore.

Reducing coupling seems like a good idea, but of course there can be too little coupling. I believe that the amount of coupling in the code should reflect the essential coupling in the underlying idea. If the nature of an interface is cyclic, the code shouldn't obfuscate that fact, but expose it clearly. More importantly it should make explicit the independence of independent things.

To be fair, let me not understate the difficulty of writing Reflex code. It is hell on earth, grappling with its unweildy types, double `fmap`ing over streams, and waiting for `ghcjs` to compile. Yet I can't help but look dreamily at the Reflex Todo MVC diagram above. I see Reflex as representing a reasonably sound computational model that is in much need of a interface upgrade, which I'll discuss further in **Section 7**.

A discussion of the downsides of FRP wouldn't be complete without noting the space and time leakiness its implementations have been plagued with. Yet this paper chooses to focus on the comprehensibility angle, and leave those details to other papers.

## 6. Related Work

The [field of Program Slicing](https://en.wikipedia.org/wiki/Program_slicing) takes a different approach to this problem. It leaves the underlying imperative programming model the same, and uses both static analysis and execution traces to determine which sections of code are relevant. 

Another big piece is of code comprehensibility understanding how files, folders, import statements, and build tools parse together into a unified program. Where's the entry point for goodness sake?! The [Madge](https://github.com/pahen/madge) project parses JavaScript code and generates a visual graph of module dependencies.

## 7. Future work

### 7.1. Visualizations

While the Reflex library's semantics are ideal for modular comprehensibility, the library itself is difficult to use for a variety of reasons. The syntax is incredibly difficult to parse - even for me personally. Given that our goal is comprehensibility, this is unacceptable.

I am inspired by the visual stream combinators of [RxMarbles](http://rxmarbles.com/):

![image](https://user-images.githubusercontent.com/2288939/42888086-75611458-8a75-11e8-91dd-8b82fc4d65dc.png)

[rxviz.com](https://rxviz.com/) and [RxFiddle](https://rxfiddle.net) parse out the streams from your code and visualize them dynamically. RxViz does a particularly great job of visualizing the evolution of higher-order streams in realtime:

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/2288939/42888753-e7565522-8a76-11e8-851a-642573778206.gif)

However, RxViz only shows the final output stream, not how the various input streams combine. RxFiddle makes an effort to show the high-level view of stream dependencies (in between the code and marble diagrams):

![image](https://user-images.githubusercontent.com/2288939/42889193-d288f63a-8a77-11e8-94f0-a4a32333f9d2.png)

One challange in particular will be visualizing cyclic dependencies. This may require learning from M. C. Escher.

Eventually, it would be ideal if one could edit the streams from the visual representation directly.

### 7.2. JavaScript-based

It order to be a true alternative to the Elm Architecture in the broader JavaScript comunity, a competing model must be possible within JavaScript, without requiring ghcjs compilation. In theory, it is possible to create a cyclic an event propagation graph (to copy Reflex's implementation) in JavaScript, but JavaScript's semantics are quite different from pure functional programming so it may not have a natural feel.  The [CycleJS library](https://cycle.js.org/) allows for higher-order and even [semi-cyclic streams](https://github.com/staltz/xstream#-imitatetarget), so maybe it won't be so difficult. 

## 8. Conclusion

As the popularity of FRP frameworks continues, its increasingly important to have a data model architecture that prioritizes comprehensibilty for large programs. This paper does not present a direct solution to this problem, but instead attempts to sound the alarm that what we're currently satisfied with, The Elm Architecture, is not good enough. The Reflex library, with its higher-order and cyclic streams, points in the right direction, but we are still far from a complete solution to the problem of comprehensible user interface construction.


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>