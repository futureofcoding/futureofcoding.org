---
title: Principles
---

# Principles

The goal of this project is to "make programming a medium for creative expression."

The vision is to create a "Squarespace for apps", or "a tool as powerful as JavaScript and as easy to use as Facebook", or "a tool as easy to use as Scratch but with a really high ceiling."

The following principles are key to accomplishing this goal:

## Comprehensible

We need more than just access to an open source repository of files and folders. It currently takes hours to get familiar enough with a new codebase even to make a simple change. The organization of code needs to lend itself to comprehensiblilty.

The CycleJS devtools dataflow diagram does a good job of making a codebase quickly comprehensible:

<video preload="none" autoplay loop poster="https://user-images.githubusercontent.com/2288939/32678297-cdd9b3ac-c62f-11e7-8534-861163725b04.png" src="./media/cycle-js-devtools-diagram.mp4" type="video/mp4" style="width:50%"></video>

## Liberal

As [r0ml says](https://lwn.net/Articles/712376/), the legal right to fork a codebase is not enough. What would be the value in having all of Facebook's code up on Github? It wouldn't allow us to modify the Facebook platform -- we'd only be able to start a competing platform somewhere else.

We need a programming platform that makes it easy for end-users to modify apps in arbitrarily complex ways *as they are running.*

Imagine system where you can select a piece of text in a running app and change it's properties, just like how you can with Inspect Element:

![inspect3](https://user-images.githubusercontent.com/2288939/32678093-f9ccd9fe-c62e-11e7-9986-3f9f5bb5e502.gif)

When I show this to my students, they immediately want to know:

1. Does this change for everyone?
2. Is it saved for me?

Currently the answer to both questions is no, but we can imagine a system where would could answer with a tentative yes to the second question and an even more tentative yes to the first.

Together, comprehensibile and liberal software will enable software to be more decentralized and cheaper because it will drastically increase the number of people who can modify applications.

## Powerful ways of thinking

There are powerful ways of thinking that can be embedded within programming, such as:

* rapid iteration - immediately seeing how your changes affect the output
* anthropormphization - imagining yourself inside the algorithm
* top-down design - breaking a big task into smaller sub-problems
* composibility - fitting pieces together
* abstracting - generalizing code to work in different contexts
* modeling - understand how state changes over time
* simplicity - build complex systems out of understandble parts

In [Making JavaScript Learnable](https://medium.com/@stevekrouse/woof-d9adf2110fc6), I constrast how ProccessingJS and WoofJS enable thinking:

![screenshot 2017-11-10 at 4 19 50 pm](https://user-images.githubusercontent.com/2288939/32679070-08b75ba2-c633-11e7-8a15-e6c2711265e2.png)

## Intuitive

While "easy as Facebook" mostly covers it, I want to make clear that it needs to be "learnable" in the Seymour Papert/[Learnable Programming](worrydream.com/LearnableProgramming/) sense.

This means that you don't have to take a class or watch a video to get started. You learn by doing, *learn by building*. As 

Scratch is a perfect example of such an interface, both for its lack of syntax and for the way it [represents types as shapes](https://medium.com/@stevekrouse/types-are-shapes-d6af1e83192f).

## No Ceiling

While "as powerful as JavaScript" mostly covers it, I want to make clear that this system is not just for kids or just to learn how to code. As Bret says, "these are not training wheels." One of the biggest challenges of this project will be convincing people that this is "real coding", despite it not looking like what they imagine real coding to look like. 

Emmanuel of Bubble.is says visual programming will be a slow revolution. Until you can point to something people already know about and say "that was built with this", this is not "real coding."


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>