# cps-handbook
CPS Technical Handbook (Markdown Book)

## About this Repo
This repository hosts the source code for the CPS Handbook static website, which serves as a handy reference for all of the things I do, but often forget the details.  

This site is created using the Rust-based `mdbook` program, which compiles markdown files into a nicely-formated website.
​
## Installing mdbook
Refer to the CPS Handbook Introduction page for more details on installation and use of mdbook.

## Using mdbook
The mdbook tool creates books from markdown files. The generated book is outbook to a designated folder, which can then be deployed as a static website.

Once an mdbook book is created, change the current directory to the new book:  
```
cd my-book
```

The easiest way to render a book is via the command: 
```
mdbook serve --open
```

## TOML File
The mdbook tool is a Rust program and as such follows Rust practices, including the use of a TOML file for application configuration, dependency management, etc. For this site, the we use the configuration file, book.toml.
​