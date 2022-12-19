# Build and Deploy

Navigate to your project code folder with a command prompt or powershell prompt.  
Continue to: /JLV/react-client

The first time you are building the application, you will need to run:
```
npm install
```

This will add a **node-modules** folder and begin to download a number of dependencies.  

This command will likely error out with complaints regarding missing Python or Visual Studio. This is normal and once you reach those errors, you are done. If you see a different error, that will need to be troubleshot. If the error is about a self-signed certificate, go back and double check the npm cert step.

Once install is done, run:
```
npm run-script build
```

2/23/22 update:  
David’s instructions now say to run:
```
npm run build
```

This will take a minute and will build a handful of artifacts, including an app.js.  

If this succeeds, you are done with NPM for now.

2/23/22 update:  
This step resulted in the creation of a ton of new artifacts in:  
```
JLV/src/main/resources/static/javascripts/react-client
```
This includes app.js, as David indicates in his notes.

Navigate back to /JLV and run:  
```
mvn clean install -DskipTests -Ptomcat -Dhttps.protocols=TLSv1.2
```

This will build, package and deploy to tomcat. 

Edited JLV/pom.xml to try and get it to work on MacOS.

2/23/22 update:  
This step failed. One of the errors points to the lack of a .bat file related to shutting down Catalina.  
Perhaps I need to create a .sh version, or change the POM (or whatever) to use the .sh as opposed to the .bat.

## Building for Development

If you make changes to the groovy controllers or java files, the mvn command is all you need to use to rebuild.  

If you make changes to css or javascript files, you will need to run the npm build command.

When working with the javascript files during development, you will want to use one of the development NPM script options. These add source maps that will allow you to set breakpoints while using the browser debugger.

The first option is:
```
npm run-script start
```

or
```
npm start
```

This will put npm in a file watcher mode that updates the app.js artifact anytime you make changes to the project files.
You will still need to package and deploy the changes with a Maven command if you want to use those changes.

Another option is:
```
npm run-script tomcatwatcher
```

This will also start a file watcher, but the output will be directly into the tomcat instance. This is useful when you are only updating javascript files and want to test changes faster.

A couple of notes for the tomcat watcher:

1. If you redeploy the whole JLV component with a maven command, you will need to restart the file watcher or make a change that causes an app.js update.
2. If you are not using the default JLV context, change the 'context' variable in webpack.config.tomcat.js to the appropriate value.
3. For both file watchers, there is a bit of a delay before the changes are compiled and copied over. Make sure to give it enough time before refreshing your test page.
