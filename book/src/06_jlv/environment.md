# Environment

Once you have all of the prerequisite software installed you will need to do some configuration.  

Starting with environment variables, you can set your user account's variables, or use a script file to set them temporarily.

The variables to set and some sample values are as follows:

Windows Setting:
```
JRE_HOME=C:\Work\jdk1.8.0_261
```

Added the following line to ~/.zshrc  
```
JRE_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
```

Check value of the environment variable:

Windows info:
```
echo $JRE_HOME
```

```
JAVA_HOME=C:\Work\jdk1.8.0_261
```

Run the following command to set the JAVA_HOME variable to the Amazon Corretto 11 version of the JDK. If this was set to another version previously, it is overridden for the current session.  

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
```

Not sure if need to include the “export” part of this; didn’t include for the JRE_HOME environment variable.

Check value of environment variable:  
```
echo $JAVA_HOME
```

To persist the environment variable value, define required variables in the proper bash configuration files. To load new/updated environment variables into current shell session, ensure proper export statement in ~/.zshrc  

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
```

See comment above about the need to include the “export” part of this statement in .zshrc.  

Windows info:
```
CATALINA_BASE=C:\Work\apache-tomcat-9.0.44
CATALINA_HOME=C:\Work\apache-tomcat-9.0.44
```

Updated .zshrc to add environment variables:
```
CATALINA_BASE=/Library/apache-tomcat-9
CATALINA_HOME=/Library/apache-tomcat-9
```

Windows info:
```
GROOVY_HOME=C:\Work\groovy-3.0.7  
```

Updated .zshrc to include environment variable:  
```
GROOVY_HOME=/Library/groovy-3.0.8  
```

**Maven Setup**
```
MAVEN_HOME=C:\Work\apache-maven-3.6.3
```

Verify that Maven can be found from OS:

```
mvn -v
```

I must have installed Maven a while back, since it’s already on my mac.  

You will also need to adjust your path variable and ensure you have these entries set:  

```
%MAVEN_HOME%\bin
```

Is this required for my mac?  

The “mvn -v” command above found maven, so maybe I’m good.  

> 12/13/22 Update: this command is no longer finding Maven on my personal or BAH MBP. So, followed online instructions to download and install Maven on MacOS, as described below.

- Visited [maven.apache.org/download](https://maven.apache.org/download.cgi)
- Selected the Binary tar.gz archive (v3.8.6)
- Used tar command to unzip into Downloads folder
- Moved newly created apache-mavin-3.8.6 folder to ~/swtool
- Added the following to ~/.zshrc
```
MAVEN_HOME=~/swtool/apache-maven-3.8.6
export PATH=$MAVEN_HOME/bin:$PATH
```

Verified by running `mvn -v`.  

```
%JAVA_HOME%\bin
```

Is this required for my mac?  
I am able to run java commands from the command line.  

```
%GROOVY_HOME%\bin
```

Updated .zshrc to add to PATH variable.
```
export PATH=/Library/groovy-3.0.8/bin:$PATH
```

**C:\Work\node-v14.16.0-win-x64**  
This needs to be the location of your NPM executable if you are not using the Node version.

Tomcat needs some additional setup. Those instructions can be found in the jMeadows/VDS guide. Make sure you have added the custom batch files, the database driver, and the certs needed to access external endpoints.

NPM will need certs added in order for it to function correctly with the VA VPN.

You will want to tell it the location of the **cacert** file to use with the command:
```
% npm config set cafile /path/to/cert.pem
```

The certificate can be the same one that you may have configured for git.  
NOTE: This command support multiple file formats and might not be a .pem file. It may also be a .crt or .jks file.  

In the JLV code, you will want to update the properties file.  

The only property file you should need to modify is:
> application-development.propeties (or application-production.properties)

The only property that should be modified for a basic setup is the:
> jMeadows URL

Set it to your local instance if you have one, or you can get the silver instance config from another developer.  
