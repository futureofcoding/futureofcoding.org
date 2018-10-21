---
title: Regex for humans
---

# Regex for humans

This reminds me of my idea to build a more human-readable regex. Yet this again harks back to the question of whether regex is so powerful because of the very same concise abstractness which makes it impossible without a reference manual handy and the ability to test it out immediately. And someone, who literally thanks Bret Victor for being the inspiration, already [wrote this up](https://medium.com/interaction-reimagined/regular-expressions-you-can-read-a-new-visual-syntax-526c3cf45df1). Of course, this also reminds me of [Legible Mathmatics](glench.com/LegibleMathematics/). Another relevant project: https://changelog.com/posts/stop-writing-regular-expressions-express-them-with-verbal-expressions

I really love this Regex UCR project! I'd lead towards a thicker layer of abstraction ontop of regex, by which I mean removing the backslash and other special characters. I'd replace them with a graphic or a more descriptive name. If we go the descriptive name route, we may end up having to stack these matching instructions vertically as [VerbalExpressions](https://github.com/VerbalExpressions/JSVerbalExpressions) does.

The fact that this is a problem, a solution is relatively clear, and yet nobody is doing anything, is a bit puzzling. It begs the question? Is this a problem that's worthwhile for me to solve? 

regexer.com apparently gets [1.3M](https://www.similarweb.com/website/regexr.com) mothly visits. Other competitors get 10s of thousands of visits per month. While this is not directly monitizable, I imagine it pays decent dividends in respect, inbound leads, etc.

It's the sort of project that could generate the right kind of inbound opportunities, if I were indeed looking for a job in interface design.

And it'd be fun! 

But even as scoped as it seems, it's really a bear of a project. Even just building a barely useful version that only implements the basics of regex would take hours and hours. And then what? The slog of filling out the implementation would then begin, and I'd be like Olli of Regex UCR, holding the reins of a half-finished open source project without anyone to help me. 

Potentially this project would be easier if I simply built of their work? Or maybe not, as it [seems like they don't have much built](https://rawcdn.githack.com/savolai/regex-you-can-read/master/app/index.html), although this rawgit view might be deceptively simplistic.

I think the way I'd try to tackle this by implementing a UI-based interface on top of [VerbalExpressions](https://github.com/VerbalExpressions/JSVerbalExpressions). Which then, given how uniform this library is, and how many different langauges it compiles to, we could then compile it to various sub-languages pretty easily. This is abstraction at its finest! I'd be building on top of an abstraction of an abstraction! 

However, I'd really want to think through if this would make this library easier to use, given that it seems pretty easy to use in the first place.

In conclusion, while this project seems like a neat way to show off my Bret Victor inspiration, I'm not sure who has what problem, and if this semi-proposed solution would solve it.


<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-103157758-1', 'auto');
ga('send', 'pageview');

</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
