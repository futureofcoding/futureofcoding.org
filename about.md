---
title: About
---

# About

This community was originally started by [Steve Krouse](https://stevekrouse.com). From 2017 to 2019, Steve maintained an open-ended [log](/log) of his research as an experiment in radical transparency. In the fall of 2019, he created [The Whole Code Catalog](/catalog). It includes detailed reviews of 24 programming-ish interfaces and experiments. Check it out for inspiration and ideas-to-steal. Finally, Steve has also published a number of [Essays & Papers](/essays-papers) that you may find interesting.

At the end of 2019, Steve decided to focus more on his research work and other interests, and passed the stewardship of the community and podcast hosting duties to Ivan Reese ([Website](https://ivanish.ca) • [Twitter](https://twitter.com/spiralganglion)).

<br>

## Me

<img src="https://user-images.githubusercontent.com/2288939/50344796-70be6c00-0524-11e9-8e01-5d3c6ae89ff7.png" height="300px">

Hi, my name is Steve Krouse. When I meet people, I like to begin with life stories. Context is important. Here's mine - as it relates to this project:

As a kid, I was particularly "bad at math." However, as I was a computer nerd, I started going to a wonderful after-school computer science program, [IMACS](https://imacs.org). Through learning LOGO, Scheme, Java, and Haskell in middle school and high school at IMACS's self-paced environment, I became a computational, mathematical, and introspective thinker. I became very good at school, especially mathematics and physics.

I went to the University of Pennsylvania for college. After taking most of the CS classes at Penn, I left without graduating in early 2014, and went to work at [Looker](https://looker.com). I left Looker at the end of 2014.

While at college and Looker, I was deeply influenced by Bret Victor and Seymour Papert. Ever since my experience of transforming from a self-identified stupid person to a smart person in middle school, I was curious about how it happened and if similar changes could be nurtured in others. Reading Papert in college, I learned that my own transformation was no accident - Papert intentionally set out to create mathematical thinkers from math-haters with LOGO, and he accomplished his goal in me.

With these thoughts in mind, in July 2015 I co-founded [The Coding Space](https://thecodingspace.com), where we taught kids to code in a self-paced environment similar in spirit to IMACS. I created [a Scratch-based curriculum](https://coding.space), as well as [WoofJS](https://woofjs.com), a JavaScript framework and online IDE to transition kids from Scratch to JS.

In mid-2017, I left The Coding Space to work on programming languages full time.

At first, I thought I'd have the whole thing solved in just a matter of months, all by myself. I was wrong. While I did make some interesting prototypes, I spent a lot of time retracing the steps of those that came before me. I learned the hard way that I need to read my history.

In the summer of 2017, I was approached by Irvin Hwang who suggested starting a NYC-based meetup group for people interested in the future of programming. I thought that was the dumbest idea I'd ever heard: why talk to other people when I could read Alan Kay papers in my room? But I went to the first meeting and it blew my mind wide open. I learned so much in that hour! It inspired my [log](./log) which has become the core of my research practice. After Irvin became busy with his new job, I took over the group, and created a Slack for "future of programming folks" all over the world. I learned the easy way the importance of community.

![image](https://user-images.githubusercontent.com/2288939/50345144-e5de7100-0525-11e9-8404-6162ccfc2bfd.png)
_Future of Coding London Meetup #1 (Nov 2018)_

It was also around this time that I began the podcast. It alternates between recapping my own research and speaking with experts. It's been an incredibly valuable experience for me, helping add structure to my research, gaining new insights through collaboration, encouraging me to reflect on my progress, and giving me energy as people respond to my episodes with excitement and ideas of their own.

My framing for this project has gone through a number of turbulent stages (Bret-Victor-wannabe, total-disenhartenment, irrational exuberance, etc), but I have recently (as of Fall 2018) come to a very positive mental space, described below. These days, I describe myself as a *programming language designer*, because my goal is to create a working system (not just produce research) that resembles a programming language in its expressive power, but will feel more like a system in the Excel or Smalltalk sense than a text-and-compiler-based programming language.

## Mission

The mission of this project is to *enable all people [[1](#1)] to modify the software they use in the course of using it*.

This mission would cause the following changes, in order of increasing importance:

1. All software will be co-created by decentralized communities, rather than centralized groups or companies.
2. Through the power of crowd-sourcing, the quality of all software will become much higher than existing software.
3. All software will be much more composible, interoperable with other pieces of software.
4. All software will be arbitrarily customizable, allowing for bespoke, tailored experiences.
5. Learning to communicate with computers teaches one how to think more clearly, precisely, mathematically, and powerfully. If one can manipulate the software one uses, if only one learns how to organize one's thoughts, many people will self-teach themselves to do just that.
6. As the fabric of the world is eaten by software, the ability to fully manipulate that software one uses is an essential freedom.

This vision is not new nor creative: it's obvious that people would change things if they could. Yet this problem has proven stubborn over the decades and most have given it up as insoluble. We have all but forgotten the essential characteristic of computers: their malleability.

## Thesis

My (current) angle on this problem is most influenced by:

* Jonathan Edwards
* Out of the Tarpit
* Conal Elliott
* Bret Victor
* Paul Chiusano

And is comprised of the following claims:

1. The *comprehensibility* of *large* software is of utmost importance.
2. In order to enable comprehensibility without sacrificing expressiveness, we must strive to eliminate all forms of incidental complexity in programming. Programming should be describing the essential nature of the problem: the view from the user - if the user were made to see all the implications of things.
3. Mathematics is the language of essence, or as close as we can get. Something like the lambda calculus is the language of computation free of mechanical and historical accidents.
4. The solution is to create denotative languages, languages where each term denotes an equivalent mathematical object.
5. We must [rid ourselves of the IO Monad](http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm), replacing it with better abstractions for whole systems.
6. We must have an editing experience that's lively and fluid. These mathematical abstractions scare people because their UI stinks. This is a very difficult UI problem, but tractable.


All in all, there are 4 large problems to solve:

1. Replace the IO abstraction (on the front- and back- ends)
2. Improve the programming experience (PX) of strongly typed, denotative programming
3. Version control in a world with many, many more forks at many more levels
4. The adoption of this new system

## Vague dream programming language system

* Haskell-ish structured-ish editor in the style of Lamdu, early Unison prototypes, Dark, Luna, Isomorf, etc. This UI problem is large and unsolved. It will likely be one of the most complicated UIs ever created, and thus eventually bootstrapping would be great.
* Web based. It’d be great if it could run in browsers but not terrible to have it communicate over socket to begin with. Eventually compiling to WebAssembly will raise all boats.
* Hash-based definitions in the style of Unison (and possibly IPFS)
* Naming system in the style of DNS (or something more modern) where specific people get rights to assign names to hashes, and re-assign them whenever
* LIVE programming in the sense that terms are evaluated immediately, even if incomplete in the sense of Hazel
* Entirely blurs the line between front-end and back-end and collapses the distinction to one of data from my computer and data from elsewhere. Computation can similarly happen on my computer and elsewhere -- both potentially for fees.
* Everything is running, all the time, in pieces. There’s never “running” or “pausing” code, any more than there is “running”  or “pausing” a google doc. You can open and close it (or something that refers to it), but you can’t stop it.
* And working on something new, doesn’t break anything existing.
Changing a definition only produces a new definition but you are given the option to update all old hashes to the new definition if you wish. This is an open research problem, but I imagine Unison has solved a lot of the problems here.

## Killer app

If/when this platform is built, the first app I'll build in it is a build-your-own-email-app kit. Everyone's email workflow is specific and it's a huge part of how we all run our lives. Being able to customize things to exactly how we'd like them would be a superpower. For myself, I'd like to be able to combine my email app with features of task management applications, such as re-ordering items and nesting items within other items. Part of the inspiration for this "killer app" is that Google Inbox, my preferred email client, is being shut down in a few months. The economics of building a consumer quality app only allows for lowest-common-denominator experiences. The only way to maintain sustainable personalized experiences is with a crowd-sourced development platform. I imagine we'd want to leverage Gmail's API to do this.

<a name="1">[1]</a> - "All people" is a strong phrase. Apparently 77% of Wikipedia is written by 1% of editors - and that's not even counting users. The difference with software is that people will want to customize it for themselves, while Wikipedia is for a general audience, so there's less motivation to edit it.
