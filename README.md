# cps-handbook
CPS Technical Handbook (Markdown Book)

## About this Repo
This repository serves as the root folder for developing a web version of the JLV System Design Document (SDD). The produced book / website files can be hosted on any web server or by GitHub as GitHub pages.
​
## Using mdbook
The mdbook tool creates books from markdown files. The generated book is outbook to a designated folder, which can then be deployed as a static website.

New books can be generated via:  
```
mdbook init my-book
```

Once created change the current directory to the new book:  
```
cd my-book
```

There are several ways to render a book, but one of the easiest methods is to use the serve command, which will build your book and start a local webserver:
```
mdbook serve --open
```

If you run into caching issues when rendering the site in your web browser, there are a couple of things you can do.

Remove the built static website (essentially delete the /docs folder):
```
mdbook clean
```
​
Clear your browser cache and close your browser.
​
Restart the mdbook server, which will rebuild the /docs folder and serve up a fresh copy of the book:
```
mdbook serve --open
```

## TOML File
The mdbook tool is a Rust program and as such follows Rust practices, including the use of a TOML file for application configuration, dependency management, etc. Take a look at the TOML file (book.toml) for this site.
​
## Hosting a Static Website
GitHub provide a useful service to host a static website located on your repository. Setup is done through GitHub settings for the repository, and in particular telling GitHub which branch to use and which folder within this branch.
​
For jlv-design, I have configured GitHub as follows:

**Branch:** github-pages  
**Folder:** /docs  
​  
To generate a site, push your latest code to the designated branch, e.g., github-pages, and create a pull request. I've found that you only need to create the PR to trigger a rebuild and redeployment of the site. It is not necessary to merge to the main branch to activate the updated site, though you should merge code to main periodically as you normally would.
