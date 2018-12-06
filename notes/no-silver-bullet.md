---
title: No Silver Bullet
---

# [No Silver Bullet](http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html)

Hard to believe I've never read this before!

> Skepticism is not pessimism, however. Although we see no startling breakthroughs--and indeed, I believe such to be inconsistent with the nature of software--many encouraging innovations are under way. A disciplined, consistent effort to develop, propagate, and exploit these innovations should indeed yield an order-of-magnitude improvement. There is no royal road, but there is a road.
>
> The first step toward the management of disease was replacement of demon theories and humours theories by the germ theory. That very step, the beginning of hope, in itself dashed all hopes of magical solutions. It told workers that progress would be made stepwise, at great effort, and that a persistent, unremitting care would have to be paid to a discipline of cleanliness. So it is with software engineering today.

Wow, this is a really powerful metaphor for me. It makes me think of Bret's "Future of Programming" DBX talk where he makes fun of how little progress we've made since the 1950s. But what if that's because back then there was so much more progress to be made? What if we've reached a plateu for *essential* reasons? What if the things we are trying to improve about software are difficult and take time, and would be better tackled slowly, and in the context of solving real world problems: that's where React and Cycle came from.

## Does It Have to Be Hard?--Essential Difficulties

### Complexity

He says programming has large number of states, side-effects, duplication, non-composibility. Seems like functional programming solves many of these problems.

### Conformity

I'm not sure if he's talking about conforming to other software or to people's requirements here. If software, then he's talking about composibility/modularity/abstraction again, FP topics. If people, then that's essential complexity and not a problem in my book.

### Changeability

Software changes much more than most products. Huh this is so obvious but I never thought about it. Along with the complexity section, he makes strong arguments for why software development is *better* than other engineering displines. It's just that we hold it to a higher standard.

### Invisibility

> Software is invisible and unvisualizable. 

Haha - this is directly attacked in Learnable Programming.

## Past Breakthroughs Solved Accidental Difficulties

### Unified programming environments

Yeah, Unix really did get composibility right. It's like Haskell without the types.

And that's what stinks about Unix: it's all one datatype: text. Unix with good types, a Haskell based OS, that would be cool.

## Hopes for the Silver

Lol, Ada.

## Reflections

His main argument is that in order to argue for a silver bullet, one must argue that 9/10 of the time programmers spend is on accidental complexity.

> An order-of-magnitude gain can be made by object-oriented programming only if the unnecessary type-specification underbrush still in our programming language is itself nine-tenths of the work involved in designing a program product. I doubt it.

This is compelling. But a false way to analyze this. It focuses your attention on the *activities* of programmers, instead of on their *outputs*. If, for example, there was a one-button way to take an application from someone's brain and encode it to a binary program, that would be a many-order-of-magnitude shift in productivity. 

Or another less crazy example is that building a in-browser text-editor is accidental complexity, only in the context of being able to use CodeMirror as a drop in solution. 

In other words, essential vs accidental complexity is *context-dependent* in that it depends upon what you have to build upon.




<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>

