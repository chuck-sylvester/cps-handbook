# Git Flow

This workflow uses three types of branches:

Branch Name | Description
----------- | -----------
main    | long-lived and contains each of the major product versions
develop | long-lived and serves as the integraton and build branch
feature | multiple, short-lived branches used by individual developers

The first step is to complement the default ***main*** with a ***develop*** branch. A simple way to do this is for one developer to create an empty develop branch locally and push it to the server:

```bash
git branch develop
git push -u origin develop
```

This branch will contain the complete history of the project, whereas main will contain an abridged version. Other developers should now clone the central repository and create a tracking branch for develop.

**Feature Branches**
Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of main, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with main.

**Finishing a feature branch**
When you’re done with the development work on the feature, the next step is to merge the feature_branch into develop.

```bash
git checkout develop
git merge feature_branch
```

We preceed merges with a Pull Request (PR) and approval. Then, we typically use GitHub to perform the merger from the feature branch into the develop branch.