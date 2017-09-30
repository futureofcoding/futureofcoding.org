---
title: About
---

# About - Future of Coding

Welcome to the podcast and open-journal research project to create the future of coding.

## Computing is power

Large advantages are confered upon those who know how to instruct computers:

1. As the fabric of the world becomes software, and those that can manipulate software become powerful magicians.

2. Learning to communicate with computers teaches one how to think more clearly, precisely, and powerfully.
 

## Usability is poor

However, the langauges and tools that we currently use to communicate with computers have poor usability:

1. They require hundreds of hours grueling of practice to learn to use.

2. Even after you are familiar with them, they are still not easy to use.


## We can do better

But we need not despair! We've repeately improved the usability of the tools by which we communicate with computers, from punchards, to binary, to assembly, to Fortran, to C, to Python, to Haskell.

In fact, I believe that we can improve the usability of general programming to that of MIT's Scratch, or Microsoft Office applications like Word, Powerpoint or Excel, or even a user-friendly application like Facebook.

However, there's a mystery here: we haven't made much progress on this front in decades. If improvement is possible, where is it? What are the barriers?


## I started working in 2015

I started working on this problem, developing programming languages prototypes, a few years ago. When I first began working on it, I thought I'd have the whole thing solved in just a matter of months. I was wrong.

While I did contribute some novel ideas to the space, I spent a lot of time retracing the steps of those that came before me. I learned the hard way that I need to read my history, learn about what others have done here.


## Collaboration

In the summer of 2017, I was approached by Irvin Hwang who suggested starting a NYC-based meetup group for people interested in the future of programming. I thought that was the dumbest idea I'd ever heard -- why talk to other people when I could read Alan Kay papers in my room? But I went to the first meeting and it blew my mind wide open. I learned so much in that hour! It inspired my [journal](./journal) which is now the core of my research project. After Irvin became busy with his new job, I took over the group that I originally thought was a waste of time. What a 180!

It was also around this time that I began my [Future of Coding Podcast](./index.html), where I alternate each week between recapping my own research and speaking with experts. It's been an incredibly valuable experience for me: 1) helping add structure to my research, 2) gain new insights through collaboration, 3) encourage me to reflect on my progress, and 4) give me energy as people respond to my episodes with exciement and ideas of their own.


## It's all about prototypes

While podcasting, journaling, reading papers, and playing with others' prototypes are key to the success of this project, they are only valuable insofar as they spur on the creation of useful prototypes that will inform the future of coding. 


## Goal: Make Computing Accessible to All

Let me make the goal of this project clear: **produce a tool with the power of a general-purpose programming language with the usability qualities of a standard end-user application** 


There are a few notable things missing from this goal which I want to make explicit:

1. My aim is not to create a company. My aim is to produce a tool. If it seems like a company is the best way to accomplish this aim, so be it. However, I aspire to be able to create this tool outside of a traditional company structure, more like Linux or CycleJS.

2. I don't need to be the person who creates this tool. I will judge this project an unqualified success if it somehow inspires or informs the creation of this tool by someone else. Would I prefer to create it myself? Yes, that does seem fun. However, I aspire to not be sad if someone beats me to the punch. I aspire to give that person a metaphorical high five, and them move on to the next world-changing project on my to-do list.

3. Yes, this goal is vague. I do not want to commit to what this tool will look like in its goal. You can read [my specific thesis about what it may look like here](./thesis).


## Constraints

1. My time. Currently it's limited to 20ish hours per week for this project. Over time I will increase this time as I decrease my commitmentes to other projects. However, as my work-life balance is important to me (and to the long-term sustainability of this project), I will have a maximum of 40ish hours per week here. Thus it is important both to 1) spend my time in a maximally useful way and 2) to leverage other people.

2. Capital. While I do have enough capital to sustain myself working on this project indefinitely, I do not currently have the funds to sustain others. I wonder if this will become more of a blocker over time as I collaborate with others that need day jobs to pay the bills and what creative solutions we can come up with to overcome this.

3. Knowledge. While I have been programming for a decade and developing programming languages for years now, there is still so much more for me to learn. It sometimes feels endless, because even as I gain appreciation for all the work that has been done before, it is impossible to stay astride of all the new innovations in the field that are being developed constantly. Filtering out the noise will become increasingly important.


## Strategy

There will always be an unpredictability to research. It's hard to have a "plan" but it behooves me to have a strategy.

### Follow the example of role models

#### Alan Kay

#### Bret Victor

#### Mitch Resnick

#### Andre Staltz

Currently my main role model is Andre Staltz, particularly for his work in creating CycleJS. [In a recent talk](https://vimeo.com/216787869), he explains how CycleJS came out of research and thinking he was doing over a period of years, eventually resulting in some code that some people used, others contributed to, and eventually, piece by slow piece, is growing into an interesting and valuable contriubtion to the front-end framework ecosystem.

#### Juan Benet

TODO

### Collaborate 

TODO 

### Reflect

TODO 

### Get a coach

TODO 

## History

Jan-Feb 2016 - Cycle v1 (JQuery + Blockly)

Mar-Aug 2016 - WoofJS

Jan-Feb 2017 - Cycle v2 (VueJS + Blockly)

Mar-Apr 2017 - Rose v1 (Projectional Editor for JS)

Jul-Sep 2017 - Lamdu, Eve, Alan Kay, StreamSheets, CycleJS, Elm

## Plan

### Functional Reactive Programming (FRP)

What I mean by "reactive" here could be accomplished by the word "declarative". This means that every definition is final, constant, cannot be changed anywhere in the code. It *is* what it's defined to be. However if you want dynamic behavior in your application, you'll need those definitions to be "reactive" so that while the definition doesn't change, they do describe behavior that does.

FRP has a lot going for it. Andre Stalz has shown with the CycleJS devtools that if you describe your application in this way, it can be automatically visualized as a dataflow diagram.

However, the usability of programming in CycleJS (or an alternative like Elm or NoFlo) is still poor, in some ways its worse than non-reactive languages like WoofJS. Can we improve the usability by abstracting over it somehow with better metaphors and a graphical user interface?

However, there's a lot about FRP I still don't understand. Instead of jumping right into StreamSheets, which is a generalized reactive tool, I'm now considering scoping down the project to be less general as a way to get my feet wet.


### Reactive WoofJS (or Scratch)

WoofJS is a Scratch-inspired JavaScript framework for making games. For (almost) every block in Scratch, there is an equivalent funciton in WoofJS that does (almost) the same thing. Because Scratch is so wonderfully designed, WoofJS gets many of these usability benefits for free. However, WoofJS is also sattled with the problems of Scratch -- which mainly center around its procedural, sequential nature, which makes writing clear, maintainable code much more difficult.

Todo pull from [ideas](./ideas)...

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>