# Getting Started

### Dev Tools
My editor of choice is **Visual Studio Code**. However, since I'm following along with both the Deitel and Cherno courses, which both suggsest **Visual Studio**, I'll go ahead and give that a try.

Downloaded Visual Studio Community Edition. Tried to install on my mac, but it turned out to be an exe file, which I presume only works on Windows. Visual Studio for Mac is focused on .NET and C#, as opposd to C++, so that's not going to work.

So, I'll stick with Visual Studio Code, which should be fine.

### Verify C++ Compiler
```bash
g++ -v
```

### Basic Compile Command
```xml
g++ -o ./target-filename ./source-filename.cpp
```

You can create the executable with or without a filename extension, e.g.:  
```xml
g++ -o ./target-filename.exe ./source-filename.cpp
```

If you would like to output the executable to a different folder, such as ./target, this folder must already exist. Otherwise, the compiler will throw an error, e.g.:  
```xml
ld: can't open output file for writing:  
        target/prog1.exe, errno=2 for architecture arm64
```

To ensure that clang is using more current compiler features, e.g., C++ 11, use the following compile format:
```xml
g++ -std=c++11 -o ./target-filename ./source-filename.cpp
```
Another good practice is to enable all compilation warnings by adding the "-Wall" option:
```xml
g++ -Wall -std=c++11 -o ./target-filename ./source-filename.cpp
```

So, putting it all together and using "source" and "target" folders, here's a more complete command.  
Note that tis version targets C++ v14 (v11 standard plus minor updates and bug fixes):
```xml
g++ -Wall -std=c++14 -o ./target/filename ./source/filename.cpp
```

### Run Executable File
```bash
./target-filename
```

Remember to include the filename extension, if it has one, e.g.  
```
./target-filename.exe
```
