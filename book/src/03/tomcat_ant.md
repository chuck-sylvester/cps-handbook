# Tomcat and Ant

## Working with Tomcat
Refer to JLV Dev Setup > Apache Tomcat for information on installation, configuration, and running the Apache Tomcat server.

## Working with Ant
Following tomcat.apache.org and ant.apache.org instructions for downloading and using the Ant build tool.

Downloaded 1.10.13 .zip archive: [apache-ant-1.10.13-bin.zip](https://dlcdn.apache.org//ant/binaries/apache-ant-1.10.13-bin.zip) [PGP] [SHA512] to ~/Downloads folder.

I used Safari, which automatically unzipped into folder: ~/Downloads/apache-ant-1.10.13

To run a checksum against the zip, use Chrome instead, so the .zip is preserved.

Clicked the [SHA512] link to get the checksum value:
`347e964db73d1f8e9fe110f135625920e09c8c9997e9950c405cfeec60b70750044a91ef0535d76d6f8e023de0788f2619be76fd91b7a80be9a6b569a16cc3e8`

Ran _shasum_ against the downloaded zip file:
```text
cd ~/Downloads
shasum -a 512 ./apache-ant-1.10.13-bin.zip
```

Result:
`347e964db73d1f8e9fe110f135625920e09c8c9997e9950c405cfeec60b70750044a91ef0535d76d6f8e023de0788f2619be76fd91b7a80be9a6b569a16cc3e8`

Also checked with _openssl_:
```text
cd ~/Downloads
openssl sha512 ./apache-ant-1.10.13-bin.zip
```

Result:
`347e964db73d1f8e9fe110f135625920e09c8c9997e9950c405cfeec60b70750044a91ef0535d76d6f8e023de0788f2619be76fd91b7a80be9a6b569a16cc3e8`

Uzipped andmoved the new Ant folder to root of: ~/swtool

Updated **.zshrc** to add the bin directory of the Ant distribution to the PATH environment variable. Then, you will be able to execute the ant shell command directly.

