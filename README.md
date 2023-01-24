# Navigating the Unknown

## Quest Details 
#### title: Navigating the Unknown
#### level: beginner
#### skills: frontend, debugging
#### dependencies: docker_localsetup


## Overview 
Navigating the unknown is a journey that requires a keen eye for detail and a thoughtful approach. In this challenge, the user needs to investigate the issue that customers are seeing a blank screen when they navigate to /product route. After debugging they need to identify that the issue is in the routing configuration and add a 404 page to solve the issue.


## Outline
Describe each step in the quest. 
- Step 1 uncover_the_mystery: Identifying the root cause of the issue.
- Step 2 create_a_safety_net: Implementing a 404 page to catch any broken links or missing pages.
- Step 3 rescue_route: Add a link to home page


## Textbook solution
For each step, describe all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks. 
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.  
### Instructions for completing the quest: 
#### Step 1 [uncover_the_mystery]: 
- Learning Objective: Identifying the root cause of the issue. This will involve debugging the code and conducting thorough research to pinpoint the exact location of the problem.
- Narrative: As a developer, you have received a complaint from a user that they have landed on a page that is showing a blank screen. Your task is to investigate the issue and uncover the mystery behind it. By debugging the code, you will determine the missing routing that is causing the blank screen to appear. This step is crucial in order to move forward and create a solution for the problem.
- Instructions: The user needs to navigate to /product route and debug the issue that causes the blank screen.
- How do users pass to the next step: Users can answer the reason for the issue by replying in Snack.
- Hints: Check if there is any error in the console or if the app is running properly. Find if routing is configured for this.

 
#### Step 2 [create_a_safety_net]:
- Learning Objective: Implementing a 404 page to catch any broken links or missing pages.
- Narrative: In this step, users will create a 404 page that will be displayed when a user navigates to a non-existent route. This page will inform the user that they have landed on a non-existent page and guide them back to the home page. This is an important feature for any website, as it helps to provide a better user experience and prevent confusion.
- Instructions: Create a component that has the content of 404 page and update the routing configuration so that user will be shown appropriate message if they land on a page that does not exist.
- How do users pass to the next step: By creating a new component for 404 Page and updating routing to show the 404 Page for broken links or missing pages.
- Hints: Use react-router-dom's Switch component to handle 404 page.


#### Step 3 [rescue_route]:
- Learning Objective: Add link to navigate to homepage when users enconter a broken link or missing page.
Narrative: With the 404 page you created, users know that the page they are trying to does not exist. To make it easy for them to navigate to other pages we will add a link to home page.
Instructions: Update the 404 page and make use of the Link component provided by react-router-dom to help user navigate to home page if they land on 404 page. Make sure you are naming the navigation element as "Return Home".
- How do users pass to the next step: By adding a link to "Return home", so that navigation from 404 page to homepage will be easier.
Hints:
- Use Link component provided by react-router-dom
- Make sure you are naming the button/link as Return Home
