---
title: Learnable Programming
---

# [Learnable Programming](http://worrydream.com/#!/LearnableProgramming)

_Sept 2012_

* TOC
{:toc}

I love the way he starts this article:

> Here's a trick question: How do we get people to understand programming?

I wholeheartedly agree with "Programming is a way of thinking, not a rote skill." I'm not sure "People understand what they can see." is as immediately obvious to me. I would prefer to simply use visuals "support and encourage powerful ways of thinking." No need to having "seeing" as an axiom.

## Contents 

> A programming system has two parts. The programming "environment" is the part that's installed on the computer. The programming "language" is the part that's installed in the programmer's head.

### Will Wright on games

Given that this article inspired one of the main framings (environment vs language) of this essay, I figured I might as well read it... Some great quotes:

> The types of games we do are simulation based... As a player, a lot of what you’re trying to do is reverse engineer the simulation. You’re trying to solve problems within the system, you’re trying to solve traffic in SimCity, or get somebody in The Sims to get married or whatever. The more accurately you can model that simulation in your head, the better your strategies are going to be going forward. So what we’re trying to as designers is build up these mental models in the player. The computer is just an incremental step, an intermediate model to the model in the player’s head. The player has to be able to bootstrap themselves into understanding that model. You’ve got this elaborate system with thousands of variables, and you can’t just dump it on the user or else they’re totally lost. So we usually try to think in terms of, what’s a simpler metaphor that somebody can approach this with? What’s the simplest mental model that you can walk up to one of these games and start playing it, and at least understand the basics? Now it might be the wrong model, but it still has to bootstrap into your learning process. So for most of our games, there’s some overt metaphor that allows you approach the simulation.

> Like for SimCity, most people see it as kind of a train set. You look at the box and you say "Oh, yeah, it’s like a train set come to life." Or The Sims, "it’s like a doll house come to life." But at the same, when you start playing the game, and the dynamics become more apparent to you, a lot of time there’s an underlying metaphor that’s not so apparent. Like in SimCity, if you really think about playing the game, it’s more like gardening. So you’re kind of tilling the soil, and fertilizing it, and then things pop up and they surprise you, and occasionally you have to go in and weed the garden, and then you maybe think about expanding it, and so on. So the actual process of playing SimCity is really closer to gardening. In either case, your mental model of the simulation is constantly evolving.

> One thing that we found in playing with The Sims is that it’s pretty important that you have a consistent level of abstraction. It doesn’t make sense to have everything highly detailed except one aspect and then have it abstracted. So in fact you want the entire world and the entire representation to be abstracted at almost the same level. At which point it holds together very nicely. It’s kind of hard for you to go into a system and then be filling in the blanks of this one component, while everything else is highly detailed. So in The Sims, even the building is fairly abstracted. You can only put a wall within about a meter. The objects are somewhat abstracted in terms of selection: you don’t have the full selection that you would really have in a furniture store. The granules of interaction in the game are kind of abstracted. So having that consistency, in your head, you fill in the blanks really well. And this is something that kids do quite well of course. You watch kids playing with toys. They’re doing it all the time, very naturally. And even adults are doing that much of the time, with reading books, for example, where there are a lot of blanks to be filled in.

This is a great summary of the goal behind LogicHub:

> So you’ve got these people out there with all these different models.. A lot of people have talked to me over the years about community modeling. But not so much as a modeling tool, but more as a communication tool, using something like SimCity where people get involved in a planning process and get a sense of their community or the environment or whatever. Where the purpose of the model in those cases would be to come to a shared agreement about what the model is.
> 
> We did a project actually several years ago called Sim Health for the Markle Foundation in New York. It was a simulation of the national healthcare system, but underneath the whole thing, the assumptions of the model were exposed. And you could change your assumptions, for example, as to how many nurses it takes to staff a hospital, or how many emergency room visits you would have given certain parameters, etc., etc. The idea was that people could kind of argue over policy but eventually that argument would come down to the assumptions of the model. And this was a tool for them to actually get into the assumptions of the model. When people disagree over what policy we should be following, the disagreement flows out of a disagreement about their model of the world. The idea was that if people could come to a shared understanding or at least agree toward the model of the world, then they would be much more in agreement about the policy we should take.
> 
> CP: So in a way, a system like that could be used to externalize mental models and create a collective model.. it’s not so much like you all have the same mental model, but that you have an externalized model that everyone agrees to abide by.

Wow, video games could be a more effective vector for Seymour Papert powerful ideas than coding:

> At some level I want people to have a deep appreciation for how connected things are at all these different scales, not just through space, but through time. And in doing so I had to build kind of a simple little toy universe and say, here, play with this toy for a while. My expectations when I hand somebody that toy are that they are going to make their own mental model, which isn’t exactly what I’m presenting them with. But whatever it is, their mental model of the world around them, and above them and below them, will expand. Hopefully, probably in some unpredictable way, and for me that’s fine. And I don’t want to stamp the same mental model on every player. I’d rather think of this as a catalyst. You know, it’s a catalytic tool for growing your mental model, and I have no idea which direction it’s going to grow it, but I think just kind of sparking that change is worthwhile unto itself.

Makes me want to do research on Minecraft x Papert. Here are some links TODO:

* https://books.google.com/books?id=MTQlDwAAQBAJ&pg=PA146&lpg=PA146&dq=seymour+papert+minecraft&source=bl&ots=mdQ7lg5sjT&sig=LwxySQd7rcdpm4Qrc9TyNp1ocRw&hl=en&sa=X&ved=0ahUKEwif78qg9YnYAhWJk-AKHTohAIgQ6AEIPDAD#v=onepage&q=seymour%20papert%20minecraft&f=false
* https://medium.com/interactive-designers-cookbook/seymour-papert-would-be-pretty-happy-with-games-today-fa2f257ff313
* https://books.google.com/books?id=TwIyBwAAQBAJ&pg=PA214&lpg=PA214&dq=seymour+papert+minecraft&source=bl&ots=qRY_ALFvFR&sig=mbNe1UYKL21sKzvHwPmXrHn1zTw&hl=en&sa=X&ved=0ahUKEwif78qg9YnYAhWJk-AKHTohAIgQ6AEIZjAO#v=onepage&q=seymour%20papert%20minecraft&f=false
* https://infovore.org/archives/2013/06/23/toca-builders-and-the-spirit-of-seymour-papert/

I'm really getting revved up with the idea of video games, because they align things reasonably well: kids LOVE video games AND convince their parents to pay for them. Minecraft sold to Microsoft for $2.5B.

### Environment / langauge goals

While he starts with the environment, I'd rather start from *the user* who doesn't know how to code.

I believe the core challenge of learning to program is: **the assimilation of models.**

Bret calls this: "identity and metaphor -- _how can I relate the computer's world to my own?_")

In order to be able to make anything, the user needs to have a ever-improving model of how their tools behave. For example, think about about a child assimilates the model of a hammer. It's clear from the way it's shaped from which end to pick it up. Then when you pick it up, you immediatley notice that it's much heavier on one side. And of course you've seen others people use hammers, so the model snaps right into place: swing this near where I want it to make a BAM.

#### Powerful mental models / ideas

Now taking this a step further, we as programming language designers want to embed a model inside a child's head that will enable them to be powerful. We know that different mental models are more powerful than others. For example roman numerals are much less powerful than arabic numerals. We know that [systems thinking is more powerful than linear thinking](http://ncase.me/OVC2016/#uninformed).

Thus we want to help students assimilate *powerful* mental models, what Seymour Papert called "powerful ideas." Bret lists some of these:

> decomposition -- how do I break down my thoughts into mind-sized pieces?
> recomposition -- how do I glue pieces together?

These are the two-sides of the *composability* coin. As we've learned from functional programming, composibility is a very powerful idea. It allows us to do *top-down design*, where one decomposes a problem into its subproblems in such a way that solving the sub-problems automatically solves the solution -- because you've pre-composed the sub-problems properly before solving them.

So now that we know composability is a powerful idea, the question to ask is how do we help a new user assimilate it? In his article, Bret compares LOGO and Hypercard to ProcessingJS to show how limited it is on both of these fronts. However, I would be excited by a more thorough discussion on how to build intuitively for decomposition and recomposition.

Other powerful mental models/ideas include:

* referential transparency (partitioning side-effects) 
* type system

#### Powerful ways of working

Additionally, we know about some powerful ways of working:

* creating by reacting to what's on the screen
* abstracting similar code via variables/functions
* working in small steps
* refactoring code to be more readable, faster, etc
* version control workflow branching
* planning a project, estimating time, github issues, prioritizing

## The features are not the point

> We often think of a programming environment or language in terms of its features -- this one "has code folding", that one "has type inference". This is like thinking about a book in terms of its words -- this book has a "fortuitous", that one has a "munificent". What matters is not individual words, but how the words together convey a message.

Love it!

## Read the vocabulary

> Thought experiment. Imagine if you bought a new microwave, took it out of the box, and found a panel of unlabeled buttons. Imagine if the microwave encouraged you to randomly hit buttons until you figured out what they did.

Great metaphor!

The demo of hover over for documentation inline is so beautiful. Makes me wonder if we could add that to WoofJS... In Woof, the sprites are given named parameters, so that's ok. However, we could probably improve the understanding of control structures if we added side-notes about them. Currently we add those notes inline in comments which is just awkward. It would also be nice if WoofJS had live update so users could see in real time the effect of their changes - it's a bummer we reload the entire page on any change.

## Follow the flow

Ah, this section is criticizing what I just mentioned, the immediate update, in addition to not showing incremental steps.

> People understand things that they can see and touch.

For-loops are the worst. I'd definitely vote to replace them with iterating over an array. Or even a while-loop if neccesary.

Allowing the programmer to scrub through the steps is great. In particular it allows them to see how/why things loop around. This would probably entirely eliminate one of the first questions that almost every Scratch student has of how forever-loops work. This is a big deal. The more of those questions we eliminate, the less need there is of trained teachers, the more the environment can scale.

Of course, I am excited with functional programming ideas, which have a less-intuitive model of flow. Yet it enables higher comprehension and more powerful thinking once you do understand it. I think the Elm time travel debuggers and the CycleJS devtools diagrams point in interesting directions.

### Make flow visible

Really cool section! Love the metaphor to driving directions. Also love the way he abstracts over iterations of a loop. He's totally on point that this could be super helpful when you're curious when the loop goes into an inner-if statement.

### Make time tangible

This is cool too! Giving users another way to slice a program. See it from another angle. 

However, there feels like a slight arbitrary-ness to some of these examples. That is, I wonder if there's a way to build a langauge in which it's easy to build this visualization tools on top of so that people could build and publish these just like they build and publish libraries and frameworks.

### Make time visible

Beautiful! This is allowing us to see the path of an object all at once on the screen. Very reminiscent of the Ladder of Abstraction and also the Elm mario time travel debugger (which was probably inspired by this essay).

### Summary — Follow the flow

> The environment can make flow tangible, by enabling the programmer to explore forward and backward at her own pace.

This is key. Time travel debugger.

> The environment can make flow visible, by visualizing the pattern of execution.

This is also key. CycleJS devtools diagram.

> The environment can represent time at multiple granularities, such as frames or event responses, to enable exploration across these meaningful chunks of execution.

Again, this sounds to me like add-ons that the community could build given a really solid underlying structure. A structure that Conal Elliot would build. Perfect abstractions.

### FRP Scratch

I'm reading this essay in part in terms of a new programming environment for children that I've been thinking about recently. Sometimes I call it an FRP Scratch. It's like Scratch but with a more functional reactive runtime, so as to enable time travel debugging and also a CycleJS-like diagram of the code.

Yet my conversation with Jason Brennan is making me rethinking directly copying Scratch as much as I was planning to. That is, there's a lot of really interesting metaphors and abstractions outside of Scratch that haven't been explored. For example: direct manipulation. But of course direct manipulation, while intuative, does seem to limit the power of the comptutational abstractions. Things to think about!

## See the state

> The computer somehow drew that picture, so the computer must have calculated all those scaleFactors itself. Are you seriously recalculating them in your head?
>
> ... setting a "breakpoint" ... is like monitoring traffic on the freeway by setting up a barricade ... writing to a "console" ... is like figuring out where your dog goes during the day by following the trail of droppings.
>
>
> The entire purpose of code is to manipulate data, and we never see the data. We write with blindfolds... 
> ... Spreadsheets rule because they show the data.
> ... Edward Tufte has one primary rule... Show the data.
> ... the number one thing you can do is to show the data.

Beautiful. I'm sold. Let's show the data!

### Show the data

This becomes easier when you can step through time easily.

### Show comparisons

![screenshot 2018-01-06 at 10 49 33 am](https://user-images.githubusercontent.com/2288939/34641266-5f0962fc-f2cf-11e7-91e6-231235e00144.png)

Woah. I forgot about this. Beautiful...

And then when I was mesmerized by that plot, he hit me with the knockout punch: 

> Is it possible to understand a loop with, say, thousands of iterations, without drowning in thousands of numbers?
>
> Yes -- there is an entire field of study devoted to depicting large amounts of numbers. To visualize this data, we can use all of the standard techniques of data visualization.

And then he turns the table plot to a graph. And I died. Holy crap I really need to read this Tufte guy. Looks liek Amazon lost the package of his book in transit... Let me call them now.

### Eliminate hidden state

I love how he explains the two ways to eliminate hiddden state:

1. Make it non-hidden
2. Show it

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
