# Java Setup

Java 8 preferred, but Java 7 will work

### Java Installation
My inclination was to go with Amazon Corretto OpenJDK 8.  
Visual Studio Code add-ins only work with Java 11 and above.  
So, went with Amazon Corretto OpenJDK 11.  

Visited: https://aws.amazon.com/corretto/

Selected: Download Amazon Corretto 11  
Selected platform: macOS aarch64  

Selected the “pkg” installer file  
amazon-corretto-11.0.15.9.1-macosx-aarch64.pkg  

### Set Java Version
There are multiple ways to set the desired default version, either temporarily or permanently.

To show current active Java version:

```bash
java -version
openjdk version "11.0.15" 2022-04-19 LTS
OpenJDK Runtime Environment Corretto-11.0.15.9.1 (build 11.0.15+9-LTS)
OpenJDK 64-Bit Server VM Corretto-11.0.15.9.1 (build 11.0.15+9-LTS, mixed mode)
```

To show where MacOS see’s Java:

```bash
which java
/usr/bin/java
```

```bash
whereis java
/usr/bin/java
```

To show installed Java versions:

```bash
/usr/libexec/java_home --verbose (or -V)
Matching Java Virtual Machines (6): (I trimmed length of each line)
    14.0.1 (x86_64) "Oracle Corporation" - "Java SE 14.0.1"
    11.0.11.1 (x86_64) "Amazon.com Inc." - "Amazon Corretto 11"
    11.0.8 (x86_64) "Oracle Corporation" - "Java SE 11.0.8"
    1.8.271.09 (x86_64) "Oracle Corporation" - "Java"
    1.8.0_292 (x86_64) "Amazon" - "Amazon Corretto 8" 
    1.8.0_261 (x86_64) "Oracle Corporation" - "Java SE 8"
```

To set the default version of Java for a terminal session:

```bash
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_292`
export JAVA_HOME=`/usr/libexec/java_home -v 11.0.11.1`
```

To make this change permanent you need to set it in your shell init file.  
For example if you are using bash then you can set the command in the .bash_profile.  
Add the following lines at the end of the file:  

```bash
# Setting default JDK to version 1.8.
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
```

To activate this configuration right away, you can run:

```bash
source .bash_profile
```

This command reads and executes the .bash_profile in the current shell.

2/23/22 Notes:  
Since I’m running zsh on my mac, I must have updated .zshrc to add this setting, plus others.  
I see lines in .zshrc (on one of my Macs) that indicate I’ve set the default Java version to Corretto 11.  
