---
title: Pavel Bazant Projectional Spreadsheet Demo
---

# Pavel Bazant Projectional Spreadsheet Demo

_5/21/19_

![Screenshot 2019-05-21 at 2 56 29 PM](https://user-images.githubusercontent.com/2288939/58102157-bddc6200-7bd8-11e9-8f19-7bc3e23a30dc.png)

## Notes

* thanks to Aria Minaei for the intro & Dan Cook for inviting Pavel to the Future of Coding Slack
* excel but not based on a grid but general graph-like structure
* 60% is a spreadsheet: structured document with formulas
* building a tool for physicists 
	* who should use something like spreadsheet
	* but instead use python for power
* removing the limitations of excel that prevent me from using it to analyze data
* hierarchical cell model
* direct manipulation keyboard and mouse for adding and deleting cells
* position of the cursor (and other data) is "reified" in document (reactive values)
* can hide or show fomulas
* escape hatch to svg (but maybe one day will make it inspectable)
* true/false boolean that changes on clicking on it
* trying to see how far he can go with this model
* design principle: never use text for anything, no parsing at all
* can we see you create a formula?
	* press = makes null formula
	* strings evaluate to themselves
	* lisp-like structured editor
* what's up with the colored blocks?
  * they are references to specific cells
  * kinda a cool idea instead of hazel's numbered holes (but you can also give string names)
* jupyter notebook is far from excel because the kernal is a ball of hidden state
	* oberserablehq is the direct solution to this
* first-class links
	* wormhole to original thing
* two most important things
	* everything has a uuid
	* links are stable when things are moved around or renamed
* difference between structural and projectional editing: whether its rich data underneath or just a way to write text without syntax errors
* he didn't show macros or formula networks
	* the system can create fragments of itself, including formulas that create formulas

## Questions

* do you have a series of benchmarks that will keep pushing forward your development?
* is the goal of the project that real physicists use it? compete with jupyter notebook and python?
* how are you planning to solve all the imperative things (IO Monad?)
* what will the architecture be for FRP for large, complex apps, particularly with modularity in mind?
	* can buttons or other elements emit scoped data about themselves?
	* answer: going with a global approach, and have things be self-healing
		* you can also refer to things relatively in the tree hierarchy 
* how are you planning on having users learning the keyboard commands?

## Things it reminds me of

* flowsheets
* pane
* lamdu, isomorf, luna lang
* forms/3
* some eve prototypes
* observablehq
* original conal stuff is frp but also about the physics problem of a bouncing ball
* first-class links reminds me of JE's managed copy and paste
* mariano guerra's Instadeq
* https://www.reddit.com/r/nosyntax