---
title: Conal Elliot
---

# Conal Elliot

* TOC
{:toc}


## Haskellcast

* Push pull FRP: modern reformulation in applicative etc. Algebra for time varying values. Analogy: you can't say "when a reactive behavior changes" (once you build up an event such as red until mouse click then blue) but many FRP systems do this. It's like making a distinction between 2+5 and 3+4. Turns math into a tree datat structure manipulation and you loose lots of the properties. 
* FRP as a graph is too complex. Exposes too much info. Not abstract enough for optimization. 
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

