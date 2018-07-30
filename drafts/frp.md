---
title: FRP
---

# Explicit Functional Reactive Programming

* TOC
{: toc }

## 1. Introduction

Explicit dependencies clarify which sections of code are independent to our current investigations, keeping the "effort needed to concieve or to understand a program ... not more than proportional to the program length" [Humble Programmer].

In pure functional programming, all terms explicitly list what they depend upon - as opposed to imperitive programming where terms can "be dependent on many, many different hidden mutable variables" [Out of the Tarpit]. 

However, functional programming isn't immune to hidden dependencies:

> There is in principle nothing to stop functional programs from passing a single extra parameter into and out of every single function in the entire system. If this extra parameter were a collection (compound value) of some kind then it could be used to simulate an arbitrarily large set of mutable variables. In effect this approach recreates a single pool of global variables — hence, even though referential transparency is maintained, ease of reasoning is lost (we still know that each function is dependent only upon its arguments, but one of them has become so large and contains irrelevant values that the benefit of this knowledge as an aid to understanding is almost nothing).

The popular Functional Reactive Elm Architecture suffers from this problem. I argue that the way to maintain explicit dependencies in Functional Reactive Programming is through cyclic and higher-order streams, as demonstrated by the Reflex framework.

2. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell that compiles to JavaScript. It is an FRP-inspired langauge that only allows first-order and non-cyclic streams. 

The Elm Architecture follows directly from the first-order, non-cyclic restrictions. Because streams cannot contain other streams, nor be cyclical, the only way to construct a user interface, which is inherently cyclical, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPnN0YXRlXG5zdGF0ZSAtLT4gdmlldyBcbnZpZXctLT58ZXZlbnR8cmVkdWNlclxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

The Elm Architecture was built originally for use in Elm, but has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries.

Let's examine the architecture. The reducer is a function that takes the old state and an event, and returns a newly computed state.

```haskell
reducer :: state -> event -> state
```

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

## ToDo

* maybe reverse the order of the introduction
* be clearer on what explicit means
  * data = ...
  * explicit in the math formula sense
* the elm architecture section
  * edit this section a lot 
  * the elm architecture simulates imperitive, von-neuman, one word at a time architecture in a functional setting
  * argue that it's difficult to mechanically convert to explicit form
* argue the treatment is *not* worse than the disease
  * This design decision was made consciously in Elm to decrease coupling. [3]
* Reflex 
  *  what does foldDyn do and what's its type? Show how the stream is higher order. Also note the dependency on lazy eval which is part of the reason for space leakiness.
  * TodoMVC comparison
* title
* spell check (again)


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
