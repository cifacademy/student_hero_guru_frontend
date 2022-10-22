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
2. Open the repository folder with [vscode](https://code.visualstudio.com/download) or your text editor

    ```bash
    # vscode
    # open terminal or command prompt on the repository folder then run this command

    code .
    ```
3. Make new working branch
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
4. Checkout to your working branch

   ```bash   
   git branch <your_branch_name>
   ```
5. Start make contribution (create something, update something, etc)

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

## Make a pull request

1. Open GitHub repository
2. Click **Compare and pull request**
    ![alt](https://i.postimg.cc/bNJ1MMWS/image.png)
3. Assign **Reviewers.** *At least 2 approving reviews from other tech member and code owner.*
   * ![alt](https://i.postimg.cc/ZYpRtTZ2/image.png)
   * ![alt](https://i.postimg.cc/W3f0Bsvh/image.png)
4. Choose **Assignees.** *Select your github id ass assignee*
   
   ![alt](https://i.postimg.cc/5yLmdjSn/image.png)

5. Choose **Labels.** *Only select relate labels.* **Read more label definition [here](https://)**
   
   ![alt](https://i.postimg.cc/x8vFG6hf/image.png)

6. Choose **Projects.** *for now we haven't define any project yet in github* **you can skip this step**
7. Edit pull request **Description.** *Learn more about how to make good PR description [here](https://)*
8. Choose and click **Create pull request**
9.  Choose and click **Draft pull request**
10. **Make sure your pull request has passed the pull request requirements.** *For this project, your pull request* **`must have at least 2 approvals`** *from other tech team members to pass the* **`Review reqiured`** *and able to merge your pull request.*
11. Notify your lead or project owner to merge your pull request after you **have passed the pull request requirements**.

    ![alt](https://i.postimg.cc/bwXxw2PH/image.png)
    ![alt](https://i.postimg.cc/9XBW868d/image.png)
    ![alt](https://i.postimg.cc/DwNb4PvW/image.png)
    ![alt](https://i.postimg.cc/cHRKjqQY/image.png)
    ![alt](https://i.postimg.cc/FFqtqfHy/image.png)
    ![alt](https://i.postimg.cc/3JvMHKkP/image.png)
    ![alt](https://i.postimg.cc/MZh6B3VJ/image.png)
    ![alt](https://i.postimg.cc/7654GSLL/image.png)
    ![alt](https://i.postimg.cc/dV35K6ND/image.png)
    ![alt](https://i.postimg.cc/QtGm138W/image.png)
    ![alt](https://i.postimg.cc/ZK7Lj3Ym/image.png)
    ![alt](https://i.postimg.cc/286Qq6QK/image.png)
    ![alt](https://i.postimg.cc/W4MgRJVh/image.png)
    ![alt](https://i.postimg.cc/4yFhv66F/image.png)
    ![alt](https://i.postimg.cc/j2WjbGfZ/image.png)
    ![alt](https://i.postimg.cc/MGKML39r/image.png)
    ![alt](https://i.postimg.cc/SNkyV2Tg/image.png)
    ![alt](https://i.postimg.cc/RFZ5rKtR/image.png)
    ![alt](https://i.postimg.cc/LXSKFMmB/image.png)
    ![alt](https://i.postimg.cc/Y2bqdc05/image.png)