---
title: Josh Horowitz 2/15/19
---

# Josh Horowitz 2/15/19

_Chat about layout_

- started with react and lots of math with x and y
- render children and propogate back up, do it once for each layer
- constraint-based 
- cassuary
- don't need parent-child communication -> single place solves all constraints
- he gave up on foreigntext in svg
- browsers don't support svg consistently, especially with foreignobject
- position html elements over svg works fine
- cassuary replaces the need for svg g element because that handles layout
- solvers usually have imperitive APIs so he built a declarative thing on top of cassuary (like react is for the dom)
- cassuary is very limited. only linear equations and equalities, which means it can't do very much. only lay out things with the structure of trees. not force-directed graph layout. it can't tell you if two boxes overlap or not because that requires OR operator which it doesn't
- could think of it as a tree with a few little loops (instead of a graph), so you think of it as a directed acyclic graph with a few extra arrows
- layout problems very quickly become np complete because of the possibility explosion of ways to combine things
- here are some parameters, here's a function of how good a layout is --> fiddle with the parameters until we optimize the "good" function
- josh is skeptical it can do large complex layouts because it gets trapped in local minima. it runs itself into a weird corner
- optimization problem
- if it looks more like solving a suduku puzzle, it won't be magic
- maybe machine learning would be relevant
- could make a wormhole for arrows to hide the part that would overlap
- graphviz -> there are papers that describe these algorithms
- could do canvas and position html elements absolutely on top, but more work to handle mouse events 
- you can represent the network like a big graph, or use names, or the wormhole ideas
- simple layout structures are more predictable for the user to anticipate and control, and won't be jarring when changes happen
- could have layout be stateful/incremental so that things just change as little as possible based on how they are now