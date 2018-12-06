---
title: Visual Programming
---

# Visual Programming

Other title ideas:

* The Software Elephant
* Visualizing the Software Elephant
* Invisible Programming
* Visualizing the Unvisualizable
* Is Programming Inherently Unvisualizable?

* TOC
{: toc }

Nobody likes to read code. It is almost as difficult to decipher as its namesake which *purposely resists comprehensibility*.

The noble quest to make software comprehensibile isn't new. Since the 70s, computer scientists have been trying to improve how we understand code. The field of [Visual Programming Langauges](https://en.wikipedia.org/wiki/Visual_programming_language) is [a fascinating graveyard](https://docs.google.com/presentation/d/1MD-CgzODFWzdpnYXr8bEgysfDmb8PDV6iCAjH5JIvaI/edit#slide=id.g1da0625f1b_0_92) of failed experiments.

The failures of the VPL field have convinced many to give up the effort altogether. Fred Brooks argues that software is inherently "invisble and unvisualizable":

> As soon as we attempt to diagram software  structure, we find it to constitute not one, but several general directed graphs, superimposed one upon another. Whether we diagram control flow, variable scope nesting, variable cross-references, data flow, hierachical data structures, or whatever, we feel only one dimension of the intercately interlocked software elephant. 

## The Software Elephant 

![](https://equilibregaia.files.wordpress.com/2011/02/conte-sufc3ad0001-copiaeng.jpg?w=1075)

Of course, he's entirely correct. Our current programming languages have too many dimensions to be layed out visually.

One option is to visualize the syntax. TODO

Another option is to visualize the variables references and data updates: 
![image](https://user-images.githubusercontent.com/2288939/41919846-750dadd0-792d-11e8-8435-1cf1e2257606.png) [pythonTutor.com](http://pythontutor.com/).

TODO maybe convert the above image into [an embeddable live widget](http://pythontutor.com/embedding-demo.html). TODO explain.

And a third option is to visualize the flow between components... node-and-wire.

And like the men in the parable of the Blind Men and the Elephant, those of us who'd like to visualize current programming languages are only able to tell a part of the story at a time.

What if we designed a language specifally to have less dimensionality, so it'd be easier to map it to a 2d geometry? Brooks isn't impressed:

> In spite of progress in restricting and simplifying the structures of software, they remain inherently unvisualizable...

## Restricting and simplifying

Writing in 1986, Brooks was entirely correct. Even now in 2018, most would still agree with Brooks that software is still unvisualizable. 

However, there's a new-ish but rapidly growing school of thought that radically "restricts and simplifies the structure of software": functional programming. Most programmers find FP overly restrictive. It removes two of programming's most recognizable characteristics: sequential evaluation and mutable state. It also adds a whole lot of other restrictions via a very strong type system.

Most programmers are repelled by such a restrictive model. It's understandable. While FP simplifies programming, it also makes a lot of things that were simple in imperitive programming much harder.

The mystery is: why haven't functional programming languages leverage their extremely restricted model to create visual environments? One reason is that functional languages are in the "compiled" school vs the interpreted school...TODO... FP is an untapped tresure trove of visualizations.

I'm particularly interesting in the comprehensibility of the code behind user interfaces. We spend most of our lives interacting with software, yet we aren't able to customize the interfaces to better serve our unique needs. Even if the apps we used were open-source, we wouldn't be able to understand the code (in a reasonable amount of time) to change it. That's why it's imperative (pun intended) that we ditch the imperative model of programming for a comprehensibile, visualizable one.

The hardest part to visualize in user interface code is its cyclical nature. You don't have this problem with static user interfaces, and there are great WYSIWYG tools for those, like Squarespare or Webflow.

Let me illustrate the problem with a small example: imagine a button, that when clicked, creates another button, which can also be clicked to create more buttons that can make buttons. What we have here is a loopy thing, and that's difficult to in a functional style.

TODO interactive buttons making buttons.

Lucky for us, there's a sub-field of FP called Functional Reactive Programming that's been working on these sorts of problems for two decades. In fact, the currently popular user interfaces libraries, like ReactJS, VueJS, and Elm are based on this research.

This is partly responsible for the amazing developer tool experience with some of these tools.

Elm boasts a time-travel debugger, and CycleJS will actually visualize the data dependencies of your code, including *the data the flows through it in real-time*.

TODO photo

However, for very pragmatic reasons, React, Vue, and Elm, aren't quite restrictive (TODO this isn't quite the right word) enough to take these visualizations to the next level. TODO talk about why.

TODO maybe talk about why origami is great. But pulses are not restrictive enough. And we need to see more than just the current value. Graphs can abstract over time (ladder of abstraction).

TODO rxmarbles.

> The reality of software is not inherently embedded in space. Hene it has no ready geometric representation in the way that land has maps... A software system is not ... an object whose geometry reflects its essense.

TODO Tufte/Bret about how it's our job to map concepts to space a la that data plot and others.

Visualizing streams of streams (Higher-order streams). Too many fmaps?

Other problem: Spacetime leaks?

Finally we are able to follow Bret Victor's advice: 

> Visualize data, not code. Dynamic behavior, not static structure.

The software elephant is indeed unvisualizable. It's too big. That's why we need to find the software mouse: a very restricted form of programming that we can hold in our hands, and more importantly, see the whole picture with our eyes. As Bret Victor says:

> Maybe we don't need a silver bullet. We just need to take off our blindfolds to see where we're firing. - Bret Victor

## Next steps...

Reflex visualizations, todomvc, maybe cyclejs devtools

Eventually, a tool for editing the visual streams. 

And a way to edit the apps you're using, as use use them. (This will be a challenge on mobile but I don't see why not.)

You can follow the progress on futureofcoding.org/log and I'm always looking for collaborators.

{% include analytics.html %}

