# unbreakable-links: rm without anxiety

You want to delete a page from your Github Pages site, but are worried about all of the countless links around the web this will break.

Unbreakable-links to the rescue. 

By associating your content with its git commit hash, it ensures your links never break. 

## How to install

Add the following script tag to every page in your website: 

```html
<script repoPath="stevekrouse/unbreakable-links" type="text/javascript" src="https://cdn.rawgit.com/stevekrouse/unbreakable-links/master/index.js"></script>
```

**NOTE: don't forget to customize the `repoPath` attribute to what it is for you.**

Also, don't forget to add it to your `404.html` page if you want it to work for deleted pages!

## We handle all the cases

| File            | Commit Hash   | Output                                                                                            |
| -------------   | ------------- |---------------------------------------------------------------------------------------------------|
| currently exits | none in URL   | "You are viewing the most recent version of this file." We also add the commit hash to the URL.   |
| currently exits | current hash  | "You are viewing the most recent version of this file."                                           |
| currently exits | old hash      | "There is a more recent version of this file."                                                    |
| deleted         | none in URL   | "This file was deleted. Here is the most recent version." We also add the commit hash to the URL. |
| deleted         | current hash  | "This file was deleted, but this is the most recent version that existed."                        |
| deleted         | old hash      | "This file was deleted, but there is a more recent version than this one."                        |
| never existed   | N/A           | "This file never existed"                                                                         |
| moved           | N/A           | not yet handled                                                                                   |

## FAQ

### Isn't this basically a server on the frontend?

Yes, yes it is. Someone probably should [turn this into a backend service at some point](https://github.com/stevekrouse/unbreakable-links/issues/11).

### Why did you make this?

I was tired of mapping out migration plans and wanted to be able to move around my content  with ease. 
You can [read my full thought proccess here](https://github.com/stevekrouse/futureofcoding.org/issues/51).