# First run for teach team

> This guide are design for tech team for their first run project. Follow this guide to understand how to maintain our repository and code. We will work as professional in tech company. So I will let you improve you skill here, you can share any new improvement or knowledge to us.

## How to clone the project

1. Accecpt the github invitation from your lead
2. Download and install git [here](https://git-scm.com/downloads)
3. Open `command prompt` or `terminal` in the repository folder
4. Clone the repository in your local machine

```bash
git clone  <repository https or ssh link>
```

5. Open the repository folder on your local machine
6. Open `command prompt` or `terminal` in the repository folder
7. Run the github command bellow in your 

    ```bash
    git status
    git config --global user.name "Your name here"
    git config --global user.email "your_email@example.com"

    # additional command
    git config --global color.ui true

    # makes sure that Git output is colored
    git config --global color.ui auto

    # displays the original state in a conflict
    git config --global merge.conflictstyle diff3

    # Associating VSCode editor with Git 
    git config --global core.editor "code --wait"
    ```

8. Now you are ready to make contribution with us


## Firt contribution `first commit`

1. Always check your current status with `git status`
2. Open the repository folder with [vscode](https://code.visualstudio.com/download) or your text editor

    ```bash
    # vscode
    # open terminal or command prompt on the repository folder then run this command

    code .
    ```
3. Make new branch
    ```bash
    git branch <new_branch_name>
    ```
    ### **Please, follow our branch naming instruction bellow :**
    
    The branch name contains at least 3 elements, `initials or developer nickname`, `feature name`, and `branch status`.

    Example : 
    
    `devInitial_featureName_branchStatus`

    **We have at least 4 branch status as follow :**
    
    * For ceating a new product or feature :
   ```bash
   # new branch name format
   initialDevName_featureName_product
   
   # example
   git branch MCM_logingPage_product
   ```
    * For bug fixing :
   ```bash
   # new branch name format
   initialDevName_featureName_fix
   
   # example
   git branch MCM_logingPage_fix
   ```
    * To isolate bug or problem :
   ```bash
   # new branch name format
   initialDevName_featureName_isolate
   initialDevName_featureName_bug
   
   # example
   git branch MCM_logingPage_isolate
   git branch MCM_logingPage_bug
   ```
    * To enhance the existing product or feature :
   ```bash
   # new branch name format
   initialDevName_featureName_enhance
   
   # example
   git branch MCM_logingPage_enhance
   ```
    * For creating or updating documentation or guideline :
   ```bash
   # new branch name format
   initialDevName_featureName_doc
   initialDevName_featureName_guide
   
   # example
   git branch MCM_logingPage_doc
   git branch MCM_logingPage_guide
   ```
4. 
