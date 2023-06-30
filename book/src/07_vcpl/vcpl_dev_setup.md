# VCPL Dev Setup

Veterans Copayment Lockbox  
[https://dev.vcpl.vaec.va.gov](https://dev.vcpl.vaec.va.gov)

Here's what I did to set up a local environment:

### Create local clone of vcpl-application-code

Go to github.ec.va.gov  
Go to the desired repository  
Clone by copying the HTTPS URL  
Start Git Bash terminal  
Set default directory to ~/swdev/va  
Clone locally:

```bash
git clone <repo url>
```

Set default directory to newly created repo folder (vcpl-application-code)  
For the purpose of initial setup, continue using the primary branch (master).

### Create .env file

Create a new _.env_ file within the ~/swdev/va/vcpl-application-code/vcpl-web directory.

This file:

- Makes local development easier
- Removes authorization for local environment

Note that:

- The .gitignore file in ./vcpl-web has an entry to exclude ".env", so it can be personalized
- You can view your personal "X_AUTH_USER_OVERRID" value by checking the console log after starting the web app
- Mine is: "1200155781"

Below are the relevant fields and values to include:

**vcpl-web/.env**

```bash
API_BASE_URL="http://localhost:3000/api"
AUTHORIZE_BYPASS=1

# Sub/ID number
X_AUTH_USER_OVERRIDE="YOUR_SUB_NUMBER"
EMAIL="EMAIL@VA.GOV"
GIVEN_NAME="FIRST_NAME"
FAMILY_NAME="LAST_NAME"
```

### Build and Run Locally

Note: this set of steps requires npm, which is installed as part of the node.js install.

Node can be downloaded and installed via the [https://nodejs.org](https://nodejs.org) website. If your GFE doesn't allow the installation, you can install nvm via a curl command and then install the node LTS version via nmv. For more details, see [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

- disconnect from VPN
- set default directory to vcpl-application-code/vcpl-web
- git checkout the appropriate branch, e.g., "dev"
- run: npm config set strict-ssl false
- run: npm i --legacy-peer-deps
- wait for the node modules to download for the first time
- the above step took about 10 minutes and bogged down my GFE
- reconnect to the VA VPN
- from the vcpl-web folder,
  - run: npm install (this step may not be required, since ran an install above)
  - run: npm start

<br />

---

**The below steps are no longer required:**

To enable API links to pull data from the AWS Lambda services:

- set default directory to vcpl-application-code/vcpl-web/src
- create new file called ".env"
- add the following content (a single line in the file):  
  API_BASE_URL="http://localhost:3000/api"

---

<br />

> **_Note: to run vcpl web app... and get data returned, you must be connected to VA VPN._**
