---
title: Log
---

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
  
<style>
  .header {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .date {
    font-size: 15px;
    color: #aaa;
    margin-bottom: 10px;
    font-style: italic;
  }
  .commit > .files {
    margin-bottom: 5px;
    overflow: scroll;
  }
  .hash {
    font-size: 15px;
  }
  .additions {
    color: rgb(81,207,102);
  }
  .deletions {
    color: rgb(250,82,82);
  }
</style>

<h1 id="title">Log</h1>

Welcome to my development journal. This is an experiment in radical transparency. You can read my unfiltered daily thoughts below. Pardon my typo-laden stream-of-consciousness. If you don't want to miss a musing, [here's the log RSS feed](./log.rss) .

It was inspired by Jamie Brandon's development journals for [Eve](http://incidentalcomplexity.com/2014/10/16/retrospective/) and [Imp](https://github.com/jamii/imp). 

The data for this page is pulled from the commit message history for this repository. It's similar to what you'd see if you did `git log`. (I used to keep these kind of notes in the [now deprecated journal](./journal). Those journal entries are below in the log - [imported via some skullduggery](https://beta.observablehq.com/@stevekrouse/parse-and-join-journal-to-commits).)

<div id="commits-container">
{% for commit in site.data.git-log %} 
  {% if commit.message != 'updated git log' %}
    {% unless commit.message contains 'Merge branch' %}
      {% unless commit.message contains 'Please enter the commit message for your changes.' %}
        {% assign first_line = commit.message | newline_to_br | split: '<br />' | first %} 
        {% assign date = commit.committer.date | date: "%m/%d/%y %a %l:%M %p" %}
        {% assign message = commit.message | remove_first: first_line %}
        <div class="commit">
          <a class="hash" href="https://github.com/stevekrouse/futureofcoding.org/commit/{{ commit.commit }}"><h2 class="header">
            {{ first_line | remove: "#" | replace: "<li>", "li" }}
          </h2></a>
          <div class="date">{{ date }}</div>
          {% if commit.changes != empty %}
            <div class="files">
              {% for change in commit.changes %}
                {% if change[2] != '_data/git-log.json' %}
                 <div class="file">
                    <a target="_blank" class="changes" href="https://github.com/stevekrouse/futureofcoding.org/blob/{{commit.commit}}/{{change[2]}}">
                      <span class="additions">{{change[0]}} additions</span> &
                      <span class="deletions">{{change[1]}} deletions</span>
                    </a>
                    <a target="_blank" href="/{{change[2] | remove: ".md"}}">
                      {{change[2]}}
                    </a>
                  </div>
                {% endif %}  
              {% endfor %}
            </div>
          {% endif %}
          {{ message | markdownify }}
          {{ site.data.commitToJournalMarkdown[commit.commit] | markdownify }}
        </div>
      {% endunless %} 
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


