# First time developer guideline

> This guidline are design for tech team for their first run project. Follow this guide to understand how to maintain our repository and code. We will work as professional in tech company. So I will let you improve you skill here, you can share any new improvement or knowledge to us.

## How to clone the project

1. Accecpt the GitHub invitation from your lead
2. Download and install git [here](https://git-scm.com/downloads)
3. Open `command prompt` or `terminal` in the repository folder
4. Clone the repository in your local machine

    ```bash
    git clone  <repository https or ssh link>
    ```

5. Open the repository folder on your local machine
6. Open `command prompt` or `terminal` in the repository folder
7. Run the GitHub command bellow in your 

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

## Start your first time contribution

1. Always check your current status with `git status`
   
2. Make sure now you were in `main` or `master` branch.
   
3. Make sure your `main` or `master` branch already updated. Kindly use this command to update your `main` or `master`.
   
    ```bash
    git pull --rebase origin main
    ```

    > Get a conflict after rebasing your current branch with the `main` remote branch? Please, follow the [How to handle conflict after rebasing ](#how-to-handle-conflict-after-rebasing) guideline!
   
4. Open the repository folder with [vscode](https://code.visualstudio.com/download) or your text editor

    ```bash
    # vscode
    # open terminal or command prompt on the repository folder then run this command

    code .
    ```
   
5. Make new working branch from main
   
    ```bash
    git branch <new_branch_name>
    ```
    ### **Please, follow our branch naming instruction bellow :**
    
    The branch name contains at least 3 elements, `initials or developer nickname`, `feature name`, and `branch status`.

    Example : 
    
    `initialDevName_featureName_branchStatus`

    **We have at least 6 branch status as follow :**
    
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
        initialDevName_featureName_bug # old
        
        # example
        git branch MCM_logingPage_isolate
        git branch MCM_logingPage_bug # old
        ```
    * To enhance the existing product or feature :
        ```bash
        # new branch name format
        initialDevName_featureName_enhance
        
        # example
        git branch MCM_logingPage_enhance
        ```
    * For creating or updating documentation :
        ```bash
        # new branch name format
        initialDevName_featureName_doc
        
        # example
        git branch MCM_logingPage_doc
        ```
    * For creating or updating guideline :
        ```bash
        # new branch name format
        initialDevName_featureName_guide
        
        # example
        git branch MCM_logingPage_guide
        ```

6. Checkout to your working branch

   ```bash   
   git branch <your_branch_name>
   ```

7. Start make contribution (create something, update something, etc)

## Firt time contribution `first commit`

1. Make a change on your working branch

2. Move your change to staging index using 

   ```bash
   git add .
   ```

   `git add` terminologies :
    
    ![alt](https://video.udacity-data.com/topher/2017/February/58ade4ac_ud123-l4-git-add-to-staging-recap/ud123-l4-git-add-to-staging-recap.gif)

3. Commit your changes
   
   ```bash
   git commit -m "your commit message"
   ```
   
   > Please make sure your commit message was clear for example you make new login feature, your commit message should represent your work on creating new login feature.
   >
   > **Example :** 
   >
   > `"creating new login feature"`

4. Push your changes into remote repository
   
   ```bash
   git push -u origin <your_working_branch>
   ```

5. Creat pull request on the GitHub repository

6. Still have any change in the same PR? please read the [Commit after Commit](#commit-after-commit)

## Commit after Commit

1. Make any change after push your first change in your PR

2. Move your change to staging index using

   ```bash
   git add .
   ```

3. Squash your last commit using 

    ```bash
    git commit --amend
    ```

    This will bring up your last commit details in your vscode window and ask you to review your last commit details.

4. Edit your last commit details.
   
   > Since you have been running the `git config --global core.editor "code --wait"` you will automatically use vscode as the default code editor for the popup process.

   You can edit commit detials such : 
   * commit message
   * commit files list (you can define new file to commit or eleminate file for commit)
  
   Take a look at this preview :

   **Before editing :**
   
   You can see that my last commit message is `create How to review a pull request from member at first run markdown file`. I want to change this message to be more relevant with my last change about `Commit After Commit Guideline`.

   ![alt](https://i.postimg.cc/0jz6PrGL/image.png)
   
   The commit message in my pull request
   
   ![alt](https://i.postimg.cc/sXqWBp2V/image.png)

   **After editing :**
   
   Here I changed my last commit message to `Adding Commit After Commit Guideline` as seen below.

   ![alt](https://i.postimg.cc/MTTHmXLv/image.png)

   The commit message in my pull request after editing
   
   ![alt](https://i.postimg.cc/SQ92TYsM/image.png)

5. Close the popup windows in vscode after editing the commit details.

6. Come back to your console or terminal and push force your change:

    ```bash
    git push -f
    ```

7. Repeat step 1 to 6 if you still have any change in your existing PR.

8. If you finish with your PR and start new PR please follow the [Firt time contribution guideline](#firt-time-contribution-first-commit)

## How to make a pull request

1. Open GitHub repository
   
2. Click **`Compare and pull request`**
    
    ![alt](https://i.postimg.cc/bNJ1MMWS/image.png)

3. Assign **`Reviewers`** *At least 2 approving reviews from other tech member and code owner.*
   
   ![alt](https://i.postimg.cc/W3f0Bsvh/image.png)
   
4. Choose **`Assignees`** *Select your github id ass assignee*
   
   ![alt](https://i.postimg.cc/5yLmdjSn/image.png)

5. Choose **`Labels`** *Only select relate labels.* **Read more label definition [here](https://)**
   
   ![alt](https://i.postimg.cc/x8vFG6hf/image.png)

6. Choose **`Projects`** *for now we haven't define any project yet in github.* **So you can skip this step**
   
7. Edit pull request **`Description`** *I've created a pull request description template for you so you just need to edit and adjust as you need.* **The template always render automaticaly when you create a pull request.**

    ![alt](https://i.postimg.cc/Lsp4v9Hk/image.png)

8. Choose **`Create pull request`** if you sure about your task or **`Create draft pull request`** if you are not sure about your task but still want to making a progres.

    ![alt](https://i.postimg.cc/Y2bqdc05/image.png)

9.  **Make sure your pull request has passed the pull request requirements.** *For this project, your pull request* **`must have at least 2 approvals`** *from other tech team members to pass the* **`Review reqiured`** *and able to merge your pull request.*
    
    ![alt](https://i.postimg.cc/bwXxw2PH/image.png)

10. Notify your lead or project owner to merge your pull request after you **have passed the pull request requirements**.

    ![alt](https://i.postimg.cc/LXSKFMmB/image.png)

## How to review a pull request from member

1. Open GitHub repository
   
2. If there are numbers in the **`Pull requests`** menu tab, you must open the tab!
    
    ![alt](https://i.postimg.cc/13Z47cBN/image.png)

3. Click one of the open PR to start review. *You must review every open PR to help us speed up our production process*
    
    ![alt](https://i.postimg.cc/rmd4WGMZ/image.png)

4. Click on **`Files changed`** tab menu

    ![alt](https://i.postimg.cc/T25trgPD/image.png)

5. Create global comment. **`Create comment -> Comment -> Submit review`**

    ![alt](https://i.postimg.cc/V61y0gqm/image.png)

    * Result

        ![alt](https://i.postimg.cc/YC1bLHbL/image.png)

    * Status

        ![alt](https://i.postimg.cc/Gpdzk557/image.png)

6. Create request changes with a global comment. **`Create comment -> Request changes -> Submit review`**

    ![alt](https://i.postimg.cc/s2rHTXvJ/image.png)

    * Result

        ![alt](https://i.postimg.cc/VvxW5GtF/image.png)
       
        ![alt](https://i.postimg.cc/MHm1K6Wz/image.png)

    * Status

        ![alt](https://i.postimg.cc/6310x55g/image.png)

7. Create `comment in a single line of code`. 

    > 1. Click `+` button on the line of code. 
    > 2. Write your comment.
    > 3. Click **`Add single comment`** or **`Start a review`**. 
    > 4. Click **`Finish your review`**

    ![alt](https://i.postimg.cc/XJZ2Jyh4/image.png)

    * Result

        ![alt](https://i.postimg.cc/W4z8Wksg/image.png)

    * Status

        ![alt](https://i.postimg.cc/Gpdzk557/image.png)

8. Create `comment on multiple line of code`. 

    > 1. Click and drag down `+` button and stop at the line that you want to review. 
    > 2. Write your comment.
    > 3. Click **`Add single comment`** or **`Start a review`**. 
    > 4. Click **`Finish your review`**

    ![alt](https://i.postimg.cc/fycft7vn/image.png)

    * Result

        ![alt](https://i.postimg.cc/BQ3gWyqq/image.png)

        ![alt](https://i.postimg.cc/8PbbTH5L/image.png)

    * Status

        ![alt](https://i.postimg.cc/Gpdzk557/image.png)

9.  **`Resolve`** a comment

    ![alt](https://i.postimg.cc/hjWBKgyy/image.png)
    
    * Result
    
    ![alt](https://i.postimg.cc/YCqz0WGZ/image.png)

10. **`Reply`** a comment

    ![alt](https://i.postimg.cc/TwqZGbW1/image.png)

    * Result
    
    ![alt](https://i.postimg.cc/qvhSqSC9/image.png)

11. Create approval with a global comment. **`Create comment -> Approve -> Submit review`**

    ![alt](https://i.postimg.cc/c1Fq6QrG/image.png)

    * Before Approval

    ![alt](https://i.postimg.cc/9XBW868d/image.png)

    * After Approval

    ![alt](https://i.postimg.cc/BQJx7Kgb/image.png)

    * Status

    ![alt](https://i.postimg.cc/VL4XxkGR/image.png)