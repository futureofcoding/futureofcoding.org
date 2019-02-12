---
title: The Misunderstood Roots of FRP Will Save Programming
---

<h1>The Misunderstood Roots of FRP Will Save Programming</h1>

For many years I been searching for the perfect paradigm for programming user interfaces. My dream is to use such a paradigm to create a tool that non-programmers could use to program arbitrarily complex user interfaces. 

Like many others, I fell in love with FRP with the rise of ReactJS and spent a few years searching for the perfect reactive model. Eventually, I found my way back to the original work on FRP by Conal Elliott, where I was surprised to find that it needed little improving: it was gotten right from the start. 

However, Conal's FRP has a reputation for being difficult to understand. It took me almost a year to make sense of it. This essay attempts to make Conal's vision more understandable, and also show how this perspective could be the foundation for a new era of programming, not just with user interfaces, but for all programming: multi-node computing, storage, machine learning, etc...

* TOC
{:toc}

## The Curse of "Original FRP"

I fell in love with ReactJS in late 2014. The view is a pure function of state. It was so obviously *right*.

But of course it wasn't perfect. For one, it wasn't clear how that state changed over time. Redux seemed to make sense -- and hot reloading and time travel debugging are awesome -- but I began to sense that React didn't solve all my problems. I eagerly slurped up each new React-inspired framework, such as VueJS and CycleJS, to see if they could finally be the "full solution" to interface development, but always something was missing.

[Paul Chiusano](https://pchiusano.github.io/) suggested I read [Conal Elliott](http://conal.net). "You know," he said, "Conal is the original guy behind FRP. React isn't even 'real' FRP. You should go back and read him."

I didn't like to hear this. I loved React and the FRP I knew. I was reluctant to read [a stodgy paper from the 90s](http://conal.net/papers/icfp97/). But I trusted and respected Paul so I gave it a go. My eyes immediately glazed over. I wasn't able to make sense of almost any part of it, so I gave up. 

However, I couldn't escape HN comments alluding to "[real](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=real%20frp)" or "[original](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=original%20frp)" FRP. They were annoying enough to send me back to Conal for another try. I wanted to show these pompous pricks that their precious old FRP was *worse* than my modern FRP. (Maybe you feel the same way towards me, dear reader? 😜) 

Yet I couldn't make heads or tail of Conal, even in [video](https://www.youtube.com/watch?v=j3Q32brCUAI) [form](https://www.youtube.com/watch?v=teRC_Lf61Gw). I gave up again. Over the course of a year, I tried on-and-off to read Conal's papers, but they never made sense. I decided to give it up for nonsense. There was no there there.

Then Ivan Reese suggested I listen to [Conal's interview on the Haskellcast podcast](http://www.haskellcast.com/episode/009-conal-elliott-on-frp-and-denotational-design). Things started to click. I went back to his papers one last time.... 💥. It hit me. It all fell into place. I saw the light. I saw how the beauty of React could be joined with a solution to state management without the annoying parts of Redux. I saw how we could program user interfaces without mutable variables anywhere, just `const` statements as far as the eye could see... 

Now I am cursed to be one of those condescending assholes, a Conal zombie, doomed to roam the land, pleading other to "go back and read Conal", while knowing full well how hard it will be for them to see the light[[1](#)]. This essay is how I hope to give you my disease.

## DCTP

When a programming language designer defines a word in their language, that's the end of the story. But when a programming language designer coins a phrase in English, that's only the beginning of their ordeal. Alan Kay coined the phrase "object-oriented programming" (OOP) in the 70s, but OOP took on a life of its own, [which has caused much confusion and heartache to its creator](http://wiki.c2.com/?AlanKaysDefinitionOfObjectOriented). 

Functional reactive programming (FRP) has [a similarly confused and contested etymology](https://medium.com/@andrestaltz/why-i-cannot-say-frp-but-i-just-did-d5ffaa23973b). In the 90s, Conal Elliott pioneered a new software paradigm for programming interactive animations and dubbed it "Functional Reactive Programming" (FRP). Like Kay, Elliott then watched others use his term to describe things totally opposed to his original vision. Conal eventually conceded defeat. Like OOP, FRP now is a bastardized term that refers to work *inspired* by the "original FRP." Conal has [retreated to a new phrase](https://stackoverflow.com/questions/5385377/the-difference-between-reactive-and-functional-reactive-programming/5386908#5386908) to describe his original vision: Denotative Continuous Time Programming (DCTP). From here on out I will use DCTP to refer to "original FRP."

## D is for Denotational

### Data flow > control flow

Aren't spreadsheets wonderful? A key to their success is that there is no control flow, no sequencing of instructions. Only data flow.

In [What's Functional Programming All About?](http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html), Li Hayoi explains: "The core of Functional Programming is thinking about data-flow rather than control-flow." He demonstrates this beautifully by converting a stateful, imperative tiramisu recipe to a denotational one:

```python
# Imperative Tiramisu Recipe

def make_tiramisu(eggs, sugar1, wine, cheese, cream, fingers, espresso, sugar2, cocoa):
    dissolve(sugar2, espresso)
    mixture = whisk(eggs)
    beat(mixture, sugar1, wine)
    whisk(mixture) # over steam
    whip(cream)
    beat(cheese)
    beat(mixture, cheese)
    fold(mixture, cream)
    assemble(mixture, fingers)
    sift(mixture, cocoa)
    refrigerate(mixture)
    return mixture # it's now a tiramisu
```

```python
# Denotational Tiramisu Recipe

def make_tiramisu(eggs, sugar1, wine, cheese, cream, fingers, espresso, sugar2, cocoa):
    return refrigerate(
        sift(
            assemble(
                fold(
                    beat(
                        whisk( # over steam
                            beat(beat(eggs), sugar1, wine)
                        ), 
                        beat(cheese)
                    ), 
                    whip(cream)
                ), 
                soak2seconds(fingers, dissolve(sugar2, espresso))
            ), 
            cocoa
        )
    )
```

The beauty of the denotational style is that the flow of data is so clear. Below Hayoi reformats the above Python code as a diagram to emphasis the flow of data:

![](https://user-images.githubusercontent.com/2288939/51426743-e7fc2400-1be6-11e9-9aa6-1c45d3c8f83e.png) 

Denotative code like this helps us easily answers questions that are all-but-buried in the imperative description, such as:

> If I have two people to make this tiramisu, which parts can be done in parallel?

![](http://www.lihaoyi.com/post/BasicFunctionalProgramming/Parallel.png)

### Denotational programming

In [The Next 700 Programming Languages](https://www.cs.cmu.edu/~crary/819-f09/Landin66.pdf), Peter Landin calls such languages "denotative":

> (a) each expression has a nesting subexpression structure,
>
> (b) each subexpression denotes something (usually a number, truth value or numerical function),  
> 
> (c) the thing an expression denotes, i.e., its "value", depends only on the values of its subexpressions, not on other properties of them.

In other words "denotative" languages contain no statements, but only nested mathematical expressions, where each expression *denotes* (can be model by) some mathematical object. 

Denotational programming has a number of benefits:

1. **Equational reasoning**. In denotational programming, the equal sign (=) means what it does in a mathematics textbook: we can replace instances of the left with the expression to the right or vice-a-versa. This is particularly important for [performance optimizations](#performance).
2. **Definitional reasoning**. We can *fully* understand an expression by its subexpressions, and their subexpressions, recursively. There are no spooky action-at-a-distance side-effects that can manipulate things from afar. In this way, we don't have to read the entire codebase to understand all the places our state could be manipulated. I use this perspective to [argue against the Elm/Redux architecture and for DCTP](/papers/comprehensible-frp).
3. **Modularity & Composability**. Conal explains, "Modularity comes from providing information while making as few restrictive assumptions as possible about how that information can be used." For example, "laziness lets us build infinite data structures, thus not assuming what finite subset any particular usage will access." The more our code is abstract, general, unspecific, mathematical, and free from operational concerns, the easier it is to use it in other contexts. John Hughes's must-read [Why Functional Programming Matters](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.html) beautifully demonstrates how the denotative style, particularly laziness and higher-order functions, enable modularity.

In this essay, I will follow Landin and [Elliott](http://conal.net/blog/posts/is-haskell-a-purely-functional-language) in using the phrase "denotational" instead of "functional", and "imperative" to describe its opposite.

## CT is for Continuous Time

The [inspiration for DCTP came in the form of a question from John Reynolds](http://conal.net/blog/posts/early-inspirations-and-new-directions-in-functional-reactive-programming). It roughly amounted to: 

> What would it be like to program in continuous time?

This is a wonderful question, but it's hard to answer it directly, partly because time is hard to visualize. Let's come at this via a slightly different question and then circle back to time:

> What's the difference between a bitmap and SVG image? 

### Continuous Space

In layman's terms: if you zoom in a bitmap graphic, it will get all pixelated. But if you zoom into an SVG (Scalable Vector Graphics), it will remain crystal clear. 

![bitmap](https://user-images.githubusercontent.com/2288939/51426691-1f1e0580-1be6-11e9-96ee-1088845d8bfb.jpg)

_Image Source: [StickerYou Blog](https://www.stickeryou.com/blog/post/vector-vs-bitmap)_

This is because a circle in a bitmap graphic is just an array of pixels, so if you zoom in, the computer has no choice but to "blow up" each pixel. However, with a circle in an SVG, the computer always remembers it's a circle and thus will be able to show it at whatever resolution you want. SVGs are "resolution-independent".

SVGs retain all the relevant info until the very last moment when the computer finally has to put the picture on the screen; then it turns your circle into a bunch of pixels.  On the other hand, a bitmap is a bag of pixels always, and thus when you want to zoom in, it's stuck with too little information (it doesn't know those pixels started out as a circle) to give you what you want. It's gone to pixels "too early."

#### What is a graphic?

Let's get a bit more mathematical (or denotational)[[2](#2)] with our definitions. A graphic is something that relates `x` and `y` coordinates to colors. You give it an `(x, y)` pair; it gives you a color. 

Here's the difference between bitmaps and SVGs: what kind of numbers make up the `(x, y)` pairs? 

With bitmaps, it's a pair of integers `(Int, Int) -> Color`, while with SVGs it's a pair of real numbers `(Real, Real) -> Color`.

A bitmap is a graphic over discrete space. This means that you can count the pixels one by one. There are no pixels in between two adjacent pixels. This is why we have trouble zooming in: we must create more pixels in between where no pixels yet exist.

An SVG is a graphic over continuous space. Between any two points in an SVG there are an INFINITY of points. It wouldn't even make sense to discuss adjacent points, because you could always find more points in between any two points. This is why SVGs scale so well. SVG graphics know the values of infinitely many points, so they are infinitely flexible.

If you're not used to dealing with the infinite every day, you may wonder how we can store an infinity of points. It's easy: just use mathematical functions.

**Here's a very simple graphic that describes an infinity of points. For all points, the color is red.** Boom. Infinity conquered. 

```javascript
// Example 1

const red = [255, 0, 0, 255]

const example1 = (x, y) => red
```

<svg height="300px" width="100%">
  <rect width="100%" height="100%" fill="red"/>
</svg>
 _[Example 1 GPU Code](https://jsbin.com/pinitox/edit?js,output)_
 
_The code for examples 1-6 in this essay reflect the initial JavaScript I wrote, which you can play with [here](https://jsbin.com/pelamug/edit?js,output). However, that code was purposefully simple, and thus too slow for graphics larger than 150x150 pixels. It was calculating the color for each pixel on the CPU! Underneath each example, I link to a JSBin with the roughly equivalent (but much uglier) code running on the GPU via [gpu.js](http://gpu.rocks/). However, the current version of this essay only features one GPU-based example, number 6. The first five examples have been replaced with equivalent SVGs so as to be easier on your phone's GPU._

**Here's another: a green circle with radius 50, centered at (100, 150).**


```javascript
// Example 2

const green = [0, 255, 0, 255]
const white = [255, 255, 255, 255]

function circle(centerX, centerY, r, color) {
  return (x, y) => Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2) < Math.pow(r, 2) ? color : white
}

const example2 = circle(100, 150, 50, green)
```

<svg height="300px" width="100%">
  <circle cx="60%" cy="0" r="50" fill="rgb(0, 255, 0)" />
</svg>
[Example 2 GPU Code](https://jsbin.com/hiresut/edit?js,output)

### Continuous Time

Now let's return to the original question that inspired FRP: 

> What would it be like to program in continuous time?

In most programming, time is discrete. The ticks of time can be counted one-by-one, and there is no time in between adjacent points. For example, JavaScript's `requestAnimationFrame` has discrete time ticking along at about 60 times per second.

#### What is an animation?

An animation is a graphic that changes over time. That is, it takes an `x` and `y` as before, but now it also inputs a `t` for time, and outputs a `Color` as before: `(x, y, t) -> Color`. But again, what kinds of numbers are `x`, `y` and `t`? If they are integers, we're in discrete space and time. Let's make them all reals, and enter continuous space and time.

**Let's have our green circle drift off the screen to the right.** (You may have to refresh the page to see him go.) 

```javascript
// Example 3

const example3 = (x, y, t) => circle(10*t, 0, 50, green)(x, y)
```

<svg height="300px" width="100%">
  <circle id="ex3" cx="50%" cy="50%" r="50" fill="rgb(0, 255, 0)" />
</svg>
<script>
  var ex3X = 5000
  setInterval(function() {
    ex3.setAttribute('cx', `${ex3X++/100}%`)
  }, 10)
</script>
[Example 3 GPU Code](https://jsbin.com/kayakim/edit?js,output)

**Let's have him go faster.** (You may have to refresh the page to see him go.)

```javascript
// Example 4

const example4 = (x, y, t) => circle(100*t, 0, 50, green)(x, y)
```

<svg height="300px" width="100%">
  <circle id="ex4" cx="50%" cy="50%" r="50" fill="rgb(0, 255, 0)" />
</svg>
<script>
  var ex4X = 500
  setInterval(function() {
    ex4.setAttribute('cx', `${ex4X++ / 10}%`)
  }, 10)
</script>
[Example 4 GPU Code](https://jsbin.com/hahegon/edit?js,output)

**How about moving in a circle?** Let's use some trig!

```javascript
// Example 5

const example5 = (x, y, t) => circle(50*Math.cos(10*t), 50*Math.sin(-10*t), 50, green)(x, y)
```

<svg height="300px" width="100%">
  <circle id="ex5" cx="50%" cy="50%" r="50" fill="rgb(0, 255, 0)" />
</svg>
<script>
  var ex5T = 0
  setInterval(function() {
    ex5T++
    ex5.setAttribute('cx', `calc(${50*Math.cos(ex5T/20)}px + 50%)`)
    ex5.setAttribute('cy', `calc(${-50*Math.sin(-ex5T/20)}px + 50%)`)
  }, 10)
</script>
[Example 5 GPU Code](https://jsbin.com/busemas/edit?js,output)

**Let's get funky!**

```javascript
// Example 6

function layer(fs) {
  return (x, y, t) => {
    for (var i = 0; i < fs.length; i++) {
      let c = fs[i](x,y,t)
      if (c !== white) {
        return c
      } 
    }
    return white
  }
}

const example6 = layer([
  circle(50*Math.cos(10*t), 50*Math.sin(-10*t), 50*Math.sin(t) + 25, [
    255*Math.cos(x*t), 
    255*Math.cos(y*x/t), 
    255*Math.cos(t)
  ]),
  [
    255*Math.cos(2*x*y*t/100000),
    255*Math.cos(5*x*y*t/100000),
    255*Math.cos(7*x*y*t/100000)
  ]
])
```

<iframe height="300px" width="100%" frameborder="none" scrolling="no" src="https://stevekrouse.com/embed-jsbin/?id=viropan"></iframe>
[Example 6 GPU Code](https://jsbin.com/viropan/edit?js,output)


## Interactivity

The above animations are neat, but there's no interactivity. We want to be able to press, click, type, and play with our screens. Let's go deeper into the DCTP rabbithole.

### Behaviors and Events

The two main types in DCTP are Behaviors and Events.

![](https://camo.githubusercontent.com/9b8fca9342d56465fc9536efdf8b26e182958a2f/68747470733a2f2f7261776769742e636f6d2f66756e6b69612f686172656163746976652f6d61737465722f666967757265732f6265686176696f722e737667)

_Graphic of Behaviors from the [Hareactive documentation](https://github.com/funkia/hareactive)_

Behaviors are continuous functions of time: 

* the animation diagrams from above
* the x-y-position of your mouse
* the constant function `t -> 1`
* the Boolean valued function: `t -> t > 10`

![](https://camo.githubusercontent.com/bdbe25d1c8cf3490714fcf8d90039be58afcda35/68747470733a2f2f7261776769742e636f6d2f66756e6b69612f686172656163746976652f6d61737465722f666967757265732f73747265616d2e737667)

_Graphic of Events from the [Hareactive documentation](https://github.com/funkia/hareactive)_

Events are discrete occurrences in time:

* the click event of your mouse
* key press event of your keyboard
* an interval of 3 seconds

### DCTP & HTML

The code snipets above were purposefully simplistic: we used pure, mathematical functions. This works great for shape-based animations on the canvas, especially with the help of the GPU. However, functions from `x` and `y` to `Color` are likely not the way we want to build HTML-based user interfaces. Instead we will use the [Turbine](https://github.com/funkia/turbine) framework, built on top of the [Hareactive](https://github.com/funkia/hareactive) DCTP library.

**Let's start with a simple counter button**:

<button onclick="ex1.innerText -= -1">Count!</button><span id="ex1" >0</span>

```javascript
const counter = function*() {
  // put a button on the screen
  // `clickEvent` is the stream of all click events on that button
  const {click: clickEvent} = yield button("Count!")
  
  // calculate the number of clicks on the button
  // `scan` is like fold or reduce, but over streams
  // ignore `liftNow` and `sample` for the purposes of this essay
  const clicksCountehavior = yield liftNow(sample(scan((n, m) => m + 1, 0, clickEvent))); 
  
  // put the clicks count on the screen
  yield span(clicksCountehavior)
};
```
[![Edit Turbine Counter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rym2pwy3lp?module=%2Fsrc%2Findex.js)

### Cyclical Flows

**What if we want the button to count inside itself?**

<button onclick="this.innerText -= -1">0</button>

```javascript
// create a cycle with `loop`
const counter = loop(
  // `clicksCountBehavior` is defined recursively below
  ({ clicksCountBehavior }) => function*() {
    
    // use `clicksCountBehavior` here BEFORE IT's DEFINED
    const { click: clickEvent } = yield button(clicksCountBehavior);

    // define `clicksCountBehavior_`
    const clicksCountBehavior_ = yield liftNow(sample(scan((n, m) => m + 1, 0, clickEvent)));

    // set `clicksCountBehavior` to `clicksCountBehavior_` to tie the recursive knot
    return { clicksCountBehavior: clicksCountBehavior_ };
  }
);
```

[![Edit Turbine Cyclical Counter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oom74y89kz)

### Higher-order & Cyclical Flows

**What if we want a button that makes buttons that make buttons... but only the odd buttons can make buttons?** This example may seem contrived, but it's a good minimal example to test the expressivity of a UI paradigm. 

<div id="buttons">
</div>
<script>
  function makeButton(num) {
    if (num % 2 === 1) {
      let button = document.createElement("button")
      let newButtonNum = buttons.childElementCount + 1
      button.innerText = newButtonNum
      button.onclick = function(newButtonNum) { 
        return function() { makeButton(newButtonNum) }
      }(newButtonNum)
      buttons.append(button)
    }
  }
  makeButton(1)
</script>

```javascript
const buttonsThatMakeButtons = loop(
  // `output` and `count` are defined in terms of EACH OTHER below
  ({ output, count }) =>
  
    function*() {
      // `count_` is a `Behavior Int`
      // `scan` counts the odd button clicks
      // `switchStream(...)` combines the click events of all buttons
      // `map`ping each button's click event to that button's number
      // `filter`ing out the even button clicks
      const count_ = yield liftNow(
        sample(
          scan(
            (n, m) => 1 + m,
            1,
            switchStream(
              output.map(l => combine(...l.map((o, i) => o.click.mapTo(i + 1))))
            ).filter(x => (x % 2 === 1))
          )
        )
      );
      
      // output_ is a `Behavior [Event Click]`
      // it's returned after putting a variable number (`count`) buttons on the screen
      const output_ = yield list(
        i => button(i).output({ click: "click" }),
        count.map(c => range(c).map(x => x + 1))
      );
      return { count: count_, output: output_ };
    }
);
```

[![Edit buttons that create buttons](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xorqy1q73q)

### Visualizing Flows

While I am in love with this paradigm, it hurts my head to mentally grapple with such unwieldy types. And these are just simple examples! How are mere mortals supposed to program this way?

I have a hunch: visualize the flows. 

![](https://user-images.githubusercontent.com/2288939/42889193-d288f63a-8a77-11e8-94f0-a4a32333f9d2.png)

There's been [interesting](http://rxmarbles.com/) [work](https://rxviz.com/) [here](https://rxfiddle.net/), and I'm hoping to further it by building similar visualization tools for Hareactive and Turbine.

## Denotational Programming Beyond User Interfaces

So, have you caught the denotational disease? I hope so!

If not, I apologize for my poor explanations. Give it some time and re-read this essay or the resources suggested below. It'll be worth it, I promise!

If you _have_ been bitten by the denotational bug, you may be wondering about how to apply this way of thinking beyond UI programming. Given it's denotational roots, you may be wondering if you can achieve denotational programming simply by using Haskell. Well, yes... except for the IO monad.

### Monads are Imperative

While other monads denote mathematical objects, the IO monad does not. It is imperative programming imported into denotational programming. In [Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm) Conal Elliott rants:

> “monadic IO” is a way to generate imperative computations (not just I/O) without having to say anything at all about the semantic content of those computations. Rather than retooling our mental habits completely away from the imperative model of computation, monadic IO is a way to hang onto these old mental habits, and use them in a hybrid functional/imperative programming style, in which the imperative doesn’t contaminate the functional, semantically.

This state of affairs is particularly depressing because the Haskell community, purported to be the bastion of denotative programming, seems to be content with the non-solution of monads:

> In a sense, I see us as in a worse position than before. Since the adoption of monadic IO, it’s been less immediately apparent that we’re still enslaved, so there’s been much less activity in searching for the promised land that the prophet JB [John Backus] foretold. Our current home is not painful enough to goad us onward, as were continuation-based I/O and stream-based I/O. (See [A History of Haskell](https://www.microsoft.com/en-us/research/publication/a-history-of-haskell-being-lazy-with-class/?from=http%3A%2F%2Fresearch.microsoft.com%2F~simonpj%2Fpapers%2Fhistory-of-haskell%2F), section 7.1.) Nor does it fully liberate us.

Let's liberate ourselves from the IO Monad by simply refusing to use it. We are freeeeeeeee!

### "A denotationally simple model for whole systems"

But wait... what about all the things we can't do without it? What about open and closing files and sockets, reading and writing from the console and the database? How do we do all the things we need to as self-respecting programmers?! 

> The imperative interfaces in today OSs and data-bases are troubling at first, and indeed I often hear people (even on #haskell) using these examples as demonstration that the imperative programming model is inescapable.  
>  
> -[Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm)

So if the IO monad isn't the answer, how are we do to all those OS and database operations we need to?

It's a trick question. We don't need to do any of those things.

Stop it with the files and the sockets. Stop it with the reading and writing to the console and the database. Those are imperative things that you can only do imperatively. There's no monadic magic that can save you and make imperative things denotative. The only solution is to "move I/O entirely out of our programming model into the implementation of a denotationally simple model for whole systems."

Ok, that was a lot. Let me explain...

### ReactJS is JQuery-as-a-Service

One of the ways I originally understood ReactJS was as JQuery-as-a-Service. I would describe how I want my HTML to look like for any value of state, and then React would figure out what it needs to do (virtual-dom-diffing) to mutate the DOM to look the way I want it to (JQuery-esque mutations). I no longer have to worry about manually, imperatively keeping the state and the DOM in sync. React does it for me. If you describe your UI as a function, React will do the imperative mutation stuff *under the hood.* 

*That's the trick.* We can't actually get rid of imperative programming, just like we can't get rid of the fact that SVGs eventually need to pixelate to show up on the screen. We can just hide those details below the programmer's level of abstraction.

### HTTP = JQuery

OK, so let's apply this kind of thinking beyond the DOM. What about HTTP requests? How do they fit into the DCTP model?

Did you catch it this time? That's another trick question.

HTTP requests are too low level. Just like JQuery manually queried and mutated the DOM, HTTP requests manually query and mutate server state.

The same is true of all imperative APIs, including databases, files, sockets, etc. All these abstractions are too low-level for the problems every-day programmers need to solve. Their place is in the _implementation_ of denotative programming systems. The computer's (or compiler's) job should making HTTP requests, reading and writing to files and databases, on your behalf, just like React mutates the DOM on your behalf. 

We need to liberate ourselves from the antiquated notions of a "frontend" and "backend". We need to go higher level and build a denotational model for "whole systems." 

### Multi-computer DCTP

How? Well, this is where I get hand-wavy. Multi-computer DCTP is mostly speculative at this point, but here's a sketch.

Let's extend our simple counter button from above to a multi-computer counter button. That is, our counter button will live at a URL, and anyone who loads that URL can contribute to the total clicks count by clicking on the button.

Notice how nowhere in my description of the counter is any mention of frontends vs backends, databases, or HTTP requests. The essential complexity of this problem has nothing to do with such things, and neither should our code for this problem. Those details would be the compiler or runtime's job.

Here's a high-level description of what the code could look like: the multi-computer-count _is_ the count of "all computer's" click events, for "all time", where "all computers" conveys the merging of streams on various computers and "all time" conveys the persistent, running total storage of this number *somewhere*.

One important essential complexity detail to keep in mind is that we cannot abstract away the amount of time it takes for information to travel between computers. I find it helpful to imagine interplanetary counter button, where we are counting along with Elon's Mars colony, 3 light-minutes away.

My current favorite strategy to encode this reality into our denotational model is through the lens of _perception_. Think about creating this counter button from the perspective of one computer. What is the "multi-computer count" from the perspective of this computer?

It's the count of the merging of two Event streams:

1. The local click event stream from the button on this computer
2. The remote click event stream of all other computers click events

There are (at least) two differences between local and remote Events:

1. Remote events contain the "computerId" from which they originated
2. Remote events contain two points in time: a) when they originally occurred and b) the time at which this local computer _percieved_ them. For example, if we were communicating with Mars, there'd be a three minute delay between occurance and perception.

So in order to merge local and remote Events steams, we will probably need to `lift` the local Event stream into a remote one. Then we `merge`. Then we `count`. Now we have a remote `Behavior`, which we can (maybe through some other type munging) put on the screen.

I tried to warn you this was going to be hand-wavy. I hope you read between the lines and got the basic gist.

### Machine learning is not about neural networks

Here's one final example of how the denotational approach could affect another area of programming: machine learning. 

In a recent call I had with Conal, he criticized the mainstream perspective on ML. For example, he said, the Tensorflow API is all about graph construction, but that's just an implementation detail.

So if it's not about graphs or neural networks, What is machine learning about?

Optimizing functions.

A neural network is one possible optimization technique, but if you expose that API to your users, your locking them into a lower-level abstraction than their problem requires. Conal is currently building a denotational ML API that he thinks will not only be more elegant to program with, but be more performant as well. 

<!--### Eliminating Incidental Complexity-->

<!--TODO-->

<!--> "A programming language is low level when its programs require attention to the irrelevant." - Alan Perlis -->

<!--Fred Brook's distinction between essential and incidental complexity.-->

## FAQ and Common Gotchas

### Why program with continuous time?

Of course, for the computer to render animations on the screen, it must at some point convert the continuous time and space to discretized pixels and ticks of time. So what's the point of programming in continuous time if it will eventually be discretized? 

There are a [lot](https://github.com/conal/talk-2014-bayhac-denotational-design#why-continuous-time-matters) of [reasons](http://conal.net/blog/posts/why-program-with-continuous-time). The most compelling argument for me is for the same reason we use SVGs: resolution independence. We want to be able to transform our programs "in time and space with ease and without propagating and amplifying sampling artifacts." We want to discretize at the last possible moment, and stay as abstract as possible for as long as possible.

### Got DAGs on the mind?

A very common misconception is confusing DCTP with its implementation details. If you catch yourself thinking of DCTP as a DAG (directed acyclic graph), you still haven't quite gotten it. 

> Every time you hear somebody talk about FRP in terms of graphs or propagation or something like that, they are missing the point entirely. Because they are talking about some sort of operational, mechanistic model, not about what it means.
>
> -Conal Elliott on the Haskellcast Podcast

The builder of a DCTP framework or library _may_ decided to choose a DAG as an internal data structure, but they may choose an entirely different underlying evaluation strategy. In fact, a DAG is likely the wrong structure for DCTP because DAGs are (definitionally) acyclic, but DCTP often requires cycles (recursively defined Behaviors and Events) to represent the full range of user interfaces.

### Doing vs Being

If you find describing your code in terms of _steps_, you've probably slipped back into imperative programming. As Conal's koan tells us:

> Imperative is doing. Denotational is being.

I find it helpful to ask myself: What _is_ it?

For example, what _is_ a button that counts its clicks? What _is_ a timer that counts down from 20 with a reset button?

However, you'll get stuck in quicksand if you ask what _is_ an inherently imperative notion, such as a file or HTTP request. Try to denotationally model only the essential complexity of your problem, not the operational details of how your machine will carry it out.

### Performance

It's well known that FRP has suffered space and time leaks. People often complain about the performance of denotational languages like Haskell. 

If you look at my 100x100 pixel animations running on the CPU, you may write off this paradigm for its impracticality. However, you'd simply be fooled by the "[von Neumann bottleneck](https://dl.acm.org/citation.cfm?id=359579)", because when I switched to the GPU, the code ran without a hitch. 

Conal argues that performance criticisms of denotational programming have it exactly wrong. Not just wrong, exactly wrong. One of the main benefits of denotational programming is equational reasoning, which is the key factor that enables speeding up code: the ability to optimize it by replacing some parts with faster parts. 

When your code is abstract and free of imperative, technological, operational concerns, you can compile down much further and easier. Conal brags about compiling his Haskell code down to custom-made circuits for blazing speeds.

## Further resources

* [Let's reinvent FRP](http://vindum.io/blog/lets-reinvent-frp/) by Simon Friis Vindum
* Conal answers "What is FRP?" on Stack Overflow [here](https://stackoverflow.com/a/5878525) and [here](https://stackoverflow.com/questions/1028250/what-is-functional-reactive-programming/1030631#1030631)
* [Explicitly Comprehensible Functional Reactive Programming](/papers/comprehensible-frp) by Steve Krouse
* [The Essence and Origins of FRP](https://github.com/conal/talk-2015-essence-and-origins-of-frp)
* [Functional Reactive Animation](http://conal.net/papers/icfp97/) - the original FRP paper by Conal Elliott and Paul Hudak 
* [What's Functional Programming All About?](http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html)
* [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) by Andre Staltz
* [Why Functional Programming Matters](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.html) by John Hughes

## Acknowledgements

Thanks to Paul Chiusano for pushing me to take on this perspective.

Thanks to Nick Smith, Mark McGranaghan, Kartik Agaram, Will Taysom, Will Crichton, Vladimir Gordeev, Gregg Tavares, Duncan Woods, and Ivan Reese for reading early drafts of this essay.

## Footnotes

<a name="1" href="#1">[1]</a> - A few weeks ago, I posted Conals' [Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm) to Hacker News to [much confusion](https://news.ycombinator.com/item?id=18692470). I expect this essay to be no different.

<a name="2" href="#2">[2]</a> - The "D" in DCTP stands for "denotational semantics." The original name for denotational semantics was "mathematical semantics". It was pioneered by Chris Strachey and Dana Scott in the early 1970s. It is an approach to model a programming language with mathematical objects. For example, in this essay we model static graphics as a functions from `x` and `y` to `Color` and moving animations from `x`, `y`, and `t` to `Color`. You can learn more about denotational design and semantics from Conal's [video](https://www.youtube.com/watch?v=bmKYiUOEo2A) and [paper](http://conal.net/papers/type-class-morphisms/).

## Draft 1 Feedback

### Kartik

> It reads well, but I guess I don't understand what part was opaque until you finally read through Conal. Maybe you should include your thought processes before and how Conal helped resolve them. What about React made you unhappy? Maybe I'm just not the target audience :slightly_smiling_face: I'm not that immersed in the Haskell/React worlds.

This is a good point. I was vague about how React didn't solve all my problems, but I imagine people familiar with front-end framekworks are familiar with these state issues.

### Mark 

> My background for reference:
>
> * Quite like FRP, know ReactJS well and have done some Elm.
>
> * Lots of experience with and appreciation for Scheme- and Clojure-style functional programming, but not e.g. Haskell.

> * I’ve read your article twice but haven’t e.g. followed all the links yet. So it’s my initial impression!
> 
> My feedback:
> 
> * Everything before “DCTP & HTML’ (https://futureofcoding.org/drafts/dctp#dctp--html) was very clear to me.
> 
> * I got stuck starting in this section though. “However, functions from x and y to Color is likely not the way we want to build HTML-based user interfaces.” I didn’t understand why this was true. In particular sure you don’t want to paint x/y coordinates manually, but why specifically do we want/need to go to the DCTP style suggested in the following code snippet, with `liftNow` etc? We could have avoided painting x/y coordinates manually with e.g. standard ReactJS style code.

Yes, I agree this transition was sharp, and it's a lot to throw people into turbine without much warning or help. 

It's troubling that it didn't come through that ReactJS, while avoiding paining pixels, would have the state troubles that DCTP avoids.

> * Perhaps related to the above, the motivation for continuous time and resolution independence makes total sense to me, but I don’t understand why ReactJS doesn’t have that and DCTP does?

TODO I guess I didn't explain how React requires state to change somehow, and that's usually operationally, or via Redux, which is not modular.

> * I wasn’t able to figure out what the key idea is that separates DCTP from ReactJS-style FRP, in terms of their benefits. I can see from the example code that they’re different. And yes there’s a certain purity to DCTP. But why is that difference good? For the initial counter example, what’s bad about ReactJS-style FRP that suggests we should introduce `liftNow`, `sample`, and `scan`? Or maybe the benefits only really kick in on larger and more complex apps?

TODO!!! My last paper on why Redux goes against modularity speaks to this... I wonder if I should follow the example of John Hughe's _Why FP Matters_ and speak mostly to modularity and evaluate DCTP vs React in that light...

> * It would have been helpful to have this summary at the beginning so that I could understand how the various specifics mentioned throughout the article fit in (and so that I knew what i was getting myself into). Something like “In the DCTP model things are defined in terms of X, in contrast to the Y of ReactJS. This requires some additional programming concepts A, B, C in DCTP but more elegantly handles situations J, K, and L that are troublesome with ReactJS. This means you’ll be able to deliver apps that are N, O, and P.”

TODO This is very interesting that it seems like DCTP requires extra concepts than React! I guess if you're coming from JS, and wanted to embed DCTP into JS, it'll seem like more concepts, but as Conal says, it's way less concepts. People used to JS and the opertional model don't realize how complicated the things they use are.

>  After making the above comments I read one of the linked articles - http://vindum.io/blog/lets-reinvent-frp/ - which helped my understanding. In particular it filled in the helper functions you had to skip over. But I’m still not sure why this programming style is better than ReactJS. Especially for highly stateful apps where it’s very natural to think in terms of state’ = f(state, event) and view’ = g(state’).

TODO I agree that that way is powerful (although not natural, and besides I'm over "natural"), but it's not powerful as it comes to modularity.

> The thing I’m left most interested in is  understanding why this approach is better. I think based on your article and the ones linked I could figure out how it works. But can it really help us write complex, interactive, stateful apps, in practice? I’m very open to the idea! But I haven’t been able to see how yet

Yeah, I don't think we can until we have the visualization tooling I want to build...

### Will

> My main critique: the article feels disjointed, and the primary claims aren’t sufficiently backed up by the examples. For example, you introduce denotational programming, along with three fairly abstract claims about its benefits. Then you explain the basics of continuous time and interactivity, but those lessons aren’t placed in context of your claims. I think a much stronger article would have a main running example. You would implement that example in both “normal” JS and in your alternative version. You could demonstrate how simple extensions to your example are easy in the FRP version (showing modularity), and perhaps you could embed a subtle bug in the JS version (showing how reasoning is more difficult).

TODO!!! This is a great idea! Drop the Turbine/hareactive bits, have a single running example where modularity shines, comparing it to React, where modularity does not. Similar to the Decomposition/Recomposition sections of BV's Learnable Programing.

> As it stands, the examples provided are not enough to convince me of your claims, particularly since some of them (like the odd-button-generator) are contrived.

Yeah, it's hard to see why this is a good example from the outset...

> I would focus on having significantly smaller scope to the article. “FRP Will Save Programming” is an extremely broad claim that’s difficult to defend. Distill out the essential concepts of FRP/DTCP/whatnot, show a few concise examples, maybe add your generalizations at the end.

TODO This is likely true, but makes me sad... let's think about this more...

> One last thing: I would focus your efforts on the “interactivity” section. The continuous time part makes perfect sense--representing graphics as a pure function of time--but the interactivity part lost me. There’s a lot of helper functions here I don’t understand, there’s a framework I don’t understand, and none of it is really explained. What is a `function*`? Why is this a coroutine? Is this the simplest way to implement these functions? This is a serious concern, because I would imagine most JS people reading this would think “wow this is crazy Haskell code. I could do this just as easily with a for loop and a counter variable.” You run the risk of turning people off from the paradigm.

Agreed, gotta lose the Turbine.

> I think you should consider what points you want to make. Why should people care about this new perspective? You already enumerated a few reasons in the denotative programming section, so just go for those. “FRP Can Simplify UI Programming” seems like a sensible title for such a perspective.

TODO This is building upon my last paper. Maybe this one should start by clearing up the prior one, focusing on one running modularity example, where I do side-by-side comparisons, in the same langauge!
 
> Also, semi-related, you may be interested in the classic graphics essay “A Pixel Is _Not_ A Little Square!” http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf
> 
> Actual last thing… I’m not a huge fan of the example in from Li Haoyi’s blog. It feels like a strawman. In standard OOP practice, I would write:

```fingers = fingers.soak2seconds(sugar2.dissolve(espresso))
mixture
  .beat(cheese.beat())
  .fold(cream)
  .assemble(fingers)
  ...
```
> 
> And that reads way more naturally to me than the denotational version, which has the classic “inside-out” functional programming readability issue.

TODO Wow! My point really did not come across here, because the syntax has nothing to do with what I was trying to say there. It's like I said `a+b` is better than `set reg1 to a; set reg2 to b; add reg1 reg2 and put in reg3` and he responded with `b+a` is clearer than `a+b`. 

It seems everybody missed how we can extend what we like from spreadsheets (pure math expressions) and do all our programming with them. Of course, you can use `where` expresionss or whatever you want to make the reading or constructing easier. Golly!

### Vladimir

> > The only solution is to “move I/O entirely out of our programming model into the implementation of a denotationally simple model for whole systems.”

> So DCTP can used only as a DSL inside something bigger and imperative, right? Seems like there is no way around it.

Yes that's what I said, but with entirely the opposite emphasis. We can't get rid of imperitivity... except for the 99% of the time you're not working on the langauge/runtime.

### Greg

> I've seen that example of tiramisu before and the first is **far more easy to follow** than the second.
> To me it's like reverse polish notation (RPN) vs infix or whatever it's called. As someone with lisp experience and forth experience I get RPN but I count myself as an exception. I'm sure all of you get it too but the average person will be lost. I don't agree that having to dig through a bunch of nested parentheses some how makes the data flow obvious. The first one seems vastly more obvious to me. Step 1 flows to step 2, step 2 flows to step 3, etc.  Yes, as a programmer I get all the benefits of the RPN tiramisu recipe but that's not how people think. They read a recipe top to bottom and follow the top instructions before they bottom.
> 
> I guess what I'm trying to say is I'm not denying the RPN style is better for many definitions of better but one of those benefits is not "The beauty of the denotational style is that the flow of data is so clear"
> 
> It's not clear at all. Rather, after you've spent time parsing it in your mind you can deduce a bunch of things you can't with the top style. But "clear"? Not even a little

Again, confusing the semantics and the syntax. I'm arguing for the semantics, and I thought showing the diagram would make this clear, but I guess not.

> Another benefit claims to be "Equational reasoning. In denotational programming, the equal sign (=) means what it does in a mathematics textbook"
> 
> Being like a math textbooks is not better except for mathematicians. Most people find math equations cryptic and hard to parse.

TODO Yes, this is the "natural-ness" argument. I am over it. I want "good tools" that have modularity, composibility, easy to reason about without having to read all the code, and I don't care as much if people need to grow and expand their mind to take advantage of the better tool. It's a one time, amortized cost. Also we can eventually lower it with visual and other abstraction-y helper structures. Paul Chiusano convinced me of this switch. Naturalness is a fool's errand. Pro-tools require investment and that's ok. As long as the investment is for some good purpose. (It's also great to have people learn to think mathmatically in a way that motivates them.)

> The first GPU area where you made functions to draw moire patterns and circle also set off alarm bells. Shadertoy is a famous site which I guess you could call DCTP for fragment shaders. But, they show how poor this style works for real world problems. Compare any shadertoy shader that draws a city or a forest to an actual game that draws a city or a forest. The shadertoy shader will run at less than 1fps fullscreen. The game will run at 60fps on the same computer and if it's it a good game will look significantly better.

I guess my performance section didn't come through. "I guess you could call DCTP" says it all. Clearly I didn't explain DCTP well enough.

> I know your point was demonstrate something else, just pointing out it was raising concerns with it's direction and is related to a recent thread I started which is that FRP/DCTP seems to fail at perf at scale without just as much extra engineering as non FRP/DCTP.

"Abstractions are always leaky"

> I got lost at the first counter example. I know what `function*` means and `yield` but it was not remotely clear how yielding a button, followed by the next yield (no clue what it's doing even ignoring liftnow and sample), and then it yields a span. Em, okay, a function that's yielding 3 completely unrelated types? Yea, completely lost.

Turbine must go!!!

> After that it seemed to meander with a bunch of claims with no real connection. I kind of got lost

Hahahahaha

> >  I would describe how I want my HTML to look like for any value of state, and then React would figure out what it needs to do (virtual-dom-diffing) to mutate the DOM to look the way I want it to (JQuery-esque mutations). I no longer have to worry about manually, imperatively keeping the state and the DOM in sync. React does it for me
>
> As pointed out above this is not my experience. It might be the goal but the overhead of managing all those hidden objects ends up killing perf on any non-trivial project and so the abstraction leaks as you have to add more and more ways to prevent react from shuffling so many DOM objects around.
>
> I blame that on the DOM, not on React, but I feel like it's kind of a truism that idealism often fails against reality.
>
> Maybe a good example would actually be a spreadsheet in react with a toolbar showing various formatting options. The toolbar needs to reflect the format of the currently selected cell, possibly multiple cells. Updating any individual cell or cell format, the naive solution would have react generate some intermediate format (virtual dom) of 30 or 40 toolbar settings and then 390 cells (just checked the default Google Spreadsheet on my laptop).  It would then diff all 420 objects only to up the properties of 1 cell.
> 
> The amount of work required to make it just deal with an individual cell and ignore everything else so you get better perf I think is still unfortunately a  important problem with React style FRP

"Abstractions are always leaky." He clearly missed that with mathematical programming, we could optimize away those issues... I guess I can see how it seems like "magical thinking" to people used to dealing with leaky abstractions in real life...

### Duncan

> - :heart: the introduction -  it's easy and fun read, very human, discusses people, the process of learning and etymology. I would enjoy an article just on etymology!

Well that's nice to hear. I was fearing to get the opposite reaction: "cut down on the intro."

> - code examples were tough going: too much effort to understand the point being made. I only have stamina for one or two in an article before I glaze and skip them unless they are really easy to grok.

Hopefully removing Turbine would help with this.

> - trig triggers mathematical allergies - can they be even simpler e.g. just linear movement?

TODO yeah, I probably need to slow down for non-math people here.

> side-by-side compare/contrast to clarify the argument would really help
> - I haven't left the article understanding quite how my react-ish FRP conflicts with Conal's FRP

TODO wow, so the article totally failed! I agree side-by-side may help.

> - Continuous time seems easy/obvious for continuous trig functions. Imperative code would likely use time arguments too. I don't know how it applies to stateful iterative things e.g. game of life or practical animation concerns like "how much work can I fit in this frame to achieve 60fps"?

TODO this is reasonable. If this article is for React people, doing a canvas example may not be the right move...
 
> The argument I take away is that FRP is
i) easier to optimise
ii) nice because its a tree of mathematical expressions

> For me, these are not the path to "saving programming", they are are in fact curses holding it back. They sacrifice human concerns for making the compiler's life easy and mathematical purity respectively. Like @Will, RPN came to my mind - it's cool to calculator geeks but a total UX fail for normies.
> 
> IMHO there is nothing more user hostile and disenfranchising than formal mathematics. If anything, language design has more to learn from recipe sites than algebra e.g. simple lists of ingredients and equipment as well as the process instructions, photos of intermediate results, videos of the whole process, prediction of time taken, comment rolls for users to share feedback and improvements. They prioritize sharing understanding whereas algebra feels like compression/encryption.
> 
> Can the argument be made in terms of human concerns not mathematical ones? e.g. can you disprove the claim "We naturally talk and think imperatively, therefore imperative style is the easiest way for us to instruct a computer to perform a task."?

The naturalness argument, well said

> They sacrifice human concerns for making the compiler's life easy and mathematical purity respectively. Like @Will, RPN came to my mind - it's cool to calculator geeks but a total UX fail for normies.... IMHO there is nothing more user hostile and disenfranchising than formal mathematics. If anything, language design has more to learn from recipe sites than algebra ... They prioritize sharing understanding whereas algebra feels like compression/encryption.

This is also well said:

> Can the argument be made in terms of human concerns not mathematical ones? e.g. can you disprove the claim "We naturally talk and think imperatively, therefore imperative style is the easiest way for us to instruct a computer to perform a task."?

Again, I don't care how we naturally do things, so I won't try to disprove that. 

TODO But I do agree that I don't show the benefits in terms of human factors - well said! Even modularity is not really a human factor! Being able to read a codebase without having to worry about side-effects is a good point. One way to convince people would be to put React/Redux vs DCTP for a large app and they can see how it takes less time to understand the DCTP one... But that'll only really work once I have the visualizations done...

### William Taysom

> It's a start, the beginnings of an essay I'd really like to share.  To add to others' good feedback, I'll reiterate that the DCTP body text doesn't match up with the introduction.  I expected to see React-inspired frameworks fall down in a way that DCTP does not.
> 
> The Denotational bullets 1,2,3 come to a theme of untangling accidental dependencies of imperative state transitions.  Consider that every operator in an imperative program is a function from the world state to the world state where it's a bit hard to say how much of the world is being examined or updated by each operator.  (Though scope and encapsulation are about imposing limits.)
> 
> Besides that, you do a fine job of pointing out that Denotational is treeish whereas control flow is linear.  (Though control flow does often have a subtask tree, but the subtasks either ordered or quickly become a concurrent tangle.)

Huh, I guess a lot of the points others didn't seem to get, got across for William.

> Continuity is a hard sell.  The story of SVG rasterization is a good start.  (Do we yet have a decent SVG editor yet?  There are too few of us who cling to the mosaic effect of pixel art – long live Deluxe Paint.)  Animation effects are good too because you want them to start and end on time with interpolation in the middle.  The Behaviors/Events division has always rubbed me the wrong way.  (Similar with continuous and discrete probability distributions.)
> 
> Moreover, "infinity of points" has become outright painful.  (I absolutely forgive it since most people talk this way, but it is *wrong* all the same.)  Continuity actually gives you the exact opposite of many points.  A circle *is* a point together with a radius that's a full description.  From those parameters you can construct or sample many points related to the circle, but those are more qualities of the space, of the "mathematical functions" available than of the circle by itself.  We don't "store" infinitely many points; we imply them!

TODO Ah, I see the issue. I said, "If you’re not used to dealing with the infinite every day, you may wonder how we can store an infinity of points." I thought it would become clear I didn't literally mean store when below I show how we "describe" an infinity by just returning a constant function. 

### Ivan Rese

> There are a lot of great points here, especially from Will and William. I made a few attempts to write up my thoughts, but they never converged on anything as helpful — I just kept going off the deep end ranting about sampling (which.. again, Will and William nailed).
> 
> Best advice I can give is.. pay close attention to the fact that Conal's FRP was created to tell people how to make animations. Conal's FRP basically says, "Use sampling of continuous functions, rather than sprite sequences, or code that assumes a fixed timestep — and write code in a compositional style so that you can build bigger animations by combining smaller animations." The nice dovetailing of those two ideas is what makes FRP great _for coding computer-generated animations._ If you want to stretch the definition of FRP to cover other problem domains (eg: GUIs), it's not worth spending a lot of time covering the motivating examples for the original FRP (continuous time and space), because that's just a history lesson. I'd suggest distilling the references to time and space down to a single sentence, or a paragraph at most, or make that stuff a separate post about the history of FRP as an addendum to your post about FRP for GUIs. Rather, figure out what it is about FRP that works so well for GUIs you can capture the gist of it in a sentence, the equivalent of, "Use sampling of continuous functions, rather than sprite sequences, or code that assumes a fixed timestep — and [...]"

TODO interesting point... I fear this will only work for people like Ivan who already get the Fran vision...

> As an aside, it's worth noting that sprite sequences remain an _extremely_ popular form of animation in 2D games (and elsewhere). There are games that attempt to do generative animation but preserve the look of sprite animation, or a hybrid (eg: http://joarportfolio.com/rainWorld.html), but they're the exception and the results have never been fantastic. Many games even write their physics assuming a fixed pixel-size, rather than going resolution independent. There are strong motivations for taking this approach, beyond just "old games were like that so it's nostalgic" or "writing continuous time/space stuff is hard". So what we see in games is a world where both approaches — continuous and discrete — coexist, both for time and space.

TODO I'm not sure what to do with this comment... I was thinking about how movies are technically just 30fps and thus discrete but come across as continuous. But of course we can't model movies as continuous functions because we wouldn't know how to approximate in between frames... Is that related? Sometimes we want discrete things. That doesn't seem a problem to me. Just that when we are modeling continuous things, we shouldn't shirk from it.

### Nick Smith

https://via.hypothes.is/https://futureofcoding.org/drafts/dctp.html#annotations:query:

> > where I was surprised to find that it needed little improving: it was gotten right from the start.

> to me this comes across as a little partisan, or "holier than thou"

Yeah, the tone was for people who wanted to learn / agree with me.

> > I wanted to show these pompous pricks that their precious old FRP was worse than my modern FRP. (Maybe you feel the same way towards me, dear reader? 😜)

> I think this language is far too aggressive and is likely to turn people off right away. Even if they were to keep reading, they'd probably turn combative for the rest of the article, which is not a mindset amenable to persuasion.

Yep, agreed that this article wouldn't pursuade the skeptical at all.

> > no there there

> typo

TODO even though [it's a thing](https://en.wiktionary.org/wiki/there_is_no_there_there), I probably should use a different, more well known phrase

> > I use this perspective to argue against the Elm/Redux architecture and for DCTP.

> It's not clear to me how/where Elm fails to be denotational. A clear technical description of the gap would be really helpful.

Yeah, as said above, I can definitely include insights from my last paper here.

> > const count_ = yield liftNow( sample( scan( (n, m) => 1 + m, 1, switchStream( output.map(l => combine(...l.map((o, i) => o.click.mapTo(i + 1)))) ).filter(x => (x % 2 === 1)) ) ) );

> This code just seems like it could be much more simple if described using a discrete Model-View-Update architecture (TEA). The logic here is dead simple, but fiddling around with the streams and cycles arguably adds incidental complexity.

Yeah, doing it in JS does make it seem more complex but that's only because JS is different and inhospitable.

> > While I am in love with this paradigm, it hurts my head to mentally grapple with such unwieldy types

> Seems like you agree…

Hahaha

> > So, have you caught the denotational disease? I hope so!

> I'm afraid I haven't, and it's not because if the quality of your explanations. I just really don't see how this is better than the Elm architecture. Dealing with streams and continuous time just adds a lot of cognitive overhead that simply doesn't exist in TEA. Yes, with TEA you have to look across model, view, and update functions to see the whole data flow, but your attempts to visualise DCTP could easily be put to TEA for the same benefit.

Yeah, this essay isn't going to work on skeptics...

> > non-solution

> Non-solution to what? Your tone is quite dismissive. While monadic IO may not be ideal, it's certainly been put to a lot of good use in production software.
> I don't like monadic IO either, but it's hard to convince people of anything when you shoot down their beliefs too aggressively.

Ditto. This is for people who already dislike monads...

> > “move I/O entirely out of our programming model into the implementation of a denotationally simple model for whole systems.”  

> You rely on Conal's beliefs, arguments, and utterings quite heavily. I can't help but consider that your belief in the usefulness of DCTP is thus an offshoot of Conal's (convincing) stories, rather than a conclusion you have truly reached on your own through independent critical thought. I think it's crucial to keep asking: what if Conal just hasn't found the answer here? What if DCTP can't find widespread utility? Maybe it can, but breakthroughs like this are really rare, and I've failed to believe this one myself despite many attempts.

Ouch!

### Todo

* https://www.shadertoy.com/
* http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf
* JE future directions
* re-read comments and finish with new ones
  * salon de refuge reviewers
  * Mariano Guerra
* https://hillelwayne.com/post/persuasive-examples/
* https://youtu.be/aXVUoT_objA?t=1378
* Re-read/re-watch "Denotational design with type class morphisms" & read "The simple essence of automatic differentiation"