# [futureofcoding.org](http://futureofcoding.org)

This is the repo for the Future of Coding website.

The website is a mix of personal logs and projects by Steve Krouse, episode pages for the Future of Coding podcast, and some pages about the Future of Coding community. Steve has turned over the website to community ownership, so things are in flux while we decided what should go where. Still, if you see any typos or have any suggestions, issues and PRs are welcome.

Steve also kept a number of ["virtual webpages"](https://github.com/futureofcoding/futureofcoding.org/issues?q=is%3Aopen+is%3Aissue+label%3A%22virtual+webpage%22) when a GitHub issue is a better format for them than a regular webpage. These might be of interest if you are following along with his research work.

## Admin stuff

The `futureofcoding.org` domain is registered and DNS'd with Hover. Ivan is the only person who has access to the account (TODO: should probably be shared, to reduce bus factor).

Mariano runs the `history.`, `links.`, `newsletter.`, `search.`, and `people.` subdomains. Currently that stuff is hosted on a Digital Ocean server. I should probably see if he wants to document some of the details here.

The podcast is hosted on OmnyStudio. Don't love that, will probably move it elsewhere.

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
