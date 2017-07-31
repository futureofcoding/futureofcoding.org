---
title: Journal
---

# Future of Coding Research Journal

### July 31 2017 2:02pm

#### Thinking about my schedule

So I read through my notes over the past two weeks and was struck by the fact of how little work I did, but how much I got done. On the one hand, I'm proud of being efficient but on the other hand, I think I am not yet at capacity. I can get even more done with focus.

I want to make my schedule clear on this research recap:

* Two days full research every week. 
* One day Coding Space. 
* One day Woof. 
* One day Research / Podcast tasks. 

On my calendar, this week it looks like:

* Monday Research Recap
* Tuesday Coding Space, Woof, Podcast tasks
* Wednesday Research (with some time for tasks I don't get done on Tuesday)
* Thursday Coding Space, Woof, Podcast tasks
* Friday Research

So there's not much time for real research. Potentially I will scale back on some of these non-research tasks so I can eek out more time for this project, but I'm not yet ready to do that with Woof or The Coding Space. I'm also thinking about waking up earlier, watching less TV, and having 1 less plans with friends and family per week so I have an extra few hours for research.

#### Purpose of this project

The purpose of this project as I see it now is bringing the future of programming nearer. Things don't happen by themselves. People need to make them happen and that's what I'm trying to do here. I used to think this meant building it myself but I have a much broader perspective now. I can nurture the community, introduce people, inspire people, help people with their projects, etc. I do hope that this research project results in a product that I can dedicate a portion of my life towards building. But I'd be thrilled if someone else figured it out first. I'd try to help them, and if they don't need my help, I can go work on other projects. 

#### Research was much more tangible helpful than I would've thought

In looking over the research I did over the past two weeks, I'm realizing how I was actually more influenced by the ideas than I thought I was. In particular, Mark Mahoney's prototype about version control for learning which inspired my thoughts on the workflowy git idea. And Bill Burdick's Leisure which inspired my thoughts around bluring the line between viewing and editing apps. Working with Lamdu made me realize how much I dislike the Unix terminal, installing stuff, files and folders abstractions, etc, among other things. Lambu, which is so much better than Haskell, is still so so far away from what the world needs -- the syntax is just really hard to read, even after spending years and years with it, which inspired me to think past my idea of getting rid of type and syntax errors. We also need better abstractions and metaphors.

#### Research Recap #2 Notes

I think I have a good collection of things to talk about. Now let's just order them in a way that makes sense...

* http://futureofcoding.org/journal#reflections-on-my-emotions-during-this-first-week
* Really loving github markdown as CMS so far.

### July 31 2017 10:52am

Today is a Research Recap Day (tm)! Just kidding about the (tm). I don't believe in [intellectual property](http://levine.sscnet.ucla.edu/general/intellectual/against.htm). But I am seriously excited to spend today reviewing my reserach for the past two weeks into a podcast/blog post synthesis that will allow me to tell others what I'm working on and also provide more focus, direction and reflection for myself.

#### Reflections on my emotions during this first week

First things first, I have to say how much I'm loving this system I've set up for myself. Even though this is only the first iteration through it -- and nothing yet has been publicly launched -- I feel like that last two weeks are the most productive I've had all year. In particular, I feel a positive sense of "gotta get focused so I have good stuff to talk and write about for my research recap." It makes me wonder if I should do this every week! (However, given my current schedule of 1 day Coding Space, 1 day Woof, and 3 days Future of Coding, I don't know if I want to spend 1/3rd of my time reviewing, leaving only two days per week for forward progress.) Anways, I'm excited and also wondering how long this productivity kick will continue.

Part of why I've been so productive is that this structure helps me focus. Focus is notoriously difficult but also [very important according to successful people](https://www.linkedin.com/pulse/20140707144749-8353952-the-one-word-answer-to-why-bill-gates-and-warren-buffett-have-been-so-successful). Because I have research to do and recap, I realized that much of what was in my inbox on Friday needed to be snoozed until Tuesday. However, because I pride myself on my responsiveness, this was hard. It was also hard because those were fun and productive tasks that I know I'd get an emotional high from doing them. However, this is what focus looks like: procrastinating the things that are less important. Even more important is quitting the things that aren't important. I think part of the reason focus is so hard is that we are taught that those things (taking a long time to respond, procrastinating, quitting) are bad as children. Richard Feynman has this great line where he tells people that he's "irresponsible" so they don't give him any admin jobs so he can focus on his research. I love that.

#### Alan Kay's relentless problem-focus

Whilw I intellectually know that you should build a product to solve a problem, in the moment I often lose sight of that. I am a technologist. I like building things for their own sakes, similar to how an artist makes art for its own sake. 

However, when I'm trying to build towards the future of programming, there is no place for "solutionism". I think of solutionism as looking around at the tools in your toolbelt and the lego pieces on the floor and asking, "what can I do with these?" This methodology becomes quite dangerous when you then convince yourself that somebody would find that thing useful. That's the perfect recipe to build a product that solves a problem that nobody has, or "acheiving failure", as Eric Reis says.

In his YC Startup School talks, Alan Kay did a great job disabusing me of these tendencies (for now, it's a constant struggle for someone like me). The way he put it was that you should build towards the problem, inventing whatever you need to in order to make a good solution. Need to build a custom programmign language? Need to build an operating system from scratch? Go for it. This was a great kick in the butt for me because I've shyed away from most ambitious prototype ideas that would require more than a few weeks to hack together. While this is a decent technique to avoid getting bogged down in the technical details of a bad prototype, it also precludes me from stumbling into a truly breakthrough idea, whose sub components don't even exsist yet, because that's how breakthrough it is. If the answer to this question is just recombining pieces that are already out there, someone would've solve it by now. 

One key sub-skill that I need to get better at here is recording problems that I don't see immediate solutions to. As an innovator, I often willfully ignore ideas whose solutions seem too far out, which is probably a good practice for people to have to work to make a buck every day. However, given that I'm in my own personal R&D department, it's my job to think about those big problems so I need to retrain myself to write down all big problems, *especially* the ones I have no clue about how to solve.

#### Excited about "Streams as Spreadsheets" 

On Friday I fleshed out an idea that I'm really excited about: streams as spreadsheets. Here's how I got there. As I was trying to understand the Lamdu codebase, I realized how even with my decades of programming and Haskell experience, I was unable after hours of trying to even get the bareset glipse about how it all works together. I think it would take another dozen painful hours to get to a good place with it. (Of course if someone on the team walked me through it a bit or they had more documentation explaining how the code worked, that'd help.) To be clear, the Lamdu guys seem brilliant and I'm sure their code is really clean and easy to understand. That's the point: even in the best case, representing a software program as a series of folders containing plaintext does not lend itself well to comprehendablility.

So I thought about how neat would it be if without leaving Lamdu, I could immediately pull up the code relevant to the UI piece I'm touching, be able to monkey with it, and submit a pull request if neccesary, all without leaving the tool. (I'm realizing as I'm writing this that Eve has a pretty good story for this use-case. In fact, I'm realizing that this prototype might have a lot in common with Eve. Will need to look into this more!)

So my initial idea / metaphor for this was being able to "peel back" the UI layer of an app, and see the layer below it, and potentially be able to peel back that layer too to see the layer below that. However, while prototyping I began to realize that what I really want is for every layer in the UI to be a spreadsheet. In particular, this solved the problem of how to mutate data by side-stepping it by making everything an immutable stream.

I have other thoughts below about how this could work so I won't repeat them here:

* http://futureofcoding.org/journal#streams-as-spreadsheets
* http://futureofcoding.org/journal#streams-as-spreadsheets-2
 
I will say, however, that I want to resist the strong pull towards beginning to build this in code. I have noticed in the past, in myself and others, that when I'm working on building a thing, I get a bit of tunnel vision and actively avoid researching other products. I feel a sense of dread when I hear about another, similar product, as I see all of my hard work and beautiful code going to waste. So I want to make it through at least another 2-week research cycle before jumping into a prototype, but I'm thinking that I might need another two or three of these research cycles before I feel like I have a good sense of what's out there and confident that spending the next few weeks or months working on a speficif protoype is the best use of that time.

Ok, so that's a quick review of what's on my mind now. After lunch, I'll continue to review my research from the last two weeks here, and then record it all in podcast form :)

### July 28 2017 5:25pm

#### Shower thoughts

I had a tough time focusing on other ideas this afternoon, so I took a shower to be disconnected from distracting technology and could focus and brainstorm. The cornerstone of this technique is [a waterproof notepad](https://www.amazon.com/Aqua-Notes-Water-Proof-Note/dp/B01AS5I0ZS). Worth its weight in gold. 

![image](https://user-images.githubusercontent.com/2288939/28737030-b88c46b2-73ba-11e7-86fb-ed5deb70943c.png)

### Workflowy Git 

One of the hardest things about programming is keeping track of what you're trying to accomplish. This is harder in programming than most disciples because programming has problems with subproblems that have subproblems that have subproblems. Fortunately programming also has a slew of mental techniques for dealing with this challenge.

The core techinque is top-down programming, whereby a programmer breaks down bigger tasks into smaller tasks into a nested todo list. This is why at our afterschool program, [The Coding Space](http://thecodingspace.com), we encourage our students to always have a list of steps for each problem they are working on. If they're working on of the guided projects, which we call "untutorials", in our [curriculum](http://coding.space), we create this list of steps for them. Whenever we go to Socratically help a student who gets stuck, we start by asking, "What are you trying to accomplish?" and if they don't know, we are easily able to get them to focus on the problem at hand by asking, "What step are you on?"

We encourage our students to create a similar list of steps to keep themselves organized when they being working on projects that they design themselves. This works well. However, students don't always take us up on this piece of advice, so it would be nice if there was a way to integrate this workflow more deeply into the code-screen-workflow as opposed to on a piece of paper.

Even more importantly, when a student works on particularly complex projects or work with difficult APIs, a simple flat list of steps begins to not be enough. What you need then is top-down programming, the ability to break problems down, and down, and down, so you can track where you're working when you're stuck 6 levels deep in a debugging session.

Here are my thoughts on a "top down programming interface" could look like, potentially on [woofjs.com](http://woofjs.com).

1. It integrates into the code IDE, so that each sub-problem is its own branch of the code. Each sub-problem branch will be like a Github issue where you can have discussions, reference other #branches and @people, comment directly on lines of code, get your code reviewed, and merge into parent branches.
2. It also sets a default amount of time for each subproblem that you can customize and it will notify you when it thinks you're spending too much time on a problem, which will help you realize that you need to create another subproblem or maybe that you're stuck in the [X Y Problem](http://xyproblem.info/).
3. Combines version control and code development into a single website to make it even easier to begin hacking. You can easily help another programmer with their sub problems without getting in their way because everything is its own branch. It could allow master programmers to mentor younger ones by creating the tree for them and letting the younger programmers tackle it.
4. One open question is how permsissioning works. Who is allowed to edit what files on which branches. Can you clone someone's entire tree? Or just create more branches on the same tree?
5. Sometime I should think about how [Paul Graham's Bottom-Up programming](http://www.paulgraham.com/progbot.html) could relate here.
6. This would leave a wonderful breadcrumb trail of how the code was built. In fact it could entirely replace comments with the name of the task that this code was created under. It's like git blame but much, much more powerful because 1) it's more fine grain and 2) it's a tree structure.
7. I love branches in git but they are such a pain to create and switch between. Life should just be this easy. Creating and switching them should be as easy as navigating workflowy.

#### Streams as Spreadsheets #2

I had a few more thoughts here!

1. HTML elements could be represented as rows in a spreadsheet, where the columns are attributes. It might be difficult to visualize elements that have different sets of columns than each other, like how input's have placeholders, but div's don't, but I don't think that's insurmountable. Another potentially tricky issue might be how to deal with if-branches in HTML code. For example, inside a todo element how if it's being edited, it's a input, but otherwise it's a span.
2. There are a few different types of operations you can do in this system to construct your programs: adding a new column expression, creating a new sheet with a filter, folding up a sheet into one value (which I'm realizing now can be aggregates at the bottom of the sheet). While I normally don't like text, I think in the short-term we can do text in the Excel or Google Spreadsheets style with type-a-head and good colors when you type recognized functions or other sheets/columns. This will probably takes weeks to build but it's worth it I think -- problem first thinking!
3. It's neat how much this system has in common with SQL, often the best example of a declarative programming language. I wonder if there are ways to capitalize on that. Relatedly, how would this system's backend work? Given that everything is a fucking SQL sheet, I think that story could be gorgeous, but I don't have a clear idea of it yet.
4. How would you do version control in a system like this? Clearly, we need a middle layer of abstraction. A "spreadsheet calculus" if you will that describes the shape of the data and actions you can take on it, which will then allow us to keep track of edits and then the collaboration and VC story will make sense I think.

#### Aprt.us-like interface as Game Builder

1. In Aprt.us right now, can I animate something by setting it to one more than it was before?
2. Can we do gravity?

#### Elm game engine

1. build 3 woof/scratch games
2. abstract
3. look at mcmaster's engines


#### Reactive WoofJS

```javascript
var sprite1 = new Image({
  url: "..."
  acceleration: () => -1,
  speed: () => this.speed() + this.acceleration(),
  x: () => this.x() + this.speed()
})
```

1. We need to make sure that the `this` keyword within Sprite's properties refer to the prior value of that number and not to the function which would cause an infinite loop. How do we specify the first value here?
2. Should all get calls be functions with parens for consistency?

#### Github page markdown as CMS

I'm loving it! I often use Github.com directly as my CMS which is normally great. On this particular commit, I have a lot to say and refer to so I'm doing it on cloud9. In particular I love how easy it is to link to headings in markdown, include images, deployment happens automatically, and github issues integrated.

#### Research Recap #2

The plan for Monday is to organize my thoughts, record and edit Research Recap #2. I think a good plan would be to re-read this journal, review my links and ideas, do a little more research to tie up loose ends, and then go for it. Might not take the whole day.


### July 28 2017 1:45pm

So I've done a solid job so far today of only working on my research here -- no emails have distracted me yet! I did a good job last night of snoozing all todos that can wait until next tuesday and leaving the remaining ones in my inbox to be dealt with at some point today. Focus. Easier said than done.

#### Layers as functional abstraction

So far today I spent a few hours prototyping the "Layers as functional abstraction" idea with pen and paper.

![image](https://user-images.githubusercontent.com/2288939/28730166-f6b76174-739c-11e7-8898-7c0ba56d7fc9.png)
![image](https://user-images.githubusercontent.com/2288939/28730170-f95a15d4-739c-11e7-8ea7-102c598d5bde.png)

While I still LOVE the ultimate goal of enabling end-users of a product to pop into an edit or customize layer, I'm not sure how important the visual metaphor of peeling back layers of absraction is to this end. And even if it is, it's something we can layer on (pun intended) on a later date. I think a left to right scroll bar type abstraction (as in streams as spreadsheets page below) with arrows is extremely reasonable now for prototyping.

#### Streams as Spreadsheets

![image](https://user-images.githubusercontent.com/2288939/28730175-fbfafe0c-739c-11e7-9797-150a0326a1ef.png)

I came up with a few interesting insights:

1. Creating streams by example - events populate the spreadsheet as you interact with the page. You can select different fields to create your query.
2. SQL ideas are relevant here. Filtering is like "where". Picking columns is "select". Aggregation is like "group by". 
3. Map is just adding a column! That's a fucking coup. I freaked out when I realized this idea.
4. We can start with text as the formula programming language, even ending in HTML or JSX at the end, to start here. Because while syntax and type error and runtime errors suck, Excel programmers to them all the time.
5. The ability to put a sheet inside the cell/column of another sheet (streams of streams) is very powerful computationally, for example it'd make it easy to "clear all completed todos". However, this may be too complicated in the way my CycleJS mario game was. 

From a protoyping on the computer perspective...

1. Firstly, create a div that has all of the event handlers on to be the "page"
2. Pop all events into a spreadsheet
3. The ability to fold over the spreadsheet to a number
4. The ability to customize the HTML of the div in such a way that the number updates automatically
5. The ability to add a column for map
6. The ability to create new sheets by filtering
7. The ability to reference other sheets

I found some really interesting links after googling "streams as spreadsheets", including this one women who's obessed with giving talks about implementing algorithms in spreadsheets. TODO add these to /links. TODO move Imp to the top of the reaserch list.

While this idea is probably too wacky (simple but not easy), there are lots of amazing benefits here by combinging a few powerfully simple abstractions: spreadsheets, SQL, reactivity, functional programming, unidirectional dataflow, immutability, state as a reducer of all events, programming by example. 

While it seems less "simple", probably the next direction to take this idea is to make it more like the "correct" way to do CycleJS with less cleverness and more of an Elm-like approach. (My mario vs the correct mario.)

#### Rest of today

I'm enjoying pen and paper prototyping so I think I'm going to continue that with the rest of today...

*  Workflowy-like work planning and branching tool (potentially for woofjs.com)
* reactive game engines
  * make a reactive WoofJS
  * make a game engine with an aprt.us interface
* types-as-shapes

#### Problem first thinking

I am excited about where problem first thinking (which Alan Kay reminded me of) has taken me so far with this Streams as Spreadsheets idea. Let's keep it up. Keep an eye out for problems that don't have immediately obvious solutions.

### July 25 2017 4:52pm

While I didn't spend as much time playing with Lamdu as I wanted to nor did I get a good sense of how its code works, I feel satisfied with my learnings from the day and content to move on to other research. I started a list of project ideas at futureofcoding.org/ideas that I'm going to add to as I come up with them. Some of them are as simple as an essay, others are mockups, and yet others are prototype ideas.

So what will my plan be for tomorrow? I probably don't have time for any heavy-duty research because of meetings and other responsibilities. Maybe I'll work on my github issues or other things that need happening for the podcast, like desigining the logo. That means I won't have time for research until Friday (as Thursday is stock full of meetings).

On Friday... while there are many other interesting links to review, I am feeling myself being pull towards my project ideas and protoyping. However, given that it's the last day before my bi-weekly research recap, I might decide to stick with researching other people's product and spend the day with Eve, which is browser-based, thank goodness! Remains to be seen... see y'all back here in a few days.

### July 25 2017 2:26pm

Again, I'm finally getting to research late in the day. I spent the morning reveiewing Woof pull requests and doing emails. But I'm finally here on the Ubuntu side of my chromebook, playing with Unison...

I got the factorial code to work by following the advice of the founder of Unison in the conversation I pasted below:

![](http://imgur.com/N2cPWPUl.png)

So I tried to accomplish https://projecteuler.net/problem=7. First I tried the dumb way by checking each prime against all numbers lower than it. Then I tried the smarter way by only checking against the primes lower than it. However in the course of constructing a helper function I must've messed something up badly because I caused a Lamdu to crash:

![](http://imgur.com/oqFatIul.png)

What I love about Lamdu:

* immediate evaluation 

* evaluation of recursive function that you can scroll through

* named parameters that are auto-typed for you

* searching for terms by type

* allowing you to put a incorrectly typed term somewhere but have it highlighted as red

* quick declaration of structural types

So what I don't like about Lamdu:

* It's not obvious if you have selected a term or if it's still a "hole". I don't think they should put the top search result in a hole because it looks like it's been filled. I think holes should be reserved for no data or data of the wrong type in which case they would be red colored which is clear.

* It's impossible (or I don't know how) to move code around easily. For example, turning an expression in the body of a function into a variable in a let expression. Another thing I wanted to do was "lift" an if-expression outside of its subexpression and make it the parent expression.  

    Instead of: `prime' (if blah then x else y) (if blah then p else q)`

    I wanted: `if blah then (prime x p) else (prime y q)`

    The only way to accomplish this that I knew of was to basically start the expression from scratch. Clearly, text is superiror if this is was structured editing is like. I wonder if we can overcome this issue of moving code around. My gut tells me that the more consistent/uniform the syntax of the code is, the easier it will be to move things around. However, a simple way to solve this particular problem would be to have a copy-and-paste feature. Then I could copy the whole expression, delete the parent expression from within the child expression, and then paste the entire old expression into the former-child-now-parent expression and delete the former-parent-now-child expression's child expression. Not too terrible.

* As I've said before, the syntax is too sparse. They could make the method names longer and more understandable. Also for if-expressions, there's really no syntax at all which makes it impossible to search for if-expressions via the keyboard. You have to type out a boolean expression and hit space and then select the if-expression.

* The type errors aren't very helpful. Now they just show me the expected type and the actual type. It'd be nice if they suggested a way to convert, which isn't hard for streams and arrays. Or even just explained the error in text, as in "The `length` function expects an Array. You have given it a Stream. Please either give the `length` function an Array or use a function that inputs a Stream." This might seem obvious to most Haskell programmers but it isn't to most programmers, especially beginners.

* I wish there were more "command prompts" for me to evaluate random expressions. I don't like having to delete old ones to try out new ones. I wish it were more like IPython notebook in this way.

* I wish I could declare the type of something myself as opposed to having to wait for Lamdu to infer it.

* Why don't Streams have a built-in `length` method? Given that there is a `sum` method that operates on Streams, I don't see any reason why there can't be one.

* Ultimately the biggest issue I have with Lamdu is really more an issue with Haskell-like languages (Elm, Unison) in general. They are really, really hard to parse. I find it incredibly difficult to follow what's going on. Possibly this would get better the more time I spend with these langauges but I've already spent hundreds of hours so I don't think a langauge that requires thousands of hours to get proficient at reading it is what we're going for here. 

  The benefits gained from functional programming (no runtime errors, more declarative/abstract code) are invaluable. The question for me is: how to we take these benefits and make them less costly? One idea that I think about a lot is [types as shapes](https://medium.com/@stevekrouse/types-are-shapes-d6af1e83192f), but I am doubtful of how well this idea scales. It requires more research. More generally, visual metaphors could be helpful here somehow, because functional/reactive programming is super easy for people in the context of spreadsheets, which is part of the idea behind [aprt.us](http://aprt.us/).
  
* Ok, to be honest, my biggest issue with Lamdu is that it's a desktop application that I have to install from source to get to play with it. I have to plan my whole day around switching to the Ubuntu side of my comptuer to play with it. Unison also has a non-web backend, partly Haskell and partly Scala I think, although inital demos were done on the front end in Elm. I think Luna-lang is also a native app, but I'm not sure of that. What langauge to build something like this in isn't a clear one for me. Watching Unison and Eve both start with Elm and then move off it has been interesting to see. I think Eve moved to vanilla JS for speed reasons, which probably will be where I end up too.

* I found the Lamdu code really hard to parse through and find anything interesting or even understandable. Haskell is tough. Maybe if I get these guys on my podcast, I'll have them walk us through their code.

### July 24 2017 4:26pm

I'm recognizing that I won't have time to get to what I hoped to today as I'm still just trying to get through my inbox and other tasks. To be clear, no research happened today but I have a solid plan for what to work on tomorrow!

### July 24 2017 2:04pm

Apologies for skipping an entry on Friday. I spent most of the day installing Ubuntu on my chromebook so that I could try Lamdu out. And then I spent a while installing Lamdu. Finally I got it to work! You can see the conversation I had with one of the creators of Lamdu on its Gitter channel:

![screenshot 2017-07-24 at 2 06 22 pm](https://user-images.githubusercontent.com/2288939/28537577-60c5db1c-7079-11e7-8de1-c1817a35d910.png)

Overall, it's a really fun prototype that shows a lot of promise! As you can see, even I was confused about how to use it. It's also feels pretty janky. It's not a smooth experiece at this point but I can imagine how it could be one day.

However, I do have one BIG reservation with a language like this (or Unison or Elm or Haskell): reading the syntax is difficult, even for me, and especially for a beginner. I wonder if the solution could be as simple as more verbose syntax "if this is true then X otherwise Y" or "transform each element in list X by Y" as opposed to the minimalist style they have now with almost no words. Maybe shapes would be helpful. Maybe higher level macros.

I want to spend more time working with it, getting a better sense of what it can do. The next steps are:

1. build a few toy programs in it, maybe solve some project euler problems.
2. get a sense of how its code works, in particular how the editor's type-a-head suggestions work

Other tasks I want to work on today:

1. Edit my podcast interview with Jonathan Leung I recorded on Friday.
2. Design the podcast logo.
3. Put my "thesis" for the future of coding on the website. Add topics that I find interesting, like pull request without leaving the main page, types as shapes, etc. Pull from:
  * https://github.com/stevekrouse/cycle/blob/d6094179c97ec815198cf24cbab9248968a2f157/README.md#principles
  * https://docs.google.com/document/d/1oSbI5z7BZVkHxf0gOabjz393HiLAys1WJeHnaVMg4dg/edit?usp=drive_web
  * TODOs from futureofcoding.org/links

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


  <script>
  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');

  </script>
