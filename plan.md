---
title: Future of Coding Plan
---

# Future of Coding Plan

_Started 10/28/17._

## Good questions

A well-articulated question is a question half-answered.

Recently watching [Chris Granger's new Strange Loop talk](https://m.youtube.com/watch?v=a_o-ZzgpiK8), I was struck by how well he focused on the most important question:

"What would people want to do with computers if there were no limitations?"

When I had lunch with r0ml on Friday, he mentioned something similar: "Why don't you compile a list of all the things that kids tell you they want to build? That could be really useful. You could share it with the community of people who are trying to make it easier to for kids to code things?"

And now that I'm thinking about it, this reminds me of my conversation with Samantha John of Hopscotch who said that Alan Kay gave her the advice to think up a number of end-products to keep in mind while building her tool so that she could test how well her prototypes hold up for each end-product.

I imagine we can even get scientific with it: comparing the number of keystrokes or number of seconds to write an app. Probably a more important metric would be: number of seconds it takes a new user. Or: number of questions a new user has. 

This is a tricky question to ask users directly, because it's almost like asking someone "what would you like to make out of wood?" Or "what would you like to write a story about?" Most people would have trouble coming up with answers. Most people don't go walking around thinking about ways to apply a tool that they *don't know how to use*.

One way to get people to think about what to build in a tool is showing them examples of what's possible. Another way is to teach them the tool.

However, sometimes non-programmers come up with app ideas. Often these are really dumb ideas and what they really need is the Lean Startup to help them test their ideas without code.

However, sometimes non-programmers are in the workplace and have a real-life problem of their own where automation or analysis would really help. In those cases, they desperately want to know how to make their idea. It'd be neat if we could support that desire when it arises.

It's a subtle wording shift but instead of asking what people want to do *with computers*, maybe we should just ask "What do people want help doing?" And of the answers we get, "How can the we configure the computer to help people do that thing?"

## Thinking through user-flow

Once we have this list of things people would want to do, we can then think about the ideal way you would interact with such a tool. For example, if the tool is a counter button that keeps track of the number of times it's been clicked...

1. The first thing you'd want to do is create a button
2. Then you want to edit the button so there should be some way to select it for editing
3. In the edit screen, you can customize the way it looks, colors, shapes, and sizes.
4. You can also customize its content. Using an expression editor, you can set it to a static text or some computation. You first set it to some text.
5. You go back to edit it. You set it to the time of day and see what that does.
6. You go back to edit it. Somehow you have to realize that you need to keep track of click events of the button.
7. Somehow you realize that you have to sum click events of the button.
8. You then realize you can place this piece of data in your button.

This is a really fun exercise. I should do more of this.

## All UIs are terrible

As a side note, you probably don't realize how bad the UI is for every piece of tech you use. I've found that people learn best when taught Socratically (if they don't kill you first out of annoyance), which was a great way for me to realize how impossible is was for my grandma to use her phone to do even the most basic things.

For example, she wanted to send me a text...

"What do you think you should do to send a text?"

She shrugs her shoulders.

"Do you see anything that looks like it could send a text with the screen you're on?" [She was on the home screen.]

She shook looked for half a second and then shook her head no.

"Ok, here let me show you how to search for apps." I break my Socratic character. "Ok, now type what you're looking to do."

She types, "text" into the search bar. Nothing comes up.

"Oh ok, well it's actually called the 'Messages' app, so you have to search for Messages."

"How was I supposed to know that?"

"Good question. Ok, now you're in the Messages app. What would you like to do?"

"Send a text."

"Ok, do you see any buttons that would help you with that?"

She looks at her phone for a second and then shrugs her shoulders.

"Ok, well sometimes it helps to look at the top-right corner of the screen when you want to create something new." I again break from questions.

"I don't want to create something new. I want to send a text."

"That's a good point. Well I guess you could think about creating a new text messages as creating something new. But anyways... sometimes looking the the top-left or top-right corner helps."

"Is it this button?" She points at the button, afraid to press it without my approval.

"Yep, go for it."

She gets a blank screen, and looks up at me again.

"Ok, who do you want to send the text to?"

"Your mom."

I motion for her to type, so she types my mom's name. A list of people comes up. I visually encourage her to press on the one she wants.

From there, she can write and send the text on her own. However, it took her months to fully get comfortable with texts, and she still has lots of questions about basic things, such as searching for old messages or when messages don't go through because of bad connection.

As you may have already thought to yourself, the only interfaces that are remotely usable for someone not already steeped in our garbage interfaces are Siri and friends. 

"Hey Siri, send a text message."

"To whom should I send your message?"

"Hillary"

"What do you want to say?"

"I'm on my way"

"Your message says 'I'm on my way'. Would you like me to send it?"

Does this mean that the future of UI is chatbots? Haha no, this is not 2016. At the end of the day, verbal text is quite low-density. As they say, a picture is worth a thousand words.

What this means is that we could consider redesigning our computers around *things people want to do*, as opposed to around a metaphor of kitchen appliances, each with its own function. This way, my grandma could see a screen that says, "I want to..." and she could either speak or type (with suggestions). Based on what she wants to do, she could then get an interface specialized for that one task. If you're sending a text message, the first thing is selecting who it's to so why doesn't it take you to a list of your contacts to search through first? Use the whole screen for that. Then it can plop you into the prior conversation with a text box for you to write your message.

## Goal

### Standing for an outcome

### You have three wishes...

### What will it look like when I'm done?

### Priorities

1. 

## Ideas

## Categories

My ideas fall into 6 categories, depending on the customer and the sustainability model:

| # | Customer  | Sustained by      |  
|---+-----------+-------------------+
| 1 | Students  | Parents           |
| 2 | Students  | Patreon / OC*     |
| 3 | Adults    | Companies         |
| 4 | Adults    | Open Collective   |
| 5 | FoC Ppl*  | Patreon           |
| 6 | FoC Ppl*  | VC Management fee |

.* OC stands for Open Collective. FoC Ppl stands for other people trying to invent the future of coding.

For those who don't know, Patreon is a platform for people to support their favorite creators through recurring donations, often for nothing, but sometimes in exchange for some sort of benefit. I personally support Sam Harris through Patreon.

Open Collective is a similar platform in that people can give recurring donations, but instead of to a person, they go to a project. The people who run the project then decide how to allocate the funds, all of which is completely transparent for all to see. I first saw it used with CycleJS, which I now support through the platform. It seems like the people in charge get to put a bounty on a Github issue and when the pull request is merged, the monies are wired to that person's account. It's like Patreon combined with the transparency of Buffer and the task-economy-ness of fiverr. 

### 1. Customer: Students. Sustained by: parents.

This one is pretty simple. Think Tyner. Or any video game. I bet that if I was successful in creating a coding platform for kids, many parents wouldn't be able to tell it from a video game -- their kids addicted to doing things they can't understand on a screen, sometimes with friends.

### 2. Customer: Students. Sustained by: Patreon / Open Collective.

One of the best things about charging for what you make is the constant feedback of customers who either do or do not give you money in exchange for what you made. However, this system doesn't work so well when your user doesn't have access to money, for example like a child. We could charge their parent (see 1 above), or their school (nope, not even considering it), but it's just not the same as charging the person who you're directly affecting.

Sometimes, the closest you can get is by asking for donations from people who have *the best interests of the user at heart*. While they are not the beneficiary of what you're making, ideally they should hold you accountable to delivering a quality product all the same. 

I imagine this would shake out to be some people, some companies, and some foundations. I don't have much experience in the non-profit world, so I imagine I have some learning here to do...

### 3.... TODO


### Specific ideas 
Let's list out all the ideas... TODO break down by category

1. FRP Scratch
2. FRP WoofJS
3. WoofJS
4. Kid-friendly database
5. Airtable -> SQL
6. FoC full time (researching, podcasting, and blogging)
7. CycleJS devtools IDE
8. Expression editor

At this very moment, I'm thinking most heavily about:

1. FRP Scratch
2. Kid-friendly database
3. FoC full time
4. Expression editor

I spent time thinking about FRP scratch in the shower recently. I think I have the general idea. Some of the features

1. Data flow diagram
2. Interop with JS / AJAX
3. Time travel debugging
4. Collaborative
5. Compiles to HTML as well

But I'm not at all clear on the visual metaphors. We're going to dissociate data from sprites, which is great, but messes with kids' ability to anthropomorphize spites, which isn't great. One of Bret's critique's of ProccessingJS is that the data is disembodied from anything on the screen and you have to connect it somehow. I agree this is a bummer. I wonder if there's a way to make data -- even abstract data -- concrete through good visual metaphors.

So this would be an interface builder for web apps. You could wrap and make into iPhone or android if you wanted. It would also probably host them as well. Then of course, kids would have to deal with shitty firebase but maybe the newer version isn't that bad... TODO new firebase research

2. The kid-friendly database is actually really exciting me at the moment, although this might just be because I haven't given it much thought...

My general impression is that it should...

1. Look something like a spreadsheet in that you can see the data and edit it live
2. Have primary keys and linking of data (not nesting of data)
3. Have immutable history (like datomic)

I feel of two ways about schemas. One the one hand, they are just the columns of the table. On the other hand, why not just store maps with keys and then you can search for what you want (like Eve and I think Datomic as well)?

Building this for Woof students would be a really fun and well-scoped problem, I think.

Let's say this existed for Woof. Then what? Well... would it be just for kids or as powerful as firebase? For example, will it have user authentication? Will is be an SQL thing? Or more like datomic? How do you ask questions of your data? Build dashboards? Can I make it the database for WoofJS?

Clearly, it would be annoying to build all of these things from scratch so I wonder if I could build on top of something, like Firebase or Datomic... Maybe a hosted, kid-friendly version of Datomic is the answer here... TODO datomic research

Assumptions: 

1. 

3. FoC full time. I really do feel two ways about this.

On the one hand, it feels less fun to be the guy helping everyone else do the cool work. It's almost guaranteed that I don't get any credit this way. The guy I help gets that credit -- Alan Kay vs Steve Jobs. But I guess I'd be famous in the right circles, like Alan, which is probably fine.

But more than credit, it feels like it'd be less fun to not get to do the coding. However, I'd still get to code, try out new products, make demo etc. It's really only the non-fun coding, the messy parts, that I wouldn't get to do. It's almost like I get only the fun parts.

Ok, I think the main reason that it *feels* wrong to do this one is that 

<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
