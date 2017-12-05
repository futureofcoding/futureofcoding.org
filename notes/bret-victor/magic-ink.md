---
title: Magic Ink
---

# [Magic Ink](http://worrydream.com/MagicInk) 

_March 15. 2006_

* TOC
{:toc}

The main interface to software is "push[ing] at things represented on the screen, using a mouse as a proxy finger." (And of course, the keyboard for texual and numerical input.)

Software is a merging of graphic design and industrial design. 
## Three types of software

![](http://futureofcoding.org/media/Screenshot 2017-12-05 at 9.25.15 AM.png)

### Communication Software

#### [Social Software and the Politics of Groups](http://shirky.com/writings/group_politics.html)

##### [Buliding Communities with Software](https://www.joelonsoftware.com/2003/03/03/building-communities-with-software/) - Joel on Software, March 2, 2003

On Usenet, threads go on for months

On IRC, you can't own your nickname or your own channel if you leave

## Most Software is Information Software

> For example, consider calendar or datebook software. Many current designs center around manipulating a database of “appointments,” but is this really what a calendar is for? To me, it is about combining, correlating, and visualizing a vast collection of information. I want to understand what I have planned for tonight, what my friends have planned, what’s going on downtown, what’s showing when at the movie theater, how late the pizza place is open, and which days they are closed. I want to see my pattern of working late before milestones, and how that extrapolates to future milestones. I want to see how all of this information interrelates, make connections, and ultimately make a decision about what to do when. Entering a dentist appointment is just a tedious minor detail, and would even be unnecessary if the software could figure it out from my dentist’s confirmation email. My goal in using calendar software to ask and answer questions about what to do when, compare my options, and come to a decision.

> Consider personal finance software. Entering and classifying my expenses is, again, tedious and unnecessary manipulation—my credit card already tracks these details. I use the software to understand my financial situation and my spending habits. How much of my paycheck goes to rent? How much to Burrito Shack? If I give up extra guacamole on my daily burrito, will I be able to buy a new laptop? What is my pattern of Christmas spending, and will I have to cut back if I don’t take any jobs for a month? If I buy a hybrid car, how much will I save on gas? I want to ask and answer questions, compare my options, and let it guide my spending decisions.

> Even consider reading email. Most current designs revolve around the manipulation of individual messages—reading them one-by-one, searching them, sorting them, filing them, deleting them. But the purpose of reading email has nothing to do with the messages themselves. I read email to keep a complex set of mental understandings up-to-date—the statuses of personal conversations, of projects at work, of invitations and appointments and business transactions and packages in the mail. That this information happens to be parceled out in timestamped chunks of text is an implementation detail of the communication process. It is not necessarily a good way to present the information to a learner.

> Similar arguments can be made for most software. Ignore the structure of current designs, and ask only, “Why is a person using this?” Abstracted, the answer almost always is, “To learn.”


I disagree with this point. Learning -- manipulating models in our heads -- is really only part of what calendar, personal finance, and email software do. We also want to manipulate them and see what happens. In other words, I dispute the picture above of manipulation software as building the model only in the computer. I believe manipulation software is building the model in both the computer and the user's head.

For example, calendar sculpting -- setting priorities, determining total time, weighing tradeoffs -- is a definitely a collaboration between computer and human. Yes ultimately we are building the model inside the computer but we are at the same time building the model inside the human's head.  It's two-directional.

> many software designers feel they are designing a machine. Their foremost concern is behavior—what the software does. They start by asking: What functions must the software perform? What commands must it accept? What parameters can be adjusted? (In the case of websites: What pages must there be? How are they linked together? What are the dynamic features?) These designers start by specifying functionality, but the essence of information software is the presentation.

> ...many software designers feel they are designing a machine. Their foremost concern is behavior—what the software does. They start by asking: What functions must the software perform? What commands must it accept? What parameters can be adjusted? (In the case of websites: What pages must there be? How are they linked together? What are the dynamic features?) These designers start by specifying functionality, but the essence of information software is the presentation I suggest that **the design of information software should be approached initially and primarily as a graphic design project.** The foremost concern should be appearance—what and how information is presented. The designer should ask: What is relevant information? What questions will the viewer ask? What situations will she want to compare? What decision is she trying to make?

## [Showing the data](http://worrydream.com/MagicInk/#p107)

Amazing criticism and redesign of 2006 Amazon.com. Looking at Amazon now in 2017, most of his suggestions have been implemented.

## [Arranging the data](http://worrydream.com/MagicInk/#p120)

Beautiful movie timetable redesign. Reminds me of my movie timetable plus map combo idea that this article inspired... Let's start with the questions that I have about movies:

The main question is: should I see a movie tonight? In order to make this decision, I need to know:

1) If there's anything worth seeing
2) If I can get there in time

I determine (1) based on (a) having heard about the movie before from friends, (b) looking at reviews, (c) watching the trailer.

I determine (2) based on (a) what time the movie is, and (b) how long it will take me to get there from here, and (c) what else I have to do before the movie (i.e. eat dinner or some work), (d) do I want to go to the neighborhood that theater is in (do they have nice resturants, is the transit reliable).

My first interface design was a map. Imagine a map of the theaters in your city. On each theater, it has the photo/name of the movie that will start the soonest at that theater. At the bottom of the map, there is a time-scrubber that lets you go farther into the future, changing the movie displayed at each theater location.

While a good start, this really only helps me answer the second set of questions. Another perspective would be to say: you don't really care about the map as much as the amount of time it'd take to get from where you are now to the theater. Sometimes they display miles but that's useless. I want walking, public transit and car times. If you could give me the uber price too, that'd be great. However this doesn't answer 2d... pontentially you could have a mini-map next to each theater in a regular vertical list that sittuates it in the city as opposed to putting them in 2-d space on a map. (As Bret says, "The viewer is likely to be familiar with the theaters in her area, and if she isn’t, a simple address would be useless without a map or directions. Presumably, a mouse click or hover over a theater’s name would reveal this information...")

Or we could go deeper into the map interface, showing reviews, comments from friends, and linking to trailers right in the map interface.

## Context-sensitive information graphics

Three sources of context:

* Environment involves sensing the current state of the world.
* History involves remembering the past.
* Interaction involves soliciting input from the user.


## Interactivity considered harmful

1. User has to make first move
2. User has to know how to ask
3. User is fearful of "bad states"
4. Hands cannot be used for other things

## Reducing interaction

> *Graphical manipulation* domains present the context model in an appropriate, informative setting.
> *Relative navigation* lets the user correct the model, not construct it.
> *Tight feedback loops* let the user stop manipulating when she’s close enough.

> For example Google Maps... would recognize the prediction list as information software in its own right, and would take steps to show the data (such as annotating the predictions with driving times to and from common locations, taking current traffic conditions into account) and arrange the data (perhaps spatially arranging the predictions on their own map). This might answer most of the user’s questions without any interaction at all.


## BART widget case study

Leveraging sentences with editable values. Was he the inventor of this madlib with default value paradigm?

## [Airplane design](http://worrydream.com/MagicInk/#p227)

Holy crayp this is good:

![](http://futureofcoding.org/media/flight_redesign.png)


> The problem is primarily cultural. Asking “Why doesn’t Southwest design better software?” is challenging the symptom, not the disease. The real question is, “Does software design exist yet?” Before we can expect better airline websites, we may need to change a worldview.

## History of Design

Hilarious:

> People constantly settle for ugly, clunky software, but demand informative, professionally-designed books, newspapers, magazines, and—ironically—brochures, ads, and manuals for that very software.

Apple and Basecamp capitalize on this:

> Today, software consumers demand technological features because software marketing presents features. Consumers ignore design because marketing ignores design. The cycle is vicious, but perhaps vulnerable too—some brilliant new software with engineering, design, and marketing all in sync may raise the bar for everyone.

### [Tool vs Platform](http://worrydream.com/MagicInk/#p252)

![](http://futureofcoding.org/media/platform_model.png)

[CSS is the worst.](http://worrydream.com/MagicInk/#p255)

> It is so complex that it has never been implemented correctly; yet, successive versions specify even more complexity. At the same time, it is so underpowered that many elementary graphic designs are impossible or prohibitively difficult, and context-sensitivity (or anything computational) must be addressed externally. Most CSS lore is dedicated to describing the tangles of brittle hacks needed to circumvent incompatibilities or approximate a desired appearance.

The prior quote makes me want to work on a project to "kill css." What do people use CSS for?

1. Fluid Layout (flexbox)
2. Photoshop things (Color, size, border, spacing)
3. Animation (keyframes, transitions)

> the larger and more germane fault is the language’s attempt to serve as both tool and platform, thereby succeeding as neither.

Given that CSS feels very declarative, it feels to me like Haskell or Elm would have a solution for the platform-solution for CSS, leaving devlopers to create tools for designers to manipulate styles with GUI tools that compile to the CSS-Haskell langauge, which in turn can compile to actual CSS. Of course, this begs the question: what about HTML? Can/should we redesign the web from the ground up with a better platform-layer abstraction? Can we build-in a transition from the web to this new platform via compilation to HTML/CSS/JS?


### History of graphs

> Before 1786, authors invariably presented quantitative data as tables of numbers. In this year, an economist named William Playfair published a book called The Commercial and Political Atlas.** Remarkable recent efforts have brought this classic back into print, as Playfair’s Commercial and Political Atlas and Statistical Breviary (2005). In order to illustrate his economic arguments, Playfair single-handedly invented the line graph, the bar graph, and the pie chart, and thereby the entire field of statistical graphics. Within years, his inventions had spread across Europe, transforming the landscape of visual communications and heralding an age of discoveries in data made visible. Today, children take these graphical forms for granted; they seem as obvious and fundamental as written language.

## [Designing a design tool](http://worrydream.com/MagicInk/#p265)

Wowza! This is quite similar to React, thinking about UI design as a state machine:

> Using the same drawing process as with a conventional tool, the designer draws a mockup of the graphic—how the graphic should look for some particular set of data. She then takes a snapshot of this graphic, and indicates the data set that it corresponds to. She then modifies the graphic to correspond to a slightly different data set, takes another snapshot, and so on. Each snapshot serves as an example. With well-chosen examples, the tool will infer how to generate a graphic for arbitrary data.

### BART Demonstration

Programming by example. Snapshots are visuals plus a data model. The computer infers how the snapshot relates to the data model through more examples.

> Editing snapshots. The essence of this process is elimination of abstraction. The designer works with concrete, visible examples.

Recursion, instead of iteration like Excel has for programming by example repetition:

![](http://futureofcoding.org/media/Screenshot 2017-12-05 at 12.08.16 PM.png)

## Machine learning for designers

> Today, a Perl programmer needs just four letters to invoke decades of research into filesystems and physical media: “open.” A finely-tuned mergesort is available with the word “sort,” and even more finely-tuned hashing algorithms require just a pair of brackets. Until machine learning is as accessible and effortless as typing the word “learn,” it will never become widespread.


## The composable interface paradigm

[The key is seperating views from the platforms (data)](http://worrydream.com/MagicInk/#p360), which allows various providers to notice the current context and respond auto-magically. 

## Summary

> Manipulation software design is hard, but most software is information software.

This is profound for the building of user interface builders. What if interactivity is overrated, and instead we should design to empower the creation of information software. I guess Webflow does this best.


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>