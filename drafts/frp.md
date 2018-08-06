---
title: FRP
---

# Explicit Functional Reactive Programming

* TOC
{: toc }

## 1. Introduction

When trying to understand a small piece of a large software project, explicit dependencies clarify which sections of code are independent to our current investigations, keeping the "effort needed to concieve or to understand a program ... not more than proportional to the program length" [Humble Programmer]. 

Explict data relationships is one of the benefits of functional programming, because all terms explicitly list what they depend upon. This contrasts with imperitive programming, where terms can "be dependent on many, many different hidden mutable variables" [Out of the Tarpit]. 

However, functional programming can simulate "hidden mutable variables" via an compound state value that it passes around as an extra parameter:

> There is in principle nothing to stop functional programs from passing a single extra parameter into and out of every single function in the entire system. If this extra parameter were a collection (compound value) of some kind then it could be used to simulate an arbitrarily large set of mutable variables. In effect this approach recreates a single pool of global variables — hence, even though referential transparency is maintained, ease of reasoning is lost (we still know that each function is dependent only upon its arguments, but one of them has become so large and contains irrelevant values that the benefit of this knowledge as an aid to understanding is almost nothing). [Out of the Tarpit]

While this is considered an anti-pattern in many functional programming settings [TODO source needed], a variation on it has become the dominant architecture in Functional Reactive Programming. Originally concieved for the Elm programming langauge, The Elm Architecture has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries. [TODO source needed]

This paper contrasts the Elm Architecture with Haskell's Reflex, featuring higher-order streams and cyclic streams, with an eye towards idepedent comprehensibility through explicit data dependencies.

## 2. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell. It compiles to JavaScript. It is an FRP-inspired langauge that only allows first-order and non-cyclic streams for reasons discussed in [TODO disease worse than cure?].

The Elm Architecture follows directly from Elm's first-order, non-cyclic nature: because streams cannot contain other streams, nor be cyclic, the only way to construct user interfaces, which are inherently cyclical, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPiBzMihuZXcgc3RhdGUpXG5zMihuZXcgc3RhdGUpIC0tPiB2aWV3IFxudmlldy0tPnxldmVudCwgb2xkIHN0YXRlfHJlZHVjZXJcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19" frameborder="0" allowfullscreen></iframe>

The core of this architecture is its a compound state value, which along with the reducer, which returns a new state in response to events, "simulate[s] an arbitrarily large set of mutable variables." [Tarpit]

```haskell
reducer :: state -> event -> state
```

The view is a pure function of state.

The way the view sends events to the `reducer` differs between frameworks. CycleJS derives event information *outside* the view, such as `const clicks = DOM.select('#counter-button').events('click')`. React/Redux and Elm generate events from *within* view, such as `<button onClick={this.handleClick()}>` or `button [ onClick Increment ]`, respectively.

Additionally, these frameworks sometimes wrap events in semantic labels called "actions" or "messages". For example, an `onClick` event can be labeled as the `Increment` action. This will become clearer in the Elm example below.

Just like in imperitive programming, the Elm Architecture is explict only about the *initial* values of states.

Any message can modify any state. In the reducer, called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42886488-ab1c24c4-8a71-11e8-92f5-13dc2f282ad4.png)

This means that you can't modularly gain a complete understanding of any piece of state. You have to look through *all* messages to see if and how it affects the state in question.

There's also a subtler way this undermines explicit dependencies: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Additionally, any view element can emit any message. Again from [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the viewInput's `onInput` and `onEnter` events send `UpdateField` and `Add` messages, respectively: 

![image](https://user-images.githubusercontent.com/2288939/42886260-13e14bb6-8a71-11e8-8961-044c1a596b8a.png)

If we’re looking to understand a single piece of state, we’re not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

## 3. Reflex

The Reflex library was built for Haskell web development via ghcjs. It features higher-order and cyclic streams.

## ToDo

* maybe reverse the order of the introduction
* be clearer on what explicit means
  * data = ...
  * inversion of control (http://degoes.net/articles/destroy-all-ifs)
  * explicit in the math formula sense
* the elm architecture section
  * maybe simulates von-neuman, one word at a time 
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
