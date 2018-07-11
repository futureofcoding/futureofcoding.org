---
title: Abstractions are leaky, and for sissies
---

# Abstractions are leaky, and for sissies

_July 4th, 2018_

Explaining what I do at parties is a common source of frustration. It's almost impossible with non-programmers. You’d think it’d be easier with my fellow coders, but it’s not by much.

At a recent party, I was explaining how my goal is to create a programming language for creating front-end interfaces that’ll be better, easier to use than, say, React, Elm, CycleJS, etc.

My friend, let's call him Dave, replied, "But what will be the limitations of your language? What can't it do?"

"Um, it should be able to do anything you want," I replied. "It'll be Turing Complete and all."

"Yeah," he said, "but it won't be fast enough for certain things. You're building an abstraction and they’re always leaky, so people will need to know what they can't do. Otherwise they’ll have to learn the lower level details, which defeats the purpose of an easier language."

I was shocked into silence. I couldn't believe the anti-abstraction rhetoric I was hearing.

He continued, "All the interesting things people want to do with computers require low level languages. Think about it. You can never make a abstract language that can do the cutting edge in software."

"Ok," I said, willing to concede the point, "I'm not too worried if my language is too slow for cutting-edge algorithms. It'll still be fast enough for most people doing most things."

He smirked, having ensnared me in his Socratic trap, "Then it's not really a programming language. It's just another limited abstraction, like Squarespace, that people will have to leave if they want to do anything novel."

Eyeroll. Paul Chiusano has a great response to people like Dave:

> There are a couple unspoken assumptions here that don’t hold up to scrutiny—one is that abstraction is in general not to be trusted. We can blame Spolsky for infecting our industry with that meme. A little reflection on the history of software reveals abstraction as the primary means by which humans make increasingly complex software possible and comprehensible. Hence why we’ve moved away from assembly language in favor of high-level languages. Blanket mistrust of abstraction, to the point where we should actively avoid including means of abstraction in software technology, is absurd. 

(From [http://pchiusano.github.io/2014-07-02/css-is-unnecessary.html](http://pchiusano.github.io/2014-07-02/css-is-unnecessary.html))

The "reflection on the history of software" that Paul is referring to is best articulated in Bret Victor's [Future of Programming](http://worrydream.com/dbx/). He explains how Binary programmers initially resisted SOAP, and then SOAP programmers resisted Fortran. Richard Hamming relates the story:

> FORTRAN was proposed by Backus and friends, and again was opposed by almost all programmers. First, it was said it could not be done. Second, if it could be done, it would be too wasteful of machine time and capacity. Third, even if it did work, no respectable programmer would use it -- it was only for sissies!

People like Dave have always been the majority. “Abstractions are leaky and for sissies.” Why haven’t I gotten used to people like Dave by now?

Here's why. When I first got into the ideas of Bret Victor, I was at college. I quickly realized I was surrounded by people like Dave, and I (reasonably) concluded that I was one of the only people in the world to believe programming improvable. The same was true when I lived and worked in Silicon Valley, most programmers were like Dave. [The first episode of my podcast](http://futureofcoding.org/episodes/1-welcome.html) epitomizes how I felt:

> The vast majority of programmers don’t think about these things. They see the tools they use as a given. They don’t waste much time wondering if or how things could be better. Things are the way they are. The vast majority of programmings accept the status quo, work within it, and go home. 
>
> This podcast is not for such people. 
> 
> This podcast is for the dissatisfied, the complainers, the whiners, for the programmers that obstinately refuse to settle for the crappy excuse that we call programming today in 2017.
>
> This podcast is for the small minority of programmers that know things can be better. And not incrementally better, but drastically better. 

But here’s the thing. While I am in a minority in relative terms, say 0.1% of programmers, there are plenty of us in absolute terms. We feel entirely alone in the physical world where we’re all spread out, but there are more than enough of us to form a community online.

In the last year since my above rant, I've found my people, the community of "whiners" I’ve been looking for. And I talk with these lovely people a lot. Almost every day on Twitter and email. I’ve interviewed 17 people for my podcast, and chatten with dozens via Google Hangouts across many different countries and time zones. The Future of Programming slack group has ~80 members. And my [Future of Coding twitter list](https://twitter.com/stevekrouse/lists/future-of-coding) is up to 168. (And there are many more out there - just think about all the people at SPLASH, POPL, Strangeloop, and \<Programming\>!)

While we all share the same basic assumptions about how programming can be improved, that's not to say we agree on everything - quite the contrary. There's the BV Fan club, the Jonathan Edwards school of thought, the Haskellers, the Smalltakers, and the compile-to-JavaScripters. Some of us are ride-or-die for direct manipulation, while others believe we'll be stuck with text forever, and yet others try to placate both sides with projectional editors. Some believe in message-passing, others in the actor model, and others yet in various flavors of functional programming. And don’t even get me started on the divide between the interpreters vs the compilers. The debates are fierce and heated and wonderful. I've found my people and we have a lot to say to each other.

And then I step out of this vibrant online community and into a party in the physical world and Dave just doesn't get it, and I've forgotten how to get Dave.

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
