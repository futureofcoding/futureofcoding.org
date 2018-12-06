---
title: Kill Primitives
---

# Kill Primitives

* TOC
{:toc}


## Problem

### 1. Overloading 

Let's say you want a function that inputs a number. If it's even, it returns the square. If it's odd, it returns the input number unchanged.

In APL, you'd implement this function as:

```apl
f←{⍵*(2-2|⍵)}
```
[Link](http://tryapl.org/?a=f%u2190%7B%u2375*%282-2%7C%u2375%29%7D&run)

(In APL, `⍵` is the input, `a*b` is a to the power of b, and `2|x` is x modulus 2.)

In JavaScript, you might implement this as:

```javascript
function f(x) {
  if (x % 2 == 0) { 
    return x^2 
  } else { 
    return x 
  }  
}
```

... hmmm not able to make the point I want here...

### 2. Booleans too general (fka "kill booleans")

What are the possible results of `a == b`?

`True` or `False`? Wrong! 

It's `Equal` or `NotEqual`.

Of course, I remember in Java, you'd use the compareTo method and it was super annoying because I could never remember what -1 or 1 meant. Of course, that's what I'm getting at here. -1 and 1 don't mean what we mean. We mean `LeftBigger`, `Equal`, or `RightBigger`. In fact, we really shouldn't even need the call to compareTo to express this. Instead you could just express it as a series of case-statements... but now I see how nested this could all get...

And, of course, there's the open question of how to do boolean algebra in a world without booleans. For example if you want to express:

```javascript
(a == b) && (c == d)
```

Tricky... && and || and ! are super concise and powerful. How to replace them without getting overly nested?

It's important to realize that this whole idea is to increase verbosity, so it'll be more keystrokes than one or two, but that's not a problem in a solid IDE interface.

### 3. No if-statements, just pattern matching

It always annoyed me that Haskell has pattern matching and also if-statements. Is there a way to define types in such a way to rid ourselves of if-statements. 

Example, I want to do the function from above. In order to do it in Haskell, I have to explain how integers come in two types: even or odd. I guess it could just be a function from int to Even or Odd.

```haskell
f x = f' (intToEvenOrOdd x)
  where 
    f' Even = 
    f' Odd = 
    intToEvenOrOdd x = ... need `if` here
```

I guess the distinction between if-statement and pattern matching is that if's do computation and pattern matching takes advantage of the inherent typed data structure. (TODO is this right?)

Of course, I could represent this recursively without an if-statement by defining all numbers as S-expressions and recur until I get down to the bottom, but this would be tedius to implement and probably slow in runtime.

Except maybe this is the key... if we have *inspectable* representations for everything -- as opposed to some magic number implementor in the hardware -- maybe we could achieve "turtles all the way down" as well as the abolishion of if-statements.

Some posts relevant here...

* https://blog.deprogramandis.co.uk/2013/03/20/if-statements-considered-harmful-or-gotos-evil-twin-or-how-to-achieve-coding-happiness-using-null-objects/
* http://michal.muskala.eu/2016/01/04/if-considered-harmful-or-is-it.html#fnref:nil-variable
* https://haacked.com/archive/2013/11/08/death-to-the-if-statement.aspx/
* http://michaelfeathers.typepad.com/michael_feathers_blog/2013/11/unconditional-programming.html

But the one that originally inspired this idea: https://francescocirillo.com/pages/anti-if-campaign

### 4. Phsyics units for numbers

Maybe the problem with the above examples is that they are too toy. The whole point of this essay is that we need more specific types, which is hard with abstract problems with numbers. Before I think of a more traditional programming-based example of this (TODO), I want to explore how this idea could be used to explore physics problems. I remember in physics class that I would allow the units in an expression to guide its meaning and what I could do to it (what I could multiply or divide it to get what.)

## Problems

### Types-first is hard

Part of what makes primitives fun and easy is that you can get started right away without having to worry about the interfaces and excessive formalism. Concrete than abstract, remember?


## Related Work

Conal Ellot's denotation design. [This article was helpful in accessing it](https://lukepalmer.wordpress.com/2008/07/18/semantic-design/).



<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');
</script>


