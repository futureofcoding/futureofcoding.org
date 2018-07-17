---
title: FRP
---

# Modular Comprehensibility and FRP

* TOC
{: toc }

### Abstract

When trying to comprehend a section of an unfamiliar codebase, developers spend an amount of time disproportionate to the size of the section. This is particularly relevant for would-be open-source contributors, who have limited time, and often only want to make changes in a small number of sections. I show how higher-order Functional Reactive Programming, such as in the Redux library, achieves a high level of comprehensibility modularity for user interface construction. I believe the use of such a paradigm would decrease the on-boarding time for developers to make effective changes. 

## 1. Introduction

Virtually all software development work is modifying existing code. First you must understand how the code currently works. This often is the bulk of your effort. Making the modification is often very simple, just a few lines of code. To speed up software development, we should minimize the amount of time it takes a developer to comprehend enough to make an effective edit. 

Code comprehensibility is particularly relevant to open-source. Open-source works best when the user of the software can also edit the source code. What's the point of being free to read the code if you cannot understand it?

I believe that our programming model is to blame for the current level of difficulty developers face in comprehending a unfamiliar project, and below argue in favor of a model that improves one aspect of code comprehensibility.

The contributions of this paper are:

* Establishing "modular comprehensibility" as a new frame to evaluate programming frameworks.
* Demonstrating how implicit dependencies and side effects decrease modular comprehensibility, while explicit dependencies and pure functions increase it.
* Articulating the modular comprehensibility trade-offs between two Functional Reactive Programming models: the first-order, non-cyclic Elm Architecture with the higher-order, cyclic Reflex.

## 2 Background

### 2.1 Modular Comprehensibility

If you wanted to understand the entirety of a software project, you'd have to read every line of code. But what if you only wanted to understand a small part, such as how a particular button behaves? Can you get away with only reading a similarly small piece of the code? In other words, is module comprehension proportional to the amount of code read? We can refer to such a project as "modularly comprehensible."

![image](https://user-images.githubusercontent.com/2288939/42785649-4e5f98b6-8921-11e8-9f23-34b44e35b804.png)

Most programming languages are not modularly comprehensible in such a linear fashion but in an exponential one, as illustrated with the yellow curve. Understanding is very limited until you've read almost all the code, at which point it expands very quickly.

The lack of modular comprehensibility slows down the time it takes a programmer to make a change to an unfamiliar project. This is particularly relevant in open-source software, because developers have limited time to contribute. It's also particularly relevant with front-end code, which is notoriously difficult to follow. Have you ever wanted to make a small bug-fix or improvement to an open-source project, but gave up after a few hours of failing to understand how the code works?

### 2.2 Data dependencies

Most code is not modularly comprehensible because the way data dependencies between modules are organized. 

In a traditional imperative langauge, modules affect other modules *at a distance*, such as `car.setVelocity(52)`. Modules specify which other modules they *affect*.

TODO picture

From the perspective of modulary comprehensibility, this is the opposite of what you'd want. Let's say you wish to understand the behavior of `car.veloctiy`. You grep for `car.setVelocity` in the codebase. For each `car.setVelocity` , you have to go to that call site and understand its context well enough to know what triggers that line of code, and the value of the arguments it will pass in. If you're lucky, all that information is self-contained, but you'll likely be forced to expand your understanding to yet other sections of potentially irrelevant code.

To achieve modular comprehensibility, modules should be defined in terms of the modules that can affect *themselves*. "This property is common in spreadsheet calculations. The definition of the contents of one cell are always defined just in that cell, regardless of changes happening on the other cells it depends on." [1]

TODO picture

This way you can understand a module by understanding the modules its defined in terms of, recursively. To understand E, you only have to read the E and it's children, recursively, highlighted below:

TODO picture

This allows you to *categorically rule out all the modules you do not have to read* in order to comprehend the relevant module(s). In the above example, that's all the modules that are not highlighted. If a module is not an explicit dependency (or dependency of a dependency...), it's not relevant. In fact, it's explicitly *independent*.

### 2.3 Pure functions & disallowing side-effects

Side-effects mutate *from a distance*, making data dependencies implicit. By disallowing side-effects, we can make data dependencies explicit, which clarifies the relevancy of various sections of code to our present purposes, a boon for modular comprehensibility. In other words, no more `car.setVelocity(53)`.

This leaves us with a language of pure functions, such as Haskell. Pure functions work beautifully for batch software that accept an input, do some internal computation, and return an output, such as a compiler. However, programming is ultimately about building software that *affects the world*. Ultimately our software is going to have to *do things*: move bits, open files and sockets, send HTTP requests. How can pure functions represent all that?

The accepted answer to this question is: they can't. Haskell is split into two worlds: the world of pure expressions and the world of the `IO ()` monad. Life isn't worth living without getting and putting characters to the terminal:

```
getChar :: IO Char
putChar :: Char -> IO ()
```

Just kidding. It's 2018. Who's writing terminal apps? Creating modern user interfaces has very little to do with getting and putting characters on the screen on-by-one. 

### 2.4 FRP

The popular way to create UIs today is inspired by Functional Reactive Programming. FRP is a way of declaratively describing interactive UIs *with only pure functions* - no monads required. 

You *declaratively describe what the UI should look like as a function of state*, as opposed to imperatively adding and removing characters to the screen one-by-one. (Of course, there's code somewhere that's adding and removing characters from the screen, possibly in the form of a "virtual DOM", but we don't have to worry about that - it's below FRP's level of abstraction.)

I have two helpful metaphors for FRP: "zooming out" and "inverting control". We can see them in action by contrasting the FRP style with its imperative counterpart constructing a button that counts its clicks:

#### Imperative Button View

The UI is specified only in terms of its initial state. The code that modifies it lives elsewhere. In fact, code from many different places could modify this button.

```html
<button id='counter-button'>0</button>
```

#### FRP Button View

The UI is a pure function from the number of clicks to the button's HTML. The only thing that can affect this button is the value of the `count` argument.

```javascript
function view(count) {
  return `<button id='counter-button'>${count}</button>`
}
```

#### Imperative Button Update

How do we calculate the counts? Normally, you deal with events one by one, and the code is organized in terms of events. "When an event occurs, run the following code."

```javascript
var count = 0
document.getElementById("counter-button").onclick = e => {
  count++
  document.getElementById("counter-button").innerText = count;
}
```

#### FRP Button Update

But let's zoom out. Instead of dealing with events one-by-one, let's consider all the events that will ever happen as infinite lists (streams) of events. Next, let's define our data in terms of these streams, so that the data is now top-level and events are subordinated as dependencies of data.

```javascript
const count = DOM.select("#counter-button").events('click')
                .reduce((accumulator, currentValue) => accumulator + 1, 0)
```

You may be wondering how `count` can be a `const`, even though it will update as the button is clicked. This is because `count` is itself a stream of values that can be used as a dependency in streams defined elsewhere. `count` is constant in the sense that there's no code anywhere that can modify `count` besides its definition above. `count` is read-only.

You also may be wondering about `DOM.select("#counter-button").events('click')` in the FRP Button Update example. Selector-based event querying is how CycleJS works [2] and fits this example. And how does the `count` stream get passed into the `view()` function? Good questions! Below we will discuss a more semantic approach that exposes the true cyclic nature of this button. 

FRP implementations have been plagued with space and time leaks. In other words, they take up a lot of space and are slow. Thus while many UI libraries are inspired by FRP, they do not adhere strictly to only *pure functions*, in part for performance reasons. For example, many FRP libraries disallow higher-order streams (streams-of-streams), which as we will see below is ultimately bad for modular comprehensibility.

## 3. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell that compiles to JavaScript. It is an FRP-inspired langauge that only allows first-order and non-cyclic streams. 

The Elm Architecture follows directly from the first-order, non-cyclic restrictions. Because streams cannot contain other streams, nor be cyclical, the only way to construct a user interface, which is inherently cyclic, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPnN0YXRlXG5zdGF0ZSAtLT4gdmlldyBcbnZpZXctLT58ZXZlbnR8cmVkdWNlclxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

The Elm Architecture was built originally for use in Elm, but has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries.

While The Elm Architecture does adhere to the letter of the comprehensible modularity law - only pure functions, no side effects - it does not adhere to the spirit of the law - no mutation from a distance, no implicit dependencies. This design decision was made consciously in Elm to decrease coupling. [3]

Let's examine the architecture. The reducer is function that takes the old state, and an event, and returns a newly computed state.

```haskell
reducer :: state -> event -> state
```

Like in the "FRP Button View" example above, the "view" (HTML and CSS) of the application is defined declaratively in terms of a `state` variable. In the Elm Architecture, the state is a singleton value. 

The way the view sends events to the `reducer` differs between the frameworks. As we saw above, CycleJS derives event information *outside* the view, such as `const clicks = DOM.select('#counter-button').events('click')`. React and Elm generates events from *within* view, such as `<button onClick={this.handleClick()}>` or `button [ onClick Increment ]`, respectively.

Additionally, these frameworks sometimes wrap events in semantic labels called "actions" or "messages". For example, an `onClick` event could become a `Submit` action. This will become clearer in the Elm example below.

In the Elm Architecture, we are explicit about the initial value of state, how the state determines the view, and how various events effect the state. This is a huge improvement over the non-FRP UI creation, such as the Imperative Button above. It gives us serializable state, which gives us hot-swapping and time travel debugging!

However, let's examine the Elm Architecture from a modular comprehensibility point of view. 

Any message can modify any state. In the reducer, called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42649315-6113b890-85d7-11e8-88fb-184081fe3ba5.png)

This means that you can't modularly gain a complete understanding of any piece of state. You have to look through *all* the messages for any piece of state, which may be spread across many files.

There's also a subtler way this undermines explicit dependencies: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Additionally, any view element can emit any message. Again from [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the viewInput's `onInput` and `onEnter` events send `UpdateField` and `Add` messages, respectively: 

![image](https://user-images.githubusercontent.com/2288939/42649332-6cf319c6-85d7-11e8-96c4-0c11a19cc67c.png)

If we’re looking to understand a single piece of state, we’re not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

## 4. Redux

Let's contrast the Elm Architecture with a framework that allows higher-order and cyclic streams. The Redux FRP library, built for Haskell's ghcjs, fits the bill.

#### Reflex Button

<script src="https://gist.github.com/stevekrouse/dd5adf44e0994bb8665161e0aefed5b6.js"></script>

First look at `intButton clicksCount`. This is where the button is created with the number of clicks as it's text. 

`intButton` is a helper function of type `Show a => Dynamic a -> m (Event t ())`. In other words, it inputs a dynamic value (stream) that can be coerced to a string (that's what the `Show a =>` part means), creates a button on the screen with that value, and returns an event stream. (I made the helper function return only an event stream of clicks, but we could return an event stream of other events as well.)

`clicksCount` is simply counting the number of events within the `clickEvents` stream.

But even if cyclic FRP is possible, is it desirable? In fact, it may seem like things are *too explicit*, too tightly coupled.

#### Elm Architecture Button

Here's the same program in Elm:

<script src="https://gist.github.com/stevekrouse/0e07c0da9803b7386612fa6eb2dc8275.js"></script>

Yes there's less coupling. But is that always a good thing? No, there is such a thing as too little coupling.

If the essential, inherent nature is cyclical, we should explicitly expose that cycle in the structure of the code. 


## 5. Related Work

Another impediment to code comprehensibility is code's symbolic, abstract nature. Glen Chiacchieri makes a library more understandable through editable concrete values at various stages of code execution. [4] Glen's thesis that concrete values are key to comprehension is backed by research that found that "to comprehend programs, developers need to acquire runtime information [to inspect the state of the application]. For this, developers frequently execute the application using a debugger." [5]

TODO program paths and slicing

## 6. Future Work

Visualizing cyclic dependencies in a comprehensible way will be a challenge. I will freely admit that if it ultimately proves impossible to visualize cyclic dependencies in a comprehensible way, FRP may not be the silver bullet for modular comprehensibility I hope it can be. TODO

Code comprehensibility is only a one important piece onboarding to an unfamiliar project. Other issues worth considering which also include: 

* installing the proper software to get the code to compile and run on your machine, 
* editing the code, 
* and testing your changes 

And, of course, the modularity of comprehensibility is only one piece of code comprehensibility. Another big piece is simply understanding how the files, folders, import statements, and build tools and parsed together into a unified program. Where's the entry point for goodness sake?! 

## 7. Conclusions

TODO

## Acknowledgements

Thank you Jonathan Edwards for your continued mentorship.

## References

[1] - Andre Staltz. [Reactive MVC and The Virtual DOM](https://web.archive.org/web/20180530055638/https://futurice.com/blog/reactive-mvc-and-the-virtual-dom)

[2] - Andre Staltz. [CycleJS Guide: Why CSS selectors?](https://cycle.js.org/model-view-intent.html#model-view-intent-what-mvc-is-really-about-why-css-selectors)

[3] - Ryan Trinkle. [Accidentally Concurrent](https://youtu.be/DfLvDFxcAIA?t=27m32s)

[4] - Glen Chiacchieri. [A Human-Readable Interactive Representation of a Code Library](http://glench.github.io/fuzzyset.js/ui/)

[5] - Walid Maalej, Rebecca Tiarks, Tobias Roehm, and Rainer Koschke. [On the Comprehension of Program Comprehension](https://dl.acm.org/citation.cfm?id=2622669) 

## ToDo

* re-do deleted photos from old version https://github.com/stevekrouse/futureofcoding.org/blob/5f4dab8f1fee8a4d36caa8dc5c042215797dd53f/drafts/frp.md
* spell check (again)
* Reflex TodoMVC?
* find a real life open-source UI app as an example?
  * https://github.com/rtfeldman/elm-spa-example
  * https://github.com/ravichugh/sketch-n-sketch
  * https://github.com/ellie-app/ellie


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
