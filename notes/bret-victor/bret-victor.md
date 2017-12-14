---
title: Bret Victor
---

# Bret Victor

* TOC
{:toc}

## [Interactive Exploration of a Dynamical System](https://vimeo.com/23839605) - May 16, 2011

Wow, this is really the pre-cursor to Nicky Case's new [JoyJS](http://ncase.me/joy-demo/nonlinear/?model=prey)! There are only two things Nicky is missing:

1. The ability to directly manipulate the graphs, as opposed to dragging the numbers.
2. The ability to abstract over constants, displaying multiple different values of a constant on the screen at the same time.

## [Scientific Communication](http://worrydream.com/#!/ScientificCommunicationAsSequentialArt) - May 24, 2011

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

## [Scrubbing Calculator](http://worrydream.com/#!/ScrubbingCalculator) - May 31, 2011

Beautiful. Really clever way to get around symbols.

Looks like someone made it real: https://cruncher.io/?/-L0KBBVxhSk404NeILvD

One drawback of this interface is that doesn't allow you to import data.

Another is that you have to first make number and then connect them. It would be neat if it could automatically connect numbers with the same text description.

## [The Ladder of Abstraction](http://worrydream.com/#!2/LadderOfAbstraction) - Oct 2011

Wow, I didn't realize this piece meant so much to Bret! As he says [here](http://worrydream.com/MediaForThinkingTheUnthinkable/note.html):

> I've seen some people refer to "Inventing on Principle" as my "manifesto", which is understandable, but untrue. If you were to ask me for a personal manifesto, I'd probably have to point you to "Up and Down the Ladder of Abstraction". It uses a programming example, but it's not about programming. It's about a way of thinking. In particular -- a way of using representations to think powerfully about systems.

I've so internatlized walking up and down the ladder of abstraction, both through reading this essay, doing a lot of programming, particularly functional prorgramming, as well as taking and then TA-ing a comptuer architechture class (where we went [from electrons to C](/futureofcoding.org/notes/halfway-there-cis-240.md)).

As Bret explains, he "adopted the notion of "abstracting over a variable" from computer science. In particular, lambda abstraction corresponds directly to the sort of visual abstraction we're doing here." I'm pretty darn familiar with this proccess. I imagine this article might fall flat on an audience without functional-thinking experience. 

## [A Brief Rant](http://worrydream.com/#!/ABriefRantOnTheFutureOfInteractionDesign) - Nov 2011

Vision without implementation is hard.

## [Learnable Programming](http://worrydream.com/#!/LearnableProgramming) - Sept 2012


## [Media for Thinking the Unthinkable](http://worrydream.com/#!/MediaForThinkingTheUnthinkable) - April 4, 2013

http://worrydream.com/MediaForThinkingTheUnthinkable/note.html

## [Stop Drawing Dead Fish](https://vimeo.com/64895205) - April 26, 2013

Beautiful. Yet unclear what problem it solves for whom.

## [Drawing Dynamic Visualizations](https://vimeo.com/66085662) - May 2013

http://worrydream.com/DrawingDynamicVisualizationsTalkAddendum/

Beautiful. Reminds me both of JoyJS and Aprt.us and [Programming with Comics](http://whynotfireworks.com/programming-with-comics/). Crazy how many tools this man inspires!

## [The Future of Programming](https://vimeo.com/71278954) - July 2013

## [Links 2013](http://worrydream.com/#!/Links2013) 

## [Seeing Spaces](https://vimeo.com/97903574) - June 2014

## [Humane Representation of Thought](https://vimeo.com/115154289) - Oct 2014

## [What a technologist can do about climate change](http://worrydream.com/#!/ClimateChange) - Nov 2015


## https://www.evanmiller.org/dont-kill-math.html



## [Quotes](http://worrydream.com/#!/quotes)





<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
