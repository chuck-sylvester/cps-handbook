# Compiling Code

#### Simple Command
Begin by navigating to the "src" folder of your project.  
Then, run the command below.  
```zsh
javac ClassOne.java ClassTwo.java 
```

#### Output Compiled Artifacts to Target Folder

To direct the compiled classes to a specified folder, use the -d parameter, as shown below.  
```zsh
javac -d ../target ClassOne.java ClassTwo.java 
```

A more complex compile that involves a package path off of the src folder, such as:
```zsh
trivia-game/src/com/csw/<java source files>
```

From the top-level folder (e.g., trivia-game):
```zsh
javac -d ./target ./src/com/csw/TriviaGame.java ./src/com/csw/Quiz.java
```

Compiles and places the new .class files in the target folder at:
```zsh
trivia-game/target/com/csw/<class files>
```

### Run Java Program

#### Simple Command
Navigate to the folder where the ClassName.class file is located, then run the command:
```zsh
java ClassName 
```

#### More Qualified Command
To run the program from a location other than where the class file(s) live, you can provide a more qualified command.  

For example, to execute the class from the src folder, you can use one of the commands below.
```zsh
java -classpath ../target ClassOne
java -cp ../target ClassOne
java -classpath ../target com.csylvester.app.ClassOne
java -cp ../target com.csylvester.app.ClassOne
```

To run the more complicated structure executable from the top-level folder (e.g., trivia-game):
```zsh
java -cp ./target com.csw.TriviaGame
