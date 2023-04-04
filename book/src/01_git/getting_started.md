# Getting Started

### Set up Git
Set up basic information about yourself and how you want to work with Git.  

```bash
git config --global user.name "Chuck Sylvester"
git config --global user.email charles.sylvester@va.gov
git config --global color.ui true
```

To display your Git settings:

```bash
git config --list
git config --local --list
git config --global --list
```

### Clone Remote Repository
How to clone a remote repository to your local instance.  

I have two-factor authentication enabled and a Personal Access Token, so I need to provide a more verbose version of the clone command. I typically use the HTTPS option for cloning.

After copying the desired repo URL to the clipboard, you need to tweak it after pasting into termninal command line. A while back, I did this by including both the username and personal access token as part of the clone command. After doing this for an initial repository, I only needed to include username for subsequent clones.

However, I recently tried this approach and it did not work. So instead, I cloned with only my username added, and then when prompted for password, I pasted in my personal access token string.

For example, to clone the department-of-veterans-affairs repository, jlv-cv-repo, I issue the following commands:

```bash
cd c:\work\swdev\va
git clone chuck-sylvester@github.com/department-of-veterans-affairs/jlv-cv-repo.git
```

Then, when prompted for password, paste in your personal access token string and hit enter. It may not be necessary to provide your personal access token string upon subsequent clone statements.

I've recently had some trouble with this approach on my GFE. Instead, I've had to issue a variation of the clone commnad that uses my Personal Access Token as part of the URL. This worked when I cloned the two JLV Test Automation repositories.

```bash
cd c:\work\swdev\va
git clone https://<personal-access-token>@github.com/department-of-veterans-affairs/jlv-cv-automation-framework.git
git clone https://<personal-access-token>@github.com/department-of-veterans-affairs/jlv-test-automation.git
```

### Working with the .gitignore file
Use # symbol for comments.  
MacOS file type to ignore: `.DS_Store`
