---
title: Journal
---

# Future of Coding Research Journal

This jornal is stream-of-consciousness style so apologies in advance if it's difficult to read. You should know that I don't have spellcheck and I'm a terrible speller. Most importantly, you should know that I add new entries at the top of the page, so you'll have to scroll to the bottom if you want to start from the beginning.


### September 22, 2017 5:30pm

Ok, so I got a decent bit done on my CycleJS flappy bird. However, I do want to note that I've spent a dozen hours on this and 1) it's not done yet (still needs another few hours), and 2) it hurts my brain to do it. Despite all this, I do love how beautiful it all is when it's working. Clearly a text-based interface to stream programming is difficult, so the question is how do I simplify and constrict things? Apparently [Elm did away with FRP to some degree by baking a default architecture into the types](http://elm-lang.org/blog/farewell-to-frp), so that might be a decent way to go. However, I still feel like something more low-level stream based could work as long as we have the right visual metaphor. I think we could've massively sped up my code development with the right visual tools, but that remains to be seen. Potentially I should try to build some games in Elm next week for comparison.

My current project is here: https://www.webpackbin.com/bins/-KueLaY-sIBrTzaW18U4. I really want to play with the CycleJS devtools diagram but that might be difficult with webpackbin...

As far as the Recurse Center goes, it seems like I have to make up my mind in the next day or two... I'm really on the fence. More to come on this front soon.

I also didn't stay focused enough today to get to most of the logistical tasks I was hoping to do, like emailing people and editing my new podcast interview. Ah well, I'll get to them next week. Have a great weekend!

### September 22, 2017 9:20am

Despite getting a late start to the day and potentially going on a run at some point, today is totally reserved for research to make up for lost time Weds and Thurs this week.

I'm going to spend most of the day, starting in the morning, continuing my CycleJS deep dive, and then in the afternoon do some housekeeping work on the podcast and also for the NYC-based Future Programming Slack meetup group. (I think moving forward as I learn to be more precise with my time, I will begin counting some of this logistical work towards this project. Otherwise, I end up spending much more time that I planned here -- which isn't the worst thing in the world -- but it leaves my work-life balance in a suboptimal place.)

#### To Recurse or not to recurse

The main decision I have to make this morning is whether or not to attend the Recurse Center for six weeks starting Monday 9/25 through Thursday 11/2. The main arguments to go are:

* I've wanted to go for years now
* They are an inspiration for The Coding Space, so I bet I could learn a lot from them to apply to my business 
* I'll meet a lot of amazing people
* I'll become part of the Recurse Center network, including getting access to Zulip
* Being apart of their network will allow me to scale the Future Programming Slack community better (as many of our current and probably future members will be there)

Arguments against going:

* I seem to have hit my stride from working at home
* I will have less flexibility in terms of being able to monkey with my schedule, such as taking a run in the middle of the day
* I probably won't go every day or do the program quite as "by the book" as they'd reccomend given my other current commitments (as in, I could wait to do it)

Given that there are 4 open spots in the batch, I don't think I'd feel super bad about taking a spot and then potentially canceling if it doesn't work with my schedule. Reading their website, I see that they ask you to email them before committing if you have "work, school, or other obligations that will conflict with the batch," so why don't I do that?


### September 21, 2017 3:10pm

I've been really busy the past few days with other, slightly related work. For example, I made a really fun spreadsheet for my business that helped me visualize capital allocations over time, on a month by month basis. We were wondering if how much money we'd need to borrow at any one point in time and I used a technique I learned from [Felienne Hermans](https://www.youtube.com/watch?v=TMIBfzSqguQ) that allowed me to visualize it really easily. It was fun! However this is only slightly related to this project so doesn't really "count" for research time. Thus, I need to make up for the missed time tomorrow which means that most of tomorrow has now been reserved for research. A whole long day to dive deep into CycleJS!

Also I had a bit of time yesterday to work on the CycleJS Flappy Bird and I created a fork of the code where I will move towards a more traditional state singleton stream model (and eventually potentially onionify) [here](https://www.webpackbin.com/bins/-KuW2Hhd6pQAc6Kl3I2Y).

### September 20, 2017 9:11am

No time for research today. About to interview Professor Christopher Anand about teaching Elm to K8 students so excited for that conversation and to release it in two weeks. Will have an extra long research session on Friday to make up for it!

### September 19, 2017 10:08am

Ok, so that was fustrating. I spent the ENTIRE MORNING trying to get CycleJS to install. This is just more motivation for me to build a more intuative version of this, I guess. I first had to update node with nvm, then try to use `cycle-create-app`, but I still wasn't even able to preview the app after running `npm start`, potentially because of cloud9 random bullshit, such as port or https problems. Here's the help I asked for (but did not yet receive from the CycleJS gitter):

![screenshot 2017-09-19 at 10 10 58 am](https://user-images.githubusercontent.com/2288939/30596689-df844cb0-9d22-11e7-8d5f-a8d1665eb34f.png)

Hopefully I'll be able to figure this out, but if not, I guess I can go back to using WebpackBin, which I just remembered is how I did CycleJS the first time, as you can see with [this unfinished Flappy Bird game](https://www.webpackbin.com/bins/-KgSGb0vZJgtla6bgooC).

I spent some of the research time today [getting the API side of this app working using my friends' new tool Clay](https://www.clay.run/services/steve/github-project-data/code), which was really fun! However, if I really just want to get reacquianted with CycleJS it probably makes more sense to simply finish (and maybe move to Onionify or a better architecture) the Flappy bird game I link to above... Ok, I just spent 10 minutes on this and had fun. Let's pick up here tomorrow...


### September 19, 2017 7:34am

I [accomplished 2b from yesterday](https://github.com/stevekrouse/futureofcoding.org/commit/3e3f2b81f1cf9dd809bae2357983754b4b897cce), but I just [created an issue for 2a to do later](https://github.com/stevekrouse/futureofcoding.org/issues/45). As far as more top-level links to organize my research, [here are my thoughts on that](https://github.com/stevekrouse/futureofcoding.org/issues/32).

So let's jump into CycleJS! What shall I build? I want to build something useful. How about [this embedable widget thing](https://github.com/stevekrouse/futureofcoding.org/issues/28)?

### September 18, 2017 11:25am

So this wasn't the most productive morning I've ever had, but [I did enjoy the links I reviewed and found some good stuff](https://github.com/stevekrouse/futureofcoding.org/commit/f987a210e92c54ebeda8daa166872443014e3f00).

However, I am feeling overwhelmed for a few reasons:

1) While I am all set to be working on StreamSheets, I feel like I need a firm grasp of my inspiration language CycleJS in order to prorotype it on paper. However, this seems like it will take a little while. I guess I should just dive in, though, and build an app or two in CycleJS, with and/or without Onionify. And then (before or after) read more about FRP. Seems like a deep, hard, time-consuming, and scary hole to fall into but I guess that's what's there to do.

2) I feel like my /links page is getting a little disorganize so I may take a minute to reoganize it. There are a number of things that need to happen:

2a) Convert all bullets to mini headers with hashtags so I can link directly to links.

2b) Organize my un-researched links (organized and unorganized) to reflect my deep dive into CycleJS (and the different directions I can go in afterwards, including Bret Victor)

I want to take time later today to think more deeply about other ways to organize my thinking around what I'm currently working on and what I have to work on after that. The page structure so far (/journal, /links, /ideas) are decent but I think I can continue to do better, so more on that soon...

However, through this writing I feel more settled about continuing to go deeper and deeper into Cycle, starting tomorrow by building a toy app or two in it, followed by reading papers about it, and then maybe some Github issues.

### September 15, 2017 4:36pm

#### CycleJS deep dive!

I'm having a lot of fun today reviewing [the links Andre Staltz gave me in this call](./notes/andre-staltz-call-9-11-17.md). [You can see some notes here](https://github.com/stevekrouse/futureofcoding.org/commit/336815f64b5b0b4f0aeeb7be35b50824acd43653).

Need to continue with this next week. I'm both excited by how much I'm into CycleJS (and Eve and STEPS) because it feels like we're all onto something big here. But I'm also a little skeptical because maybe it's all just fads... Either way, I'll keep pulling on these threads to find out.

### September 13, 2017 11:28am

I actually made some time yesterday for thinking about StreamSheets. I mostly reaquainted myself with xstream, the CycleJS stream library. Some notes:

![image](https://user-images.githubusercontent.com/2288939/30386152-bdd72546-986e-11e7-9951-3879dd6573cd.png)
![image](https://user-images.githubusercontent.com/2288939/30386167-c2ba8166-986e-11e7-9de5-964b7c0e65d2.png)

I'm pretty new to the Stream programming world, so before I go off trying to make it better through visual metaphors, let's first try to understand it:

* https://www.youtube.com/watch?v=5V1ynVyud4M
* https://medium.com/open-collective/cycle-js-a-unified-theory-of-everything-for-javascript-e266ac9a59ad
* https://vimeo.com/217444733
* https://github.com/Widdershin/bonsai-editor
* https://github.com/Widdershin/stream-tree
* making sure everything can be visual (pool, math.random) https://github.com/cyclejs/cyclejs/issues/581
* https://github.com/gelisam/frp-zoo
* http://conal.net/papers/push-pull-frp/
* http://conal.net/papers/icfp97/
* https://noflojs.org/
* https://github.com/staltz/cycle-onionify

These links should take me a while!

### September 11, 2017 8:50am

So I haven't yet yeard back from Alan Kay, but I did hear back from Andre Stalz and [had an early morning conversation with him today](./notes/andre-staltz-call-9-11-17.md). It was very productive! I will think more on next-steps on that call and StreamSheets below in my Research Recap.

#### Research Recap #5

* Apologize for no episode last week, working on getting two interviews out the door (Pete and Paul), and should be soon.
* [Analysis of traffic after launch](http://futureofcoding.org/journal#analytics-after-yesterdays-launch) and now (below) 
* [Peak from Jaime Brandon](http://futureofcoding.org/journal#thoughts-on-peak)
* [New Schedule](http://futureofcoding.org/journal#reflections-on-my-schedule-9317)
* Call with [Jaime Brandon](http://futureofcoding.org/notes/jaime-brandon-call-9-5-17)
* Call with [Dan Scanlon](http://futureofcoding.org/notes/dan-scanlon-call-9-5-17) 
* While waiting for Andre, [Alan Kay Deep Dive](http://futureofcoding.org/journal#alan-kay-deep-dive-recap)
* [Optimal computer use strategies](http://futureofcoding.org/journal#overlapping-windows-considered-too-expressive-and-other-optimal-computer-use-strategies)
* [LogicHub](http://futureofcoding.org/journal#logichub-1)
* [Just started Bret Victor deep dive](http://futureofcoding.org/journal#september-8-2017-901am)
* [Call today with Andre](./notes/andre-staltz-call-9-11-17)
* Next steps with research (below)

Dan and Andre let me record our conversations so I'd love to play snipets of them in this research recap, but that sounds like it could be an editing nightmare, especially editing it all on my phone which sometimes has trouble with two tracks (and this would be three).

#### Podcast and website analytics 9/11/17

Podcast - It says my number of suscribers grew from ~50 to ~130 in the past two weeks! Most of the growth seemed to happen between August 31 and Sept 1, which is interesting because I didn't publish anything in that timeframe. It looks like people have been starting with episode 1 and then go straight to the most recent episode, which is currently 8. In total, I have had 156 people listen to episodes, 403 episode downloads, with most people listening on iPhones, most from America, but like 100 (which is shocking to me) other countries, broken down by a few dozen from Canada, France, Brazil, UK, Spain and Singapore.

Website - Probably the most interesting metrics are monthly, weekly and daily active users. I have 245 monthly active users, 35 weeks, and 6 daily. This is very exciting to me that I have a even a single person (let alone 5) other than me that come to my website every day! It's basically only US visitors, half phone and half desktop. Not surprisingly, people who find me via organic search, bounce the least. In the last 28 days, I've had 394 sessions, with a bounce rate of 67%, and 1m31s session duration, with a huge spike on the launch date, settling with higher but still pretty low daily viewage.

#### Next Steps with Research 9/11/17

There are two obvious directions to take moving forward:

1) begin prototyping a visualization of CycleJS data as tabular spreadsheets

2) continue the deep dive on Bret Victor 

Before I compare and contrast these options, let me meditate on any more options...

3) (From futureofcoding.org/ideas) build a generic expression building widget/library (google sheets formulas but without syntax errors)

4) write-up some of my prior research or ideas (such as "flexbox block in cycle v2" or "stop teaching for loops in favor of forEach loops and while loops", from futureofcoding.org/ideas)

5) While are are some other links I'm eager to research, after seeing how much gold was to be mined in an Alan Kay deep dive, I think I'll make it through Bret before looking at anything else.

Reflecting on all of these options (and yes, (5) is not an option but explaining a lack of one), I see that (1) is where my heart is at, and I can justify it logically as well with this principle:

As long as I can see where I can make progress on a prototype that has interesting open questions, I should make that progress so that when I get blocked, I can reach out to people for help as soon as possible, and spend the time waiting on various other research paths. To put it another way, I should always have a prototype that I'm working on, and my other research are merely ways to inspire other prototypes during the times that I'm stuck on my main prototype. 


#### Begin prototyping a visualization of CycleJS data as tabular spreadsheets

I guess I can start by using a lot of the graphSerializer code from the CycleJS devtools. Let's think about the app architecture... I'll probably want the app itself in an iframe and then can get the window.cycleJs from appPreview.contentWindow.cycleJs or something.

However, before I go to code, I should think about the core streams as spreadsheets metaphor and demonstrate in drawings how I plan to visualize each xstream operator. Great! That's the next place to go. According to the [xstream documentation, "there are only 26 core operators"](https://github.com/staltz/xstream), so doing pictures for each of those sounds like the way to go. Maybe I'll start on paper and then go to computer diagrams if I feel the need to be more precise.

Sweet, I'm pumped!

### September 8, 2017 9:01am

Good morning! So I spent the last hour or so writing Alan Kay a much too long and too epic email. Now I'd like to move on to my Bret Victor Deep Dive. Before I begin, I'd like to share a laugh with everyone with this link to Bret's hit single [Caltech Girl](http://worrydream.com/media/caltech_girl.html). [HOLY SHIT I JUST FOUND THIS GOLD](https://www.youtube.com/watch?v=00vMnIECCbo)

Unfortunately, the link to his earliest website at CalTech seems to be broken: http://sites.ugcs.caltech.edu/~bret/alternate/. I wasn't able to find it on waybackmachine either, so if anyone has access to an archived version of this, please let me know at steve at futureofcoding.org :)

While they are fun, Bret's websites' interactivity does make it a bit harder to exhaustively and systematically explore. Let's start with http://worrydream.com/ugcs...


### September 7, 2017 11:40am

Success! Not only did I stick to schedule (despite a 45 minute break to talk with mom), but I also mark today as the end of my Alan Kay Deep Dive Experience. [Here is the final commit.](https://github.com/stevekrouse/futureofcoding.org/commit/3c61d3a143f71c72400a3f23ce086ef904fbaa06)


#### Alan Kay Deep Dive Recap

While I have been highly influnced by the work of Alan Kay over the past decade -- through Bret Victor, object-oriented programming, let alone GUIs -- I didn't watch more than a handful of his videos and hadn't read any of his papers. Thus given that I had a free week of research I decided to remidy this sittuation and read almost every paper I could find online with his name listed as an author, and watch a handful of his videos (not nearly as many as he's given). I am quite excited by what I have learned! 

I am able to see more clearly now the progression ideas through my idols, from Piaget to Papert to Kay to Resnick and Victor, as well as how the ideas of Montessori, McLuhan, and Postman relate to this beautiful worldview.

More than anything, I am struck by how much I relate to many of these ideas (which from one perspective isn't suprising because these are my role models, the people that I'm actively trying to be like, so it's like saying "what a coincidence that I like the music of my favorite band and its influences"), and how we not only agree on goals, but also on specific implementation ideas, in particular reactive/stream-based programming.

It was also really interesting to get to contexualize what sometimes from afar appears like biterness or regret. I get the sense that while he's so proud of what he's created, he's also ashamed of how inadequate it is and almost wishes he could go back and time and do it right the first time. Samantha John mentioned on an early episode of the podcast that Bret Victor is more worried about something bad becoming ubiquitous rather than nobody noticing it, which is why he doesn't release a lot of his source code. This makes more sense now in the context of Smalltalk being released before it was up to Kay's standards of what a programming environment could be.

Ok, I am now out of excuses, it's time to send him an email!


### September 6, 2017 10:55am

This morning was quite productive! I started research just a 15 minutes late (making my morning coffee and writing in my private journal took longer than expected) so I tacked on some more time to the end of today's research. I got [a decent bit done](https://github.com/stevekrouse/futureofcoding.org/commit/31cb36531e9fa145dfb65832af0cdfb90c39258f), mostly around the STEPS project (which I've decided to only read the final report of unless in reading it I decide to read the progress reports), more specifically the KScript language. 
I was blown away by the KScript paper! It's so similar in goals and methods to StreamSheets! I think there's a ton I can learn from that paper (and those it references) that I don't yet notice because I am still to early in this project so I'm sure I'll return to it. I also bet there's a lot I can learn from the paper's authors here too!

Thinking about interface design, metaphors, and GUIs, got me thinking about the way in which I use a computer, which I am quite proud of, and inspired me to drone on about it below. Upon re-reading it, I can't help but roll my eyes at my know-it-all tone, yet I don't want to spend the time to re-write it without this tone, so you'll have to make do.

#### Overlapping windows considered too expressive (and other optimal computer use strategies)

As a comptuer user since the age of three, I have had ample opportunity over the last twenty years to develop better computer usage patterns. One of the most effective I've found is to never have any minimized windows, overlapping windows, or windows totally hidden behind other windows. 

Instead, I make liberal user of tabs and split-screen. My default view is two windows, side-by-side, each taking up half of the screen. On a chromebook, this is easy to set up with the alt-[ and alt-] shortcuts built in. 

On the left window, I pin a number of tabs to apps that I want open throughout the day for constant use, Spotify, Inbox, Calendar, and Slack. This "pin" makes it harder for me to accidentally close the tab and makes the tab seem more "fundamental" than a regular tab which is more ephemeral. The left window usually only has one non-pinned tab on it, which represents the main task I'm working on. For example, this tab is currently open to Cloud9, and online IDE, where I am typing this very journal entry. A moment ago, this tab was still on Cloud9, but in the /links.html file so I could take notes on a paper I was reading in the right tab. Similarly, if I am writing software, I will have my code in the left window and the preview output for the code in the right window. If I need to google things to debug my code, that will also be in the right window. In some occasions, I want one window to be full screen, in which case I put all my tabs onto my left window and hit ctl-+.

I try to do things in logical chunks. This means not leaving any task in a "dirty state" such that if you threw my computer into a river I wouldn't be upset at any lost work or effort. One common mistake I see people make is having more than a handful (like 5) tabs open for long periods of time. This is a problem for two reasons 1) if you comptuer or web browser crashes you lose all of those tabs which represent of list of links you want to look at, and 2) it makes your desktop more cluttered which can make your thinking more cluttered, and make it difficult to find what you need, similar to having a mess in your room that you do not clean up. Thus I copy the URLs of the tabs I'm not currently working on to an appropriate list or bookmarks folder and then close that tab. Another common mistake is to not save every logical change directly to a cloud service. Having a chromebook makes making this mistake harder but still possible. This is similar but less true for Dropbox on a Mac or PC because there are so many ways to save things to disk, and so much disk storage. 

Occasially, it can be be helpful to have more than two windows on the screen at the same time. I used to run into this when developing code before cloud9, where you needed a third window for the terminal (in addition to the code editor and code preview). (However, cloud9 combines the terminal and code windows so I can make do with two windows.) However, at no point is it useful to have windows overlapping each other. Given that I can resize the boundaries of windows, and zoom in and out on their contents, I can always get a view of the things I want in a window without obscuring the contents of another window. Side by side is more than enough. Thus not only is overlapping windows not helpful, it is harmful because it allows the user to put their windows in a disorganized fashion (like a messy bedrooom). It also allows the user to not realize that certain windows are still open but not visible, which is draining computing resources and even worse could hold work in an unsaved state which could then be lost. (There is a special case where you'd like to do some proccessing on data in one minimized window while you work on other applications in visible windows. However, I think the "correct" way to handle this case is upload the task to some web service for proccessing, close the window, and then have that service email you a link to the finished product when it's done.)

Given that a goal is to complete tasks in logical chunks, one may inquire how the interface could support such a workflow. The first step could be helping the user to think through the steps and substeps of their current action and organize them (WoofJS Workflow). If the step is stated precisely enough, upon finishing a step the system could check to make sure that it meets the requirements for the step, that all unncecasry windows and data are cleaned up, and the appropriate things are saved to the cloud, etc. In this way, it would become not only possible but easy to travel back in time to any previous semantic state of your computer workflow, and able to see how your project is constructed piece by piece. You can never lose any work or data this way, and your logical path can be elucidated easily. Taking the idea of working in logical chunks to an extreme, the ideal you could shoot for, in theory, is the ability to throw the user herself into a river and feel content that the contents of her project and safely stored on the computer in a organized fashion, so it would be less of a problem if George R R Martin died before completing Game of Thrones, for example.


### September 5, 2017 9:11am

I got much more sleep last night, which makes sense given that I barley made it through the day even with TWO glasses of cold-brew, so I feel much better this morning and, no suprise, [feel much better about the reading I did today](https://github.com/stevekrouse/futureofcoding.org/commit/c43a1fe747c5608eb5da91c0d629a7a86a20244c).

Given that I only did 60ish minutes of research this morning, when I planned to do 90, I added 30 minutes to my research block tomorrow morning.

#### LogicHub #1

The more I read Alan Kay, the more I feel like an idea I had, which I call "LogicHub" is relevant to this project. In short, LogicHub is the repository for all of human argumentation and evidence. The goal is to create the right structure that humanity can bring its logical prowess to bear in the least biased way possible. As Karl Popper says, criticism is the root of all progress, and my dream is for a system like LogicHub to transcend the printing press's limitation that neccesitates the my criticism be a entirely seperate from the content that it's criticizing. More specifically, I want to unify and cannonicalize logic and argumentation, so that we can have incredibly logical nested discussions about everything. I can even imagine a world where scientific papers are written directly in this tool, and so are court cases, and even bills in Congress, because then we'd truly be able to fufill Philip Morrison's vision (that I found earlier today in Kay's writings), that "the eveidence, the experience itself and the argument that gives it order, [is what] we need to share with one another, and not just the unsupported final claim." Imagine a world in which we don't call each other names, like "global warming denier" or "environmentalist hippie", because we can truly see the arguments, evidence, assumptions, and perspective of another.

### September 4, 2017 10:41am

I'm very proud to report that on day #1 of my new schedule, I mostly stayed on point. Despite staying up a few hours later than my target 11pm bedtime, I was able to wake up feeling pretty good, which then got better after some cold brew coffee that my brother taught me to make yesterday.

I worked from 7:30am-10am at which point a friend called and we caught up for 30ish minutes, which leaves me with another 30 minutes of research to do.

As far as the research today goes, I had a lot less fun with Alan's work than I did last time. I wonder if that has more to do with my mood than the content of his writing. My guess as to why I'm less excited about his work is 1) he talks a lot about the implementation details of Smalltalk which feel less relevant today, 2) he spends a lot of time talking about ideas in object oriented programming which don't hit home for me. 

Anyways, here's what I accomplished this morning: https://github.com/stevekrouse/futureofcoding.org/commit/d391cf4dd862a0e26c7133a580fd5dc911134296 & https://github.com/stevekrouse/futureofcoding.org/commit/9976e7c46d85a09c1c5c4776e3673b8aac44152a

I'm feeling a little overwhelemed so I may start skimming his work if I continue to have low interest. I'm going to continue for another 30 minutes and then stop for the day, picking up where I leave off tomorrow.

### September 3, 2017 4:07pm

So I haven't spent any time on research this weekend like I vaugley hoped I would, but that's no problem. I definitely don't want to burn myself out, and I have done that in the past by pressuring myself to work on the weekend. I only want to work on the weekend when it feels natural, not forced.

#### Reflections on my schedule 9/3/17

As you can tell if you read prior entries on this journal, I've been thinking about better ways to structure *how I spend time* doing research for this project. Up until today, I set aside *three full days each week* for research. However, in practice I've found it hard to devote whole days to research, so I'm considering changing the way I divide up my time, slicing it horiztonally instead of vertically: doing my research every day in the morning, as opposed to on specific days.

I also am trying to wake up earlier (as discussed in previous posts) so my inital thought was to do research from 7:30-10:30 Monday through Friday, which is 3 hours per day for 5 days per week, so a total of 15 hours per week. Assuming that I spent another 5 hours per week preparing for interviews and other logistical tasks for the podcast/research project, that's 20 hours per week on this project, half of my working week (because I want to have long-term sustainability and work-life balance I target 40 hours per week). Given that I have two other projects, each of which I want to devote 10 hours per week to, The Coding Space and WoofJS, this seems like a reasonable place to start. Let's give it a shot for a week and revisit next week. I'm most worried about being able to go to sleep on time. However, now that I've decided to start a coffee habit (which I come to reluctantly but am only doing because Scott Adams convinced me to in his book), I think I have a real shot at sticking to this schedule!

![screenshot 2017-09-03 at 4 21 33 pm](https://user-images.githubusercontent.com/2288939/30006334-42f8ea5a-90c4-11e7-80ab-2c9e4880f29b.png)

Given that I can only work until 9am on Tuesday, I added some research time to my schedule on Thursday morning.

I wonder what Alan Kay, Bret Victor, et al will think of this schedule, and what tips they will have for improving it. My plan is still to email Alan at the end of this week and Bret soon thereafter.

### September 1, 2017 7:06pm

#### Alan Kay Deep Dive #1

Here are my notes from this first session: https://github.com/stevekrouse/futureofcoding.org/commit/3851f3f22bb2fe32c849a91a6f369c3f0e19c456

I ended up working for about 3 hours of solid reading and notes which I'm proud of. I took a three 10-15 minute breaks to stretch in between. I had fun the entire time. I feel like a fool for not doing this earlier. This stuff is exactly what I need to be reading right now. It's blowing my mind how much Alan Kay represents what I'm trying to become, almost more than Bret or Mitch because he invented Smalltalk which is probably the closest to my dream that's ever been attempted, both in the spirit of its design and the shift in software paradigm that it represents. I am really excited to continue in the Alan Kay deep dive tomorrow and maybe into next week. And then proceed with the Bret Victor deep dive.

As you could've guessed, I didn't come close to finishing my goals of the links below. In fact, my goal has receeded into the distance because I neeed to add a key (pun not intended) link that I didn't have before, which I'm still in the middle of now: [The Early History Of Smalltalk](http://worrydream.com/EarlyHistoryOfSmalltalk/), which I'm reading in HTML on Bret Victor's website which speaks volumes, because Bret must think it's such an important paper that he converted it to a more readable format. This makes me wonder how Bret and Alan first developed their relationship. I bet that's an interesting story!

Estimating that each link will take me about 1 hour, I have 10 or so hours of Alan Kay to go. Thus I probably won't finish tomorrow even if I spent the whole day, which I do not plan to do. Thus a more realistic plan is to finish by the end of the week, picking up with Bret Victor whenever I finish and taking however long I need, probably another week to make it through his material, much of which I've already seen but I now feel inspired to revisit with new eyes.

On the downside, this means that I won't email Alan today or tomorrow, which I worry is just me procrastinating, but I don't think so. I will email him at the end of this week at the latest when my brain is full of his ideas and thus I have the best shot of enrolling him to be a mentor to me, and possible more. The more I read his stuff, the more I feel like moving myself out to wherever in the world he is so I can have his direct guidance as I work.

### September 1, 2017 4:06pm

#### Thoughts about lack of time spent Wednesday and Friday (today)

Yes, I know. I've been delinquient here. Breaking my word about when and how much time I will spend here. On Wednesday I was busy with other work things. However, many of those things could've waited until next week. I just would've felt less "on top of things" but I need to become more comfortable pushing off urgent and unimportant things for less-urgent but more important things. Again, this morning I was feeling "behind" on reviewing WoofJS pull requests so I spent 4 hours this morning catching up. I was only planning to spend an hour or two but I figured that I might as well finish up while I was on it. However, now with the clarity of a few hours I can see that that's an illusion because the more work I do on pull requests (and email) the more work that boomerangs back to me. If I just left it, it would've waited a few days until I got to it next week. I will try to do this more in the future. It's a constant struggle of mindfulness and fighting the "staying on top of my shit" urge that I've built into my workflow and which has allowed me to accomplish so much up till now. As a researcher, this skill is working against me. I don't have any plans tomorrow so I hope to do an hour or two of research tomorrow to make up for the lost time. \

Yes, I acknolwedge that this is all articifical scarcity and urgency around my research, but as I'm just starting as a researcher in earnest I think it's important to establish good habits. Potentially, I will find over time that in order to build a regular research practice that I need to have a more established schedule where I do research at the same time each week, possible before the sun comes up, and before I check email, etc. 

One final thing to note is that I'm still working on optimizing my sleep schedule so I go to bed earlier which would allow me to wake up earlier. I have a lot of work to do here because I waste a lot of time watching TV and reading and other stuff and night because I'm not able to fall asleep without it. One thing that I suspect might be contributing to this is that whenever I plan to wake up early and get to work, I get so excited about what I'm going to do the next day that I can't fall asleep. It's only when I convince myself that I won't be up until 9 or 10am that I am finally less excited enough to actually fall alseep.

#### Thoughts on Peak

Through reading [Jaime Brandon's blog](http://scattered-thoughts.net/blog/2016/09/25/notes-on-peak/), I found and listened to the Peak audiobook over the last few days. It was AMAZING. It's got me super jazzed about applying the principles of deliberate practice to my research practice (alone with other ideas of applying it to my teaching practice at The Coding Space):

1) Get a teacher. As I've said before, my role model in life is Bret Victor. So much of who I am, what I've accomplished, and what I want to become is wrapped up in him. Other role models are Seymour Papert, Mitch Resnick, and Alan Kay, as well as my new friends Paul Chiusano, Jonathan Edwards, Jaime Brandon, Paul Biggar, Kent Beck, Jonathan Edwards, etc. I wonder if one of these people, particular Bret, would be interested in mentoring me here, giving me regular (monthly or so) feedback on my progress as a researcher. My plan is to send Bret, Mitch and Alan emails at the end of today (or tomorrow if I feel like I need more time).

2) Be more systematic about debugging the ways in which I could improve my practice. You can begin to see how I'm starting to optimize my research time in the way I'm thinking about my procrastination and sleep above.

3) Develop more specific goals for myself and track my progress at achieving them. Otherwise you're operateing blind, not knowing if you're getting better or not. Given that its difficult to have concrete goals for research the way I'm doing it, I think my best proxy of this is having a target number of hours engaged in real reaching (including this journal, prototyping, reading papers, but not scheduling or editing podcasts, or working on WoofJS). More on this later.

#### Plan for today 9/1/02017

So it's 4:26pm right now. I have no more than 3 hours of good work in me today, but realisitcally it's closer to 2 hours. My plan is to do a deep dive into Alan Kay and then send him an email. I have a few papers of his in mind, but let's compile them here:

* [Computer Software - 1984](http://www.vpri.org/pdf/tr1984001_comp_soft.pdf)
* [The Power Of The Context - 2004](http://www.vpri.org/pdf/m2004001_power.pdf)
* [The Center of “Why?” - 2004](http://www.vpri.org/pdf/m2004002_center.pdf)
* [Proposal to NSF Granted on August 31, 2006](http://www.vpri.org/pdf/rn2006002_nsfprop.pdf)
* [The Real Computer Revolution Hasn’t Happened Yet - 2007](http://www.vpri.org/pdf/m2007007a_revolution.pdf)
* [STEPS Toward The Reinvention of Programming - 2007](http://www.vpri.org/pdf/tr2007008_steps.pdf)
* [Programming and Programming Languages - 2010](http://www.vpri.org/pdf/rn2010001_programm.pdf)
* [STEPS Toward Espressive Programming Systems, 2011 Progress Report Submitted to the National Science Foundation (NSF) October 2011](http://www.vpri.org/pdf/tr2011004_steps11.pdf)
* [Worlds: Controlling the Scope of Side Effects - 2011](http://www.vpri.org/pdf/tr2011001_final_worlds.pdf)
* [The Future of Reading Depends on the Future of Learning Difficult to Learn Things - 2013](http://www.vpri.org/pdf/future_of_reading.pdf)

### August 30, 2017 10:51am

Ok... So realisitically I'm not able to do research today. Other things I need to do:

1. Prepare questions for my interview today with Pete Hunt.
2. Prepare questions for my interview tomorrow with Paul Chiusano.
3. Publish two podcast episodes I have in the queue.
4. Other random emails and tasks.
5. I'm currently at my office running a day-long hackathon for my teammates so they can learn to code, so I will spending some time today mentoring them.
6. Prepare for the WoofJS database migration. Ok, realisitically I'm not going to get super far on this either but I will try!

So sadly this means no research today. I really want to do research on Friday. My goal is to do a deep dive into Alan Kay and then send him an email. However, being realisitc I might sacrafice Friday to WoofJS and then be able to focus more next week on research without distraction. Regardless, I want to acknolwedge that all of this time-pressure is 100% artifical and that it really makes no difference if I do a deep dive into Alan Kay today, Friday, next week, the week after, etc. However, I LOVE that I feel so much pressure and excitement to fit it all in soon. It makes me feel like this structure is working!

#### Analytics after yesterday's launch

I shared this website and podcast on all the places (facebook, hackernews, reddit, etc), and here are the results:

I had 62 episode downloads yesterday! I have almost 100 downloads in total!

Looks like I have 51 total podcast subscribers which is neat!

I had ~150 people on my website yesterday. About 62 make it onto my journal. 

This is fun.

### August 28, 2017 3:27pm

Andre replied already! He is busy preparing for a bunch of conferences so might not have time to chat until 9/8/17. I asked him if he could help point me in the right direction over email, but I may just have to wait two weeks :( No worries, there are plenty of other things to research in the meanwhile.

#### Research Recap #4

* I followed through on my plan to review links from Paul, Jonathan Edwards' blog, Imp, Eve, and other links.
* I did lose a day or two of research, which given that I only get 5ish days for research each week, is a lot. I still made great progress. Thanks to Sophie at the coding space for taking over for me so I could get back to research.
* Jonathan Edwards
  * https://github.com/stevekrouse/futureofcoding.org/commit/52a0d72bc49f2d56eebcfcdaae440467008f1cd2
  * https://github.com/stevekrouse/futureofcoding.org/commit/cd83671ac0a4d68818c40815c9f5202ec078aafc
* Conal Elliot
  * https://github.com/stevekrouse/futureofcoding.org/commit/52a0d72bc49f2d56eebcfcdaae440467008f1cd2 
* Eve
  * http://futureofcoding.org/journal#my-first-full-day-with-eve
* Imp + Jamie
  * http://futureofcoding.org/journal#august-25-2017-1216pm
  * Finding a time to chat soon. Think I may have found a kindred spirit and friend.
* StreamSheets
  * http://futureofcoding.org/journal#august-28-2017-228pm
  * Waiting on Andre 
* Plan for next two weeks
  * tomorrow morning I'm sharing the pocast and website widely
  * I have 6 days in the next cycle (Weds, Fri, Mon, Weds, Fri, Mon) unless something comes up. If Andre gets back to me, I might spend more time on StreamSheets. If not, I'll work on other research and pick up Streamsheets after we chat in two weeks.
  * Two really fun interviews 
    * Paul Chiusano from Unison
    * Pete Hunt from ReactJS and now Smyte

### August 28, 2017 2:28pm

I made [some decent progress on StreamSheets this morning](https://cdn.rawgit.com/stevekrouse/futureofcoding.org/d44e9b61d5b044c3daa3ae8b4b0690a09e1fa55d/prototypes/streamsheets/index.html). It's now simply a table that populates with event information when you do things with your mouse over the "preview div" on the left of the page.

I'm feeling a little daunted by all of the things that need to happen to build this prototype from a UI perspective. Given that so much of what I'm doing is conjectural, I worry that committing to a design and building it might take too long. I'm looking for a hack of some sort that will allow me to get a sense of what a working version of this *could* look like. 

From one perspective, that's what CycleJS is. A working version of this with no UI. All text. When I realized this, I went and watched [See the data flowing through your app](https://www.youtube.com/watch?v=R-GzJgEccEQ) which was a really impressive demo of the CycleJS devtools to get a sense of how your code works from a understanding and debugging perspective. However, it's not from an creation perspective, which is what I'm trying to do. But it seems like Andre might have this idea as well, given [this slide The Past, Present, and Future of CycleJS talk at CycleConf in 2017](https://staltz.com/cycleconf17/#/step-56) which says:

##### Dataflow tools scenario 
* Cycle.js DevTool as an IDE
* Push-pull FRP
* What would be a better host language?
* What would a CycleLang look like?

Sounds like my next step is talking to Andre, potentially through Codementor. I wonder if he'd let me record the conversation for my podcast. What questions do I have?

1. Pitch StreamSheets and see what he says.
2. Ask him to help run me through how the CycleJS chrome extension builds its graph so I can use CycleJS as my compile target. Could it be a one-to-one mapping?
3. Hear his ideas for "Cycle.js DevTool as an IDE"

Great. I'll shoot him an email now. 

### August 25, 2017 7:57pm

So for some reason, probably having to due with all of the rice in the burrito bowl I had for lunch, I was super tired after I got back at 3:30 so I took a nap until 6pm.

Despite going off-plan, I was still able to skim my way through the resources I listed below and begin thinking through what StreamSheets would look like. I think I'm ready to start implementing it. It's a fun idea that I keep thinking about and I think the only way to stop thinking about it is to do it and fail. So my goal is to fail fast. Build the minimum features I need so that I get see why it won't work as soon as possible, hopefully in just a week or two.

![image](https://user-images.githubusercontent.com/2288939/29736554-432542da-89d0-11e7-91fd-3036fc8472ad.png)

![image](https://user-images.githubusercontent.com/2288939/29736558-4d95913e-89d0-11e7-9540-f81b8211927e.png)


In terms of next week, I have a bi-weekly research recap on Monday. Given that I missed a few days of research because of my other job over the past two weeks, I would like to sneak in as much time as possible doing productive work before then, so I'll try to get started on developing StreamSheets in the morning and then do my recap writeup and recordning in the afternoon.

On Tuesday morning at 10am, I plan to publish this podcast and website broadly via all the social channels I have available to me ([#25](https://github.com/stevekrouse/futureofcoding.org/issues/25)). Tuesday afternoon is set aside for emails and other random tasks but if I have time, I'll continue working on StreamSheets.

Wednesday is totally reserved for research so that's probably StreamSheets.

Thursday I will set aside for work on refactoring the WoofJS database ([#352](https://github.com/stevekrouse/WoofJS/issues/352), [#390](https://github.com/stevekrouse/WoofJS/issues/390)). However, if I don't get it done (or screw things up badly) I may have to continue working on this on Friday. 

If all goes well on Thursday, Friday is back on StreamSheets.

### August 25, 2017 12:16pm

I did a [deep dive into Imp](https://github.com/stevekrouse/futureofcoding.org/commit/c1b7e0677a6a2ccbd456e3b260b54a07eda3df0a) this morning which took about 2 hours. He has a great collection of relevant papers, of which I've read a few and plan to read about a dozen in total. I also shot him an email so hopefully we can become friends.

Let's think about the rest of the day. I'm about to go on a 2-hour run-lunch-grocceries break, so I'll be back at the computer around 3pm, which gives me another 3ish hours of work.

I really want to spend some time on StreamSheets denotational design but I have a few other relevant papers that it might make sense to read first:

* [Stream Processing with a Spreadsheet](https://link.springer.com/chapter/10.1007/978-3-662-44202-9_15)
* [A Spreadsheet Model for Handling Streaming Data](https://www.cs.cmu.edu/~shihpinc/pdf/Gneiss-CHI15.pdf)
* http://strlen.com/treesheets/
* Look into Codd's relational calulus and relational algebra
* [SIEUFERD Project (database query tool)](http://people.csail.mit.edu/ebakke/sieuferd/index.html)

All this shouldn't take more than an hour-ish, which leaves me plenty of time to start thinking about StreamSheets!

### August 23, 2017 6:12pm

#### My first full day with Eve

The Eve Quickstart Tutorial is super buggy! I find that I have to really mess with different blocks of code (by editing them by adding random whitespace) to get things to run properly. It's unclear when things aren't working becuase I'm doing it wrong and when things are just broken are their end. 

Looks like you can only use Eve version 0.2 on their play.witheve.com site. This is a bummer because it's pretty buggy and their documentation for 0.2 is pretty weak. However, as I learned with Lamdu (and Elm and Haskell and others), it can take a day (or more) to get a non-web-based tool up and running. So for now at least I will stick to v0.2 online. Potentially I'll come back when they release v0.4 [which it sounds like they're skipping to](http://incidentalcomplexity.com/2017/08/14/July/).

For example, I tried to create a simple button that counts its clicks. You can read my laughable attempt here: [https://gist.github.com/anonymous/458ea8ff7f968faa719f6e52d46848b9](https://gist.github.com/anonymous/458ea8ff7f968faa719f6e52d46848b9)

You can load it up into eve by going to [play.witheve.com](http://play.witheve.com) and hitting the cloud button with the down arrow in the top-left of the screen.

I spent approximately 4 hours on this single attempt at getting a counter button to work! That's pretty crazy! Obvious things that slowed me down that aren't their "fault":

1. Lack of stack overflow answers to my questions
2. Lack of documentation. It was super sparse and unfinished. (This isn't their fault because I understand that it's beta software that changes quickly so it's hard to have good documentation for an older version.)

The things that slowed me down that *are* their "fault":

1. Implicit databases in search is very confusing. Where is it searching when you don't specify?! 
2. It's also annoying that it doesn't automatically pull in all the joins I ask for even if I don't search in that database. Seems like something their engine could infer.
3. Not having any error messages is insane! The only way to survive this is to do constant sanity checks every change I make. Even then, it's really slow going and easy to miss things.
4. Their interface is super buggy! I had to constantly save and refresh the page to get things to work. If it were any buggier, it'd be unusable. 
5. Not having the version of Eve that I'm using in the URL (or somewhere on the page) was very fustrating. Took me a while to figure that out which prevented me from using the appropriate docs.
6. It's unclear how control flow works between blocks. For example, for every search term do I need a new block of code?
7. The difference between bind and commit was not clear. I spent much of my time trying to use commit to add things to the page but it wouldn't add more than 1 of the same kind, which seems like how I'd expect bind to behave.
8. I found it confusing to think in the "prolog" or "datomic" style, thinking about which records would satisy my queries. I was usually wrong when trying to guess what records my queries would match. Given that there's no UI for this, I was forced to constantly add silly divs to the screen as sanity checks for each query.

On the positive side, things that I liked:

1. I liked that (almost) everything has uniform record syntax. The syntax was relatively easy for me to pick up. However, I don't know if that will be the case for everyone. Why not just use a lisp syntax? (Turns out there's a clojure library that's similar: https://groups.google.com/forum/#!topic/eve-talk/b-IN4pLF45A)
2. I liked that the core data structure is a record 
3. I liked how the API simplifies everything to either searching or adding (commiting or binding) to a database, and anything, including the page, is just a database. (Personally, I wouldn't have two seperate ways to add to a database but just one, "add". If you want a "bind" sort of behavior, you should have to somehow specify that manually. I should think more on this, but it might be tricky given that I don't really understand the difference between the two.)

I found this quote while reading the Eve Google Group:

> In Excel, they show the data and hide the formulas. In programming, they show the formulas and hide the data. In Eve, we show both.

I really love that quote and vision for a programming language that's as concrete as a spreadsheets but has the powerful abstractions of programming langauges. Unfortunately, Eve does not live up to this vision in its current implementation. It's much closer to Python than Excel. 

I think my vision for Streams as Spreadsheets could fufill this vision. To that end, I think there's a lot about the Eve architecture that I could mimic or at least learn from for when I think through how to design this prototype.

#### Plan for Friday, August 25th

I don't plan on having time to do more research tomorrow, so I'll pick up my research on Friday with Imp and potentially doing some denotational design on Streams as Spreadsheets:

* scope out the interface of streams. what are the core things you can do to them that lets you build out all the other stream combinators? give it a callback that recieves the next item?
* can the structure can be dynamic? can a row dynatically create a sheet which creates a sheet, etc?
* metaprogramming

### August 23, 2017 9:51am

I was able to carve out today entirely for research! My thought is that given that I have a whole day to work, I might as well use it to build something, or multiple somthings, in Eve, and save Imp for a day where I have less continuous time.

### August 21, 2017 6:15pm

So as my closest friends and family know, I am not so great at mental math. The math that worked was: 1 day Coding Space + 1 day WoofJS + 3 days research and podcast = 5 days. However, when I decided to spend two days per week interviewing over the past 2ish weeks, I didn't take into accounts that it would now leave barely 1 day left for research. Luckily, my teammate Sophie will be taking over interviews from me starting next week so I can return to a normal research schedule next week. However, that means that I didn't get to do research today like I'd hoped. I hope to get a few hours of research done on Wednesday and Friday of this week.

I'm also pushing back my launch date of the podcast from today to next Monday, barring any other glitches. As far as next week's research recap goes, it just might be a particularly short one :/

### August 17 2017 3:24pm

Unfortunately, I'm realizing that realisitically I don't have time tomorrow to do research. My time has been stolen away by various meetings and urgent emails, so I'll pick up where I left off on Monday. Have a great weekend everyone!

### August 16 2017 5:25pm

While I had no trouble finishing up Jonathan Edward's blogs, which were fascinating and full of insights, I barely even started getting through Imp, watching 1 video and 1 paper deeply and that's it. However, I *really* loved both the video and the paper. Many of these are quite simliar to my StreamSheets ideas and are informing them greatly. (To be honest, they're mostly affirmation bias-ing them greatly.) I'm also noticing that I'm interpreting all of these ideas through the lens of Streamsheets, which makes me think that I'm going to have to move to disconfirming my assumptions (which could involve prototyping) about it sooner rather than later so I can put it to bed and begin thinking about other ideas.

Tomorrow is full of interviews. Friday will be split between Imp and Eve. I hope to get twice (or more) time on Friday by going to bed earlier Thursday night. Let's see.

### August 16 2017 12:38pm

I stayed up too late last night goofing off on my phone in bed so I got a super late start to today, which effectively cuts my research day in half today. Not good. Let me try a new system... I just set my Apple Bedtime app on to go to sleep at 11:30pm and wake up at 8:30am. Let's see how that goes.

What do I want to accomplish today?

* 1pm-2pm   get through Jonthan Edward's remaining blogs
* 2-3:30pm  go on a run
* 3:30-5:30 imp

Great! This might be a little ambitious, but I can do any overflow on Friday. The rest of the time on Friday will be spent doing a super deep dive on Eve.

### August 14 2017 6:00pm

I made [a decent amount of progress](https://github.com/stevekrouse/futureofcoding.org/commit/52a0d72bc49f2d56eebcfcdaae440467008f1cd2) but also got pulled into a research hole, looking into Conal Elliot's work. It's interesting to see how he differs from Jonathan Edwards, who is the other hole I tried to explore today but failed. I saved his remaining 50 blog posts in a bookmark folder for easy access on Wednesday. Then I'll take a look at Imp and Eve.

I'm feeling like this research is doing great things from my brain, and I'm excited to model out my StreamSheets idea according to Conal Elliot's denotational design paradigm, and pair it with the requirements I know I need about metaprogramming and undo-ability and composability from Jonathan Edwards, Expressions of Change, etc.

### August 14 2017 11:15am

And it's time for another research recap!!! Before I get to that, I have a few housekeeping thoughts to get out of the way:

1. I've been noticiting that I've been procrastinating starting this recap, sleeping later, distracting myself with other tasks. I guess I'm a little worried about it, but I'm feeling better already now that I've started.

2. I used to keep track of my to-do list for this website and podcast in a seperate google doc, but I have layed it to rest (RIP) and will now use Github Issues on this repository to track my todos.

#### Research Recap #3

* While I was planning to do more research into other peoples' work, everything changed when I got a call from Paul Chiusano from Unison about a "writers' workshop" in Boston with my kinda people. 

* WoofJS Workflow https://docs.google.com/document/d/1gt4SDLgCSeKa_h1seWtriPFsve8aYHzdhuADWas2j0c/edit
  * Kids lose the forest for the trees
  * Forget what they're working on
  * Don't make outlines for creative projects
  * Integrated top-down programming assitant
  * Also code branches, version control
  * Buggy demo at woofjs.com/workflow
  * Cool proof of concept, but would require many more hours to get production ready (need better merging up and down, less bugs, permissioning), and I'm doubtful kids would even use it in its current form. It's confusing and not clear what they'd get out of it. So I'm not going to continue with it for now.

* Workshop recap http://futureofcoding.org/journal#boston-future-programming-writers-workshop-recap
  * Paul gave a really interesting talk, making the case that building better mathmatical abstractions is more powerful than building better interfaces to the abstractions we have
  * Having a deadline was neat, but conferences probably don't make sense for me (applied to PX! but wont' go)
  * But I will start making videos (about WoofJS workflow, and also older prototypes)

* This week I really do hope to review other peoples' research
  * a number of links from Paul Chiusano
  * Jonathan Edward's 50ish blogs
  * Expressions of Change
  * Imp
  * Eve
  
* Also, I'm obsessed with my spreadsheets+streams idea: StreamSheets

* Other notes
  * Editing audio on my phone now, after buying all of the other tech
  * Entering a busy time for The Coding Space, my after school program. I try to schedule all of my work, which is mostly interviews for part time teachers, for Tues and Thurs, but it might overflow to research days, sadly.

### August 11 2017 11:09am

Sadly, because I allowed today to get filled with various other tasks and meetings, I don't have time for research today. For example, I have four interviews for part-time teachers at The Coding Space this afternoon. 

However, I will say that I've been spending a ton of my time thinking about my "streams as spreadsheets" idea and really think there's some potential here. In particular, I love how concrete it makes everything. You never have to imagine how the streams flow into streams which flow into data which flow into HTML elements. Everything is always inspectable and concrete, even asynchronous things, in their own streams. My next steps are to outline how I'd build TodoMVC and a Chat App in it. 

### August 9 2017 5:19pm

#### Boston Future Programming Writers' Workshop Recap

The last few days have been a whirlwind! Although it might not seem that I spent much time working on Future of Programming research in the past few days, I've been doing almost nothing else besides this research -- so much so that I've been having trouble finding time to journal about it. Finally I have just 5 minutes now to jot down some notes.

First of all, my presentation on the WoofJS Workflow went great! [Here's the Google Doc to the finished paper](https://docs.google.com/document/d/1gt4SDLgCSeKa_h1seWtriPFsve8aYHzdhuADWas2j0c/edit) that I talked through and then submitted to Splash PX!, the conference in Vancover, yesterday. Second of all, it was really amazing to get to meet Jonathan Edwards, Richard Gabriel, Mel Conway, and more! What a fun group of people working on these same issues I think about all day.

I ended up spending most of Friday, Saturday and Sunday working on getting the protoype working, which you can now play with at woofjs.com/workflow. It's not super pretty or bug free yet but you can play with it.

One of the most precient pieces of feedback I got on it was: why are you talking to us about this? Just try it out with your students. I think this is a really great point. I'm not a theoretical researcher. I'm a inventor/product person and our crucible is the user-test, not the paper review.

#### Other updates from the last few days

I spend many hours trying to find the right setup to do light editing on my podcasts. I tried my chromebook, a PC, a desktop iMac, a faster desktop iMac, an iPad Pro, and finally settled on... editing the episodes right on my iPhone 7 Plus! I am a fan of the free Hokusai 2 app. Seems to work great and it's all free.

Given that I spent most of this two-week research cycle on prototyping, I'm not sure what I'll be talking about on the research recap episode on Monday... Probably go into some implementation details and more feedback I got at the workshop. I can also go into the other participants and their research, in particular, Paul Chiusano and Jonathan Edwards, both of whom I hope to have on the podcast soon!

I don't plan to have time to do much research tomorrow but I plan on spending Friday morning here, probably sifting through links and working out various ideas. No more prototyping for a little while, I hope.

### August 4 2017 6:12pm

I spent 3ish hours yesterday and 3ish hours this morning building out the WoofJS Workflow. It still has a long way to go but it was enough for me to get a sense of how it works and take a decent screenshot for the summary I sent to the other participants in the workshop on Monday. 

#### WoofJS Workflow Summary

There are many ways for a new programmer to get “stuck” while learning to code, and require the help of a more experienced programmer to get them “unstuck.” For example, it’s virtually impossible for a new programmer to spot a missing closing-bracket. That’s why a block-based coding platform like Scratch is so wonderful. By eliminating syntax errors, it allows new programmers to spend more time learning, being productive, and enjoying coding. One way to optimize a programming environment is minimizing the time learners are stuck. 

In this vein, I’d like to discuss a problem that my students encounter while coding in WoofJS, and a prototype that I’m working on to solve it that I call “WoofJS Workflow”. For reference, these students are aged 8-14, and attend classes at my after school program, The Coding Space. We built WoofJS (woofjs.com) to be “the next step after Scratch” for our more advanced students. It’s a JavaScript framework and IDE for students to make games and animations. For each block in Scratch, there’s an equivalent JavaScript command in Woof that does the same thing. In this way, WoofJS is an alternative to ProcessingJS.

![image](https://user-images.githubusercontent.com/2288939/28989068-1c0c4210-7941-11e7-99b0-371f948224da.png)

As simple as it sounds, I’ve found that the most common way students get stuck is when they lose track of what they’re working on. Thus when any student asks for help, we first ask, “What are you trying to accomplish here?” More often than not, the student will have entirely forgotten what she’s trying to do, and respond with a shoulder shrug. 

If the student is working through one of our guided tutorials, which have numbered steps, we can then follow up with, “What number step are you on?” and then, “Could you read it aloud?” Sometimes, simply re-focusing the student’s attention on the problem at hand allows her to solve her issue herself with no further teacher input. But even if the student needs more guidance, the conversation is much more productive now that teacher and student are aligned on the goal.

However, when students are working on creative projects of their own devising, there is no numbered list of steps for them to refer back to. While I’m constantly begging students to write their steps out for themselves on paper, it’s a losing struggle that almost never happens. Many creative student projects never see the light of day because students get stuck, frustrated, and quit, going back to our guided projects.

While staying on task is vital to many constructive endeavors, it’s particularly difficult in programming because our tasks have subtasks with subtasks with subtasks with subtasks. When a student gets stuck on a subtask 3 levels deep, they often lose sight of the larger picture and what they’re even trying to accomplish in the first place. Luckily, programming has a technique for dealing with breaking down problems into subproblems - top-down programming. 
The Solution
While top-down programming is indisputably a core programming competency, our tooling doesn’t lend itself well to it, which is why we often resort to whiteboards, pieces of paper, or github issues. What would it look like to integrate a top-down programming assistant into an IDE? 

I think it would look like a nested To Do list right at the top of the screen. That way, what the student is working on now is always top of mind. Even better, the breadcrumb trail explaining how what they’re working on now plays in the larger picture is also right there. 

![image](https://user-images.githubusercontent.com/2288939/28989060-11fb6fa8-7941-11e7-803c-83a9999cac52.png)
(This photo represents a rough prototype-in-progress. Many of the features I discuss below aren’t implemented yet.)

Here’s where it gets interesting. Each To Do item represents a separate isolated branch of code. When you drill into a To Do item (by clicking its bullet), you see the code only for that branch and can edit it without affecting the other branches. Then, when you’ve completed a To Do task, you simply hit “Done” to merge this branch with its parent branch. (Have you ever thought it strange that in git you first decide what to work on, then do it, and at the end write about what you did? Doesn’t that seem backwards?) As you can see, this workflow skips the “git add” and “git push” steps. It also makes it much easier to switch between branches -- no need to stash changes before checking out a new branch. Those changes will be waiting for you at this branch whenever you come back to it.

While this tool is technically no more powerful than git and github, I think it would enable greater collaboration, because by encouraging you to break your problems down explicitly, it allows teammates to go directly to a sub-problem 6 levels deep and help you there. Currently, we only collaborate with pull requests one level deep, but I think a tool like this could change this, enabling deeper collaboration without much thought for coordination.

### August 2 2017 6:34pm

#### Invited to "Writers Workshop" in Boston

Yesterday, Paul Chiusano called and invited me to a "writer's workshop" for independent future of programming languages researchers organized by Jonathan Edwards and Richard Gabriel. Very exciting! It's going to happen on Monday in Boston so I've got to get to work on my presentation. After some deliberation I've decided to build and present the WoofJS Workflow (formerly called "Workflowy Git").

To prepare for the event, I want TODO some research on the other participants tomorrow...

* https://en.wikipedia.org/wiki/Richard_P._Gabriel
* http://dreamsongs.com/
* http://web.mit.edu/barryam3/www/blog/
* https://people.csail.mit.edu/sperezde/oopsla16.pdf
* https://people.csail.mit.edu/sperezde/onward13.pdf
* http://neverworkintheory.org/2016/09/30/rethinking-git.html
* http://alarmingdevelopment.org

#### WoofJS Workflow

![image](https://user-images.githubusercontent.com/2288939/28898123-2c574060-77b2-11e7-86fc-892261294caf.png)

Like last Friday, I spent a while (maybe 45 minutes this time) in the shower taking notes. This upcomming Friday I want to build a rough prototype of this. I may have to spend time this weekend on it too...

##### Creating branches

* replacing the WoofJS logo with the text, "What's one thing you want to accomplish?"
* For each branch, you can see the linked breadcrumbs > of > how > you > got > there
* It prompts you to create sub-branches with, "Could you break this problem down into a sub-problem?"

##### Staging

* not a seperate step
* eventually, will be able to select chunks of code to merge
* for now, create two sub branches, delete the changes in one and merge it, then you're left with a branch with the remaining changes

##### Mergning

* basic git merge with conflicts (eventually move to a github like interface)
* will warn you about conflicts before you merge like github
* I don't think fixing merge conflicts needs to be a seperate branch but that could make sense

##### Editing branches

* once you've editing a child, you can no longer edit the parent (unless you get rid of child changes)
* re-ordering children is allowed
* unindenting is not allowed (needs to be merged)
* indenting is allowed
* multi-homing is not allowed (for now)
* (Eventually) each branch could have github style issue/branch discussions

##### Permissioning

* Anyone can create sub-branches. 
* Up to the owner of the parent branch whether or not to merge.
* Can hide all non-owner branches
* Need to be formally added as a collaborater for real time editing

##### History

* could just be linear like git
* would be neat if we could take advantage of the nested structure though...

##### Other benefits

* foster collaboration infinite levels deep, instead of just one level deep like with pull requests
* allows mentors to help mentees by created nested structure that the mentee can attack

##### Potential issues

* doesn't solve top down programming with functional abstraction, which I've had a difficult time getting students to intuit on their own
* easier with single file, but I don't see any clear blocker for many files
* could work on any IDE, but maybe not as a terminal thing
* internet connected, not as distributed

##### Worried about timing

I'll have to make sure to write out my presentation and time it so I can make sure I take no longer than 20 min. It's fun to gloat over all of my wonderful features but many of them will be obvious and I won't need to mention them. Also will need to figure out how much context I should give about myself, my other research, The Coding Space, and WoofJS. 

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

* http://futureofcoding.org/journal#purpose-of-this-project
* http://futureofcoding.org/journal#reflections-on-my-emotions-during-this-first-week
* http://futureofcoding.org/journal#github-page-markdown-as-cms
* http://futureofcoding.org/journal#thinking-about-my-schedule
* http://futureofcoding.org/journal#research-was-much-more-tangible-helpful-than-i-wouldve-thought
* http://futureofcoding.org/journal#alan-kays-relentless-problem-focus
* http://futureofcoding.org/journal#excited-about-streams-as-spreadsheets
* http://futureofcoding.org/journal#workflowy-git
* http://futureofcoding.org/journal#aprtus-like-interface-as-game-builder
* http://futureofcoding.org/journal#reactive-woofjs

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

  function urlify(text) {
       var urlRegex = /[^"](https?:\/\/[^\s]+)/g;
       return text.replace(urlRegex, function(url) {
           return '<a href="' + url + '">' + url + '</a>';
       })

   }

   var all = document.getElementsByTagName("li");
   for (var i=0, i < all.length; i++) {
        var element = all[i];
        element.innerHTML = urlify(element.innerHTML);
   }
  
  </script>
