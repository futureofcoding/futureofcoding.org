---
title: Dynamicland
---

# Dynamicland

* TOC
{:toc}


## Day 1

_Jan 15, 2018_

Wow, I'm not even sure where to start. I guess I can summarize the day.

I arrived at 1pm. Luke gave me a tour of the space, then I got lunch with Toby, Bret, Josh, and Luke. Back at the space, I walked around, reading the posters on the wall. That was fun and overwhelming -- there's so much content that I didn't know about. 

I was finally saved by Virgina who was working on projecting an image of survey results onto a table. We first had to figure out how to project an image onto a table, which is called a "supporter" and scale its size. Then we decided we wanted it to mirror itself across the table so that people on either side could see the table. In order to do that, we needed to change the way we were displaying the image to use the Illuminator library directly, instead of using an image helper function (which didn't have rotation). It was a little fustrating to have to use the standard canvas that draws things from the top-left corner, with a context, etc.

I have a few project ideas:

* Scratch/WoofJS sprite abstraction library
* functional programming composable widgets
* how many things can we build without typing?

I also want to see what ways I could help with fundraising. Here are some ideas:

* connections to federal government
* asking Linda Kronfield, Brett Berson, Phin for fundraising advice
* organizing Sand Hill Road Trip (bring projector? slide deck?)

Also, Luke said that it could be possible for me to host an event in the space on Sunday, my birthday. I want to double check with them tomorrow and will then see if there are people around. That could be a blast hackathon birthday!!

## Day 2

_Jan 16, 2018_

### Prep

#### Fundraising

* Patreon
* Podcast
* Kickstarter
* Ask Mitch Resnick for advice
* Ask Pete Muller for advice

#### Meta-pages

There are a few really cool pages in Dynamicland:

* run this <- on that ->
* edit this number on that page with this scrubber
* a dial widget (goes from 0 to 1 as you rotate)
* pull up the code for this page in an edit window widget

I think it'd be fun to come up with more of these "meta-pages."

One idea is to mimic some of the concepts found in programming langauges:

* basic datatypes, such as numbers, words, colors
* basic data structures, such as lists, maps
* functions (this could be implicit, lazy with named symbols)
* basic combinators, like addition, string concatenation
* definitions (could tie into "claims" about oneself)

It seems like there are some basic Dynamicland operators you'd want:

* get a live camera stream of a page/region/supporter
* reference a page somewhere else
* play a sound
* make a claim (this may be too low level)
* make a wish (this may be too low level)

And there are a few FP concepts that feel relevant:

* The compose operator
* recursion
* laziness / delayed evaluation
* data structures

Here's a problem that a meta-page might be able to solve: when you dirty edit a piece of code, all it tells you now is that it was edited and on what line. It would be neat if you could:

1) temporarily revert the code to it's non-dirty state
2) forever revert the code
3) print out the dirty version as a clean version
4) see the dirty code changes (without going to the computer)

Number (4) here is probably the most useful but might be a little tricky given the projector's resolution. Might need to make it bigger so that it's readable. Here's an idea: it could be a cardboard cutout that's the size of the editor but more mobile. It could also have a way to scroll it up/down and left/right. Maybe by moving a rock through a minimap?

I'm not entirely sure how state works in this system. So far everything I've defined has been a pure function of time. 

Things I saw yesterday that I will look at for inspiration:

* combined body
* animation from frames
* edit number via scrubber
* run this on that
* dial widget
* count dots on page
* widgets that have pointy thing coming out

### Recap

Day 2 was a little less overwhelming, but also jam-packed. 

When I first got in, I spent some time reading as much as I could of the source code of the Realtalk engine (big board). This was fun and seemed like a good way to learn about things -- as opposed to looking at random examples. 
Then we had lunch. I chatted with Luke about his prior experience starting two companies, and how he was intitally so excited about VR, but now, like other early-VR enthusiasts, he has trouble putting on the goggles. Additionally, he mentioned how far away the technology is from being anywhere near good enough quality. 

Then I spent a lot of time with Josh, who explained how the macro/pattern matching system works, the backend architecture (Realtalk, the webserver, the text-editor, the filesystem), including printing out the compiled Lua code that is generated. He also showed me the "Addition Kit" which I LOVED, as well as Editor in the World, which was also really cool. He pointed at a few other "kits" that I'm excited to check out. 

Then Luke and I spent an hour or so talking about fundraising. That was fascinating, however, I don't feel comfortable publishing any of details there.

## Day 3

_Jan 17, 2018_

### Prep

I don't have any particular inspiration on what to build yet. I still feel like there's so much to see and tinker with. Here are the things that most interest me:

* math kit (how it works, what fun tweaks could I make)
* looking through the other kits, in particular a mini-editor Paula made
* there was a page on wall in the carpet room that I remember piquing my interest, but I forget what it was
* making a game of some sort
* understaing and tweaking editor in the world

### Recap

I got to the lab at 10:30 this morning. First I played around with various kits: the math kit, the fractal tree kit, the logic kit, Paul's blocks kit, etc. Then I played with the RGB dial selector, but it was fustratingly difficult. Then I picked up poke with Toby and Bret. 

#### Bret meets Alan

Over lunch, I asked Bret about how he got connected to Alan. Here's approximately the story:

> I made a website and one of Alan's researchers showed it to him. Alan often dismisses things when he firsts sees them -- "we were doing that back in the 70s at PARC" -- but if you keep showing him somthing that he needs to see, he'll eventually get it. They showed him my stuff a few times and we set up a time to meet. It kept getting pushed back because Alan had meeting with people like Barak Obama - this was in 2011 - but eventually I went to visit the lab. They were working on STEPS at the time. I stayed for a few weeks at the lab.

After lunch, I perused the books in the library. I felt a little overwhelmed, not really excited about any particular project. I decided that I'd made a simple "dot catching game." That was fun and took 45 min or so. 

#### Math Kit v2

I was then saved by Virgina again. She wanted a way to do "spreadsheet like things" to data in the system. So first we needed to figure out a way to represent numbers. What eventually worked was using a "poker chip" style, where you count the number of different colored chips on a page, greens are ones, reds and tens, and blues are hundreds. That was fun.

Then Luke showed us how to select a group of blocks, so it became clearer how to create aggregation functions. I made "sum" and "count". Then I modified the Math Kit so that it works for division; it used to only work for addition but now it works for +-/*. I combined sum, count and division to get the average of numbers.

##### Things to think about

* how the number primitives aren't super stable (depending on lighting)
* name for this project. Other ideas are RealSheet, RealData, RealMath

##### Things to definitely do:

* refactor number pages to claims and a seperate library page
* make a few other operators +/-*

##### Things to maybe do:

* print out a massive table of pasted on numbers (cover up dots for nothing, not zero)
* print an average function
* reference a selection from afar
* reference a number from afar
* map a function over a selection
* pairwise do something to two selections
* get an item from a selection via index 
* max, min over selection
* maybe a custom version of selection that's less noisy

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>