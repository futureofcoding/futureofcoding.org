---
title: Tentative derivation of compositionality as the primary subgoal of PL/HCI design
---

# Tentative derivation of compositionality as the primary subgoal of PL/HCI design

The ultimate vision of many PL/HCI idealists is a lang/env that maximizes human expressivity/creativity over computation. Why can't more people have their computers do more of what they want?

Most (interesting) computations are very complex (in the essential complexity sense). So complex, in fact, that the bottleneck is the working memory of the human brain. Creativity creeps along at the pace determined by how many of ideas can fit in the human brain at one time

Operation management teaches us to maximize said bottleneck. We can maximize the capacity of the human brain by utilizing compression. I mean compression in the classic lossless CS sense: reduce space by eliminating statistical redundancy

This is the proper foundation for DRY: replacing occurrences of repetition with a single element, so more details can fit in a human brain. In this way abstraction is compression.

But instead of the classic CS compression of bytes, here the right level is bigger units. Our brains have already compressed letter sequences into words, which point to even larger complex ideas. For example the letters s i n e in sequence isn't 4 letters in my brain but the one idea sine trig concept.

In other words, we want to compress at the level of concepts, because we can then leverage all existing concepts in the brain

In order to abstract out a repetition, we must be able to make some sort of meaningful _equivalence_ between occurrences, so languages that augment equational reasoning allow for decomposability. 

For example, width+1 and height+1 are equivalent in the +1 sense, so we can abstract out the +1 to a function inc(), leaving us with inc(width) and inc(height): three things where we had four

Notice this is much harder than determining the repetitions in hello (the l's). Luckily, the kind folks of category theory have developed tools for recognizing and capturing the similarities of abstract structures. This justifies what might seem overly obscure topics like functors and monads. 

(find the paul chiusano retweet that sparked this as well)

Math and science aren't more true perspectives. They are more build on toppable ones. Shoulderable ones in the giant's sense. Which is why math is a good foundation for programming where collaborative construction is key, but not --- The unreasonable effectiveness of mathematics in the natural sciences (1960) [pdf] (www.maths.ed.ac.uk)