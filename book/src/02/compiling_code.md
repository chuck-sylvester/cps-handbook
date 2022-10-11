# Compiling Code

#### Simple Command
Begin by navigating to the "src" folder of your project.  
Then, run the command below.  
```bash
javac ClassOne.java ClassTwo.java 
```

#### Output Compiled Artifacts to Target Folder

To direct the compiled classes to a specified folder, use the -d parameter, as shown below.  
```bash
javac -d ../target ClassOne.java ClassTwo.java 
```

### Run Java Program

#### Simple Command
Navigate to the folder where the ClassName.class file is located, then run the command:
```bash
java ClassName 
```

#### More Qualified Command
To run the program from a location other than where the class file(s) live, you can provide a more qualified command.  

For example, to execute the class from the src folder, you can use one of the commands below.
```bash
java -classpath ../target ClassOne
java -cp ../target ClassOne
java -classpath ../target com.csylvester.app.ClassOne
java -cp ../target com.csylvester.app.ClassOne
```
