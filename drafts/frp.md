---
title: FRP
---

* TOC
{: toc }

# Functional Reactive Programming and Modular Comprehensibility

If you wanted to understand the entirety of a software project, you'd have to read every line of code. But what if you only wanted to understand a single module? Can you get away with only reading a similarly smally piece of the code? In other words, is module comprehension proportional to the amount of code read? We can refer to such a project as "modularly comprehensible."

<iframe width="560" height="500" src="https://www.desmos.com/calculator/gzeqaru5pe?embed" frameborder="0" allowfullscreen></iframe>

Most programming languages are not modularly comprehensible in such a linear fashion but in an exponential one, as demonstrated in the yellow curve above, where understanding is very limited until you've read almost all the code, at which point it expands very quickly.

The lack of modular comprehensibility slows down the time it takes a programmer to make a change to an unfamiliar project. This is particularly relevant in open-source software, because developers have limited time to contribute. Have you ever wanted to make a small bug-fix or improvement to an open-source project, but gave up after a few hours of failing to understand how the code works? 

## Module dependencies

Code is not modularly comprehensible because the way dependencies between modules are organized. 

In [Reactive MVC and The Virtual DOM](https://web.archive.org/web/20180530055638/https://futurice.com/blog/reactive-mvc-and-the-virtual-dom), Andre Staltz discusses the trade-offs between the Interactive (or imperitive) pattern and Reactive patterns.

> ![image](https://user-images.githubusercontent.com/2288939/42631117-35144a28-85a7-11e8-877e-552732396590.png)
>  
> An arrow from foo to bar means that foo somehow affects bar, by updating data in bar. A typical case is code inside foo which calls  
>    
> `bar.updateSomething(someValue);`  
>  
> Question: where does each arrow live in a program? They can't simply live in between modules, because all code is inside some module. The answer is: it depends, but typically, you expect the arrow to be defined in the arrow's tail, as such:
>  
>  ![image](https://user-images.githubusercontent.com/2288939/42631121-3789f186-85a7-11e8-893f-6357c6aa8864.png)
>  
> **In the Interactive pattern, module X defines which other modules X affects.**  
>  
> The dual of Interactive is Reactive, where arrows are defined in the opposite end, in the arrow head, as such:  
>  
> ![image](https://user-images.githubusercontent.com/2288939/42631130-39df12ae-85a7-11e8-8ce3-ed48235efeb4.png)  
>    
> **In the Reactive pattern, module X defines which other modules affect X.**  
>  
> The benefit of Reactive over Interactive is mainly separation of concerns. In Interactive, if you want to discover what affects X, you need to search for all such calls `X.update()` in other modules. However, in Reactive, all that it takes is to peek inside X, since it defines everything which affects it. For instance, this property is common in spreadsheet calculations. The definition of the contents of one cell are always defined just in that cell, regardless of changes happening on the other cells it depends on.

Note on the word "module": In his example above, Staltz uses JavaScript files as representative of modules, but you could replace the `foo.js` filename with `foo` the variable or function name for similar result. Modular comprehensibility has nothing to do with browserify modules. The dictionary definition of module is relevant: "any of a number of distinct but interrelated units from which a program may be built up or into which a complex activity may be analyzed."

I believe that Staltz understates the non-modularity of the Interactive pattern. Let's say you wish to understand the behavior of X, so you grep for `X.update` in all modules. For each module `X.update` appears in, you have to go to the call site(s) and understand that module well enough to know what triggers that line of code, and arguments it will pass in. If you're lucky, all that information is self-contained, but you'll likely be forced to understand yet more modules to understand how *this* module affects X.

The modular comprehensibility of a language is a function of how explict or implicit data dependencies are between modules. The Interactive pattern, which is representative of JavaScript, can never be modularly comprehensible, because data dependencies are hopelessly implicit. 

The Reactive Pattern enforces explicit dependencies, which are a huge win for modular comprehensibility. For example, consider the program `A` below, which is explicitly defined in terms of its modules below. In this picture read an arrow from B to A as "A is defined in terms of B" or "A explictly depends upon B."

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBCVFxuICAgIFxuQi0tPkFcbkMtLT5BXG5ELS0-QVxuRS0tPkFcbkYtLT5CXG5HLS0-QlxuSC0tPkJcbkktLT5DXG5KLS0-Q1xuSy0tPkRcbkwtLT5FXG5NLS0-RVxuTi0tPkVcbk8tLT5FXG5LLS0-TlxuUS0tPk5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19" frameborder="0" allowfullscreen></iframe>

If you want to understand a module, you have to understand it's modules, recursively. So if you want to understand the entire program, A, you have to read everything. However, let's say you were only interested in module E. In this case you only have to read the E and it's children, recursively, highlighted below:

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBCVFxuICAgIFxuQi0tPkFcbkMtLT5BXG5ELS0-QVxuRS0tPkFcbkYtLT5CXG5HLS0-QlxuSC0tPkJcbkktLT5DXG5KLS0-Q1xuSy0tPkRcbkwtLT5FXG5NLS0-RVxuTi0tPkVcbk8tLT5FXG5LLS0-TlxuUS0tPk5cblxuY2xhc3NEZWYgY2xhc3NOYW1lIGZpbGw6eWVsbG93LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDo0cHg7XG5jbGFzcyBFLEwsTSxOLE8sUSxLIGNsYXNzTmFtZTtcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19" frameborder="0" allowfullscreen></iframe>

Explicit data dependencies allow you to comprehend modules by reading their definitions, recursively. This allows you to *categorically rule out all the modules you do not have to read* in order to comprehend the relevant module. In the above example, that's all the modules that are not highlighted. If a module is not an explicit dependency (or dependency of a dependency...), it's not relevant. In fact, it's explicitly *independent*.

## Restricting the model

The Reactive Pattern enforces explicit dependencies by restricting the programming model, disallowing side-effects, such a mutable state, leaving us with only pure functions, and a langauge in the spirit of Haskell. 

This works beautifully for batch software that accept an input and return an output, but does not scale to interactive software that responds to inputs over time. That's where FRP comes in.

## FRP

"Functional Reactive Programming is a way of writing interactive software using only **pure functions**" [[Ryan Trinkle](https://youtu.be/dOy7zIk3IUI?t=1m27s)]

FRP is particularly useful for constructing software interfaces. The popular UI framworks of today, such as ReactJS, are inspired by FRP principles - but without entirely forgoeing side-effects.

behaviors and events (streams)

I like to think about FRP as "zooming out." code is organized around pieces of data, and events are subordinated as explicit dependencies of data as infinite streams. 

space time issues

# The Elm Architecture

However, most web-based FRP frameworks share a data model that does not feature modular comprehensibility. The data model they share was originally concieved as for the Elm programming language, a pure langauge in the spirit of Haskell, and entitled "The Elm Architecture." It inspired ReactJS's Redux, VueJS's Vuex, CycleJS's Onionify, among many others.

The core of the architecture is a reducer function that takes the old state, and an event, and returns a newly computed state.

```haskell
reducer :: state -> event -> state
```

<iframe width="500" height="300" src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiXG5ncmFwaCBURFxuIFxucmVkdWNlci0tPnN0YXRlXG5zdGF0ZSAtLT4gdmlldyBcbnZpZXctLT58ZXZlbnR8cmVkdWNlclxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0" frameborder="0" allowfullscreen></iframe>

The "view" (HTML and CSS) of the application is defined declaratively in terms of `state`. 

The way the view sends events to the `reducer` differs between the frameworks. For example, React and Elm generates events from *within* view, such as `<button onClick={this.handleClick()}>` or `button [ onClick Increment ]`, respectively, while CycleJS derives event information *outside* the view, such as `const clicks = DOM.select('button').events('click')`. 

Additionally, these frameworks sometimes wrap events in semantic labels called "actions" or "messages". For example, an `onClick` event could become a `Submit` action. This will become clearer in the Elm example below.

In the Elm Architecture, we are explicit about the initial value of state, how the state determines the view, and how various events effect the state. This is a huge improvement over the non-FRP frameworks of the past, such as JQuery. Benefits include serializable state, which gives us hot-swapping and time travel debugging!

However, let's examine the Elm Architecture from a modular comprehensibility point of view. Any message can modify any state. In the reducer, called  `update`, in [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the `Add` message triggers an update of three different pieces of state:

![image](https://user-images.githubusercontent.com/2288939/42649315-6113b890-85d7-11e8-88fb-184081fe3ba5.png)

This means that you can't modularly gain a complete understanding of any piece of state. You have to look through *all* the messages for any piece of state.

There's also a subtler way this undermines explicit dependencies: each piece of state can be modified in terms of *any other piece of state*. There's no explict isolation between independent states. 

Additionally, any view element can emit any message. Again from [Elm ToDoMVC](https://github.com/evancz/elm-todomvc/blob/master/Todo.elm), the viewInput's `onInput` and `onEnter` events send `UpdateField` and `Add` messages, respectively: 

![image](https://user-images.githubusercontent.com/2288939/42649332-6cf319c6-85d7-11e8-96c4-0c11a19cc67c.png)

If we’re looking to understand a single piece of state, we’re not much better off than with an entirely imperative framework: we still have to read more-or-less the whole application even if we wish only to comprehend only a small piece.

However, this is a feature as well as a bug. The Elm Architecture purposefully designed to limit the explicitness of dependencies. In [Accidentally Concurrent](https://youtu.be/DfLvDFxcAIA?t=27m32s), the creator of Elm Evan Czaplicki explains how he things explicit dependencies can lead to crazy incomprehensibility:

<img src="https://user-images.githubusercontent.com/2288939/42652385-3f6d0454-85e0-11e8-98b6-ce4d1b48bf16.png" width="500px">

However, you and I, dear reader, are not scared off my explicit dependencies, because they are what allows us to know what code we must read and what code we can safely avoid. If you focus on a single circle at a time, you can easily see what it depends upon. (Except maybe for some of those nasty-looking cyclic states. We'll come back to those below.)

## Synchronous dataflow and higher-order streams

As it turns out, the FRP-inspired libaries we've discussed so far aren't truly representative of FRP as it was originally concieved. In Elm 0.17, Elm said [A Farewell to FRP](http://elm-lang.org/blog/farewell-to-frp):

> So is Elm about FRP anymore? No. Those days are over now. Elm is just a functional language that takes concurrency very seriously. And from a user's perspective, Elm is just a friendly functional language!  
> Interested readers may find Lucid Synchrone interesting. Unfortunately for me, I had no idea my thesis had so much in common with synchronous programming languages at the time, but the connections are quite striking. I might argue that Elm was *never* about FRP.

The main distinction between [OG](https://www.urbandictionary.com/define.php?term=OG) FRP and Synchronous dataflow langaugse is whether they allow higher-order streams. Because Eve, ReactJS, and VueJS do not, they are closer in spirit to dataflow langauges such as Esterel and Lucid Synchrone, than they are to the OG FRP frameworks, such as Fran. (CycleJS does allow higher-order streams.)

## Cyclic FRP

Cycles are a major concern with explicit dependencies. For one, most FRP libraries in the wild do not support them. The only one I was able to find was Reflex, which is not nearly as popular as the other frameworks discussed.

But even if cyclic FRP is possible, is it desirable? As we saw above in Evan Czaplicki's crazy picture, things can get hairy fast. In fact, it may seem like things are *too explicit*, too tightly coupled.

I, however, would push back on this concern. I believe that if the essential, inherent nature of a module is that it's cyclically dependent with another module, we should explicitly expose that nature in the structure of the code. 

TODO maybe talk about https://en.wikipedia.org/wiki/Connascence

Let's examine my favorite simple cyclic dependency: a button that counts its clicks. This is one way to do it in Reflex:

```haskell
clickEvents <- intButton clicksCount
clicksCount <- count clickEvents
```

First look at `intButton clicksCount`. This is where the button is created with the number of clicks as it's text. 

`intButton` is a helper function of type `Show a => Dynamic a -> m (Event t ())`. In other words, it inputs a dynamic value (a stream) that can be coerced to a string (that's what the `Show a =>` part means), creates a button on the screen with that value, and returns an event stream (which in this case is just click events).

`clicksCount` is simply counting the number of events within the `clickEvents` stream.

Here's the same program in Elm:

```elm
-- model
count = 0

--reducer
update msg count =
  case msg of
    Increment ->
      count + 1

-- view
view count = intButton [ onClick Increment ] count
```

Yes there's less coupling. But is that always a good thing? No, there is such a thing as too little coupling.

## Related Work

Code comprehensibility is only a one important piece of making a change to a project. Other issues worth considering which also include: 

* installing the proper software to gett the code to compile and run on your machine, 
* editing the code, 
* and testing your changes - 
* not to mention the social complexities of getting your pull request merged into the main project (which involves getting your code reviewer to *comprehend* your changes).

And, of course, the modularity of comprehensibility is only one piece of code comprehensibility. 

Another big piece is understanding how the files, folders, import statements, and build tools and parsed together into a unifed program. Where's the entry point for goodness sake?! 

Another impediment to code comprehensibility is code's symbolic, abstract nature. In [A Human-Readable Interactive Representation of a Code Library](http://glench.github.io/fuzzyset.js/ui/), Glen Chiacchieri makes a library more understandale through editable concrete values at various stages of code execution. Glen's thesis that concrete values are key to comprehension is backed by research that found that "to comprehend programs, developers need to acquire runtime information [to inspect the state of the application]. For this, developers frequently execute the application using a debugger." [[Walid Maalej, Rebecca Tiarks, Tobias Roehm, and Rainer Koschke. 2014. On the Comprehension of Program Comprehension](https://dl.acm.org/citation.cfm?id=2622669)]

TODO program paths and slicing

## Future Work

Visualizing cyclic dependencies in a comprehensible way will be a challenge. I will freely admit that if it ultimately proves impossible to visualize cyclic dependencies in a comprehensible way, FRP may not be the silver bullet for modular comprehensibility I hope it can be.

## Conclusions


## Acknowledgements

Thank you Jonathan Edwards for you continued mentorship.

## ToDo

* title ideas
  * FRP and Explicit Data Dependencies
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
