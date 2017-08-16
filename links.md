---
title: Link Research
---

# Link Research

## To Research

* http://witheve.com/
* [CycleJS Component Difficulties](https://www.youtube.com/watch?v=CU8jtb6UBGg&feature=youtu.be&t=46m15s)
* https://noflojs.org/
* google "streams as spreadsheet" and collect links here
* [Joe Edelman - citizen logisitics](http://nxhx.org/) and [Chatterbase](http://alpha.trycarbide.com/@jxe/6d5e19369ddb9cc4728510e11a3f7586)
* Look into Codd's relational calulus and relational algebra

### Unordered

* http://www.luna-lang.org/
* https://www.touchdevelop.com
* http://nxhx.org/
* http://wagn.org/
* Vi Hart
* [Maude](https://www.youtube.com/watch?v=mZE_Xv9qym4), which comes highly reccomended by Ezekiel Smithburg from the Future Programming Slack.
* http://worrydream.com/substroke/
* [ICFP 2012. Roly Perera: Functional Programs that Explain their Work.](https://www.youtube.com/watch?v=pqtqaL_ojpk&feature=plcp)
* [Pacific Northwest Scala 2013 We're Doing It All Wrong by Paul Phillips](https://www.youtube.com/watch?v=TS1lpKBMkgg)
*http://www.subtext-lang.org/
* Furure of Programming Workshop - http://www.future-programming.org/
* http://www.kenperlin.com/
* http://harc.ycr.org/flex/
* http://alpha.trycarbide.com/
* [Chorus](http://www.chorus-home.org/)
* Kite.com
* PureScript
* https://elixir-lang.org/
* http://www.eff-lang.org/
* https://personal.cis.strath.ac.uk/conor.mcbride/pub/Frank/TFM.pdf
* Idris
* http://conal.net/papers/Eros/
* http://tinyletter.com/Flowsheets/
* http://shaunlebron.github.io/parinfer/
* https://www.sourcetrail.com/
* http://www.clickteam.com/multimedia-fusion-2
* Unity
* https://www.scirra.com/construct2
* https://www.hyperpad.com/
* Thunkable
* https://powerapps.microsoft.com/en-us/
* http://www.ragic.com/
* http://www.chorus-home.org/
* Jet Brains MPS
* http://www.greenfoot.org/frames/
* http://flowlab.io
* http://embrio.io/
* http://harc.ycr.org/project/gp/
* [Tulip](https://www.youtube.com/watch?v=lvclTCDeIsY)
* https://www.pipes.digital/
* https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/
* http://www.memex.org/licklider.pdf
* http://web.media.mit.edu/~minsky/papers/TuringLecture/TuringLecture.html
* [Computer as Communications Device](https://www.dropbox.com/s/4td8aj5gglf4qfj/The%20Computer%20As%20A%20Communications%20Device.pdf?dl=0)
* http://www.red-lang.org/p/about.html
* https://cospaces.io/edu/
* Lively Kernal
* [Seymour Papert On Logo](http://el.media.mit.edu/logo-foundation/resources/onlogo/index.html)
* [Type Systems for Beginners](https://gilbert.ghost.io/type-systems-for-beginners-an-introduction/)
* [Types, Logic, Semantics, and Verification](https://www.cs.uoregon.edu/research/summerschool/summer15/curriculum.html)
* [Framer 3](https://www.producthunt.com/posts/framer-3)
* https://en.wikipedia.org/wiki/Prograph
* http://www.andescotia.com/products/marten/
* https://github.com/reflex-frp/reflex
* reasonML
* http://conal.net/blog/posts/reimagining-matrices

## Researched


* https://github.com/jamii/imp
  * Re-watched [Felienne Hermans "Spreadsheets are code lady" video](https://www.youtube.com/watch?v=TMIBfzSqguQ). Really amazing talk. One insight I had is that if you really want to make spreadsheets more like coding, you need to remove cell references. You can reference columns by their names and rows only by performing operations (filters, finds) on a range of rows. Cell references are the pointers of spreadsheets.
  * [Out of the Tarpit](https://github.com/papers-we-love/papers-we-love/blob/master/design/out-of-the-tar-pit.pdf)
    * the reason "closing and reopening" an app or computer is an effective way to fix things is because the software is mishandling state
    * They made a strong argument in 5.2.4 State and Modularity for no hidden state in components, because it's easy but not simple. (My only worry here is that we're losing abstractive power here because abstraction is all about hiding inner details.)
    * In 7.1 Ideal World... "It is interesting to note that effectively what we have just described is in fact the very essence of declarative programming - i.e. that you need only specify what you require and not how it must be achieved."
    * In 7.1.2 Control in the real world, "Clearly if the progrma is to every run, some control will be needed somewhere because things will have to happen in some order - but this should be nor more our concern than the fact that the changes are elecricity will be needed somewhere." Also: The synchrony hypothesis assumes that all finite and stateless computatinos take zero time so its immaterial whether they happen in sequence or in parallel.
    * 7.2.2 Ease of expression, "One possible sittuation of this kind is for derived data which is dependent upon both a series of user inputs over time, and its own previous values."
  * [The Declarative Imperative](http://db.cs.berkeley.edu/papers/sigrec10-declimperative.pdf)
  * [Imp Journal](http://scattered-thoughts.net/journal/)
  
* http://alarmingdevelopment.org/
  * It's pretty insane reading his "manifesto" how similar his ideas about the future programming are to mine a decade later http://alarmingdevelopment.org/?p=5 and http://alarmingdevelopment.org/?p=6
  * Lol, he referes to a Java Query library called JQuery in 2005, before JQuery is created the following year http://alarmingdevelopment.org/?p=16
  * I really like "no assembly required" as a tagline (instead of no installation necccesary)
  * It's interesting to see how much time he spends talking about the hot new company in this space, Dynamic Aspects, (like I do with Eve), especially because I live in the future and know they amounted to nothing
  * Turns out the idea of state as a reduction of history is an old one: "TeaTime radically unifies data and computation by reducing state to the history of communication. Objects interact solely be sending messages to each other. Objects do not have internal state. Instead, they record the history of all messages they have received. State is an illusion derived from the history of message receipts. Messages sends are a determinstic function of the history of received messages. This is an elegant purification of the original model of Object-Oriented programming, reducing it to the sequenced exchange of messages."
  * he has some interesting but over my head and not super intuative thoughts on branches (if-else) http://www.subtext-lang.org/OOPSLA07.pdf
  * Seems like Jonathan spent a lot of time writing papers and worrying about being accepted. 
  * I really like Alan Kay's idea to rewrite all of programming from the ground up, but I acknowledge that it's probably a bad idea because it's like when developers want to throw out their old code and re-write it but on a massive scale and that's a known bad practice (although, I think it usually works great when going from a bad framework to a good one).  http://alarmingdevelopment.org/?p=229
  * It's amazing and hilarious to see how he jumps around from ideas to ideas, from Subtext to syntax, to no syntax, to front-end, to backend web, etc. Really interesting to see what pulls him in different directions, the conferences he applies to, the trends at the time, the competition, his commentors, etc. It's really impressive and humbling to see how honest and vulnerable he is in these posts. http://alarmingdevelopment.org/?p=319
  * it's funny that he backs his way into a typed version of subtext to avoid things like incompleteness http://alarmingdevelopment.org/?p=351 (http://alarmingdevelopment.org/?p=358) as opposed to liking it for its own advantages like I and other Haskell people do. It feels similar to me when people add types to lamda calculus or set theory to avoid certain paradoxes.
  * A really fun post railing against people who think their langauge (LISP in this case) are annoying http://alarmingdevelopment.org/?p=422
  * "The Apes can’t prove their software is correct, and they seem puzzled by the very idea, as if they were being asked to prove correct a chair." http://alarmingdevelopment.org/?p=440
  * A good argument for 1-indexed arrays http://alarmingdevelopment.org/?p=470
  * References https://www.touchdevelop.com. Neat!
  * What a great quote: "The process of constructing instruction tables should be very fascinating. There need be no real danger of it ever becoming a drudge, for any processes that are quite mechanical may be turned over to the machine itself." – Turing, A. M., 1946, Proposed electronic calculator, report for National Physical Laboratory, Teddington
  * Wow, he also spends a lot of time switching languages and frameworks, from Java, to Scala, and back, to JavaScript, to Dart, etc, etc.
  * Good video discussion the pros/cons of static types and way to overcome them and still get the benefits of static typing while also getting metaprogramming https://vimeo.com/74314050

* http://www.expressionsofchange.org/
  * Undo could definitely be made more powerful http://www.expressionsofchange.org/the-power-of-undo/
  * Software changes over time are more complex than I thought. For example, database schema migrations, software packages and dependencies, build tools and containers
  * In order to truly have the expressiveness we want (and other expressiveness we don't even know we want yet), we need to have really composable abstractions about code changes. They must be a first class datatype. (If the code is really just a reduction of all changes, we have a ton of flexibility here.)
  * The ability to "copy and paste" a set of changes to your code is paramount. This is one of the main successes of the command line and failures of GUIs. Point and click is so damn imperative and full of side effects. We really have to get meta fast if we want our GUI to be as powerful as the command line.

* https://github.com/viskell/viskell
  * haskell programming as a graph
  * I don't usually find graphs compelling. I prefer blocks/structured editor approaches which leave the text closer to prose sentences for better reading. I'm not a computer so I don't like reading trees.

* [Conal Elliot - Tangible Functional Programming](https://www.youtube.com/watch?v=faJ8N0giqzw)
  * the dream: combine usability and composability (so like IFFT but at the right level of abstraction)
  * UNIX pipes with input and output text makes it easy to compose
  * I've already seen this video, I'm now realizing, he shows how to drag outputs into inputs in a GUI

* [Conal Elliot - Fran - Composing Reactive Animations](http://conal.net/fran/tutorial.htm)
  * Holy shit! This is like Reactive WoofJS (or the Elm game engine) but was made in 1998 in Haskell! He makes quick work of my "inital value problem": simply give a function all the arugments it needs, starting value, and rate of increase
  * Let me send this over to my friends at McMaster University to see if they've thought about making an Elm version...

* [Conal Elliott - The Essence and Origins of Functional Reactive Programming](https://www.youtube.com/watch?v=j3Q32brCUAI)
  * seperate design spec from implementation
  * FRP is about continuous time in the same way vector graphics are about continuous space
  
* [Conal Elliot - Denotational Design](http://conal.net/papers/type-class-morphisms/)
  * "The purpose of abstraction is not to be vauge but to create a new semantic level in which one can be absolutely precise." - Dijkstra
  * Peter Landin reccomends that "denotive" to replace ill-defined "functional" and "declarative". A langauge is only "denotive" if each expression only depends on sub-expressions
  * before you think about implementation... what are the main types, main operations, what do the types mean?
  * for example, an image is an assignment of colors to 2D locations
  * Turns out Images and Colors are Monads... I should probably understand Applicative, Functor, Monoids, and Monads more
  * I can't get one of his quotes out of my mind. He says that if we do it right, our abstractions will constrain us and disable us from getting certain kinds of information or doing certain things, such as counting how many computation took place on a given image. Part of me likes this non-leaky abstraction but part of me worries that it would be too constraining, and it makes me wonder if there's a middle ground somehow. I feel emotionally that if we had enough self-resembalance and designed our programming language in itself, we might be able to do it.
  
* [Luke Palmer - Semantic Design](https://lukepalmer.wordpress.com/2008/07/18/semantic-design/)
  * references Conal Elliott's work a lot
  * talks about picking the right abstraction and encoding it into types (similar to my idea to kill booleans)

* [Luke Palmer - The purpose of code is to be abstracted over](https://lukepalmer.wordpress.com/2010/01/24/haskell-antipattern-existential-typeclass/#comment-1017)


* [Loper OS](http://www.loper-os.org/?p=861)
  * I disagree. I think emacs represents the wrong model: spend a few hundred hours learning this system and we'll improve your brain-computer interface. Instead, why don't we 1) get better abstractions so we have less work (like Paul Chiusano says) and 2) build a more intuiative interface for everyone? 

* [Flowsheets](http://tinyletter.com/Flowsheets/letters/flowsheets-visualizations)
  * neat spreadsheet like interface for python computations

* [Ken Perlin on Chalktalk](https://www.youtube.com/watch?v=xuzrF_82z7U)
  * professor at NYU
  * making magic real with AR/VR. A combo of harold with a crayon and harry potter
  * he has a really interesting medium like Ivan Sutherland's Sketchpad that allows you to create and link together dynamic diagrams. It feels too good to be true, like it was over optimized for this one presentation. I want to see the code on github 
  
* [Jonathan Edwards: Two-way Dataflow](https://vimeo.com/97684085)
  * looks like this turned into [Chorus](http://www.chorus-home.org/)
  * his todomvc example isn't half bad, although I think the react, one-way databinding way that Cycle v2 uses is more in style these days
  * seems like Lamdu does a good job of implementing [his vision for easy-to-use static typing]https://vimeo.com/74314050)
  
* [Francisco Sant’Anna: Dynamic Organisms in Céu](https://vimeo.com/97687022)
  * seems similar to my idea of making a reactive version of Woof or an Elm game engine
  
* [Patrick Dubroy: Moonchild](https://vimeo.com/97711824)
  * I've seen this before. Neat project
  * Allow you to incrementally turn a code editor into a GUI editor, with things like color pickers. It'd be neat if we had this on woofjs.com, so students could see the color in their code and use the color picker right there.
  
* [Mark Mahoney: Version Control Optimized for Teaching and Learning](https://vimeo.com/97711978)
  * it's like seperate conversations for every change of code. So it's like github pull request reviews but on steriods.
  * You can get character by character playback, so it's very much like google docs in that way
  * I admire his goal -- enhancing commit log and explaining code and evolution of system
  * This is related to my idea of putting the commit message first, reversing things, but in a much better and granular way. TODO write up my thoughts here, particularly how you can nest things in a workflowy style
  * wouldn't it be neat if you could query by certain kinds of changes, like adding regex's

* [Bill Burdick: Leisure](https://vimeo.com/97713914)
  * blurs the line between viewing and editing websites
  * "brings the chrome inspector more center stage"
  
* [David Broderick: Kaya: Declarative Reactive](https://vimeo.com/97712270)
  * seems like he'd be a fan of Eve
  
* https://github.com/lamdu/lamdu/
  * really wonderful explaination of many of hte main points of my thesis http://www.lamdu.org/ and https://medium.com/lamdu-blog/designing-programming-languages-with-ides-in-mind-de890989dfa
  * while I still don't really understand even what I'm installing (is it a terminal app or a GUI app), it took me over an hour to install Lamdu on Cloud9, fighting with apt-get, stack, and generally waiting for everything to download and install. Clearly they don't have a sufficient appreciate of the cloud-based nature part of my thesis.
  * I found this wonderful video showing it in action https://vimeo.com/97713439. This video is like Paul's early demo's of Unison but more extensive! I'm blown away. I can't believe I didn't find this sooner. I want to submit a pull request to get them to put this video on their main page. Ok, just did... https://github.com/lamdu/lamdu.github.io/pull/5
  * it's been hours and things still aren't done installing... just updated my c9 instance to have the max RAM and memory
  * More research in my journal here http://futureofcoding.org/journal#july-24-2017-204pm
  * My final notes on Lamdu in my journal here: http://futureofcoding.org/journal#july-25-2017-226pm
  
* [A brief history of "type"](http://arcanesentiment.blogspot.com/2015/01/a-brief-history-of-type.html?m=1)

* [Intentional Programming](https://en.wikipedia.org/wiki/Intentional_programming)
  * I think this stuff is really interesting. If done right, it's similar to how google wants all of their code to be self-documenting. It's probably the exact opposite of Eve's literate programming approach where the code and explaination are two seperate things that humans need to keep in sync.
  * Personally, I find functional programming hard to read / parse meaning from. TODO think about ways we could make FP more readable
  * TODO think about what it would be like to define an entire program in a high-level language and then have to specific the macros to intepret each expression, potentially with Woof. Think about how to zoom in and out on various lines.

* https://en.wikipedia.org/wiki/Deutsch_limit
  * not to be taken seriously. at a worst case, we can put text into visual programming to add density, but density isn't that important after all because we have encapsulation.

* [Additional Notes on "Drawing Dynamic Visualizations"](http://worrydream.com/DrawingDynamicVisualizationsTalkAddendum/)
  * really amazing, inspirational demos! Makes me wonder how Scratch could be more like this and less about the code
    * TODO brainstorm what would be a intuative interface for a student to program gravity from scratch
  * Seems similar to aprt.us, which makes sense because Bret steals from Toby's Recursive Drawing project
  * TODO think about ways to tackle the context problem, helping programmers point to what they want

* [How to Invent the Future II - Alan Kay](https://www.startupschool.org/videos/12)  

* [Alan Kay - how to invent the future pdf](https://www.dropbox.com/s/l4qnf40gksapsrl/Alan%20Kay%20-%20How%20to%20Invent%20the%20Future.pdf?dl=0)

* [Alan Kay - Power of Context](https://www.dropbox.com/s/knngq11tzdi0tdh/Alan%20Kay%20-%20The%20Power%20of%20the%20Context.pdf?dl=0)

* [Always bet on text](http://graydon.livejournal.com/196162.html)
  * text is great for many reasons. I think less so for communicating with comptuers

* [How to Invent the Future I - Alan Kay](https://www.startupschool.org/videos/11) 
  * email him - he loves email!
  * read "the dream machine" about xerox parc / arpa
  * sketchpad is interesting. does object-oriented programming well: master vs instances
    * read ivan sutherland 1962 thesis - man machine communication thesis
  * really great advise on running research community
    * vision, not goals
    * fund people, not projects
    * research community, not research project
    * fund problem finding, not just problem solving
    * milestones, not deadlines
    * be ok with high failure rate
    * just two years for the person running the group
    * solve the problem, don't think about what you can do with the tools you have. make the tools if you need to
    * argue for clarity, not to win
    * keep tabs on people in the "minor leagues"
  * send alan kay about email about learning to communicate with Aliens from integalactic email memo from "Lick"

* Elm
* Hopscotch
* App Lab
* App Inventor
* Bubble.is
* Aprt.us
* http://cirru.org/
* Unison
* http://www.vpri.org/pdf/tr2011001_final_worlds.pdf
* Blockly
* Zapier
* IFFT
* http://origami.design/tutorials/getting-started/Getting-Started.html
* FramerJS
* [Lisp, Smalltalk, and the power of symmetry](https://insearchofsecrets.com/2014/08/04/lisp-smalltalk-and-the-power-of-symmetry/)
* https://medium.com/@stevekrouse/resources-for-creating-front-end-programming-languages-and-frameworks-in-2017-a0c097625f9d

## Where to Find More Links

* http://worrydream.com/dbx/
* http://pgbovine.net/human-centered-programming-tools.htm
* http://blog.interfacevision.com/design/design-visual-progarmming-languages-snapshots/
* http://www.squeakland.org/resources/books/readingList.jsp
* http://worrydream.com

  <script>
  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');

  </script>
