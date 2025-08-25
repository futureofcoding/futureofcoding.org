This is an archive of the old Future of Coding community website. When the community was renamed to [Feeling of Computing](https://github.com/feelingofcomputing), the website was rebuilt from scratch.

---

This repo has been saved because it contains various research notes by Steve Krouse, such as these ["virtual webpages"](https://github.com/futureofcoding/futureofcoding.org/issues?q=is%3Aopen+is%3Aissue+label%3A%22virtual+webpage%22) made from Github issues.

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

This is how I generate [futureofcoding.org/log](futureofcoding.org/log).

First, `pip install git2json` as explained [here](https://github.com/tarmstrong/git2json#installation).

Then create `.git/hooks/post-commit` with the following contents:

```bash
previousMessage=$(git log -1 --pretty=%B)

if [ "$previousMessage" != "updated git log" ]
then
    git2json > _data/git-log.json
    echo 'fileName' > _data/files.csv && find . -regextype posix-egrep -regex ".*\.(md|html)$"  -not -path "./_site/*" >> _data/files.csv

    # https://stackoverflow.com/questions/16993082/why-doesnt-git-recognize-that-my-file-has-been-changed-therefore-git-add-not-w
    git rm --cached _data/files.csv
    git reset _data/files.csv

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
