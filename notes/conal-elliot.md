---
title: Conal Elliot
---

# Conal Elliot

* TOC
{:toc}


## Haskellcast

> It’s important to me that you cannot look in a behavior and say like “when does it change (change in the sense of events)?” Because in order to answer that question One would need a more complex semantic model.  
> Now, many or most so-called FRP systems I see out there do have some notion of “when does something change.” And every one of those breaks the semantic model. 
>  
> It’s like you have arithmetic, right? So FRP is arithmetic for time-varying quantities of all sorts of types. By arithmetic, I mean some algebra, some set of operators that have nice laws, nice properties. And imagine if you thought of arithmetic as about compositional structure or about the express that you evaluated.   
>  
> If you added 3 and 4, can you tell tell the difference between that and what you get by adding 2 and 5? It’s very important to the laws of arithmetic that you cannot tell the difference. If you could tell the difference, then what you would have would not be a type of numbers with a nice set of operations. It would be something more like a type of trees or something like that. And there would be no interesting equational properties. And you’d have something very complicated. And you’d have to talk about your API instead of talking about... You wouldn’t be doing math, you’d be doing data structure manipulation. 
>   
> For instance every time you hear somebody talk about FRP in terms of graphs or propagation or something like that, they are missing the point entirely. Because they are taking about some sort of operational, mechanistic model, not about what it means.   
>  
> And what I see happen over and over is not only do people generate a complex model but they don’t know it’s complex because they haven’t looked at it precisely. And they thwart most attempts to do nontrivial optimization’s because they’ve exposed too much information. So I want to make it as abstract and useful as possible, so it’s simple for somebody to think about, and I can do radically different sorts of optimization experiments. 

* Push pull FRP: modern reformulation in applicative etc.
* Un-amb (used to pick between two algorithms that may work), Least upper bound, lattice, denotational semantics (Dana scott(deep)-chris strachy(simple, very useful) semantics)
  * Chris strachy wanted to translate from arbitrary programming language to lambda calculus to understand goto and loops with breaks (and he understood continuations). 
  * Denotational semantics: express lang as AST (recursive algebraic data type) and map to this language of functions. It's compositional: meaning of expression is meaning of sub expressions. 
* Denotational design for images: what is an image stripped from incidental complexity from technology or biology? Not rectangle, not pixels, not finite. What's left? Color varying over space. 2d Cartesian Space -> color. Then think about precise ways to explain transformations without breaking model abstractions. 
* Precision forces you to be honest about your simpliciy and adequcy. Otherwise it might be more complex. (CAN I USE THIS TO ARGUE REDUX IS THE WORST?)


## [Tangible Functional Programming](https://www.youtube.com/watch?v=faJ8N0giqzw&feature=youtu.be)

Functions as boxes and values as flowing across arrows: 
  * "It's an inherently first-order visualization. In other words, the visualization itself makes a hard visually syntactic distinction between functions and values. Ouch! What's great about functional programing is that functions are values..."
  * "... [with] visual arrows, with every composition, you get something more complex than what you had before. Complexity grows and grows and grows. Visual langauges are very sparse, rather than a dense notation. So pretty quickly you get swamped... You use up a lot of space not saying very much."

"Fudgets is a FP library done in Haskell by a couple of guys at Chalmers. Boy, almost anything interesting that's done with user interfaces and functional programming has something to do with Fudgets. It was an incredibly rich dissertation."

## [All FRP Blogs](http://conal.net/blog/tag/frp)

I skimmed a few of these, but they were confusing. Will need to come back at some point and finish...


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');
</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>

