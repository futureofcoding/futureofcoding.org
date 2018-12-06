---
title: JoyJS Review
---

# JoyJS Review

*11/27/17*

Things I particularly love:

- Hovering over values jiggle the effect of changing that value in the output
- Defaulting to what in Snap! they call "turbo mode" where the algorithm happens instantaneously, but allowing the user to see the proccess of each slowly step via scrubbing
- The small number of actions for the turtle, as opposed to the daunting Scratch menus.
- Fun that it saves your program data in the URL so there's no backend or user-accounts
- The paintbrush metaphor that you introduce in the video
- It's clear whether the pen is up or down based on the fill of the turtle  

- The color-picker is so easy to use

Interface musings:

- When I want to add an arithmetic expression to a block, I click on the three dots. When I want to change the value or to another variable, I click on it. It feels like this should be a uniform interface that gives me the option to do anything to a "value hole", including: make it an expression, change the name of the variable, change the variable, or change the number. 
    - Aprt.us has a reasonably good interface for this. Minus the fact that if you have a syntax error, it just barfs on you.
    - Glen's Legible Mathematics is another good place for inspiration.
    - I think it'd be nice if it let me type out my math like [variable] + 5 * 6 and parse that properly (like Aprt.us) but have better error messages.

- I have a negative reaction to "do math to number" 
    - Part of this negative reaction comes from the phrasing. I'd probably prefer "Change [number]". Or "Add/Subtract/Multiple/Divide [number]". Or "Increase or decrease [number]"
    - However, the real reason I don't like this block is because it's a less powerful form of another block you already have: "Set [number]". When my students are trying to make a score counter in Scratch for the first time, I give them the hint that they'll need a variable, which is in Data. They then ask, "what is a variable?" Instead of answering, I respond with, "What can you do with variables?" In Scratch, like in Joy, there are two things one can do with variables: set and increase. This works well for creating a counter because those are the two things you need. However, down the road students want to change their variables in more complex ways than a single addition. When that time comes, it's a bit of a leap to realize that you can use set _to modify a variable in terms of itself_. I feel like students are cognitively shackled by the increase block because they subconsciously feel that whenever they want to change the variable they need to use an increase block. While on the other hand having students explore how to modify a variable in terms of itself is like cognitive wings.
        - A more extreme example of this is the glide block, which I truly detest. Another example that annoys me is the increase size by block in Scratch for similar reasons.

    - Most of me wishes that we required students to learn how to modify variables using set from the get go by giving them an even simpler interface to variables: just set. Yes, it might be a bit harder for a beginner student to make a counter without the increase block. But after they realize that they "want the score to be one more than it was before," they're basically golden. 
    - A happy medium could be a menu item called "Change [number]" but expands to "Set [number] to [number] plus 1" after you click on it.  

- I was recently watching _Inventing on Principle_ and in the demo of the "better medium for electronic circuits", he showed an interface where as you were changing a value, you could compare it to the prior value represented in a grayed out color, which embodies his principle of "show comparisons."
- "// Comment" is more programmer-y lingo than anything else in this tool. Maybe "Add a note" would fit better with the theme?
- Would be neat if it automatically made the URL tiny. bitly has an API for that.
- You change perspectives from first to third within "I'm a turtle. Do the following:" 
    - Maybe stick with first as in 
        - "I'm a turtle. Tell me what to do:"
        - "I'm a turtle! Give me directions:"
        - "I'm a turtle. I will..." 

    - However, the actions themselves are in third-person. Potentially, you could drop the word "turtle" from "Move turtle" and "Turn turtle", just like how Scratch drops the object from it's blocks. It's just "Move X steps"

- The character doesn't look like a turtle
- It's unclear if you are releasing: 1) a turtle program, 2) a nonlinear graph program, or 3) a JavaScript library to make other such programs. If the answer is (1) and (2), what you have is great. If the answer includes (3), you are missing the most important part (the documentation) and the second most important part (the code on github).

Features that you probably already have in mind:

- Ability to re-order steps (or groups of steps)
- Ability to add "repeat" block around a set of blocks you've already written
- Ability to create a procedure or function
- Ability to copy and paste (or export and import) between programs
- Turns don't animate when I scrub over their step number like moves do. 
    - Same with color, although it's less obvious how to animate that.


{% include analytics.html %}
