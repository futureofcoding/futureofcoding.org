---
title: FRP
---

# FRP

Explicit data dependencies are essential to comprehendable code. This is particularly relevant in user interface code, where state is notoriously complex. 
In the event-driven paradigm, code is organized around events. This makes data dependencies are hopelessly implicit, because only the initial value of a piece of data is explicitly defined, and after initialization, any line of code can mutate any piece of data in its scope. If you are trying to understand how a single piece of data changes, you are doomed to read every line in its scope and re-create possible control flow paths in your head.

In the Functional Reactive Programming (FRP) paradigm, as originally conceived by Conal Elliott and Paul Hudak, code is organized around pieces of data, and events are subordinated as explicit dependencies of data as infinite streams. Explicit data dependencies, in the form of other piece of data and event streams, allow you to comprehend the *entire* behavior of specific pieces of data, simply by reading their definitions, recursively. This allows you to *categorically rule out all the code you do not have to read* in order to comprehend the relevant data.

The FRP-inspired user interface frameworks of today have given up explicit data dependencies in favor of the Elm Architecture, which has been adopted in many frameworks, including React Redux, VueX, and CycleJS.

![image](https://user-images.githubusercontent.com/2288939/42588010-76de6134-850a-11e8-9de5-ed2320a07375.png)

In the Elm Architecture, you define:

* the type of your data and its initial values (the model), 
* the view in terms of your model, and how various events map to "actions" (the HTML), 
* and "a global reducer" to take the current model and an action, and product an updated model (the update).

The Elm Architecture gives us explicit clarity only on our state’s initial values and on how actions update state. Yet any action can affect any piece of state. And any view element can emit any action. So if we’re looking to understand a piece of state, we’re not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

Contrast this with Reflex...


## ToDo

* title ideas
  * FRP and Explicit Data Dependencies 
* be more concrete - have specific examples to articulate points above
* maybe make the article in terms of "modular understanding" instead of "comprehsibility"?
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
