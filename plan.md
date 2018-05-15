---
title: Future of Coding Plan
---

# Future of Coding Plan

Last month, I set aside a single day -- October 16th, 2017 -- to write [my life plan](http://stevekrouse.com). It summarized my past and current philosophies on life. It also help me set my priorities. My work is #8.

Speaking of work, creating this Future of Coding plan has proved difficult. I produced a number of different versions over the past few weeks. This is the 5th.

## Table of Contents

* TOC
{:toc}

## Versions of this plan 

I think it's important to explain how I arrived at my ideas. Let me show you my steps. You can even see the eraser marks.

### 1. [/about](https://github.com/stevekrouse/futureofcoding.org/blob/16321d65a0381b78a1aa049d4666aadac9db8319/about.md)

My first draft did a good job of justifying the path I was currently on. I articulated my goal of making "programming as intuative as Facebook", and my strategy of getting there by building "a functional reactive Scratch." The next steps, according to this plan, are FRP research, working on my design principles, and starting to prototype!

### 2. [/plan v1](https://github.com/stevekrouse/futureofcoding.org/blob/4d37f65a04b418772687da1645d1da8d01a4fc30/plan.md)

Where the last version was justifying, this next version was inquiring. It was directly inspired by [Chris Granger's SPLASH 2017 keynote](https://www.youtube.com/watch?v=a_o-ZzgpiK8), which I highly recommend. It refocused my attention on the end-user. What do *they* want to do with coding?

In it, I also created the follow chart to help organize my dozen ideas on how to move forward:

| # | Customer  | Sustained by      |  
|---+-----------+-------------------+
| 1 | Students  | Parents           |
| 2 | Students  | Patreon / OC*     |
| 3 | Adults    | Companies         |
| 4 | Adults    | Open Collective   |
| 5 | FoC Ppl*  | Patreon           |
| 6 | FoC Ppl*  | VC Management fee |

    * OC stands for Open Collective. 
    * FoC Ppl stands for "Future of Coding people", other people working on future of programming tools

### 3. [/plan v2](https://github.com/stevekrouse/futureofcoding.org/blob/7385f741463a6cc23b90c724afb2322860e99dbe/plan.md)

I showed the above table to Dan Shipper last week. He was really excited about #5: doing research, creating prototypes, writing essays, and recording podcasts for the Future of Coding community. It does seem like a good match for me: allowing me to focus on my favorite activities, and get to skip dealing with the logistics of revenue, customers, and employees. This path makes sense as long as I don't care about money (beyond basic sustainability) or having control.

The open questions from this plan are:

1. What if nobody listens? What if nobody builds the future of coding that I write about? 

2. How do I write content that people read? How do I develop a following? 

3. How do I sustain this strategy financially?

4. Will I enjoy being a full time "researcher", instead of an entrepreneur?

### 4. [/plan v3](https://github.com/stevekrouse/futureofcoding.org/blob/fcb70a6ebb26033a3dcb308929ca277145f286b8/plan.md)

In this version of the plan I started keeping this running tab of past versions of the plan. (Something that the [unbreakable-links library](https://github.com/stevekrouse/unbreakable-links) may one day do for each of my files automatically.)

I also articulated my mission as "empowering creative expression through programming" and my design principles, [which I refactored out to their own page](/principles).

The central question is *to build or to research?*

But first, I need to make sure things are wrapped up at The Coding Space, WoofJS.

Then I need to do research on FRP or a blockly competitor. 

And also think about sustainability.

### 5. [/plan v4](https://github.com/stevekrouse/futureofcoding.org/blob/825e4615a2fcfcde88623d8f1cfd9cece25ac9a7/plan.md)

Bret Victor's Inventing on Pricinple was the main influence for this version of the plan. It imports social activism's notion of a cause or crusade into engineering. The main features of this plan are:

0. You don't *find* your cause, you *construct* it.
1. Pickling myself by reading all of my influences, and their influences
2. Reflecting on past work
3. Once I have a better sense of my cause, then constructing a "real" plan to attack that cause.

In a sense, this plan was a plan to find a cause, which is vision plus insight. Examples of causes include Larry Tesler's "no modes", Seymour Papert's "microworlds", or Elon Musk's "save the planet from existential risks through for-profit business."

### 6. [/plan v5](https://github.com/stevekrouse/futureofcoding.org/blob/a86cfb0a358b757e60abc7ec3a66c8a0d76a760b/plan.md#motivation-programming-is-something-beautiful-worth-saving)

TODO summarize

This is the current version below...

## Goals are hard

Goals are hard, and in the past I've spent too much time agonizing on them. Goals are exciting becuase maybe if I make them abstract enough, I can take unexpected shortcuts to achieve them. Such as, if my goal were to do yoga all day, instead of going to Wall Street, working my butt off to earn enough money to retire, I could instead take a course on teaching yoga and skip right to the end. Abstract goals are a lot like declarative programming, in that they leave a lot of room for unexpected optimization.

### All the cool kids had goals

BV argues that all of the best programming languages were created incidentally on their creators way to accomplishing something more ambitious, such as C, LISP, LOGO and Smalltalk. This is a great point. While I am inspired by many Alan Kay and BV motivations, such as moving creators closer to their medium of creation and increasing the feedback loop, as well as diminishing consumer/producer duality, I'm not entirely sold on which mission is my own yet.

## So let's be concrete and problem-focused


### 1) Elegant animation

I keep finding myself drawn to the problem of the most elegant ways to create interactive animations, mostly games, but also more traditional UIs. I think it's a facsinating problem because there's so much *essential* complexity. You want a ball to fall with realisitic gravity? But bounce of the walls? With a certain amount of elasticity? And to delete itself whenever it touches another ball? A program that accomplishes this in Woof isn't that much longer than its English specification.

Of course, you can't talk about elegant specifications for animations without mentioning Fran and the original Conal, continuous-time FRP. I'm digging into this and loving it. Still not entirely grokking it yet.

I have lots of experience teaching Scratch and Woof to kids, as well as designing the Woof library on top the JS canvas. The Scratch/Woof approach is great in the beginning but definitely does not scale to complexity. All Scratch projects tend towards spaghetti code... unless their creator is trained in a more functional way of thinking, which cannot be adequately taught in Scratch. The tool works against you. Ditto for Woof. Scratch and Woof are [shit crayons](http://bogost.com/writing/shit_crayons/): they do enable creativity, but not powerful (read mathmatical) ways of thinking.

All this makes me wonder if there's a way to go fully mathmatical here. What if adding gravity into my code was simply adding the equations of motion to my code? (This goes well with my "fuck gravity engines" rant that I still need to write.) The more I think in this direction, the more I wonder what computation is. What really is *compute-able*? I'm also getting more curious about logic programming. I vaguely remember learning that this failed because very non-trivial to optimize the performance of high-level code. I wonder if this has changed, especially now with machine learning or some other clever hacks.

An important caveat here is that everyone hates declarative languages: CSS, SQL, Makefiles, etc. They are a main to debug, partially because you can't set breakpoints or tell what it's doing. There's an essay I want to expore / write about how we can make declarative langauges feel imperitive if we want to by letting the programmer write the derivitive and then we take the integral. It's what JoyJS feels like (although he's not actually doing it probably.)

### 2) Back-end is the worst

Another problem that motivates me, but from the other direction, is the back-end. I hate it, despise it. Deployment, build tools: I hope they all die painful deaths. Sometimes I feel like the entire back-end (besides the database) is incidental complexity. Yet I'm not currently motivated to tackle this problem. The Paul's, Chiusano and Biggar, are taking a crack at it for now, but maybe I'll focus on it later, possibly by joining one of them.

## The Dream

How could the world look in the future? Here are a few dreams:

1) There's a tool that feels a lot like Scratch or Facebook Origami, yet it scales so non-genius 13-year-olds can create massive multiplayer games and make $$$. Another way to put this: you don't need front-end engineers anymore (or you need much fewer), because desingers will be able to build what they want and ship it.

2) Ditto for the back-end. This looks a lot like either of the Paul's dreams, but probably closer to Paul Chiusano's dream.

And these dreams imply the market for software engineers would plumet. Coding bootcamps would die off entirely, and in their place would be designer bootcamps that teach these new tools, in the same way there are Excel bootcamps now. On the one hand, I am sad about the prospect of putting tens or hundreds of thousands of my fellow engineers out of work. On the other hand, I am really excited to see what 100k smart, educated, resourceful, connected people would do when put out of work. Thousands of former Wall Street people found their way to tech in the wake of the 2008 crisis. What industry will techies go to if we steal their jobs? I don't know, but I do have confidence! Maybe they'll start small businesses like The Coding Space.

## The Plan

I don't yet have concrete goals, so I don't have a concrete plan. What I do have is a direction: learning and credibility. I don't exactly know how, but I feel confident that if I continue to learn more, build more, and share more, I will continue to move in the right direction, and continue to gain clarity.

One next step for me will be attending and speaking at conferences, such as Strange Loop. I haven't applied to any yet but will start doing so, maybe starting with Jonathan Edwards' in Boston in a few months.

Another key step will be finding a co-founder / collaborator of sorts. I am definitely still on the lookout for this person, and hope that if I continue to put myself out there, maybe they will find me.

One final note: I didn't realize this until writing this plan just now, but I think that my goal is actually a lot clearer than I thought. I want to make a combo of Scratch and Origami that could compete with Unreal Engine or Unity.


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>