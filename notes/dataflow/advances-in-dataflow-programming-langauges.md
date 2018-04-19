---
title: Advances in Dataflow Programming Languages
---

# Advances in Dataflow Programming Languages

* TOC
{: toc }

[Original paper here.](/media/DataFlowProgrammingLanguages.pdf)


## Hardware parallelism motivated

Dataflow programming was originally motivated by dataflow hardware, which was meant to capitalize on parallelism (executing multiple instructions at the same time, not just when the instruction is reached) and pipe-lining (executing multiple iterations of the same loop in parallel if possible).

Many of the original dataflow langauges, particularly in academia, were designed to take advantage of the new hardware by making data dependencies explicit.

However early dataflow architectures had poor performance, due to too finely-grained execution, particularly for sequential code.

"...contrary to what was popularly believed in the early 1980s, dataflow and von Neumann techniques were not mutually exclusive and irreconcilable concepts, but simply the two extremes of a continuum of possible computer architectures. Fine-grained dataflow could now be seen as a multithreaded architecture in which each machine-level instruction was executed in a thread on its own. At the same time, von Neumann architectures could now be regarded as a multithreaded architecture in which there was only one thread—the program itself."

## What is a dataflow langauge?

(1) freedom from side effects,
(2) locality of effect,
(3) data dependencies equivalent to scheduling,
(4) single assignment of variables,
(5) an unusual notation for iterations due to features 1 and 4,
(6) lack of history sensitivity in procedures.

Personally, I believe the single-assignment rule is the key idea here, along with functional semantics, which is what excited me so much about Andre Staltz's CycleJS. The `const` keyword everywhere! Yet, as this paper mentions, the single-assignment rule and data structures don't go well together, as I discovered in trying to make a todo list app in Facebook's Origami...

## Flow-based programming

J Paul Morrison's flow-based programming is "reminiscent of dataflow" programming but does not obey the dataflow firing rules. My understanding is that flow-based programming using dataflow semantics, particually a visual directed graph, for the control flow of a program, but that much of the computation happens inside nodes in traditional imperitive code.

This reminds me of Node-Red, where you connect nodes but often have to write JS for nodes. codeflow.co is a project where hooking up nodes is for control flow purposes, partially to escape callback hell, because each node is asychronous. 

## Benefits of (dataflow) visual programming langauges

Not specific to dataflow visual programming lanuages, but in my opinion well achieved by them as seen in Facebook's Origami, are the four things VPLs aim for according to Burnett: "the reduction in key concepts, such as pointers; a more concrete programming experience, such as exploring data visually; explicit definitions of relationships between tasks; and immediate visual feedback." 

In one study, they found that 

> advantages offered lie more toward the design end of the software lifecycle, and less in the later stages of coding. They found increased communication between developer and customer, commenting, "We usually program together with the customer at the terminal, and they follow the data flow diagrams enough to make suggestions or corrections in the flow of the code. It is difficult to imagine a similar situation using text-based code" [Baroth and Hartsough 1995, p. 26].

## Iteration

Usually iteration happens in a node which encloses a sub-graph. The Facebook Origami method of a loop node (without a sub-graph) seems relatively unique:

![](/media/addition-patch-values.png)

Apparently, it's still an open topic. A more detailed overview can be found in [Iteration constructs in data-!ow visual programming languages](/media/mosconi2000.pdf).

Personally, I find a subgraph (whose internals are optionally view-able from the parent's graph) makes a lot of sense. It's quite similar in semantics to `[a,b,c].forEach((item, index) => { ... }`.

## Questions

### Token vs structure model

Is the main difference that the structure model maintains history? 

## Follow up questions

### Reactive programming

What's the relationship to reactive programming?

[According to Wikipedia](https://en.wikipedia.org/wiki/Reactive_programming), reactive programming is type of dataflow programming (along with flow-based and cell-oriented).

### Singleton state updating

What about when you have a centralized singleton state and need to update it, such as in a ToDo app? 

The CycleJS way is to put pointers in your view code and then declaratively define your state as a function of the events on the view -- as well as merging most events and mapping over them to create actions and a update a singleton state. This approach (minus the merging and actions) seems to lend itself well to Facebook Origami given that we don't even need to give an id to the view in order to get a event from it - we could just click on it and select the event we want and get a visual node that's hooked up properly.

One visual metaphor I have in mind: state is a product of interacting with the view, so why not put the construction of state to the right of the view? Of course, the view is a function of the state, but it's just a consumer of state so you can just reference it as a value to the left of the view. What's missing from this metaphor is the merging of events, and mapping them into actions, and then updating a centralized state by action, which seems neccesary for scalability, yet in my mind seems not much different from just allowing nested components to mutate global state willy nilly.


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>