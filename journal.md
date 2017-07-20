---
title: Journal
---

# Future of Coding Research Journal

### July 20, 2017 9:41am

Yesterday ended up being a particularly productive research session, but I didn't have time to recap it. Here's a pretty solid picture of my progress: https://github.com/stevekrouse/futureofcoding.org/commit/4670a33f503a621f606de0338df1c21d161967fe#diff-424069113a08a4256349764ee38dbbbf

The most exciting part was falling in love with Lamdu, even while I failed to get it to install or run. I have a sinking feeling that it's not going to be compatible with cloud9 so I need to talk to them about that.

TODOS:

- reach out to Lamdu people about installing, contributing and being on the podcast
- add http://2016.ecoop.org/track/LIVE-2016#program to my research links and also consider going / applying

### July 18, 2017 4:00pm

I was able to get through the links -- in particular I really loved Bret's notes on dynamic diagrams and am really excited to get to his Substroke project sometime soon -- however, I am excited to get to Lamdu tomorrow, in particular getting it to run on my chromebook through some magics.

### July 18, 2017 1:35pm

So I ended up creating futureofcoding.org/links yesterday (instead of /products) and it seems to be a good way to organize things, at least for now. I think it was a good idea to start by watching some Alan Kay video for framing and context. He really challenges listeners to write him with interesting emails, so I'm going to work on putting something together soon. Wouldn't that be a coup -- befriending Alan Kay and getting him on this podcast?!

I'd say one of the bigger ideas I got from Alan is that we should be problem-focused and not solution-focused, to the point of ignoring the tools we currently have entirely and building them from scratch if need be. I definitely fall into the trap of "what can I make with these tools" all the time. The solutionism trap. I feel myself caught up in a related problem a lot where I am optimizing for integrating with existing tech, which will definitly hold you back in the long term but seems neccesary for adoption in the short term...

Ok, so I have from now (2pm) to 4:30 to do some research. I hope to quickly get through the papers and talks that I have on my list and make it to Lamdu today. 


### July 17, 2017 12:38pm

I don't have much time for research today (only about 90 minutes), but I want to get into the habit of writing notes here every weekday even if it's just to say that I didn't do any research that day. My main task for today will be organizing the list of links to research, prioritizing them, etc.

I think I should make the different styles of research here more clear:

1. Researching other products (reading documentation, writing notes, building toy apps)
2. Building prototypes (Cycle 1, Cycle 2, Rose 1, Elm game engine)
3. Writing about various future of coding topics ([Types as Shapes](https://medium.com/@stevekrouse/types-are-shapes-d6af1e83192f), [Resources for creating front-end programming languages and frameworks in 2017](https://medium.com/@stevekrouse/resources-for-creating-front-end-programming-languages-and-frameworks-in-2017-a0c097625f9d))

Today, I'm just working on organizing (1). I currently have it in a google doc: https://docs.google.com/document/d/1TtfMqBBRGnwisCx42nuXa4Y5VF3EizpZxFQBivJWhhE/edit

I am going to create a place on this website, in this github repo, for these links. One idea is to just talk about them here in this journal but that doesn't feel very structured. Why don't I create `products.md` where I have a few sections:

1. Products to look into (prioritized)
2. Products reviewed
3. Places to find more products to review

### July 14, 2017 5:09pm

So that was fun! I talked for almost an hour about my past research and thought-out-loud about the directions to take things in the future. I was suprised about how cogent my thougths about where to take my research were. It felt like I was alomst as logical as I can be here in text. I wanted to include the thoughts that I came to on the podcast here about what my next steps are in this research project...

1. Organize and prioritize the list of links, with Lambdu and Luna at the top. This should take a few days.
2. Research each of the links, putting what I think about them and any demos I make here in these notes. This should take no longer than a month.
3. Resume building prototypes. Directions this could take include:
  - Cycle v2 from the ground up, with a custom block-interface and virtual-dom or snabdom instead of VueJS
  - Reactive WoofJS or Elm game engine
  - Rose v1 with text as the UI
  - working with Paul on Unison (or on any of the other projects I'm researching)
  - none of the above, I come up with another wacky idea that steals my attention, which after all is the point of all this research

### July 14, 2017 2:58pm

I'm back! So a few things on my mind.

Firstly, organizing my thoughts on what to research next from yesterday. Another one to add to the list: 

10. Thinking about how Woof, or the next step after Woof, could be the starting point for Rose. Use my students as my target user and build for them.

Secondly, I think it would be good for my audience to hear about my past research so they have context before I go off explaining my new research. Potentially reviewing past research could even be a good way for me to decide what to research next. Ok, so at first I thought this would be a recap in one episode but now I'm realizing it might span multiple episodes. Here are the topics to discuss:

- Scratch, how it's amazing (types as shapes, cloud based, no syntax errors, no documentation, no runtime errors, good abstractions like forever's running once per render loop, audio and image editors, social network, allow kids to make what they want)
- I was inspired to build blocks for JQuery, Cycle version 1. No HTML, No CSS. You would do everything imperitively. It would compile to JS directly. Stopped working on it when I found Code.org App Lap. 
- Took a break to work on the business and Woof which I'll discuss later.
- Came back to build blocks for VueJS, which is very similar to ReactJS. Much more declarative.
  - build TodoMVC
  - built a chat app, weather app
  - fun to work with, faster and easier than coding
  - terrible error messages
  - brittle
  - used with students, went to hackathons
    - harder to learn than I thought it would be (the abstractions could be clearer, but hard to do that within blockly)
    - error messages were a killer
    - the fact that you could import into it or export from it was bad considering it couldn't be self contained 
- Rebranded as Rose
  - worked on Prune, projectional editing in JS because importable and exportable
    - providing users will all possible semantic edits is tricky
    - js is a shitty language so even if we solve all syntax errors, the abstractions are tough and there are runtime errors
  - if I were to go back to prune, I would leave the text as the UI (not Vue) and just focus on a subset of JS (so no import)
- Research into other products
  - Elm. Really tricky to use but amazing once you get it running.
  - Cycle. Similar to Elm. Streams are nifty.
  - Eve. Clearly I should spend more time with it but still doesn't make sense to me.
  - Unison. Very exciting. Seems like it's almost exactly what I want in so many ways. Hope to get my friend Paul on here soon.
  - Luna Lang / Lambdu - need to spend more time with these
  - List of others... needs organizing and time

- Woof
  - next step after Scratch
  - one-to-one mapping of blocks, so leverage understanding of Scratch to learn text-based coding in JS
  - enable game development
  - full integreated IDE
  - open source and free, so hit me up on github if you'd like to contribute

- directions for going in next (below) 

Ok, so that is a lot of content. Obviously. Especially if I want to drill into each of these topics. Let's estimate how much time each topics will take.

- Scratch is amazing (10 min)
- Blocks for JQuery (10 min)
- Blocks for VueJS (20 min)
- Rose / Prune (20 min)
- Other ressearch (20 min)
- The story of Woof (15 min)
- Next steps (20 min)

Ok, so it sounds like I really could do it in a long solo podcast. It would be an interesting experience. I may end up wanting more control than the tryca.st editor gives me so I can pause it, do a do-over, etc. Let's try it all as one take and see how it goes... I wonder if talking about my next steps will be cogent at all or if I'm going to prefer to write about it first and then talk about it.

### July 13, 2017 2:13pm

Welcome to the first entry of the Future of Coding Research Journal!

The tone of this journal will be stream-of-consciousness. First and foremost, it is for me to work through my own thoughts. If it can be helpful to people on the interwebs, even better!

To recap the state of affairs, I've been working on building "next generation" programming languages on-and-off for about a year now. You can read more about my past research and prototypes here:

<ul class="list-unstyled">
    <li><span class="date">2017 May 09 - </span><a target="_blank" href="https://medium.com/@stevekrouse/rose-project-april-2017-32af31b078b1">The Rose Project (April 2017)</a></li>
    <li><span class="date">2017 Mar 25 - </span><a target="_blank" href="https://medium.com/@stevekrouse/rose-983dc5e0908f">The Rose Project (March 2017)</a></li>
</ul>

Today I'm simply creating this journal and seeding it with some basic content. Here's what I want to think about next time I'm here (either tomorrow or Monday): what to work on next.

Here are some ideas, in no particular order, but numbered so I can refer to them via their number:

1. Build an Elm game engine
2. Build a reactive version of WoofJS
3. Finish building my Elm Spelling Bee App
5. Reach out to Luna Lang to get access
6. Spend more time with Lambdu
7. Organize [links of other resources in this space](https://docs.google.com/document/d/1TtfMqBBRGnwisCx42nuXa4Y5VF3EizpZxFQBivJWhhE/edit) 
8. Re read rose blogs
9. Prune with text as ui

Clearly, I should start with (8) because it will help me come up with other things to work on. Until next time!
