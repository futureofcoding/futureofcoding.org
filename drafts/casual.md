---
title: Casual Programming
---

# Casual Programming

* TOC
{: toc }

What good is open-source for if you can't understand the code? If Facebook became 100% open-source tomorrow, my grandparents wouldn't be eagerly logging into Github to check it out. They wouldn't be able to understand a line.

Open-source is a value-add only when users can modify it. That's why open-source works best with products that programmers use: operating systems, version control, programming langauges, etc.

However, even though I'm a programmer, I don't often contribute to others' open-source projects. It's not for lack of desire: I often run into bugs or come up with ideas for improving an open-source project.

Armed with my fustration about a bug or excitement about a new feature idea (TODO maybe give a specific idea/project), I head over to the project's Github page:

TODO picture

Hmmm... Ok, let's start by reading the readme:

TODO picture

Hmmm... Ok, but where is the code responsible for the small part of the application I want to change?

I guess I'll click around in the folders and see what's there.... TODO

Ok, I'll admit it: I have absolutely no idea how this project comes together.  

* What's the "entry point" of the application? 
* What's the data model? 
* What file corresponds to the UI component I'm looking to change? I can point to it in the app, but where is it in the code?

And it's somewhere between this point and failing to get the development environment set up that I admit defeat. 

So I ask again: what's the point of open-source if most users -- even programmers -- aren't able to make changes in a reasonable amount of time? The only people who are able to make non-superficial changes to an open-source application are its dedicated core developers who spend hundreds of hours learning the system. But just like a closed-source company where the developers are not paid or paid poorly.

Imagine a world where open-source didn't merely mean that the code was open, but also comprehensible in a reasonable amount of time, so that people could **casually** improve the software their use. This is the ultimate promise of open source: a world of always improving, infinitely customizable software.

The problem is our programming languages. They aren't designed for casual comprehensibility.

## Reading fiction

Reading programming is like reading fiction. In the beginning, you're introduced to characters: Joe is a plumber. He's 42. He lives in Burbank. He has two kids. 

```javascript
var joe = {
  occupation: 'plumber',
  age: 42,
  city: 'burbank'
  numberOfChildren: 2
}
```

If you want to know what happens to Joe, you must read on: he loses his job. He gets a year older. He moves to a new town. He has another kid. 

```javascript
joe.occupation = null
joe.age++
joe.city = 'san diego'
joe.numberOfChildren++
```
If you want to know what happens to Joe, you must read every page of the novel, in order, until the final page. Spoiler alert: he dies.

```javascript
joe.timeOfDeath = 1529593513
```

In fiction, this is no problem. I'm there to read the whole book. But that's not why I've come to software. I'm looking to understand the smallest amount I need to, making some changes, and getting outta there.

## Using an encyclopedia

A better model casually comprehensibile software is the encyclopedia. You don't *read* encyclopedias, you *use* them. You just flip to the J-section (or use Google) to look up our boy Joe and get all the info once: Joe was born on May 25, 1947. He was a plumber from 1980-2015, he had three kids, lived in Burbank and then San Diego, and died on June 21st, 2018.

I don't mean to say that encyclopedias are better than novels because they are summarized and shorter. I constructed my pseudo-encyclopedia-entry above to have all the same information as the novel version, but in a *declarative* form as opposed to a *narrative* (or *imperitive*) form.

Joe's encyclopedia entry is *definitional*. In order to fully understand our boy Joe, you may have to look up "plumber", "Burbank", "San Diego", his kids, etc, but you could copy-and-paste those entries (and the ones they refer to) into Joe's and acheive a self-contained description of Joe. In other words, the only things you need to understand *all* of Joe is his entry and the entries explicitly referenced in his entry (and those explicitly referenced in those entries). The Joe's encyclopedic tree is all you need and you can categorically rule out all entries not in the tree.

## Referential transparency

Let's say you have a function `foo()` that you want to understand completely. 

First, you go to gather all the code that describes `foo()`'s behavoir. 

You see that `foo()`'s definition refers to another function `bar()`. You'd like to apply the copy-and-paste trick performed on Joe's encyclopedia entry above to begin generating a self-contained definitional tree of `foo()`, but it's not that simple.

In programming, some functions are *referentially transparent*, which means we can do the copy-and-paste trick, and others' *referentially opaue*, which means that the copy and paste trick would give us an incomplete definition of `foo()`. The tree wouldn't be self-contained. If you wanted to *fully* understand `foo()` but its definition contained referentially opaue terms, you'd be stuck reading the entire application like a novel, because you wouldn't be able to categorically rule out any parts as irrelevant.

If we want programming to be casually editable, it needs to be casually comprehensibile. 

If we want casual comprehensibility, we need a way to categorically rule out parts of the code that are irrelevant to our current purposes, and for that we need referential transparency.

If we want referential transparency, we need to vastly restrict our programming model to only pure functions without side-effects, such as in a language like Haskell.

## Life without side-effects

I know what you're thinking: "Wait a minute. I was with you on the casual editing and comprehension bits, but restricting my programming model to Haskell is a big jump. I don't want to read another monad tutorial. Maybe casual programming isn't worth it after all if that's the cost."

Take a deep breath. Hear me out. I understand why you're worried:

Programming is ultimately about building software that *affects the world*. Ultimately our software is going to have to *do things*: move bits, open files and sockets, send HTTP requests. How can pure functions represent all that?

The accepted answer to this question is: they can't. Haskell is split into two worlds: the world of pure expressions and the world of the `IO ()` monad. Life isn't worth living without getting and putting characters to the terminal:

```
getChar :: IO Char
putChar :: Char -> IO ()
```

Just kidding. It's 2018. Who's writing a terminal apps? Luckily creating web apps has very little to do with getting and putting characters on the screen on-by-one. 

## Functional Reactive Programming

Funnily enough, the popular way to create web apps in 2018 is based on the work of early Haskellers Conal Elliott and Paul Hudak. They came up with a way of declaratively describing interactive animations *with only pure functions, no monads required*. ReactJS, VueJS, CycleJS, etc are based on this "reactive" paradigm, where you declaratively describe what's on the page, as opposed to imperitively adding and removing characters to the screen one-by-one. Of course, there's code somewhere in your computer that's adding and removing characters from the screen, but we don't have to worry about that - it's below our level of abstraction. 

TODO how does FRP accomplish this?

This doesn't just apply to user interfaces. Conal Elliott argues in [Can functional programming be liberated from the von Neumann paradigm?](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm) that we can perform that same trick for any IO-based software interface. 


## Are we there yet?

Let's recap. 

* We want casual programming, 
* so we need casual comprehensibility, 
* which we only get with referntial transparency, 
* which we can achieve with functional reactive programming...

And don't we already have FRP-based web frameworks, like ReactJS? Have we arrived?

No. In order to explain why, we need to dive deeper into how FRP is currently done in modern web apps.

## Redux and The Elm Architecture

ReactJS isn't the whole story. You can think of React as a place where you can define **how you want things to look on the screen** in terms of **the current state of data**. If you give React some data, it'll give you the screen you described. If you give React some new data, it'll seamlessly update your screen to make your description. But React doesn't offer out-of-the-box support for manging how your data changes.

That's where Redux comes it. It's a model for describing how data changes over time, initially based on The Elm Architecture. It has four parts:

1. Model: the type of your state and its initial values.
2. Actions: the categories of events that could affect your model.
3. Reducer: how each action steps your model forward. The reducer is of type (s,a) -> s. It’s a function of two inputs 1) the previous state, and 2) an action, and it produces a new state. 
4. View: a function from your model to HTML. This is the ReactJS part of your app. The View also specifies when elements emit actions.

Put another way, the model produces a view, which emits actions as the user interacts with the view, which your reducer uses to update the model. It’s shaped like: model -> view -> actions -> reducer -> ...loops back around to the model TODO as a photo

The Elm Architecture gives us explicit clarity on our state’s initial values and on how actions update state. Yet any action can affect any piece of state. In Elm ToDoMVC, the Add action triggers an update of three different pieces of state:  

![image](https://user-images.githubusercontent.com/2288939/41737441-4f2d0594-755d-11e8-9c89-d69e71ba426f.png)

And any view element can emit any action. In Elm ToDoMVC, the `viewInput`’s `onInput` and `onEnter` events emit `UpdateField` and `Add` actions, respectively:

![image](https://user-images.githubusercontent.com/2288939/41737471-65f5feca-755d-11e8-9f9a-1a06d4001e3f.png)

So if we’re looking to understand a piece of state, we’re not much better off than with an entirely imperative framework: we have to read the whole application.

## Back to the future

< insert section 2 of [https://docs.google.com/document/d/1suHgeUvls6MZLHholN6r4KK0G5VaYArjKnALvmmJQhU/edit?ts=5b2be6e1#](https://docs.google.com/document/d/1suHgeUvls6MZLHholN6r4KK0G5VaYArjKnALvmmJQhU/edit?ts=5b2be6e1#) here >






