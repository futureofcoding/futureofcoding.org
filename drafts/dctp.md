---
title: The Misunderstood Roots of FRP Will Save Programming
---

<h1>The Misunderstood Roots of FRP Will Save Programming</h1>

* TOC
{:toc}

For many years, I've been searching for the "perfect" library/framework/language/paradigm for programming user interfaces. I wanted a tool that non-programmers could use to program arbitrarily complex user interfaces, such as [TodoMVC](http://todomvc.com). 

Like many others, I fell in love with FRP with the rise of ReactJS and spent a few years searching for the perfect reactive model. Eventually, I found my way back to the original work on FRP by Conal Elliott, where I was surprised to find that it needed little improving: it was gotten right from the start. 

However, Conal's FRP has a reputation for being difficult to understand. It took me almost a year to make sense of it. This essay attempts to make Conal's vision more understandable, and also show how this perspective could be the foundation for a new era of programming, not just with user interfaces, but for all programming: multi-node computing, storage, machine learning, etc... I promise I won't mention Category Theory even once.

## The Curse of Original FRP

I fell in love with ReactJS in late 2014. The view is a pure function of state. It was so obviously *right*.

But of course it wasn't perfect. For one, it wasn't clear how that state changed over time. Redux seemed to make sense -- and hot reloading and time travel debugging are awesome -- but over time I began to sense that React didn't solve all my problems. I eagerly slurped up each new React-inspired frameworks, such as VueJS and CycleJS, to see if they could finally be the "full solution" to interface development, but always something was missing.

[Paul Chiusano](https://pchiusano.github.io/) suggested I read [Conal Elliott](http://conal.net). "You know," he said, "Conal is the original guy behind FRP. React isn't even 'real' FRP. You should go back and read him."

I didn't like to hear this. I loved React and the FRP I knew. I was reluctant to read [a stodgy paper from the 90s](http://conal.net/papers/icfp97/). But I trusted and respected Paul so I gave it a go. My eyes immediately glazed over. I wasn't able to make sense of almost any part of it, so I gave up. 

However, I couldn't escape HN comments alluding to "[real](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=real%20frp)" or "[original](https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=comment&query=original%20frp)" FRP. They were annoying enough to send me back to Conal for another try. I wanted to show these pompous pricks that their precious old FRP was *worse* than my modern FRP. (Maybe you feel the same way towards me, dear reader? 😜) 

Yet I couldn't make heads or tail of Conal, even in [video](https://www.youtube.com/watch?v=j3Q32brCUAI) [form](https://www.youtube.com/watch?v=teRC_Lf61Gw). I gave up again. Over the course of a year, I tried on-and-off to read Conal's papers, but they never made sense. I decided to give it up for nonsense. There was no there there.

Then someone (I forget who - if this is you, THANK YOU!!!) suggested I listen to [Conal's interview on the Haskellcast podcast](http://www.haskellcast.com/episode/009-conal-elliott-on-frp-and-denotational-design). Things started to click. I went back to his papers one last time.... 💥. It hit me. It all fell into place. I saw the light. I saw how the beauty of React could be joined with a solution to state management without the annoying parts of Redux. I saw how we could program user interfaces without mutable variables anywhere, just `const` statements as far as the eye could see... 

Now I am cursed to be one of those condescending assholes, a Conal zombie, doomed to roam the land, pleading other to "go back and read Conal", while knowing full well how hard it will be for them to see the light. This essay is how I hope to give you my disease.

### DCTP

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

The beauty of the denotational style is that the dataflow is so clear, as you can see when we convert the above Python code to a dataflow diagram:

![](https://user-images.githubusercontent.com/2288939/51426743-e7fc2400-1be6-11e9-9aa6-1c45d3c8f83e.png) 

This will help us easily answer questions that are all-but-buried in the imperative description, such as: 

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
2. **Definitional reasoning**. We can *fully* understand an expression by its subexpressions, and their subexpressions, recursively. There are no spooky action-at-a-distance side-effects that can manipulate things from afar. In this way, we don't have to read the entire codebase to understand all the places our state could be manipulated. I use this perspective to [argue against the Elm/Redux architecture and for DCTP in this paper](/papers/comprehensible-frp).
3. **Modularity & Composability**. "Modularity comes from providing information while making as few restrictive assumptions as possible about how that information can be used." For example, "laziness lets us build infinite data structures, thus not assuming what finite subset any particular usage will access." The more our code is abstract, general, and unspecific, mathematical, and free from operational concerns, the easier it is to use it in other contexts. John Hughes's must-read [Why Functional Programming Matters](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.html) beautifully demonstrates how the denotative style, particularly laziness and higher-order functions, enable modularity.

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

Let's get a bit more mathematical (or denotational)[1](#1) with our definitions. A graphic is something that relates x- and y- coordinates to colors. You give it an x-y pair; it gives you a color. 

Here's the difference between bitmaps and SVGs: what kind of numbers make up the x-y pairs? 

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
 
**Note:** If you'd like to play with the simple example _code_ used in this essay, [it all lives here](https://jsbin.com/pelamug/edit?js,output), running in a small 100x100 pixel window on the CPU. However, the example _outputs_ were constructed to be much bigger with uglier GPU code which is linked next to each output.

**Note 2:** I actually replaced some of the outputs with SVGs because all the GPU code freaked out on mobile. You can see that code by inspecting the HTML of this page.

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

In most programming, time is discrete. The ticks of time can be counted one-by-one, and there is no time in between adjacent points. For example, JavaScript's `requestAnimationFrame` has discrete time ticking along at about 60 times per second.

Now let's return to the original question that inspired FRP: 

> What would it be like to program in continuous time?

#### What is an animation?

An animation is a graphic that changes over time. That is, it takes an `x` and `y` as before, but now it also inputs a `t` for time, and outputs a Color as before: `(x, y, t) -> Color`. But again, what kinds of numbers are `x`, `y` and `t`? If they are integers, we're in discrete space and time. Let's make them all reals, and enter continuous time.

**Let's use continuous time to have our green circle drift off the screen to the right.** (You may have to refresh the page to see him go.) 

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

const example 5 = circle(50*Math.cos(10*t), 50*Math.sin(-10*t), 50, green)(x, y)
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

The above animation code was purposefully simplistic: we used pure, mathematical function. This works fine on the canvas, especially with the help of the GPU. However, functions from `x` and `y` to `Color` is likely not the way we want to build HTML-based user interfaces. Instead we will use the [Turbine](https://github.com/funkia/turbine) framework, built on top of the [Hareactive](https://github.com/funkia/hareactive) DCTP  library.

**Let's start with a simple counter button**:

<button onclick="ex1.innerText -= -1">Count!</button><span id="ex1" >0</span>

```javascript
const counter = function*() {
  // put a button on the screen
  // `clickEvent` is the stream of all click events on that button
  const {click: clickEvent} = yield button("Count!")
  
  // calculate the number of clicks on the button
  // `scan` is like fold or reduce, but over streams
  // `liftNow` and `sample` are outside the scope of this essay
  const clicks = yield liftNow(sample(scan((n, m) => m + 1, 0, clickEvent))); 
  
  // put the clicks count on the screen
  yield span(clicks)
};
```
[![Edit Turbine Counter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rym2pwy3lp?module=%2Fsrc%2Findex.js)

### Cyclical Flows

**What if we want the button to count inside itself?**

<button onclick="this.innerText -= -1">0</button>

```javascript
const counter = loop(
  // create a cycle with `loop`
  // the `clicks` Behavior (defined in the function below) is passed in
  ({ clicks }) => function*() {
    
    // use the `clicks` Behavior BEFORE IT's DEFINED
    const { click: clickEvent } = yield button(clicks);

    // define `clicks_`
    const clicks_ = yield liftNow(sample(scan((n, m) => m + 1, 0, clickEvent)));

    // set `clicks` to `clicks_` to tie the recursive knot
    return { clicks: clicks_ };
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

```
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
      // it's returned after putting a variable number of buttons on the screen (`count`)
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

While other monads do technically denote mathematical objects, the IO monad does not. It is imperative programming imported into denotational programming. In [Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm) Conal Elliott rants:

> “monadic IO” is a way to generate imperative computations (not just I/O) without having to say anything at all about the semantic content of those computations. Rather than retooling our mental habits completely away from the imperative model of computation, monadic IO is a way to hang onto these old mental habits, and use them in a hybrid functional/imperative programming style, in which the imperative doesn’t contaminate the functional, semantically.

This state of affairs is particularly depressing because the Haskell community, purported to be the bastion of denotative programming, seems to be content with the non-solution of monads:

> In a sense, I see us as in a worse position than before. Since the adoption of monadic IO, it’s been less immediately apparent that we’re still enslaved, so there’s been much less activity in searching for the promised land that the prophet JB [John Backus] foretold. Our current home is not painful enough to goad us onward, as were continuation-based I/O and stream-based I/O. (See [A History of Haskell](https://www.microsoft.com/en-us/research/publication/a-history-of-haskell-being-lazy-with-class/?from=http%3A%2F%2Fresearch.microsoft.com%2F~simonpj%2Fpapers%2Fhistory-of-haskell%2F), section 7.1.) Nor does it fully liberate us.

Let's liberate ourselves from the IO Monad by simply refusing to use it. We are free!!!!!! 

### "A denotationally simple model for whole systems"

But wait... what about all the things we can't do without it? What about open and closing files and sockets, reading and writing from the console and the database? How do we do all the things we need to as self-respecting programmers?! 

> The imperative interfaces in today OSs and data-bases are troubling at first, and indeed I often hear people (even on #haskell) using these examples as demonstration that the imperative programming model is inescapable.  
>  
> -[Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm)

So if the IO monad isn't the answer, how are we do to all those OS and database operations we need to?

It's a trick question. We don't need to do any of those things.

Stop it with the files and the sockets. Stop it with the reading and writing to the console and the database. Those are imperative things that you can only do imperatively. There's no monadic magic that can save you and make imperative things denotative. The only solution is to "move I/O entirely out of our programming model into the implementation of a denotationally simple model for whole systems."

### ReactJS is JQuery-as-a-Service

Let me explain...

One of the ways I understood ReactJS was as JQuery-as-a-Service. I would describe how I want my HTML to look like for any value of state, and then React would figure out what it needs to do (via virtual-dom-diffing) to mutate the DOM to look the way I want it to (JQuery-esque mutations). I no longer have to worry about manually, imperatively keeping the state and the DOM in sync. React does it for me.

Before ReactJS, if you told me I could make TodoMVC without the imperative DOM API of adding, removing and editing nodes, I'd tell you that you were crazy. But then React did it. Describe your UI as a function and it will do the *imperative mutation stuff under the hood.* 

*That's the trick.* We can't actually get rid of imperative programming, just like we can't get rid of the fact that SVGs eventually need to pixelate to show up on the screen. We can just hide those details below the programmer's level of abstraction.

### HTTP = JQuery

OK, so let's apply this kind of thinking beyond the DOM. What about HTTP requests? How do they fit into the DCTP model?

Did you catch it this time? That's another trick question.

HTTP = JQuery. HTTP requests are too low level. Just like JQuery manually queried and mutated the DOM, HTTP requests manually query and mutate server state.

The same is true of all imperative APIs, including databases, files, sockets, etc. It's not that we have to abandon these technologies entirely. Their place is as the _implementation_ of denotative programming systems. The computer's (or compiler's) job should making HTTP requests, reading and writing to files and databases, on your behalf, just like React mutates the DOM on your behalf. 

We need to forget our old notions of a "frontend" and "backend". We need to go higher level and build a denotational model for "whole systems." 

### Multi-computer DCTP

How? Well, this is where I get hand-wavy. Multi-computer DCTP is mostly speculative at this point, but here's a sketch.

Let's extend our simple counter button from above to a multi-computer counter button. That is, our counter button will live at a URL, and anyone who loads that URL can contribute to the total clicks count by clicking on the button.

Notice how nowhere in my description of the counter is any mention of frontends vs backends, databases, or HTTP requests. The essential complexity of this problem has nothing to do with such things, and neither should our code for this problem. Those details would be the compiler or runtime's job.

We could say that the multi-computer-count _is_ the count of "all computer's" click events, for "all time", where "all computers" conveys merging of streams on various computers and "all time" conveys the persistent, running total storage of this number *somewhere*.

One important essential complexity detail to keep in mind is that we cannot abstract away the amount of time it takes for information to travel between computers. I find it helpful to imagine multi-planet counter button, where we are counting along with Elon's colony on Mars, 3 light-minutes away.

My current favorite strategy to encode this reality into our denotational model is through the lens of _perception_. Think about creating this application from the perspective of one computer. What is the multi-computer count from the perspective of this computer?

It's the count of the merging of two Event streams:

1. The local click event stream on the button on this computer
2. The remote click event stream of all other computers click events

There are (at least) two differences between local and remote Events:

1. Remote events contain the "computerId" from which they originated
2. Remote events contain two points in time: a) when they originally occurred and b) the time at which this local computer _percieved_ them (when the data from Mars reached it)

So in order to merge local and remote Events steams, we will probably need to `lift` the local Event stream into a remote one. Then we `merge`. Then we `count`. Now we have a remote `Behavior`, which we can (maybe through some other type munging) put on the screen.

I tried to warn you that was going to be hand-wavy. I hope you read between the lines and got the basic gist.

### Machine learning is not about neural networks

Here's one final example of how the definitional approach could affect another area of programming: machine learning. 

In a recent call with Conal, he criticized the mainstream perspective on ML. For example, the Tensorflow API is all about graph construction, but that's just an implementation detail.

So if it's not about graphs or neural networks, What is machine learning about?

Optimizing functions.

A neural network is one possible optimization technique, but if you expose that API to your users, your locking them into a lower-level abstraction than their problem requires. Conal is currently building a denotational ML API that he thinks will not only be more elegant to program with, but be more performant as well. 

## FAQ and Common Gotchas

### Why program with continuous time?

Of course, for the computer to render animations on the screen, it must at some point convert the continuous time and space to discretized pixels and ticks of time. So what's the point of programming in continuous time if it will eventually be discretized? 

There are a [lot](https://github.com/conal/talk-2014-bayhac-denotational-design#why-continuous-time-matters) of [reasons](http://conal.net/blog/posts/why-program-with-continuous-time).  The most compelling argument for me is for the same reason we use SVGs: resolution independence. We want to be able to transform our programs "in time and space with ease and without propagating and amplifying sampling artifacts." We want to discretize at the last possible moment, and stay as abstract as possible for as long as possible.

### Thinking about DAGs or propagation

A very common misconception with DCTP is confusing it with its implementation details. If you catch yourself thinking of DCTP as a DAG (directed acyclic graph), you still haven't quite gotten it. 

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

If you look at my 100x100 pixel animations running on the CPU, you may write off this paradigm for its impracticality. However, you'd simply be fooled by the "[von Neumann bottleneck]"(https://dl.acm.org/citation.cfm?id=359579). When I switched to the GPU (and SVG), the code ran without a hitch. 

Conal argues that performance criticisms of denotational programming have it exactly wrong. Not just wrong, exactly wrong. One of the main benefits of denotational programming is equational reasoning, which is the key factor that enables speeding up code: the ability to optimize it by replacing some parts with faster parts. 

When your code is abstract and free of imperative, technological, operational concerns, you can compile down much further and easier. Conal brags about compiling his Haskell code down to custom-made circuits for blazing speeds.

## Further resources

* [What's Functional Programming All About?](http://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html)
* [Let's reinvent FRP](http://vindum.io/blog/lets-reinvent-frp/) by Simon Friis Vindum
* Conal answers "What is FRP?" on Stack Overflow [here](https://stackoverflow.com/a/5878525) and [here](https://stackoverflow.com/questions/1028250/what-is-functional-reactive-programming/1030631#1030631)
* [Explicitly Comprehensible Functional Reactive Programming](/papers/comprehensible-frp) by Steve Krouse
* [The Essence and Origins of FRP](https://github.com/conal/talk-2015-essence-and-origins-of-frp)
* [Functional Reactive Animation](http://conal.net/papers/icfp97/) - the original FRP paper by Conal Elliott and Paul Hudak 
* [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) by Andre Staltz
* [Why Functional Programming Matters](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.html) by John Hughes

## Footnotes

<a name="1" href="#1">[1]</a> - The "D" in DCTP stands for "denotational semantics." The original name for denotational semantics was "mathematical semantics". It was pioneered by Chris Strachey and Dana Scott in the early 1970s. It is an approach to model a programming language with mathematical objects. For example, in this essay we model static graphics as a functions from `x` and `y` to `Color` and moving animations from `x`, `y`, and `t` to `Color`. You can learn more about denotational design and semantics from Conal's [video](https://www.youtube.com/watch?v=bmKYiUOEo2A) and [paper](http://conal.net/papers/type-class-morphisms/).


