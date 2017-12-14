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

While he starts with the environment, I'd rather start with the langauge, or in other words, *start from the user who doesn't know how to code*.

I believe the core challenge of learning to program is: **the assimilation of models.**

Bret calls this: "identity and metaphor -- _how can I relate the computer's world to my own?_")

In order to be able to make anything, the user needs to have a ever-improving model of how their tools behave. For example, think about about a child assimilates the model of a hammer. It's clear from the way it's shaped from which end to pick it up. Then when you pick it up, you immediatley notice that it's much heavier on one side. And of course you've seen others people use hammers, so the model snaps right into place: swing this where I want BAM.

#### Powerful mental models / ideas

Now taking this a step further, we as programming language designers want to embed a model inside a child's head that will enable them to be powerful. We know that different mental models are more powerful than others. For example roman numerals are much less powerful than arabic numerals. We know that [systems thinking is more powerful than linear thinking](http://ncase.me/OVC2016/#uninformed).

Thus we want to help students assimilate *powerful* mental models, what Seymour Papert called "powerful ideas." Bret lists some of these:

> decomposition -- how do I break down my thoughts into mind-sized pieces?
> recomposition -- how do I glue pieces together?

These are the two-sides of the *composability* coin. As we've learned from functional programming, composibility is a very powerful idea. It allows us to do *top-down design*, where one decomposes a problem into its subproblems in such a way that solving the sub-problems automatically solves the solution -- because you've pre-composed the sub-problems properly before solving them.

So now that we know composability is a powerful idea, how do we help a new user assimilate it?

TODO

Other powerful mental models/ideas include:

* referential transparency (partitioning side-effects) TODO
* type system
* TODO

#### Technological realities

* proccessor speed
* storage
* network speed
* computational efficiency

TODO

#### Powerful ways of working

Additionally, we know about some powerful ways of working:

* creating by reacting
* creating by abstracting
* small steps
* refactoring
* version control workflow branching
* planning a project, estimating time, github issues, prioritizing

#### New learnable programming essay

Here's the framing:

human <-> interface <-> computer

Humans want to make things with comptuers. In order to make something you need to have a model of how it works in your head.

On the one extreme to the left, you could make an interface building upon models that people already have in their heads. This is why Microsoft Word is so successful. The cursor is much like the tip of a pencil and the page is much like a physical page. The mapping is clear.

On the other extreme to the right, you could simply have the human learn how the computer works, starting from electrons up through NAND and NOR gates, to proccessors, binary, Assembly, and C. This epitomizes Bret's Alan Perlis quote, "To understand a program, you must become both the machine and the program."

In the middle, you have powerful models for thinking, which take technological realities into account.

TODO looks like there are two dimensions here:

1. Familiarity of model (is it a human model or comptuer model)
2. Power of model (does it enable powerful ways of thinking)

Microsoft Excel. Unless you're coming from an accounting background, the grid model is new to you. (Side note: it wasn't until I learned SQL that I learned that properties are at the top and rows are entities. This array of dictionaries metaphor is quite powerful. I imagine people who grow up with Airtable or Fieldbook will learn those powerful ideas seamlessly.) There are two fascinating metaphors in Excel that are incredibly easy to pick up:

1. *Underneath* a cell can be a formula that produces it. The metaphor of "under the hood" is easily assimilated.
2. *Dragging* a formula iterates it over data, updating the references as it goes. Very easy to pick up. Then if you don't want certain references to update as you drag, you learn about the `$` operator. It's a great example of doing the commong thing automatically and letting you ask for a special case when you need it.




<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
