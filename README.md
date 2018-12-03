# [futureofcoding.org](http://futureofcoding.org)

Welcome to the Future of Coding.

If you find any typos or have any suggestions, feel free to edit anything and send me a pull request.

You can also take a look at [the issues](https://github.com/stevekrouse/futureofcoding.org/issues) to see the other things in my todo list. I'd appreciate your feedback on any of those items. Or if you have anything to add there, feel free to create a new issue and I'll comment on it to let you know if I'm going to get it done. 

Feel free to shoot me an email as well. I'm steve at futureofcoding.org.

[My podcast pipeline](https://github.com/stevekrouse/futureofcoding.org/projects/1) is where I organize my guests.

I keep a number of ["virtual webpages"](https://github.com/stevekrouse/futureofcoding.org/issues?q=is%3Aopen+is%3Aissue+label%3A%22virtual+webpage%22) when a GitHub issue is a better format for them than a regular webpage for some reason.

## Developing notes

### Remove large media files locally

First run:

```bash
git config core.sparsecheckout true
```

Then put the following into `.git/info/sparse-checkout`:

```
*.html
*.md
*.gitignore
*.txt
*.js
*.css
*.yml
*.json
```

And then run 


```bash
git read-tree -mu HEAD
```


### Add _data/git-log.json changes

This is how I generage [futureofcoding.org/log](futureofcoding.org/log).

First, `pip install git2json` as explained [here](https://github.com/tarmstrong/git2json#installation).

Then create `.git/hooks/post-commit` with the following contents:

```bash
# to get the data for directory listings
echo 'fileName' > _data/files.csv && find . -regextype posix-egrep -regex ".*\.(md|html)$"  -not -path "./_site/*" >> _data/files.csv

# get the data for git log
git2json > _data/git-log.json

previousMessage=$(git log -1 --pretty=%B)

if [ "$previousMessage" != "updated git log" ]
then
    git add _data/git-log.json
    git add _data/files.csv
    git commit -m "updated git log" 
fi

exit 1
```

### Quick access to journal

Add the following to `~/.bashrc`:

```bash
function empty_message {
  sleep 0.1
  echo -e "## Title\n\n* TOC\n{: toc }\n\n" > .git/COMMIT_EDITMSG
}

function journal {
  empty_message & 
  git commit --allow-empty --cleanup=verbatim
}
```

<script repoPath="stevekrouse/futureofcoding.org" type="text/javascript" src="/unbreakable-links/index.js"></script>
