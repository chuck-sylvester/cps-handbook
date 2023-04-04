# Working with Branches

By default, when a new repository is initialized, it creates branch "master" (or "main").

Generally, the JLV/CV repositories are set up such that developers cannot work directly against the main branch. Instead, they create their own branch(es) related to their specific work. Then, their updates can be merged into the long running development branch as part of a Pull Request (PR).

To create a new branch, e.g. "my-branch", use the git command:

```bash
git branch my-branch
```

This creates a new pointer to the same commit you're currently on. Git keeps a special pointer called HEAD, which is a pointer to the local branch you're currently on. In this case, if you are currently on "main", the git branch command only creates a new branch. It did not switch to that branch.

You can see this by running a git log command that shows you where the branch pointers are pointing. This option is called --decorate.

```bash
git log --oneline --decorate
```

To switch to an existing branch, run the git checkout command, e.g.:

```bash
git checkout my-branch
```

This moves the HEAD to poit to the my-branch branch. Any changes made will only be visible in my-branch.

You can use a shortcut command to create and switch to a new branch:

```bash
git checkout -b my-branch
```

To switch back to the main branch:

```bash
git checkout main
```

The git branch command does more than just create and delete branches. If you run it with no arguments, you get a simple listing of your current branches.

```bash
git branch
```

To see the last commit on each branch, run the following:

```bash
git branch -v
```

To see a list of all branches in the remote repository, use either of these commands:

```bash
git branch --all
git branch -r
```

The  --merged and --unmerged options can filter this list to branches you have or have not yet merged into the branch you're currently on.

```bash
git branch --merged
git branch --no-merged
```

To delete a local branch, run the following:

```bash
git branch -d <local-branch>
```

To push the current branch and set the remote as upstream, use one of the following:

```bash
git push --set-upstream origin cps-development
git push -u origin cps-development
```

### JLV Project Format for Branches
All work should be tied to a Jira issue. Work done against the Jira issues should be done within a feature branch that references the Jira item. The format is "issue-type"-jp-"issue-id".

For example:

```bash
git branch task-jp-1234
git branch subtask-jp-23456
git branch nfr-jp-6789
```

### Sync Local Branch with Specific Remote Branch

### Clone Repository at Specified Branch
Command to clone a repository at a specific branch and only fetch that branch.

```bash
git clone -b <branchname> --single-branch <remote-repo-url>
```

For example:

```bash
git clone -b develop --single-branch https://github.com/department-of-veterans-affairs/jlv-code.git
```
