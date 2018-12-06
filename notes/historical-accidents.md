---
Title: Historical Accidents
---

# Historical Accidents

Is this the root of all evil? 

A historical accident is technological compromise that persists despite overcoming the limitations it stemmed from. (Looker is a good example... databases used to not be fast enough for analytical queries, now they are. Plus redshift exists.) This perspective almost advocates keeping track of all compromises so that when technology improves, we know to update to the ideal case. Or more realistically, asking of a technology why something is not closer to an ideal or simpler state.

Much of it comes from limited disk size. Some from processing power.

Examples of "features" in programming languages that we'd do better without:

* mutable state (this was more space efficient)
* 0-index arrays
* sequential evaluation: it's not just go-to's, it's all control flow, including if-statements, function calls with side effects (which are really just subroutines)
* Even boolean algebra (and, or, not, nor) feels super historically tied to the way logic gates work. So low level! 
* Fasly and truthy, and really all shortcuts seem to be the limitations of our code interfaces to do something like autocomplete for us so we don't have to type by hand
* Event listeners are probably an accident or something (I'm thinking of the unification of states and events with the scheme I thought of for woof mousedown catching things)


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
