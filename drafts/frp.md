---
title: FRP
---

# Modular Comprehensibility and FRP

* TOC
{: toc }

### Abstract

When trying to comprehend a section of an unfamiliar codebase, developers spend an amount of time disproportionate to the size of the section, a concept this paper establishes as "modular comprehensibility". This is particularly relevant for would-be open-source contributors, who have limited time, and often only want to make changes in a small number of sections. This paper demonstrates how higher-order Functional Reactive Programming, such as the Reflex library, achieves a high level of comprehensibility modularity for user interface construction. The use of such a paradigm could massively decrease the on-boarding time for developers to make effective changes. 

## 1. Introduction

Virtually all software development work is modifying existing code. Before you can make a change, you must understand how the code currently works. This often is the bulk of your effort. Making the modification itself is often very simple, and just a few lines of code. It's a worthwhile goal to minimize the time for a developer to comprehend enough to make an effective edit. 

Code comprehensibility is particularly relevant to open-source, because Open-source works best when the user of the software can also edit the source code. What's the point of being free to read the code if you cannot understand it?

I believe that our programming model is to blame for the current level of difficulty developers face in comprehending a unfamiliar project, and below argue in favor of a model that improves one aspect of code comprehensibility, the modularity of code comprehensibility.

The contributions of this paper are:

* Establishing "modular comprehensibility" as a new frame to evaluate programming models.
* Demonstrating how implicit dependencies and side effects decrease modular comprehensibility, while explicit dependencies and pure functions increase it.
* Articulating the modular comprehensibility trade-offs between two Functional Reactive Programming models: the first-order, non-cyclic Elm Architecture with the higher-order, cyclic Reflex.

## 2 Background

### 2.1 Modular Comprehensibility

If you wanted to understand the entirety of a software project, you'd have to read every line of code. But what if you only wanted to understand a small part, such as how a particular button behaves? Can you get away with only reading a similarly small piece of the code? In other words, is module comprehension proportional to the amount of code read? We can refer to such a project as "modularly comprehensible."

![image](https://user-images.githubusercontent.com/2288939/42785649-4e5f98b6-8921-11e8-9f23-34b44e35b804.png)

Most programming languages are not modularly comprehensible in such a linear fashion but in an exponential one, as illustrated with the yellow curve. Understanding is very limited until you've read almost all the code, at which point it expands very quickly.

The lack of modular comprehensibility slows down the time it takes a programmer to make a change to an unfamiliar project. This is particularly relevant in open-source software, because developers have limited time to contribute. It's also particularly relevant with front-end code, which is notoriously difficult to comprehend. Have you ever wanted to make a small bug-fix or improvement to an open-source project, but gave up after a few hours of failing to understand how the code works?

### 2.2 Data dependencies

Most code is not modularly comprehensible because the way data dependencies between modules are organized. The follow graph represents the relationships between pieces of data.

![group 1](https://user-images.githubusercontent.com/2288939/42883646-314fa9b0-8a6a-11e8-9864-d1423eaff6e2.png)

In a traditional imperative langauge, modules affect other modules *at a distance*, such as `F.update(10)`. The arrow relationship is owned by the tail. Modules specify which other modules they *affect*. 

![group 2](https://user-images.githubusercontent.com/2288939/42883693-502ade40-8a6a-11e8-886d-d3c14a97fac1.png)

From the perspective of modulary comprehensibility, this is the opposite of what you'd want. Let's say you wish to understand the behavior of `F`. You grep for `F.update` in the codebase. For each `F.update` , you have to go to that call site and understand its context well enough to know what triggers that line of code, and the value of the arguments it will pass in. If you're lucky, all that information is self-contained, but you'll likely be forced to expand your understanding to yet other sections of potentially irrelevant code.

To achieve modular comprehensibility, modules should be defined in terms of the modules that can affect *themselves*, their *dependencies*. "This property is common in spreadsheet calculations. The definition of the contents of one cell are always defined just in that cell, regardless of changes happening on the other cells it depends on." [1]

![group 3](https://user-images.githubusercontent.com/2288939/42883692-50195832-8a6a-11e8-99f7-104eff4747f0.png)

This way you can understand a module by understanding the modules its defined in terms of, recursively. To understand `F`, you only have to read the `F` and it's children, recursively, highlighted below:

![group 4](https://user-images.githubusercontent.com/2288939/42883690-50073dfa-8a6a-11e8-9d77-b6f64a8d470f.png)

This allows you to *categorically rule out all the modules you do not have to read* in order to comprehend the relevant module(s). In the above example, that's all the modules that are not highlighted. If a module is not an explicit dependency (or dependency of a dependency...), it's not relevant. In fact, it's explicitly *independent*.

### 2.3 Pure functions & disallowing side-effects

If we wish to have modular comprehensibility, we must have explicit data dependencies to clarify which code is relevant to our present purposes.

In order to have explicit data dependencies, we must disallow mutation *at a distance*. In other words, we must make our langauge free from side-effects, such as `F.update(10)`.

This leaves us with a language of pure expressions similar to Haskell. Pure functions work beautifully for batch software that accept an input, do some internal computation, and return an output, such as a compiler. However, programming is ultimately about building software that *affects the world*. Ultimately our software is going to have to *do things*: move bits, open files and sockets, send HTTP requests. How can pure functions represent all that?

The accepted answer to this question is: they can't. Haskell is split into two worlds: the world of pure expressions and the world of the `IO ()` monad. Life isn't worth living without getting and putting characters to the terminal:

```
getChar :: IO Char
putChar :: Char -> IO ()
```

Just kidding. It's 2018. Who's writing terminal apps? Creating modern user interfaces has very little to do with getting and putting characters on the screen on-by-one. 

### 2.4 FRP

FRP is a way of declaratively describing interactive UIs *with only pure functions* - no monads required. 

You *declaratively describe what the UI should look like as a function of state*, as opposed to imperatively adding and removing characters to the screen one-by-one. (Of course, there's code somewhere that's adding and removing characters from the screen, possibly in the form of a "Virtual DOM", but we don't have to worry about that - it's below FRP's level of abstraction.)

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

How do we calculate the counts? Normally, we deal with events one by one, and the code is organized in terms of events. "When an event occurs, run the following code."

```javascript
var count = 0
document.getElementById("counter-button").onclick = e => {
  count++
  document.getElementById("counter-button").innerText = count;
}
```

#### FRP Button Update

But let's zoom out. Instead of dealing with events one-by-one, consider all the click events that will ever happen on this button as ah infinite list or "stream". Next, let's define our data in terms of this stream, so that the data is now top-level and events are subordinated as dependencies of data.

```javascript
const count = DOM.select("#counter-button").events('click')
                .reduce((accumulator, currentValue) => accumulator + 1, 0)
```

You may be wondering how `count` can be a `const`, even though it's value needs to update when button is clicked. This is because `count` is itself a stream of values that can be used as a dependency in streams defined elsewhere. In other words, `count` is constant in the sense that there's no code anywhere that can modify `count` besides its definition above. `count` is read-only.

You also may be wondering about `DOM.select("#counter-button").events('click')` in the FRP Button Update example. Selector-based event querying is how CycleJS works [2] and fits this specific example best. 

You may also be wondering about how the `count` stream get passed into the `view()` function? Good questions! Below we will discuss a more semantic approach that exposes the true cyclic nature of this button. 

FRP implementations have been plagued with space and time leaks. In other words, they take up a lot of space and are slow. While many UI libraries are inspired by FRP, they do not adhere strictly to only *pure functions*, in part for performance reasons. For example, many FRP libraries disallow higher-order streams (streams-of-streams), which as we will see below is ultimately bad for modular comprehensibility.

## 3. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell that compiles to JavaScript. It is an FRP-inspired langauge that only allows first-order and non-cyclic streams. 

The Elm Architecture follows directly from the first-order, non-cyclic restrictions. Because streams cannot contain other streams, nor be cyclical, the only way to construct a user interface, which is inherently cyclical, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPnN0YXRlXG5zdGF0ZSAtLT4gdmlldyBcbnZpZXctLT58ZXZlbnR8cmVkdWNlclxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

The Elm Architecture was built originally for use in Elm, but has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries.

While The Elm Architecture does adhere to the letter of the comprehensible modularity law - only pure functions, no side effects - it does not adhere to the spirit of the law - no mutation from a distance, no implicit dependencies. This design decision was made consciously in Elm to decrease coupling. [3]

Let's examine the architecture. The reducer is a function that takes the old state and an event, and returns a newly computed state.

```haskell
reducer :: state -> event -> state
```

Like in the "FRP Button View" example above, the "view" (HTML and CSS) of the application is defined declaratively in terms of a `state` variable. In the Elm Architecture, the state is a singleton value. 

The way the view sends events to the `reducer` differs between the frameworks. As we saw above, CycleJS derives event information *outside* the view, such as `const clicks = DOM.select('#counter-button').events('click')`. React and Elm generate events from *within* view, such as `<button onClick={this.handleClick()}>` or `button [ onClick Increment ]`, respectively.

Additionally, these frameworks sometimes wrap events in semantic labels called "actions" or "messages". For example, above the `onClick` event is labeled as the `Increment` action. This will become clearer in the Elm example below.

In the Elm Architecture, we are explicit about the initial value of state, how the state determines the view, and how various events effect the state. This is a huge improvement over the Imperative Button above. For one, it gives us serializable state, which we can use for hot-swapping and time travel debugging!

However, let's examine the Elm Architecture from a modular comprehensibility point of view. 

Any message can modify any state. In the reducer, called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42886488-ab1c24c4-8a71-11e8-92f5-13dc2f282ad4.png)

This means that you can't modularly gain a complete understanding of any piece of state. You have to look through *all* the messages for any piece of state, which may be spread across many files.

There's also a subtler way this undermines explicit dependencies: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Additionally, any view element can emit any message. Again from [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the viewInput's `onInput` and `onEnter` events send `UpdateField` and `Add` messages, respectively: 

![image](https://user-images.githubusercontent.com/2288939/42886260-13e14bb6-8a71-11e8-8961-044c1a596b8a.png)

If we’re looking to understand a single piece of state, we’re not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

## 4. Reflex

Let's contrast the Elm Architecture with a framework that allows higher-order and cyclic streams. The Reflex FRP library, built for Haskell's ghcjs, fits the bill.

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

The field of program slicing takes a different tatic to this problem. It leaves the underlying imperative programming model the same, and uses both static analysis and execution traces to determine which sections of code are relevant. [4]

Another impediment to code comprehensibility is code's symbolic, abstract nature. Glen Chiacchieri makes a library more understandable through editable concrete values at various stages of code execution. [5] Glen's thesis that concrete values are key to comprehension is backed by research that found that "to comprehend programs, developers need to acquire runtime information [to inspect the state of the application]. For this, developers frequently execute the application using a debugger." [6]

Another big piece is understanding how the files, folders, import statements, and build tools and parsed together into a unified program. Where's the entry point for goodness sake?! The Madge project parses JavaScript code and generates a visual graph of module dependencies. [7]

## 6. Future Work

While the Reflex library's semantics are ideal for modular comprehensibility, the library itself is difficult to use for a variety of reasons, including verbose types, the installation of ghcjs, and it's slow compile time.

Even from a simple a comprehensibility perspective, Reflex is not ideal. The Haskell syntax is incredibly difficult to parse - even for me personally.

Given that our goal is comprehensibility, this is unacceptable. We need to develop a better user interface to Reflex code than text.

I am inspired by the visual stream combinators of RxMarbles [8]:

![image](https://user-images.githubusercontent.com/2288939/42888086-75611458-8a75-11e8-91dd-8b82fc4d65dc.png)

RxViz [9] and RxFiddle [10] parse out the streams from your code and visualize them dynamically. RxViz does a particularly great job of visualizing the evolution of higher-order streams in realtime:

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/2288939/42888753-e7565522-8a76-11e8-851a-642573778206.gif)

However, RxViz only shows the final output stream, and how the various input streams combine. RxFiddle makes an effort to show the high-level view of stream dependencies (in between the code and marble diagrams):

![image](https://user-images.githubusercontent.com/2288939/42889193-d288f63a-8a77-11e8-94f0-a4a32333f9d2.png)

One challange in particular will be visualizing cyclic dependencies. This may require learning from M. C. Escher.

Eventually, it would be ideal if one could edit the streams from the visual representation directly.

### 6.1 Additional Onboarding Issues

Additionally, code comprehensibility is only a one important piece of onboarding to an unfamiliar project. Other issues worth tackling include: 

* installing the proper software to get the code to compile and run on your machine, 
* editing the code, 
* and testing your changes 

## 7. Conclusions

This essays introduced the concept of modular comprehensibility, an evaluative model for code comprehensibility, and used it to justify side-effect-free programming models, such as FRP.

Through our examination of the Elm Architecture, we see that not all FRP models are modularly comprehensible. We constrast the Elm Architecture with the Reflex library, which demonstrates how modular comprehensibility can be achieved with higher-order and cyclic streams.

There are many interesting directions for future work. In particular, I am excited about creating dynamic visualization of Reflex-like streams.

## Acknowledgements

Thank you Jonathan Edwards for your continued mentorship.

## References

[1] - Andre Staltz. [Reactive MVC and The Virtual DOM](https://web.archive.org/web/20180530055638/https://futurice.com/blog/reactive-mvc-and-the-virtual-dom)

[2] - Andre Staltz. [CycleJS Guide: Why CSS selectors?](https://cycle.js.org/model-view-intent.html#model-view-intent-what-mvc-is-really-about-why-css-selectors)

[3] - Ryan Trinkle. [Accidentally Concurrent](https://youtu.be/DfLvDFxcAIA?t=27m32s)

[4] - [Program Slicing on Wikipedia](https://en.wikipedia.org/wiki/Program_slicing)

[5] - Glen Chiacchieri. [A Human-Readable Interactive Representation of a Code Library](http://glench.github.io/fuzzyset.js/ui/)

[6] - Walid Maalej, Rebecca Tiarks, Tobias Roehm, and Rainer Koschke. [On the Comprehension of Program Comprehension](https://dl.acm.org/citation.cfm?id=2622669) 

[7] - [Madge](https://github.com/pahen/madge)

[8] - [RxMarbles](http://rxmarbles.com/)

[9] - [rxviz.com](https://rxviz.com/)

[10] - Banken, Herman; Meijer, Erik; Gousios, Georgios. [Debugging Data Flows in Reactive Programs](http://pure.tudelft.nl/ws/files/38856517/paper.pdf)

## ToDo

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
