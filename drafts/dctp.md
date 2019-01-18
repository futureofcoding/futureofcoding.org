---
title: The Misunderstood Roots of FRP Will Save Programming
---

<h1>The Misunderstood Roots of FRP Will Save Programming</h1>

* TOC
{:toc}

For many years, I've been searching for the "perfect" library/framework/language/paradigm for programming user interfaces. I wanted a tool that designers or other non-programmers could use to program arbitrarily complex user interfaces, such as TodoMVC. 

Like many others, I fell in love with FRP with the rise of ReactJS and spent a few years searching for the perfect reactive model. Eventually, I found my way back to the original work on FRP by Conal Elliott, where I was surpised to find that it needed little improving: it was gotten right from the start. 

However, Conal's FRP has a reputation for being difficult to understand. It took me almost a year to make sense of it. This essay attempts to make Conal's vision more understandable, and also show how this perspective could be the foundation for a new world of end-user programming, not just with user interfaces, but for all programming: storage, multi-node computing, machine learning, etc..._

## The Curse of FRP

I fell in love with ReactJS in late 2014. The view is a pure function of state. It was so obviously *right*.

But of course it wasn't perfect. For one, it wasn't clear how that state changed over time. Redux seemed to make sense -- and hot reloading and time travel debugging are awesome -- but over time I began to sense that React didn't solve all my problems. I eagerly slurped up each new React-inspired frameworks, such as VueJS and CycleJS, to see if they could finally be the "full solution" to interface development, but always felt something was missing.

[Paul Chiusano](https://pchiusano.github.io/) suggested I read [Conal Elliott](http://conal.net). "You know," he said, "Conal is the original guy behind FRP. React isn't even 'real' FRP. You should go back and read him."

I didn't like to hear this. I loved React and the FRP I knew. I was reluctant to read [a stodgy paper from the 90s](http://conal.net/papers/icfp97/). But I trusted and respected Paul so I gave it a go.

My eyes immediately glazed over. I wasn't able to make sense of almost any part of it, so I gave up. However, I couldn't escape HN comments alluding to "[real](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=real%20frp)" or "[original](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=original%20frp)" FRP.

They were annoying enough to send me back to Conal for another try. I wanted to show these pompous pricks that their precious old FRP was *worse* than my modern FRP. (Maybe you feel the same way towards me, dear reader? 😜) 

Yet I couldn't make heads or tail of Conal, even in [video](https://www.youtube.com/watch?v=j3Q32brCUAI) [form](https://www.youtube.com/watch?v=teRC_Lf61Gw). I gave up again. Over the course of a year, I tried on-and-off again to read Conal's papers, but they never made sense. I decided to give it up for nonsense. There was no there there.

Then someone (I forget who - if this is you, THANK YOU!!!) suggested I listen to [Conal's interview on the Haskellcast podcast](http://www.haskellcast.com/episode/009-conal-elliott-on-frp-and-denotational-design). Things started to click. I went back to his papers one last time.... 💥. It hit me. It all fell into place. I saw the light. I saw how the beautify of React could be joined with a solution to state management without the annoying parts of Redux. I saw how we could program user interfaces without mutable variables anywhere, just `const` statements as far as the eye could see... 

Now I am cursed to be one of those condescending assholes, a Conal zombie, doomed to roam the land, pleading other to "go back and read Conal", while knowing full well how hard it will be for them to see the light. This essay is how I hope to give you my disease.

## The Curse of Coining a Programming Paradigm

When a programming language designer defines a word in their language, that's the end of the story. But when a programming language designer coins a phrase in English, that's only the beginning of their ordeal. Alan Kay coined the phrase "object-oriented programming" (OOP) in the 70s, but OOP took on a life of its own, [which has caused much confusion and heartache to its creator](http://wiki.c2.com/?AlanKaysDefinitionOfObjectOriented). 

Functional reactive programming (FRP) has [a similarly confused and contested etymology](https://medium.com/@andrestaltz/why-i-cannot-say-frp-but-i-just-did-d5ffaa23973b). In the 90s, Conal Elliott pioneered a new software paradigm for programming interactive animations and dubbed it Functional Reactive Programming (FRP). Like Kay, Elliott then watched others use his term to describe things totally opposed to his original vision. Conal eventually conceded defeat. Like OOP, FRP now is a bastardized term that refers to work *inspired* by the "original FRP." Conal has retreated to coining a new, less-sexy (maybe on purpose?) phrase to describe his original vision: Denotative Continuous Time Programming (DCTP). From here on out I will use DCTP to refer to "original FRP."

## Continuity

The [inspiration for DCTP came in the form of a question from John Reynolds](http://conal.net/blog/posts/early-inspirations-and-new-directions-in-functional-reactive-programming). It roughly amounted to: 

> What would programming look like if time were continuous?

This is a wonderful question, but it's hard to answer it directly, partly because time is hard to visualize. Let's come at this via a slightly different question and then circle back to time:

> What's the difference between a bitmap and SVG image? 

### Continuous Space

In layman's terms: if you zoom in a bitmap graphic, it will get all pixelated. But if you zoom into an SVG, it will remain crystal clear. 

This is because a circle in a bitmap graphic is just an array of pixels, so if you zoom in, the computer has no choice but to "blow up" each pixel. However, if you have a circle in an SVG, the computer always remembers it's a circle and thus will be able to show it at whatever resolution you want. SVGs are "resolution-independent".

SVGs retain all the relevant info until the very last moment when the computer finally has to put the picture on the screen; then it turns your circle into a bunch of pixels.  On the other hand, a bitmap is a bag of pixels always, and thus when you want to zoom in, it's stuck with too little information (it doesn't know those pixels started out as a circle) to give you what you want. It's gone to pixels "too early."

#### What is a graphic?

Let's get a bit more mathematical with our definitions. A graphic is something that relates x- and y- coordinates to colors. You give it an x-y pair; it gives you a color. 

Here's the difference between bitmaps and SVGs: what kind of numbers make up the x-y pairs? 

With bitmaps, it's a pair of integers `(Int, Int) -> Color`, while with SVGs it's a pair of real numbers `(Real, Real) -> Color`.

A bitmap is a graphic over discrete space. This means that you can count the pixels one by one. There are no pixels in between two adjacent pixels. This is why we have trouble zooming in - we must create more pixels in between where no pixels yet exist.

An SVG is a graphic over continuous space. Between any two points in an SVG there are an INFINITY of points. It wouldn't even make sense to discuss adjacent points, because you could always find more points in between any two points. This is why SVGs scale so well. SVG graphics know the values of infinitely many points, so they are infinitely flexible.

If you're not used to dealing with the infinite every day, you may wonder how we can store an infinity of points. It's easy: just use mathematical functions.

Here's a very simple graphic that describes an infinity of points. For all points, the color is black: `(x, y) -> Black`. Boom. Infinity conquered. 

[todo pic]

Here's another: a green circle with radius 1, centered at (1,2): `(x, y) -> (x - 1)^2 + (y - 2)^2 < 1 ? Green : Clear`.

[todo pic]

### Continuous Time

In 99.99% of programming, time is discrete. The ticks of time can be counted one-by-one, and there is no time in between adjacent points. For example, JavaScript's `requestAnimationFrame` has discrete time ticking along at about 60 times per second.

Now let's return to the original question that inspired FRP: 

> What would programming look like if time were continuous?

#### What is an animation?

An animation is a graphic that changes over time. That is, it's takes an `x` and `y` as before, but now it also inputs a `t` for time, and outputs a Color as before: `(x, y, t) -> Color`. But again, what kinds of numbers are `x`, `y` and `t`? If they are integers, we're in discrete space and time. Let's make them all reals. We want continuous time.

Let's use continuous time to have our circle drift off the screen to the right: `(x, y, t) -> (x, y) -> (x-t)^2 + y^2 < 1 ? Green : Clear`. 

Let's have him go faster: `(x, y, t) -> (x, y) -> (x - (2 * t))^2 + y^2 < 1 ? Green : Clear`

[todo pic]

We can simplify this by defining a function for our static circle:

```haskell
circle centerX centerY radius color = (x, y) -> (x - centerX)^2 + (y - centerY)^2 < radius^2 ? color : Clear
```

And then moving him along:

```haskell
rightDriftCircle t = circle t 0 1 Green
fasterDriftRightCircle t = circle 2*t 0 1 Green
```

How about in a circle?

```haskell
circle cos(t) sin(t) 1 Green
```

## Flows

There are two main types in DCTP: Behaviors and Events. I will refer to them both as "flows" because they both resembles timeline-y things.

Behaviors are continuous functions of time: 

* the x-y-position of your mouse
* the constant function `t -> 1`
* the Boolean valued function: `t -> t > 10`

Events are discrete occurrences in time:

* the click event of your mouse
* key press events of your keyboard
* an interval of 3 seconds

### Flow combinators

[TODO turbine]

### Higher-Order Flows

It's very often useful for a flow to contain other flow:

[TODO examples]

However, it can be unwieldy to work with such flows. Usually, one manages by collapsing them down to more manageable types, such as via the following chart:

[TODO chart]

### Cyclical/Recursive Flows

It's also often useful to have cyclically/recursively defined flows:

[TODO examples]

Denotationally, cyclical or recursive flows are very similar to recursive functions, which are semantically a fixpoint. 

## Denotational Semantics

Now we know the CT (Continuous Time) of DCTP, but what of the D (Denotative)?

We've already been doing it. The original name for denotational semantics was "mathematical semantics". It was pioneered by Chris Strachey and Dana Scott in the early 1970s. It is an approach to model a programming language with mathematical objects. So above, when we modeled a graphic as a function from `x` and `y`, and then `t`, to `Color`,  that was denotational semantics.

In his 1977 Turing Award Lecture, [Can Programming Be Liberated from the von Neumann Style? A functional style and its algebra of programs](http://www.thocp.net/biographies/papers/backus_turingaward_lecture.pdf), John Backus explains how denotational semantics uncovers the hidden complexities in imperative, von-Neumann-based languages:

> When applied to a von Neumann language ... the complexity of the language is mirrored in the complexity of the description, which is a bewildering collection of productions, domains, functions, and equations that is only slightly more helpful in proving facts about programs than the reference manual of the language...

In other words, most programming languages lack powerful mathematical properties. For example, the lack of equational reasoning (being able to replace expressions with equal ones) makes it difficult to reason about such programs, let alone *prove* things about them. Additionally, lacking in mathematical properties prevents composability and modularity of programs. [TODO maybe join this section with the composability and modularity from the section above?]

### "Why program with continuous time?"

Of course, for the computer to render the above graphics on the screen, it must at some point convert the continuous time and space to discretized pixels and ticks of time. So what's the point of programming in continuous time if it will eventually be discretized? 

There are a [lot](https://github.com/conal/talk-2014-bayhac-denotational-design#why-continuous-time-matters) of [reasons](http://conal.net/blog/posts/why-program-with-continuous-time).  The most compelling argument for me is for the same reason we use SVGs: resolution independence. We want to be able to transform our programs "in time and space with ease and without propagating and amplifying sampling artifacts." We want to discretize at the last possible moment, and stay as abstract as possible for as long as possible.

[TODO Explain why continuous time (and laziness) are key for compositionality and modularity, maybe citing my FRP paper]

You can learn more about denotational design and semantics from Conal's [video](https://www.youtube.com/watch?v=bmKYiUOEo2A) and [paper](http://conal.net/papers/type-class-morphisms/).

## "A denotationally simple model for whole systems"

Now that you understand DCTP, here's why I think it can save programming... 

Aren't spreadsheets wonderful? A key to their success is that there is no control flow, no sequencing of instructions. Only data flow.

In [The Next 700 Programming Languages](https://www.cs.cmu.edu/~crary/819-f09/Landin66.pdf), Peter Landin calls such languages "denotative" when they contain only nested mathmatical expressions, and each expression *denotes* (can be model by) some mathmatical object. And, "The antithesis of denotative is 'imperative.'"

As Conal says:

> There is a lot of confusion about the meaning of “functional” and “declarative” as descriptions of programming languages and paradigms.... I’ve started using the more specific term “denotational programming” in my blog subtitle and elsewhere, as an alternative to what I used to call “functional programming”. While there are other notions of “functional”, applicable even to monadic IO, I think “denotational” captures the fundamental and far-reaching benefits that we called “good for reasoning about” and “powerfully compositional”. - [Is Haskell a purely functional language?](http://conal.net/blog/posts/is-haskell-a-purely-functional-language)

Haskell is such a denotative lanugage... That is, except for monads.

[TODO maybe combine this section with "why program with continuous time?" and denotational sematnics]

### Monads are Imperitive

While monads do technically denote mathmatical objects, in practice they are imperitive programming imported into denotational programming. In [Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm) Conal Elliott rants:

> “monadic IO” is a way to generate imperative computations (not just I/O) without having to say anything at all about the semantic content of those computations. Rather than retooling our mental habits completely away from the imperative model of computation, monadic IO is a way to hang onto these old mental habits, and use them in a hybrid functional/imperative programming style, in which the imperative doesn’t contaminate the functional, semantically.

This state of affairs is particularly depressing because the Haskell community, purported to be the bastion of denotative programming, seems to be content with the non-solution of monads:

> In a sense, I see us as in a worse position than before. Since the adoption of monadic IO, it’s been less immediately apparent that we’re still enslaved, so there’s been much less activity in searching for the promised land that the prophet JB [John Backus] foretold. Our current home is not painful enough to goad us onward, as were continuation-based I/O and stream-based I/O. (See [A History of Haskell](https://www.microsoft.com/en-us/research/publication/a-history-of-haskell-being-lazy-with-class/?from=http%3A%2F%2Fresearch.microsoft.com%2F~simonpj%2Fpapers%2Fhistory-of-haskell%2F), section 7.1.) Nor does it fully liberate us.

Let's liberate ourselves from the IO Monad by simply refusing to use it. We are free!!!!!! 

But wait... what about all the things we can't do without it? What about open and closing files and sockets, reading and writing from the console and the database? How do we do all the things we need to as self-respecting programmers?! 

> The imperative interfaces in today OSs and data-bases are troubling at first, and indeed I often hear people (even on #haskell) using these examples as demonstration that the imperative programming model is inescapable.

The answer is hidden inside FRP. You ready for it? Here it is: stop. Stop it with the files and the sockets. Stop it with the reading and writing to the console and the database. Those are imperitive things that you can only do imperitively. There's no monad magic that can save you and make imperitive things denotative. The only solution is to "shift [imperitivity] out of the role of a programming model notion and into the role of implementation of a programming model notion."

### ReactJS is JQuery-as-a-Service

One of the ways I understood ReactJS was as JQuery-as-a-Service. I would describe how I want my HTML to look like for any value of state, and then React would set to work to figure out what it needs to do (via virutal-dom-diffing) to mutate the DOM to look the way I want it to (JQuery-esque mutations). I no longer had to worry about keeping the state and the DOM in sync: React did it for me.

Before ReactJS, if you told me I could make TodoMVC without the imperitive DOM API of adding, removing and editing nodes, I'd tell you that you were crazy. But then React did it. Describe your UI as a function and it will do the *imperitive mutation stuff under the hood.* That's the trick. We can't actually get rid of imperitive programming, just like we can't get rid of the fact that SVGs eventually need to pixelate to show up on the screen. We can just hide those details below the programmers level of abstraction.

The Conal Elliott war cry:

> let’s explore how to move I/O entirely out of our programming model into the implementation of a denotationally simple model for whole systems.

### HTTP = JQuery

One day in the shower, I was wondering how to incorporate HTTP requests into the FRP paradigm. Then it hit me. HTTP = JQuery. HTTP requests are too low level. They are similar to manually querying or mutating the DOM via JQuery, except it's manually querying or mutating server state.  We need to go higher level and build a semantic model for "whole systems."

The same is true of all imperative APIs, including databases, files, sockets, etc. It's not that we have to abandon these technologies entirely. But only as the _implementation_ of a denotative programming system. The computer's job should be to make HTTP requets for you, just like React mutates the DOM on your behalf. 

### Performance

It's well known that FRP has suffered space and time leaks. People often complain about the performance of mathematical or abstract language like Haskell. 

[asked conal for help here]

## Common Gotchas

### Thinking about DAGs

A very common misconception with DCTP is confusing it with its implementation details. If you catch yourself thinking of DCTP as a DAG (directed acyclic graph), you still haven't quite gotten it. The builder of a DCTP framework or library _may_ decided to choose a DAG as an internal data structure, but they may choose an entirely difference underlying evaluation strategy. In fact, a DAG is the wrong structure for true DCTP entirely because DAGs are acyclic when you'll need cycles to represent the full range of user interfaces.

### Doing vs Being

If you find describing your code in terms of _steps_, you've probably slipped back into imperitive programming. As Conal's koan tells us:

> Imperitive is doing. Denotational is being.

I find it helpful to ask myself: What _is_ it? 

[TODO]

In [What's Functional Programming All About?](http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html), Li Hayoi explains: "The core of Functional Programming [or denotative programming] is thinking about data-flow rather than control-flow." He demostrates this beautifully by converting an imperitive tiramisu recipe to a dataflow diagram:

![](http://www.lihaoyi.com/post/BasicFunctionalProgramming/TiramisuDiagram.png) [TODO upload photo]

[TODO]

## Further reading

* [What's Functional Programming All About?](http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html)
* [Let's reinvent FRP](http://vindum.io/blog/lets-reinvent-frp/) by Simon Friis Vindum
* [The Essense and Origins of FRP](https://github.com/conal/talk-2015-essence-and-origins-of-frp)
* The original FRP paper by Conal Elliott and Paul Hudak: [Functional Reactive Animation](http://conal.net/papers/icfp97/)

## Notes

https://stackoverflow.com/questions/5875929/specification-for-a-functional-reactive-programming-language/5878525

https://stackoverflow.com/questions/5385377/the-difference-between-reactive-and-functional-reactive-programming/5386908#5386908

https://stackoverflow.com/questions/1028250/what-is-functional-reactive-programming/1030631#1030631

https://futureofcoding.org/notes/conal-elliott/



