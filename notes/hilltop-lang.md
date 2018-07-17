---
title: Hilltop Lang Review
---

# Hilltop Lang Review

_07/17/18_

On July 6, 2018 I got an email from Dan Swirsky, a patent attorny and part-time programming language enthusiast, who is working on " a new reactive language-type paradigm, an IDE design that uses a structure editor, and a language that is super simple and super readable." I agreed to review his langauge and post the review on the site. You can learn more at [https://hilltop-lang.org](https://hilltop-lang.org).

<iframe width="560" height="315" src="https://www.youtube.com/embed/594gwzvxnd0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I'm particularly impressed with how complete this demo is, given a photoshop-based prototype. A common failing of PL creators, myself included, is implementing in code too soon. I wonder if it would be useful to create a more interactive demo through a prototyping tool, such as [proto.io](https://proto.io/), which would allow the linking of these screenshots via click hotspots.

The language seems to be somewhere in the Smalltalk-family of languages. Some common attributes:

* programming via context-sensitive menus
* objects have default values, which can be overriden as reactive values, defined in terms of other objects' atributes

## Programming via context-sensitive menus

![image](https://user-images.githubusercontent.com/2288939/42830651-14032888-89ba-11e8-9fa4-6edb93b0ed60.png)

This type of environment reminds me of Bret Victor's ["Interactivity considered harmful"](http://worrydream.com/MagicInk/#p153). There's such little information on the screen at any given time. 

I prefer showing more information on the screen, like the [aprt.us](http://aprt.us/editor/) editor does:

![screenshot 2018-07-17 at 12 14 01 pm](https://user-images.githubusercontent.com/2288939/42830943-ff6a9086-89ba-11e8-98f5-72a8d6ec8adf.png)

## Watchers

In Hilltop Lang, events are triggered by watchers, which watch for attribute value changes. I find that this mixes metaphors a bit, but is a reasonable design decision.

A project in a similar spirit, [Interstate](http://interstate.from.so/), has a very compelling user interface that makes use of regular events and state charts:

![screenshot 2018-07-17 at 12 17 45 pm](https://user-images.githubusercontent.com/2288939/42831146-8fdb16d6-89bb-11e8-990c-c76bb7ee26a0.png)

## Code Readability

I found the code, such as in the [ToDoMVC example](https://docs.google.com/document/d/1-QK7ENEEGPkGRCEyV1cK78jbxCh0Q_d2f0quDJ2AiC4/edit), to read much like HTML with inline CSS and JS. I am a fan of an integrated langauge like this.

## Inheritance

In the Programming with Hilltop video, he shows how to create piano through the creation of a `rectPianoKey` template. I find myself not particularly excited about OOP-style inheritance in general, and perfer more explicit sharing of attributes in the form of passing aroung "attribute bags" (called various names, depending on the language, such as "dictionaries", "hashmaps", "objects").

## Structured editor

As far as structured editors go, I have yet to see one besides Scratch be particularly successful. This one reminds me of [ElmJr](https://itunes.apple.com/us/app/elmjr/id1335011478?mt=8). Along with the integrated nature of the UI language (all one language, not seperated into HTML, CSS, and JS), this leads me to think Hilltop would lend itself well to beginner programmers, as well as coding on touch devices, such as iPads.


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');
</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>

