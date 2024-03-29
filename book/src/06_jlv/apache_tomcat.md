# Apache Tomcat

Apache Tomcat 8 or 9; my preference is Tomcat v9.x  

_September 1, 2023 update:_  
Running through the full setup again using CAG and Windows desktop image. This time, let's go with Tomcat 10x.

### Tomcat Installation

Visited [https://tomcat.apache.org/download-90.cgi](https://tomcat.apache.org/download-90.cgi)

**MacOS Setup**  
Downloaded: apache-tomcat-9.0.48.tar.gz  
Double-clicked the downloaded filename in Finder, which unzipped into Downloads folder  
Renamed folder to apache-tomcat-9.0.48  
Wanted to copy folder to: /Library  
But, was not able to due to not having admin rights to BAH mac

So, created new folder for portable installs: ~/work (recently changed to ~/swtool)  
Copied apache-tomcat-9.0.48 folder to: ~/work (moved to ~/swtool)

Created ~/.zshrc file to make some configuration changes.

Updated .zshrc to add environment variables:

```bash
CATALINA_HOME=~/work/apache-tomcat-9.0.48
CATALINA_BASE=~/work/apache-tomcat-9.0.48
```

**Windows Setup**  
Downloaded: apache-tomcat-9.0.76-windows-x64.zip  
Extracted and copied to: %HOMEPATH%\swtool\apache-tomcat-9.0.76

Refer to **_Environment_** page for more information on editing environment variables for my account.

### Tomcat Administration

Tomcat can be started by executing one of the following commands:

```bash
$CATALINA_HOME/bin/startup.sh
$CATALINA_HOME/bin/catalina.sh start
```

After startup, the default web applications included with Tomcat will be available by visiting:  
http://localhost:8080/

Tomcat can be shut down by executing either of the following commands:

```bash
$CATALINA_HOME/bin/shutdown.sh
$CATALINA_HOME/bin/catalina.sh stop
```
