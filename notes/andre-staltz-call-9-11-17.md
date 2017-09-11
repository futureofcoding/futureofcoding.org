# Andre Staltz Codementor 9/11/17

## Links on "CycleJS as IDE"

* https://medium.com/open-collective/cycle-js-a-unified-theory-of-everything-for-javascript-e266ac9a59ad
* https://vimeo.com/217444733
* https://github.com/Widdershin/bonsai-editor
* https://github.com/Widdershin/stream-tree
* making sure everything can be visual (pool, math.random) https://github.com/cyclejs/cyclejs/issues/581


## How devtools work

* window.Cyclejs gives you metadata for the app, shares with devtools
  * window.Cyclejs comes from `run 
  * has sinks, final node at bottom of graph, what is rendered on DOM
* traverse starting at the sink to the nodes above it (graphSerializer)
  * https://github.com/cyclejs/cyclejs/blob/master/devtool/src/graphSerializer.ts#L357 (starts here)
  * https://github.com/cyclejs/cyclejs/blob/master/devtool/src/graphSerializer.ts#L329
    * `buildGraph` goes through each node from sinks (sinks are streams) https://github.com/cyclejs/cyclejs/blob/master/devtool/src/graphSerializer.ts#L160
    * `idTable` is just a JS map for an ID number for each node
    * `traverse` does a depth-first search and registers those nodes https://github.com/cyclejs/cyclejs/blob/master/devtool/src/graphSerializer.ts#L138 
      * 1) stream has producer, listening to something, operator like `map` or `filter`, but anything that produce data, like `addEventListener` which isn't an operator (which you can find in xstream codebase)
        * `ins` property: input straem 
      * 2) `insArr`: many input streams, like `merge`
      * 3) `_prod`: source nodes, grey boxes at top
      * then run `layout` which gives x and y for nodes
      * serialize https://github.com/cyclejs/cyclejs/blob/master/devtool/src/graphSerializer.ts#L335
* panel/index gets stream of JSON https://github.com/cyclejs/cyclejs/blob/master/devtool/src/panel/index.ts#L66
* panel/model parses
* panel/view renders


## data -> code

* go from data structure to code
  * use the dagre structure (nodes and edges)
  * there are some hidden data (what is being mapped, what is being folded)
* also considering writing a DSL
  * limiting JS expressivity
  * related to push/pull thing (disable Math.random type of thing), so basically like seperating side effects / monads
* signal and stream
  * signals are the pull thing
  * like Elm, if a function has no arguments, it should be a constant

## difference between Elm and Cyclejs

* first class streams in CycleJS
* Elm has callbacks, but CycleJS treats clicks as "coming from outside the program"
  * Actions, not callbacks
  * with the same data structure, you're defining those two things, the output and input
  * the way CycleJS gets around this is by refering with classnames or ids
    * you can then get a graph from these things, not sure if you can do this in Elm
    * even if you could get this graph from Elm code, it's less aparent in the texual code
  

## noFlo

* not going to go down this road
* the nodes are allowed to do side effects
  * In Cycle, devtools, grey is not in app, blue is transformations 
* could just use subset of noFlo
* benefit from building something custom and constrained
  * simple and optimized for this use case

## constructing HTML in devtools

* there are some use cases where text is better
  * for example, BMI calculation
* the goal here is to replace the sublime text minimap
* summary of your code that's 90% complete
* also ability to add the box in the editor and then see what that code will be
  * directly would affect the code in my editor, somehow sync to text editor, parse code to AST 
* eventually if we wanted 100% IDE then snipets for code in the boxes


## StreamSheets

* sounds like Eve
  * they have a table of clicks
  * he had trouble with building BMI calculator in Eve
  * TODO strangeloop spreadsheet

  
* visual editor
  * constrains thinking
  * ask questions
    * where is data coming from? 
      * server
    * are you going to send requests to some server?


* visualize cyclejs window object as spreadsheets
  * spreadsheets as reactive programmign model
  * people used to spreadsheets are used to static data where you can manually update data which will then update data
  * there are some live data cells that are live, like stock market
  

* value-change-over-time vs events
  * time -> real numbers (like age)
    * in cyclejs, this is also a stream 
  * events (no current event)
    * birthdays are stream of events 

* signals (math.random)
  * represent its sampling by some event
  * it changes every nano second but we sample at some specific times
  * event, with value over time and you get another event
  * can also do proccessing in the signal world and then sample in different ways


## Getting involved in CycleJS

* gitter chat, really represents us. get their help in like a minute.

* help-needed bug
  
* readme has more info on getting started
