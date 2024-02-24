# Build Tools
This page provides information on two popular build automation tools, Maven and Gradle.

Maven is the primary tool used on the VA projects that I support; however, Gradle also has a fairly large market share and user base.

### Maven
There are numerous options for installing Maven. I happen to be reading the book, _API Security In Action_ this morning, so let's go with what the author recommends.  

Maven can be installed from Homebrew using the following command:
```zsh
brew install maven
```

To check that Maven is installed properly, run:
```zsh
mvn -version
```

### Gradle
[https://gradle.org/](https://gradle.org/)  
The Gradle website recommend the use of a package manager, such as SDKMAN! or Homebrew. I decided to go with Homebrew.  

If not already installed, go to the Homebrew website for instructions.  
[https://brew.sh/](https://brew.sh/)  

Then install Gradle with the following command:  
```zsh
brew install gradle
```
