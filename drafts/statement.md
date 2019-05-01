# Steve Krouse Research Statement

_4/25/19_

## Motivation & Context

It is a loss every time someone want to customize the software they use but cannot. It is incredibly confining that we cannot fluidly mix and match pieces of functionality to better suit our purpose.  It is a unnecessary drudgery when someone wants to leverage automation but cannot. It's so limiting that the only way to justify the inordinate cost of software features is mass adoption. It is a daily tragedy that millions of ideas to improve our individual and collective virtual worlds aren't even conceived, because people don't waste time thinking up improvement they have no possibility of causing.

As wonderful as computers are, they have so much unrealized potential. As Seymour Papert says, "The computer is the Proteus of machines. Its essence is its universality, its power to simulate. Because it can take on a thousand forms and can serve a thousand functions, it can appeal to a thousand tastes." Yet the infinitely fungible pixels we spend all our time looking at are less malleable than the physical world. We have to content ourselves with lowest-common-denominator tools on a device that is flexible enough to power any system we can dream up. Alan Kay laments that "the _real_ computer revolution hasn't happened yet."

My aim is to make software fully *malleable* to empower all users of computation to better *augment* themselves and their communities with high-quality ,*bespoke* tools, while at the same time leveraging *deeper levels of open-source collaboration* to share the best innovations as widely as possible. As a secondary effect, I hope that empowering people to customize their virtual worlds will manifest as a _Precisionland_ (a la Papert's _Mathland_) that will be a natural place for billions of people to assimilate powerful ideas and other augmented thinking abilities.

My perspective was shaped by learning Logo, Scheme, and Haskell as a child, and then finding Bret Victor in college, which then led me to Alan Kay, Douglas Engelbart, JCR Licklider, Chris Granger, Jonathan Edwards, Paul Chiusano, Conal Elliot, Cyrus Omar, all of the guests on my podcast, people I met through Twitter, and the wonderful people of the Future of Coding Slack community. You can [learn more about my context here](https://futureofcoding.org/about#me).

## Theory of Change

While it'd be a mistake to too closely pattern myself on the successes of the past, it's also important to be explicit about my *theory of change*, or what *lever I plan to pull* and how I imagine its effect taking shape. Large, positive innovations in technology have come in all shapes and sizes:

* **Startups**: Apple, Microsoft, Amazon AWS, NeXT, Lotus, Salesforce. Mathmatica, Notion, Coda, Luna, Glide
* **Non-profits**: Mozilla, WWC, Wikipedia (which started as a for-profit startup)
* **R&D Labs**: Xerox PARC, Bell Labs, Protocol Labs
* **Academia**: LOGO, Haskell, Scratch, Scala, Jupyter Notebooks, 
* **Military Funding**: ARPANET, "Mother of all Demos"
* **Open source**: Linux, Python, Ruby/Rails
* **Tinkerers / collaborative circles**: steam engine, Wright Brothers

### Academia Unbundled

My current strategy is to do an "unbundled" version of academia, mixed with a strong collaborative circle on the Internet. Down the line, I see possibilities to either spin-off left into a non-profit or right into a startup. I don't have any plans to obtain military, NSF, government, or other grant funding. I'd definitely be open to working at an R&D lab, like Protocol Labs, but that's not currently on the table.

What I mean by "academia unbundled" is copying many of the academy's practices but without formally enrolling anywhere. I plan to copy: 

* Having an adviser (Jonathan Edwards)
* Publishing papers in conferences (and maybe journals), about one per year
* Working up to something akin to a "PhD thesis"

By doing academia in this self-styled way, we avoid:

* Applying
* Moving
* Going to classes
* Teaching
* "Paying dues" (working on other peoples' projects, and other drudgery)

But also have to do without:

* Legitimacy
* Being forced to do things that I would be thankful for in retrospect

## 5-Year Goals

The goal of my "PhD thesis" is to prototype and demo a system that plausibly points towards a vision of malleable, empowering, and collaborative computing. Like Douglas Engelbart did at "The Mother of all Demos", I aim to "deal lightening from both hands." The demo will show:

* How simple customization to ones' running software can be quick and easy.
* The ability to replace pieces of functionality in a systems with other pieces of functionality.
* A compelling story for managing and merging widely-branching variants of functionality. 
* The ability to mix and match existing functionality, hooking them up to rapidly create a new amalgamation of functionality for personal or collaborative use.

After watching the demo, people should be inspired to think up all the ways they could customize or build their own tools and workflows to better suit themselves and their communities. They should return to "normal life" constantly dissatisfied with their disenfranchisement to put their newfound continuous stream of ideas into practice. They will also be awed by how much better and cheaper software could become if we could unleash the power of full collaboration, akin to the wave of innovation powered by open-source software.

As long as we're dreaming here, I would want this demo to sit at the top of Hacker News, r/programming, and other tech sites for the day, getting thousands of upvotes and comments. The paper that goes along with this demo, co-authored with Jonathan Edwards, would get accepted to a reasonably prestigious conference, such at Onward!, and it would inspire other work and be cited well. Of course, a true marker of success would be if people "stole" the work and incorporated it into their systems.

## Related Work

This dream is closely related to the field of end-user programming (Nardi, Lieberman, Webstrates), including the most successful end-user programming environment the spreadsheet (Forms/3),  HCI work on customization of user interfaces (links), and the Smalltalk language and operating system. Recently, Ink & Switch has been working on a system called Farm with similar goals to personalize software.

Additionally, there has been a lot of work in industry on "app builders", such as Bubble, DropSource, website builders, such as Webflow, prototyping tools, such as Facebook Origami, and BaaS platforms such as Firebase and Parse.

I also plan to draw on denotational semantics, functional programming, reactive programming, and the mathematics of composibility (category theory, type theory). TODO contextualize: Conal Elliot's work on FRP, Gniess, Statecharts, stream vizualization debuggers, and distributed semantics such as ScalaLoci.

## Thesis

* the key is building bigger things out of smaller things that are interchangable
* things should be as independent as possible
* all relationships/interdependencies should be explicit
* 

## Composibility

The heart of this project is composibility / modularity. It's key to understanding and customizing small parts of existing projects, as well as to mix and match pieces of functionality created independently,which unleash the explosion of creativity that this multi-level open-source would allow.



## PX of Programming

* Palletes/GUIs everywhere
* Immutable Editing
	- one multiverse
	- definitional definitions in terms of all influences
	- no definitions? just subexpresions via edit semantics, recurisvely?
	- terms are just terms (no definition, they are themselves). you can then specify compute/storage/runtime to eval
	- an evolving definition is a starting definition and then all the ways that future definitions might appear, maybe of same type or different (higher-kinds?)

## Prototyping Tool

It has remained a "holy grail" problem to allow non-programmers, such as designers, to fully customize the look-and-feel and interactive behavior of user interfaces.

a, x, y, t, hardware, random => b, B/E hardware

## Composable Backend

* Another "holy grail"
* E/B => E(E/B) for two points in time, but Conal urges against but I wonder what would happen if augmented with the right Editor

https://github.com/stevekrouse/futureofcoding.org/blob/d94466ff52c8bce66796347ac4d86f974a8e7ab3/drafts/dctp.md#multi-node-dctp-potential-draft-2


---

## TODO

* finish watching mother of all demos https://www.youtube.com/watch?v=yJDv-zdhzMY

* http://pchiusano.github.io/2017-01-20/why-not-haskell.html (and https://keep.google.com/#NOTE/19E9vy_KEQPhV20jOMXF4loIxGQnzjXg8zZuDm12FMyWxBXdyFjK8Miy91MnvEUz_pTgt, inspired by https://twitter.com/jasoncrawford/status/1114198663436234752)
* http://www.klokmose.net/clemens/wp-content/uploads/2010/10/a29-tchernavskij.pdf
* http://www.klokmose.net/clemens/wp-content/uploads/2016/06/webstrates-hm.pdf
* http://www.klokmose.net/clemens/wp-content/uploads/2015/08/webstrates.pdf
* http://www.altocumulus.org/Fudgets/Intro/concept.html
* http://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf
* https://www.ics.uci.edu/~redmiles/ics227-SQ04/papers/Hypertext/Primary/p31-nelson.pdf