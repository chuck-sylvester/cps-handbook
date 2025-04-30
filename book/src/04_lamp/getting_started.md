# Getting Started

## Selecting a LAMP Version
For local development, install and configure a LAMP package, such as XAMPP or WAMP. For local MacBook development, my preference is XAMPP.

The deployment folder for a LAMP application (which can also be your active development folder) should be:

```bash
/Applications/XAMPP/htdocs/[appname]
```

Start the Apache Web Server and MySQL (MariaDB) database from the XAMPP Manager app or from the command line. Once started, the application can be run from a web browser via the URL:

```bash
http://localhost/[appname]
```

### Additional Setup Information
For details on application and supporting database setup, refer to the documents in the `/_docs` folder of your project.  
(not yet created... borrow content from another project)

## Setting up an Apache Virtual Host
It is recommended that you develop PHP applications in the web server default root document folder, as opposed to a subfolder. One way to achive this -- especially if you are working on multiple PHP development projects at the same time -- is to set up an Apache virtual host.

For example, for the phpmvc application that I developed (per Dave Hollingworth course), I updated the `httpd.conf` file to enable virtual servers and the `httpd-vhosts.conf` file with the section of configuration code below.
```bash
<VirtualHost *:80>
    ServerName phpmvc.localhost
    ServerAlias phpmvc.localhost
    DocumentRoot "/Users/chuck/swdev/csw/phpmvc"
    <Directory "/Users/chuck/swdev/csw/phpmvc">
        Require all granted
        AllowOverride All
    </Directory>
</VirtualHost>
```
