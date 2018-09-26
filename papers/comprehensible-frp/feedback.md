---
title: Feedback on Explicitly Comprehensible Functional Reactive Programming
---

# Feedback on Explicitly Comprehensible Functional Reactive Programming

* TOC
{: toc } 

## Review A

Overall merit: 3. Weak accept

Reviewer expertise: 2. Some familiarity

### Paper summary

This short paper contrasts two FRP architectures: Elm's single reducer that applies to the whole global model, and Reflex's multiple local reducers that apply to more explicit sub-states.
The main section of the paper compares the implementation of a *TODO-MVC* application focusing on the behavior of the list of *TODO* items.
In Elm, the implementation is scattered across the whole file and requires `CTRL-F` queries to understand the behavior as a whole.
If Reflex, the behavior is self-contained in a single portion of code.
The paper then discusses the tradeoffs between the architectures with respect to dependencies, familiarity, easy of reading and writing, and serialization.

### Comments for author

The paper raises an interesting discussion about what would be the best architecture for FRP applications.
I'm not an expert in FRP but could understand the central discussion and main arguments in the paper.
However, I believe the text could introduce what is described as the fundamental difference between the languages, namely high-order and cyclic streams (also the concept of Dynamics).
Furthermore, the text does not discuss *why* these features are necessary to maintain explicitness in FRP.

In general, the examples and explanations are too short and demand more familiarity with Haskell (specially for the examples in Reflex).
For instance, from the example, I could not fully acknowledge the phrase "In Reflex we use stream combinators to define the model and view as streams of each other. The single global I/O cycle of Elm becomes a number of cyclic definitions between model and view streams in Reflex."

The TODO-MVC example focus on understanding what are the pieces of code that affect the "entries".
What if we wanted to know what a specific message may affect in the program?
In this case, the implementation in Elm would be the one to provide the answer without a "CTRL-F".
Why is this question less important (or irrelevant) than the one raised in the paper?

One aspect that the Reflex's architecture seems to be superior is on lexical scope: "There’s also a subtler way the Elm Architecture undermines explicitness: each piece of state can be modified in terms of any other piece of state. There’s no explicit isolation between independent states."
This aspect is not further investigated in the paper.
I wonder how a short-lived object such as editing an entry in the list would be implemented.
I suspect that Elm would require some form of explicit state machine in the global state that Reflex could somehow avoid.

The section on related work seems to be quite incomplete.
The paper only provides 4 references (one is a Wikipedia entry which is not peer reviewed).

If the paper needs more space, I believe Section 7 on future work could be removed.

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

## Review #7B

Overall merit: 3. Weak accept

Reviewer expertise: 2. Some familiarity

### Paper summary

This paper discusses shortcomings of Elm as an instance of a state-of-the-art model for FRP when it comes to scalability, modularity, and thus, comprehensibility. It constrasts the by now standard Todo and counter applications written in Elm with the Reflex library for Haskell.

### Comments for author

This is a nicely written position paper. However, it offers little in terms of vision - the authors themselves note what I felt while reading the paper: that reading Reflex code right now might be more annoying than scanning through a larger swath of Elm code.

That being said, the points the authors make are valid: while readability (and, to some extend, modularity) issues with Elm could be fixed with static analysis and better tooling, the reality is that other FRP libraries are inspired by Elms way of writing code, but not its statically analyzable nature and something needs to be done to help those systems. I would have liked more discussion towards what a "best of" of a JS FRP library and the Reflex library could look like, beyond mentioning a few visualizations and tools that the author deemed interesting.

This leads me to another problem of the paper: references to related work. The paper reads a lot more like a blog post than a paper, with fairly ad-hoc references to other systems and tools, with no reason given why these were mentioned in preference to others. It feels very much like the author simply tried both languages and wanted to write down some thoughts before they forget them. I'm not saying such comparisons cannot be useful - but the paper just doesn't offer much supporting evidence that the problems the author identifies are major problems in practice (I think they are - I just think that this isn't as unconditionally accepted in the community as to not need further evidence).

Minor typo: Section 7.2 first word: it -> in

Figure 7 is too pixelated to read.


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


## Review #7C

Overall merit: 3. Weak accept

Reviewer expertise: 4. Expert

### Paper summary

This paper offers a qualitative comparison of the software engineering
properties of GUI applications implemented in Elm using the Elm
architecture with those implemented using Functional Reactive Programming in
Reflex, a Haskell-based implementation of FRP. The paper presents a detailed
tutorial walk-through of implementations of the classic "TodoMVC" example
implemented in both systems, and then explores how well each implementation
supports programmer understanding of the resulting program by reading the
source code of each.

### Comments for author

The tutorial walk-through of the simple counter example for both systems
is well written, and the authors
raise a number of excellent questions about modularity and scalability
properties of programs written using the Elm architecture. However,
the core ideas in the paper just weren't explored in enough depth for me
to recommend acceptance.

The core argument here seems to focus on "explicitness", arguing that Elm
allows any view component to emit any message, requiring that the programmer
read the entire application program to gain a complete understanding of
how different parts of the program interact. In contrast, FRP requires a
single expression to define every signal (Behavior or Event stream), enabling
a more localized analysis to understand the inter-dependencies between signals.

The main thing I would have liked to see explored in more depth is some
concept of *components* formed from primitive GUI elements, and then
explore how those components are *composed* into a larger application in
both Elm and Reflex. A pattern for component composition in Elm is given
in the Elm documentation at
https://www.elm-tutorial.org/en-v01/02-elm-arch/06-composing.html
This could be demonstrated by (for example) taking the basic Counter
app used as an example in this paper, treating this as a component,
and then constructing a larger application that allows the user to
edit a collection of counters, perhaps by providing buttons to add, remove or
re-order components.
How would such composition work out in Reflex, and how does Reflex compare
to Elm in terms of modularity and abstraction of internal state for each
component instance?
(A follow-on question that might be interesting: What if we wanted to
abstract this notion of a general-purpose collection editor for any
underlying GUI component (i.e. not just counters).  Is that kind of
abstraction possible in Elm and Reflex?)

The paper seems to be taking a step in the direction of exploring components
and component composition with the diagrams
shown at the end of the paper. But frankly, while it was straightforward
to map the Elm diagram to the implementation, I had a difficult time
understanding the Reflex diagram, and how this mapped to the Reflex
implementation. It looks as if the box labeled "taskEntry" is
a kind of component with its own internal state. But this diagram is
never adequately explained in the paper, so it is difficult to be
sure.

More detailed comments:

- Sec. 1, Para 1: "which lines of read" ==> "which lines to read"

- Sec. 2, last para: "simulating a global bag of mutable variables that change
over time": I'm not sure this charge is really justified; arguably the
reducer provides a more controlled single entry point for calculating
model updates.  To justify this claim, we'd need to see a larger example
with multiple models and reducers and make the case that messages can
really flow from anywhere in the application.

- Sec. 3, para 3: "...not in the order they are 'evaluated'. There is no
explicit evaluation order here."  I think it might be better to just
directly mention that these are recursive monad bindings, and cite
Levent Erkok's paper on the topic.

- Sec. 3, bullet list, `<$` operator: mention that this is the `bind`
operator from Yampa or `-=>` operator from Fran.

- Sec. 3, para 4: "However this architecture does not properly scale": It is
not clear there is a scale issue here. The following text seems to explain
a straightforward generalization to make the code more flexible by supporting
an additional feature; this doesn't really suggest a scalability problem.

- Sec. 4.1, last para: "only to comprehend only" --> "to comprehend only"
(duplicated "only")

- Sec. 4.1, lasta para: "Explicitness is lost ...". Is this about explicitness
or modularity?

- Listing 3: label: "Elm TodoMVC" --> "Reflex TodoMVC"

- Sec. 5, para 4: "The Elm architecture reduces coupling". Worth defining
"coupling" here.

- Sec. 6: This related work section seems thin, and doesn't include any of
past efforts on FRP-based GUIs, such as reactive-bannana-wx or threepenny-gui.

- Sec. 7.1:  I am dubious about the relevance of this section.  While
visualizations can be helpful debugging tools, I'm not sure it's central
to the argument being put forward in this paper.


## Takeaways 

(Created with [Jonathan Edwards](/notes/jonathan-edwards/09-26-18))

1. Make it clear why higher-order and cyclic streams are neccesary to maintain explictness
2. Discuss how Redux can be converted to Elm, but not the reverse. Elm is more "powerful" but less structured. Less information is encoded in the semantics.
3. Beef up discsussion about lexical scope in Reflex and how it beat Elm's notion of components because it doesn't have modularity.
4. Beef up related work section and references: Fran, Yampa, Experience Report FRP in DOM, maybe reactive-bannana and threepenny-gui, remove Wikipedia
5. Make fig 7 less pixelated and explain it more, or remove it
6. Define "coupling" (or use "interdepencies"), "explictness" (and why it's important), "modularity", "composibility"
7. Relatedly (to 6), define "comprehensibility", possibly in terms of interdepencies between data/state, possibly with "static" and "explicit"


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>