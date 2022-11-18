# Getting Started

### Check Installed Java Versions
To show the current active Java version:

```bash
java -version
```

To show where MacOS see's Java, use the followig commands:

```bash
which java
whereis java
```

To show installed Java versions, use one of the following command:

```bash
/usr/libexec/java_home --verbose
/usr/libexec/java_home -V
```

### Set the Default Java Version for a Terminal Session
Run the following command with the desired Java version as the final parameter:

```bash
export JAVA_HOME=`/usr/libexec/java_home -v 0.00.0_000`
```

To make this change permanent, set it in your shell init file. For example, if you are using bash, you can set the command in .bash_profile. Add the following sample lines at the end of the file:

```bash
# Setting default JDK to version 1.8
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
```

To activate this configuration right away, run the following command:

```bash
source .bash_profile
```
**Note:** See "Environment Variables" section below for instructions on setting both JAVA_HOME and JRE_HOME.

This command reads and executes the .bash_profile in the currently running shell.

### Install Java
My inclination was to go with Amazon Corretto OpenJDK 8. However, Visual Studio Code add-ins only work with Java 11 and above.

So, went with Amazon Corretto OpenJDK 11.

```bash
https://aws.amazon.com/corretto/
https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html
```

Download the appropriate installer package, e.g.:
> amazon-corretto-11.0.12.7.2-macosx-x64.pkg

Then, double-click to start the installer.

When complete, Corretto should be located on your main disk volume at:
> Macintosh HD > Library > Java > JavaVirtualMachines

### Set Environment Variables
After installing Java, you will need to do some configuration, such as setting environment variables.

Add the following lines to ~/.zshrc
 - create file if it doesn't exist
 - not sure why export statement is used for one of the two lines
```bash
# Set Java version to Corretto 11
export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
JRE_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
```

*Done and Dusted*
