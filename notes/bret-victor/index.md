---
title: Bret Victor
---

# Bret Victor

* TOC
{:toc}


## _March 15. 2006_ - [Magic Ink](http://worrydream.com/MagicInk) 

[My notes here](./magic-ink).

## _April 17, 2007_ - [Substroke Design Dump](http://worrydream.com/#!/substroke) 

[My notes here](./substroke).

##  _Oct 2009_ - [Simulation as a Practical Tool](http://worrydream.com/#!/SimulationAsAPracticalTool) 

[My notes here](./SimulationAsAPracticalTool).

## _March 10, 2011_ - [Explorable Explanations](http://worrydream.com/ExplorableExplanations/) 

[My notes here](./explorable-explanations).

## _April 2011_ - [Kill Math](http://worrydream.com/#!/KillMath) 

[My notes here](./kill-math).

## _May 16, 2011_ [Interactive Exploration of a Dynamical System](https://vimeo.com/23839605)

Wow, this is really the pre-cursor to Nicky Case's new [JoyJS](http://ncase.me/joy-demo/nonlinear/?model=prey)! There are only two things Nicky is missing:

1. The ability to directly manipulate the graphs, as opposed to dragging the numbers.
2. The ability to abstract over constants, displaying multiple different values of a constant on the screen at the same time.

## _May 24, 2011_ [Scientific Communication](http://worrydream.com/#!/ScientificCommunicationAsSequentialArt)

This time I actually read the paper as he instructs. Seems like it might be where he found the word "dynamical." It's pretty interesting, albeit a lot of words to say: it takes a un-intuatively small number of floaters (people who have friends outside their clique) to make the people of a group of cliques a much shorter number of "handshakes" apart.

The authors, and Bret, spend most of the time explaining how to define (or contruct) these networks, as well as the key definitions of L (average number of handshakes between all two people) and C (average fraction of how many of each node's friends know each other).

One thing to note: neither representation of this information "starts with a why" that I care about. Here's an example of what that would look like:

* Imagine yourself an actor in Bollywood. You are mostly friends with Bollywood actors. Yet you really want to meet an American actor, say Kevin Spacey. Is there a chance any of your friends know him, or know someone who knows him?
* As a kid, I wanted to meet Orson Scott Card. My dad had an idea, "Orson is Morman. There's a Morman guy at my office. I wonder if they know each other." "Dad!" I said, "You can't just ask that!" "Who know?" my dad replied, "Maybe the Mormons are all connected like the Jews?" Turns out my dad's work friend did know Orson Scott Card. Was this an lucky fluke or was it charictarisitc of how people are connected?

Another criticism is that much of the overly consice mathmatic lingo was still used in Bret's version, for example, `C(p) / C(0)`. Or <code>C<sub>p</sub> >> C<sub>random</sub></code>. Huh? Two ways to make those more accessible:

1. Use the english-word-analogy instead of the notation. Instead of `C(p) / C(0)`, you could just call it the "cliquishness of a network", not even explaining that you normalized it as compared to a regular network.
2. Visualize each sub-component of the equation. If you must expose the normalization computation, do it in a way I can explore. Show me what `C(p)` is as compared to `C(0)` so I can see how the normalization works.
3. [Colorized math equations](https://betterexplained.com/articles/colorized-math-equations/)

Another idea: instead of small pictures of black circles and lines, the pictures could be much bigger and be of movie stars and movies as edges. That could be quite compelling!

A final point is that the data could be explorable all the way down, as Bret demonstrates in *Ten Brighter Ideas?*. Instead of simply trusting their data in the final graph, we could allow the reader to dynamically generate it based on various assumptions, thus making it fully citable and auditable to the core.

## _May 31, 2011_ - [Scrubbing Calculator](http://worrydream.com/#!/ScrubbingCalculator)

Beautiful. Really clever way to get around symbols.

Looks like someone made it real: https://cruncher.io/?/-L0KBBVxhSk404NeILvD

One drawback of this interface is that doesn't allow you to import data.

Another is that you have to first make number and then connect them. It would be neat if it could automatically connect numbers with the same text description.

## _Oct 2011_ - [The Ladder of Abstraction](http://worrydream.com/#!2/LadderOfAbstraction)

Wow, I didn't realize this piece meant so much to Bret! As he says [here](http://worrydream.com/MediaForThinkingTheUnthinkable/note.html):

> I've seen some people refer to "Inventing on Principle" as my "manifesto", which is understandable, but untrue. If you were to ask me for a personal manifesto, I'd probably have to point you to "Up and Down the Ladder of Abstraction". It uses a programming example, but it's not about programming. It's about a way of thinking. In particular -- a way of using representations to think powerfully about systems.

I've so internatlized walking up and down the ladder of abstraction, both through reading this essay, doing a lot of programming, particularly functional prorgramming, as well as taking and then TA-ing a comptuer architechture class (where we went [from electrons to C](/futureofcoding.org/notes/halfway-there-cis-240.md)).

As Bret explains, he "adopted the notion of "abstracting over a variable" from computer science. In particular, lambda abstraction corresponds directly to the sort of visual abstraction we're doing here." I'm pretty darn familiar with this proccess. I imagine this article might fall flat on an audience without functional-thinking experience. 

## _Nov 2011_ - [A Brief Rant](http://worrydream.com/#!/ABriefRantOnTheFutureOfInteractionDesign)

Vision without implementation is hard to imagine. I reacted negatively to this piece the first time I saw it. He was ragging on all of the world-changing technologies I loved! Now I see it for what it is: vision, audacity, inspiration. We don't know how to make the future, but we definitely know what it won't look like: what it looks like today.

## _Sept 2012_ - [Learnable Programming](http://worrydream.com/#!/LearnableProgramming)

[My notes here](./learnable-programming).

## _April 4, 2013_ - [Media for Thinking the Unthinkable](http://worrydream.com/#!/MediaForThinkingTheUnthinkable)

I've seen and thought about these ideas and examples sufficiently to be not terribly impressed with my nth viewing of them in this video. Probably the most exciting thing I found was Bret's work visualizing Nile:

[demo_shape](https://rawcdn.githack.com/damelang/nile/master/viz/NileViewer/demo_shape.html)
[demo_reals](https://rawcdn.githack.com/damelang/nile/master/viz/NileViewer/demo_reals.html)
[demo_points](https://rawcdn.githack.com/damelang/nile/master/viz/NileViewer/demo_points.html)
[demo_beziers](https://rawcdn.githack.com/damelang/nile/master/viz/NileViewer/demo_beziers.html)

I of course came across this system in my deep dive of Alan Kay, but as with most mathmatical inventions, I found it intimidating and unapproachable. Yet, potentially these sites will make it easier for me to gain an ituition for it. In a more general sense, this makes me wonder about all sorts of mathmatical notations that intimidate me, but probably hold all sorts of beauty, such as maxwell's equations (which Bret often references) or the abstract mathmatics that inspires functional programming, such as category theory. I guess this sort of thinking is what inspired Chris Olah to explain Machine Learning.

### [An Ill-Advised Personal Note about "Media for Thinking the Unthinkable"](http://worrydream.com/MediaForThinkingTheUnthinkable/note.html)

> Any concept, technique, or tool that is specific to software engineering is guaranteed to have a short shelf life, at least on any time scale that I personally care about. (Which is totally fine if you’re into that, but this is my ill-advised personal note, not yours, and I personally care about mattering 100 years from now.)

Wow, that’s fascinating. Makes me wonder about where this desire to attain a lasting legacy comes from.

## _April 26, 2013_ - [Stop Drawing Dead Fish](https://vimeo.com/64895205) - 

Beautiful. Yet unclear what problem it solves for whom.

## _May 2013_ - [Drawing Dynamic Visualizations](https://vimeo.com/66085662) 

Beautiful. Reminds me both of JoyJS and Aprt.us and [Programming with Comics](http://whynotfireworks.com/programming-with-comics/). Crazy how many tools this man inspires!

### [Additional Notes on "Drawing Dynamic Visualizations"](http://worrydream.com/DrawingDynamicVisualizationsTalkAddendum/)

Haven't read.

## _July 2013_ - [The Future of Programming](https://vimeo.com/71278954)

This video has one theme and 4 points. The theme is that people are often slow to move from one technology/representation to a better one, but that we should keep striving for better abstractions.

The four points are that:

1/ We should move from symbolic coding to the direct manipulation of data

This seems reasonable, yet of course as Bret would agree, symbolic reasoning is powerful too. 

2/ we should move from lower level to higher level instructions to the computer

Nothing that inflamatory here, yet its implecations are far-reaching. For example, variables are way too low-level. Listing instructions -- sequential programming -- also seems too low level, which he touches in his 4th point.

So much of what makes programming difficult for beginners, as team behind Eve figured out, is scope. This is not a low-level concern, but a interface design concern.

3/ Sequential text should move towards richer visual displays.

Pretty straight-forward in principle, yet we haven't figure this out in practice -- potentially because we haven't found the right "glue" to piece non-textual programs together. Copy and paste and Unix pipes are powerful.

4/ Sequential instructions should move towards a concurrent model.

Funny how so many of these goals point towards functional programming, yet how few of Bret's demos look like functional programming. 

I guess [the Lambda Alligator](http://worrydream.com/AlligatorEggs/) do but I never got those... 

### Langauge vs Tool

Just re-read Lamda Alligators - still above my head - but I found [this neat Oliver Steele article that explains that some people are more IDE-focused and others are more langauge-focused](http://blog.osteele.com/2004/11/ides).

Reminds me of Paul Chiusano's talk on whether langauge or tools is higher leverage, i.e. would you rather have a great brain-to-binary interface or emacs-to-Haskell. However, now that I think of it, that's a misleading analogy, because just being able to "mentally type" assmebly really quickly is basically just really fast fingers in a text-editor. What Paul misses with this analogy is that what's powerful about building better tools is that they can help you see things that you can't see with just text, such as a debugger or other of Bret's demos in visualization. It's a fine point - because at what point does the langauge stop and the tool begin? I feel like I am personally a langauges guy who is trying to build tools as powerful as langauges. 

One final note about this DBX talk. One of the most memorable parts of this talk is when he ridicules the idea of an API. Clearly these programs will negotiate how to talk to each other.

### [References for "The Future of Programming"](http://worrydream.com/dbx/)

This is a reassuring note for me at this point in my thinking:

> Lastly, here's some advice Alan Kay gave me (as I was going through a small personal crisis as a result of reading Jerome Bruner's "Toward a Theory of Instruction"):
>
> I think the trick with knowledge is to "acquire it, and forget all except the perfume" -- because it is noisy and sometimes drowns out one's own "brain voices". The perfume part is important because it will help find the knowledge again to help get to the destinations the inner urges pick.

As I wrote in the third paragraph of [this section of my journal yesterday](http://futureofcoding.org/log#the-visual-display-of-quantitative-information):

> [Reading Tufte without] any immediate concrete, practical use for these skills [...] speaks to the question of pre-loading vs just-in-time learning. I feel like most of the value in my reading today will be in knowing where the answers to questions about data visualization will likely be found – and that there are answers here at all – rather than the actual rules or techniques that I read given that I am likely soon to forget them in the absence of applying them anytime soon.

There are way too many references in this talk! Even if I had more than just the rest of today, I'm not sure I'd want to read them all. Some of the ones that seem promising. 

TODO - find a place for these links:

* [Alan Kay -- Programming and Scaling](https://www.tele-task.de/lecture/video/2772/)
* [Gerry Sussman -- We Really Don't Know How To Compute!](https://www.infoq.com/presentations/We-Really-Dont-Know-How-To-Compute)
* [Alan Kay: Doing with Images Makes Symbols Pt 1](https://archive.org/details/AlanKeyD1987)
* [Alan Kay: Doing with Images Makes Symbols Pt 2](https://archive.org/details/AlanKeyD1987_2)
* [J.C.R. Licklider (1960) -- Man-Computer Symbiosis](http://worrydream.com/refs/Licklider%20-%20Man-Computer%20Symbiosis.pdf)
* [Tony Hoare: Communicating Sequential Processes](https://spinroot.com/courses/summer/Papers/hoare_1978.pdf)
* [Danny Hillis -- Richard Feynman and The Connection Machine](http://longnow.org/essays/richard-feynman-connection-machine/)

* I _really_ need to at least watch Engelbart's "mother of all demos," even if I don't have time to make it further than the halfway through the paper I got. Both can be found [here](http://www.1962paper.org/).

## _Dec 2013_ [Links 2013](http://worrydream.com/#!/Links2013) 

TODO this feels valuable

## _June 2014_ - [Seeing Spaces](https://vimeo.com/97903574)

Makerspaces++. I didn't realize he explained it so explicitly in terms of Makerspaces.

Makes me wonder if there's a business to be built in consulting with schools on the design of science, math, and engineering classrooms. Maybe I wouldn't hate teaching robotics so much if it was in such an environment. In other words, it's Lego Mindstorms++.

## _March 2014_ [RESEARCH AGENDA AND FORMER FLOOR PLAN](http://worrydream.com/cdg/ResearchAgenda-v0.19-poster.pdf)

> representations [such as Playfiar's data plot and Heaviside's equations] weren’t mere scientific “discoveries”. Each of them essentially enabled all subsequent scientific breakthroughs thereafter. A powerful new form of representation affects everything, forever.

Damn. That makes me feel a lot better than a mere "user-interface designer."

Dynamic conversations could lower the miscommunication between people, encourage empathetic connection, understanding, and more directed, and accurate discussions. Imagine if we could have meaningful conversations casually. We currently cannot just because verbal words are so powerless as compared to written mediums.

Imagine museams that are build with dynamism in mind. Or libraries. Woah. Spaces that allow you to really explore ideas with your body.

Dynamic Objects-To-Think-With. This makes me wonder why we don't have children use a clay or legos of some sort to learn about mathmatics beyond the younger years.

> Every one of these projects is about designing a thinking medium to fit the human, instead of deforming the human to fit the medium.

This quote is another angle to view the floor vs ceiling distinction. The langauges with a low floor fit the human well but not the machine, and usual the reverse is true with langauges with a high ceiling.

> The culture can start to develop a dynamic multimodal literacy.

Wow, this is a fun cause to rally behind: _deep literacy_, in many different ways of thinking, mathmatical, scientific, systematic, iterative, with your body, with symbols, with your senses, etc, etc.

## _Oct 2014_ - [Humane Representation of Thought](https://vimeo.com/115154289)

Thinking is very phsyical. We think in our muscles.

He makes it very clear in the intro to this talk, and the following paragraph, that he is abstracting over the past few years of talks and demos to figure out what it is that he's trying to accomplish. This is profound for me because in _Inventing on Principle_, he sounds pretty sure about his mission, but it seems like he is still working on making it more and more clear:

> It's based on a piece of writing that I started over a year ago, a long-term research agenda (and floor plan) for myself and my then-nascent research group, an attempt to unearth the demons that have driven my work over the last decade, and draw a map of the destination they're trying to get to.

Science and engineering _fundamentally depends_ on the Playfair data plot. It was so powerful because it repurposed the ability of our monkey eyes to think more abstract thoughts. 

> Lebniz was the UI designer of the 17th century.

The periodic table was the foundation of chemistry!

It would be a fun research project to find the representations that enable certain breakthroughs to happen. I imagine that independent simultaneous invention would be a good clue that it was casued by a new medium.

Bret's motivation is the growth of intellectual ideas, the ascent of man.

Inhumane. The analogy of putting a puppy in a cage is so memorable. I think abou this all the time, and use this analogy to communicate with everyone.

I want to promote Jerome Bruner in my list of reading, given how important Bret thinks he is. I guess I'll also want to do Kieran Egan... just bought!

Wow, the MIT Media Lab [inFORM](http://tangible.media.mit.edu/project/inform/) project is cool! 

The most exciting category of representations to design is for abstract ideas, such as for mathamtics or systems.

> Humane is never the default. The incremental thing will lead you to a tighter and tighter cage. If you believe in the humane medium, it's up to us to fight that trend.

### [A note about "The Humane Representation of Thought"](http://worrydream.com/TheHumaneRepresentationOfThought/note.html)

## _Nov 2015_ - [What a technologist can do about climate change](http://worrydream.com/#!/ClimateChange) 

TODO this feels important but don't have time for this now.

## [Quotes](http://worrydream.com/#!/quotes)

Haven't read.




<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>

