---
title: Log
---

<style>
  .commit-header {
    font-size: 20px;
  }
</style>

# Log

<div id="commits-container">
{% for commit in site.data.git-log %}
  <div>
    <div class="commit-header">{{ commit.committer.date }} - <a href="https://github.com/stevekrouse/futureofcoding.org/commit/{{ commit.commit }}">{{ commit.commit }}</a></div>
    <div class="commit-message">{{ commit.message | markdownify  }}</div>
  </div>
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

