---
title: FRP
---

# Dependable Functional Reactive Programming

* TOC
{: toc }

## 1. Introduction

Today software projects are so large that programmers them in their entirety. So how is one to know which lines to read and which they can safely ignore? In other words, we wish to know the relationships between various pieces of state: are they depedent or independent?

This question is incredibly difficult to answer in imperative programming languages with mutable state, where variables can be modified anywhere they are in scope.

In functional programming without mutable state, all terms explicitly list what they depend. Definitions are final and cannot be modified elsewhere in the code. This explicitness makes it incredibly easy to determine which parts of the code are depedent and independent of each other, and guide us towards what we do and do not need to read for our present purposes.

However, functional programming does not guarantee explict data relationships. It is still possible to obfustate the relationships between pieces of state. One can simulate mutable state by passing around an arbitrarily large compound state value as an extra parameter to each function.

This is considered an anti-pattern because "ease of reasoning is lost (we still know that each function is dependent only upon its arguments, but one of them has become so large and contains irrelevant values that the benefit of this knowledge as an aid to understanding is almost nothing)." [Out of the Tarpit]

Yet in Functional Reactive Programming (FRP) this a variation on this anti-pattern has recently become the dominant architecture. Originally concieved for the Elm programming langauge, The Elm Architecture has since inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many other front-end state management libraries. [TODO source needed]

This paper contrasts The Elm Architecture with a state management pattern that maintains explicit relationships.

## 2. The Elm Architecture

Elm is a pure functional language in the spirit of Haskell. It compiles to JavaScript. It is an FRP-inspired langauge that only allows first-order and non-cyclic streams for reasons discussed in [TODO disease worse than cure?].

The Elm Architecture follows directly from Elm's first-order, non-cyclic nature: because streams cannot contain other streams, nor be cyclic, the only way to construct user interfaces, which are inherently cyclical, is to have a single, large, language-supported cycle.

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPiBzMihuZXcgc3RhdGUpXG5zMihuZXcgc3RhdGUpIC0tPiB2aWV3IFxudmlldy0tPnxldmVudCwgb2xkIHN0YXRlfHJlZHVjZXJcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19" frameborder="0" allowfullscreen></iframe>

The core of the architecture is its a compound state value. It represents the entirety of an applications state at any given time. The reducer steps the state forward in response to events, thus simulating mutable variables that change over time. In this way, the Elm Architecture simulates the "primitive word-at-a-time style of program-ming inherited from the von Neumann computer ... instead of encouraging us to think in terms of the larger conceptual units of the task at hand." [Can Programming Be Liberated...?]

```haskell
reducer :: state -> event -> state
```

The view is a pure function of state. The way the view sends events to the `reducer` differs between frameworks. CycleJS derives event information *outside* the view, such as `const clicks = DOM.select('#counter-button').events('click')`. React/Redux and Elm generate events from *within* view, such as `<button onClick={this.handleClick()}>` or `button [ onClick Increment ]`, respectively. Additionally, these frameworks sometimes wrap events in semantic labels called "actions" or "messages". For example, an `onClick` event can be labeled as the `Increment` action. This will become clearer in the Elm example below.

Just like in imperitive programming, the Elm Architecture is explict only about the *initial* values of states.A ny message can modify any state. In the reducer (called  `update` in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm)), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42886488-ab1c24c4-8a71-11e8-92f5-13dc2f282ad4.png)

You can't gain a complete understanding of any piece of state by looking in one place. You have to look through *all* messages to see if and how each affects the state in question.

There's also a subtler way this undermines explicitness: each piece of state can be modified in terms of *any other piece of state*. There's no explicit isolation between independent states. 

Additionally, any view element can emit any message. Again from [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the viewInput's `onInput` and `onEnter` events send `UpdateField` and `Add` messages, respectively: 

![image](https://user-images.githubusercontent.com/2288939/42886260-13e14bb6-8a71-11e8-8961-044c1a596b8a.png)

If we're looking to understand a single piece of state, we're not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

## 3. Reflex

The Reflex library was built for Haskell web development via ghcjs. It features higher-order and cyclic streams, which means that streams can contain streams, and streams can reference streams that reference themselves. It is these features that are neccesary to maintain explicitness in FRP.

* compare ToDoMVC to Elm
* what does foldDyn do and what's its type? Show how the stream is higher order.

## 4. Is the cure worse than the disease?

* how the elm architecure is good
* why higher order and cyclic streams are difficult
* Also note the dependency on lazy eval which is part of the reason for space leakiness.
* possible in JS without Haskell-y runtime?

## 5. Related Work

* program slicing (and the other one)

## 6. Future work

* Visualizations
* Building a langauge that's easier to use - maybe in JS

## 7. Conclusions

TODO


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
