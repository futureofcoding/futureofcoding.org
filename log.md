---
title: Log
---

<style>
  .header {
    font-size: 35px;
    font-weight: bold;
  }
  #title {
    font-size: 50px;
  }
  .date {
    font-size: 15px;
    color: #aaa;
    margin-right: 10px
  }
</style>

<h1 id="title">Log</h1>

This log represents my progress on the Future of Coding project. I intend to update this log every weekday.

The data for this log are pulled from the commit message history for this repository. <a href="' | prepend: link | prepend: '">'

<div id="commits-container">
{% for commit in site.data.git-log %} 
  {% if commit.message != 'updated git log' %}
    {% unless commit.message contains 'Merge branch' %}
      {% assign first_line = commit.message | newline_to_br | split: '<br />' | first %} 
      {% assign date = commit.committer.date | date_to_string | prepend: "_" | append: "_" %}
      {% assign link = 'https://github.com/stevekrouse/futureofcoding.org/commit/' | append: commit.commit %}
      {% assign date_span = '<span class="date">' | append: date | append: '</span>' %}
      {% assign first_line_span = '<a href="' | append: link | append: '">' | append: first_line | remove: "#" | append: '</a>' %}
      {% assign header = '<span class="header">' | append: date_span | append: first_line_span | append: '</span>'  %}
      {% assign message = commit.message | remove_first: first_line | prepend: header %}
      <div class="commit">{{ message | markdownify }}</div>
    {% endunless %} 
  {% endif %}
{% endfor %}
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-103157758-1', 'auto');
  ga('send', 'pageview');
</script>
<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>

