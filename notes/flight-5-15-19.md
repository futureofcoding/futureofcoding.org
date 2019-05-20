---
title: Flight Notes 5/15/19
---

# Flight Notes 5/15/19

\t -> 
\mouseStreams ->
\keyboardStreams -> 
\cameraStreams -> 

\cpu?? ->
\screen?? ->

Abstract over hardware
Logical, mathmatical relationships
Plug and play able (de and re composable)

I have a bunch of inputs (via hardware), such as camera, mouse, touchscreen, cpu units, internet connection, Bluetooth, battery (power or just level?), fingerprint sensor, accelerometer
I have a bunch of functions I can saturdate with hardware to produce all sorts of outputs, which I can choose to direct into outputs, such as screens, speakers, vibration, camera light

Assumptions:
  - start, stop
  - CPU's, RAM, filesystem, battery power
  - screen, mouse, keyboard, etc
  - sequential evaluation
  - mutability
  - instantaneous RAM access and maths

Good design would allow us to be as abstract as possible about hardware so as to allow easy substitution. For example, if you want mouse clicks, you can say Event (x,y) so it works with mouse, touchscreen, etc. If you want Behavior (x,y), you can similarly constuct it from a default (x,y), the next finger drag, and hold until the next finger drag (or some such computation over tough screen input). I'm not sure how we'd scaffold such type conversions. 

All hardware are functions from power over time to something. 

The easiest way to snip the recursive knot would be an allocator that runs on a separate array of hardware which can direct the inputs and outputs. (Of course it in turn could be controlled by another allocator so it's turtles all the way down.)

Can we handle all the explicitness through clever editor UIs with smart defaults that are expandable? It must be unbelievably easy to discard parts of an output or a type and also to covert between types (plumbing); live values always at every computation will help with this. 

A thing is itself. It don't change
Things in the world change. 

Counting clicks. 
Persist in X place for Y time the count of events produced on merge Z hardware, connected to via A connections

Motivation is expressivity. Unleashing the potential of currently-unexpressable thoughts. 

Research 3 hours every morning
3 hours lunch, email, run
2 hours work

Need to find a way in 2 hours per day to earn increasing amounts of money. 

5*2*52*175 = $91k pre tax money

Increasing hourly rate can get me to

5*2*52*400 = $208k pre tax money

Another way is PE consultant for IT shit like Dan Shipper suggested 

Ideally aligned with mission

Build podcast / community into business, paywall or bigger Patreon (10k * 12 = $120k pre tax)

Consulting with VC firm on emergent technology, maybe even publishing research

Getting grants or sponsorship for research

Going into academia

Starting a nonprofit research lab

----

Starting a OS company (almost basic science). Could do andriod model of open source but paid for liscening or collaborating with OS or hardware companies. 

works with polygot hardware devices via adapters. 

The bottom most layer is the theoretical semantics, then the C code (or whatever) that runs the first supervisor and adaptors. 

Initially the supervisor has the simplest UI of just accepting pre configured semantics and running it. 

We'd then bootstrap the interface for expressing semantics via the supervisor itself. This would allow it to be later modified by others - we would expect there to be some really interesting innovation at this layer by the community, probably consolidating around various "patterns" or "standards", so it'd be important to epouse the culture of chasm crossing as key no matter our perspective. 

Metaphors:

Turing machine, hindley milner --> semantics that will be way to verbose on paper like FRP but also the hardware input and output stuff 

Low level operating system, C compiler, language interpreter --> piece of code to run on specified hardware, hooking up relationships

text editor --> Interface for constructing code 

bash shell --> interface for specifying hardware into and out of code (likely integrated with the one for constructing code, so we have have live values flowing through while constructing)

High level OS interface --> many different ways of constructing the base UI

Apps --> de- or partially- hydrated functions/expressions from hardware to hardware over time (all interfaces above low level hardware are apps/expressions)

--------

A Behavior X must live in some hardware (powered by time power over time) over time, and can be referred to as such over some connection. 

Basically in shoving all ugly parts of code to the outer edges so the inner ones can be beautiful. The closer you get to the edges, the uglier things are. 


----

What about mutable identity? Really about referencing, resolution

What about social applications? Model the cloud as a series of high availability hardware devices?

What about Blockchain or peer to peer like dat or ipfs? Can people put $$ into the types of what resources cost which you can authenticate via cryptocurrency? (Movie from someone on plane. We can even encode the legal rights somehow so you can show on the blockchain that you have paid the appropriate person for selling the movie to another. Maybe it even requires that you spread around that payment to X others before decoding the movie data for your screen.)

Can we give variable resources to apps/expressions depending on their output or resource consumption? Loopy!

Compare and contrast to Dynamicland, Smalltalk, STEPS

Related to effect types?

----

Hardware devices would like give analog and digital output depending on the device. Default to giving most at edges and then add converters to integrate into a more abstract system. 

---

Not expressivity over computation but over machines: expressivity of machines. 