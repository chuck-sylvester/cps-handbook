# Getting Started

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
