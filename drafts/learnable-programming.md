---
title: New learnable programming essay idea
---

# New learnable programming essay idea


* TOC
{:toc}

This article was started from [the notes](/notes/bret-victor/learnable-programming) of a re-reading of Learnable Programming by Bret Victor.

Here's the framing. Let's start from first principles.

human <-> interface <-> computer.

Humans want to make things with comptuers. In order to make something you need to have a model of how it works in your head. This model needs to take into account technological realities:

* proccessor speed
* storage
* network speed
* computational efficiency

However, it doesn't neccesarily mean that you need to understand these realities deeply. Simply that your model helps you account for them. That is, we cannot abstract beyond the capibilities of computers. 

## Interface for humans

On the one extreme to the left, you could make an interface building upon models that people already have in their heads. This is why Microsoft Word is so successful. The cursor is much like the tip of a pencil and the page is much like a physical page. The mapping is clear.

## Interface for machines

On the other extreme to the right, you could simply have the human learn how the computer works, starting from electrons up through NAND and NOR gates, to proccessors, binary, Assembly, and C. This epitomizes Bret's Alan Perlis quote, "To understand a program, you must become both the machine and the program."

## In the middle 

In the middle, you have powerful models for thinking, which take technological realities into account.

Microsoft Excel. Unless you're coming from an accounting background, the grid model is new to you. (Side note: it wasn't until I learned SQL that I learned that properties are at the top and rows are entities. This array of dictionaries metaphor is quite powerful. I imagine people who grow up with Airtable or Fieldbook will learn those powerful ideas seamlessly.) There are two fascinating metaphors in Excel that are incredibly easy to pick up:

1. *Underneath* a cell can be a formula that produces it. The metaphor of "under the hood" is easily assimilated.
2. *Dragging* a formula iterates it over data, updating the references as it goes. Very easy to pick up. Then if you don't want certain references to update as you drag, you learn about the `$` operator. It's a great example of doing the commong thing automatically and letting you ask for a special case when you need it.

## Actually, there are two dimensions

1. Familiarity of model (is it a human model or comptuer model)
2. Power of model (does it enable powerful ways of thinking)

{% include analytics.html %}

