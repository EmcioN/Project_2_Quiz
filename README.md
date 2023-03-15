# Gaming Quiz
![quiz](/assets/images/quiz.jpg)

## Table of Contents
[UX](#ux)
  * [Goal for the Project](#goal-for-the-project)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
  * [Site owner Goals](#site-owner-goals)
    * [Requirements](#requirements)
    * [Expectations](#expectations)
  * [Design Choices](#design-choices)
    * [Font](#font)
    * [Icons](#icons)
    * [Colours](#colours)
    * [Structure](#structure)
  * [Features](#features)
    * [Play button](#play-button)
    * [Question section](#question-section)
    * [Progress Bar](#progress-bar)
    * [Your score](#your-score)
    * [Footer](#footer)
    * [End Game Screen](#end-game-screen)    
  * [Tehnologies used](#tehnologies-used)
    * [Languages](#languages)
    * [Tools](#tools)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Credits](#credits)

## UX
## Goal for the Project
 The Gaming Quiz is a great opportunity to test your knowledge about games. With it, you can answer questions about all your favorite titles, from action-adventure to sports. Questions cover a variety of topics related to games, such as strategy, history, characters and mechanics. This Gaming Quiz offers an enjoyable way to check your skills and learn more about some of the exciting games on the market today.
### User Goals
* Visually appealing to attract more players.
* Valuable content with true answers, to not confuse players.
* Easily navigated to make it better experience.
### User Stories
* As a user, I want to check my knowledge about games.
* As a user, I want to know my score.
* As a user, I want to be able to restart the game. 
* As a user, I want to be able to easily navigate through the website.
* As a user, I want to know where I can find more information about creator.
### Site owner Goals
* Share the knowledge about the games.
* Be able to check your knowledge about games.
#### Requirements
* Easy to navigate on various screen sizes.
* Visually inviting.
* True information.
#### Expectations
* I expect all buttons will work like expected.
* I expect questions will provide true information.
* I expect all links to social media sites to be opened in a new tab.
* I expect to be able to see my score.
### Design Choices
#### Font
 [Open Sans](https://fonts.google.com/specimen/Open+Sans) is a clean and modern font that's perfect for any website. It's easy to read on screens of all sizes, making it ideal for web and mobile use.
  
 [Shantell Sans](https://fonts.google.com/specimen/Shantell+Sans) I will use this font in name of the quiz. Shantell Sans is a marker-style font built for creative expression that is why i like it.
#### Icons
 I use [Font Awesome](https://fontawesome.com) icons because they're easy to use and look great. After adding them to the site, it became livelier and more attractive. Thanks to them, the website is easier to read. They are easy to understand, so they replace some descriptions.
#### Colours
 On my website I used darker colors. I like dark themes. It's easier to read in the evening.
* #343841 - This color will be used as a backgroung behind containers.
* #272d3b - This color will be used as borders
* #ffffff - This color will be used as a text colour.
* #464952 - This color will be used as a background behind website.
#### Structure
 The site will work on small and large screens. Everything will scale accordingly.
### Features
#### Play button
 Button will start new game. You can play as many times as you want.

 ![play](/assets/images/playbutton.png)
#### Question section
 Here you will find a question with four possible answers. Only one is correct. We choose the answer by clicking on it

 ![question](/assets/images/question.png)
#### Progress Bar
 It will contain a number of questions. We'll also know what question we're on.
 Also you will see your current score.

 ![progress](/assets/images/progressbar.png)
#### Your score
 You will be able to see the result of your quiz. Try to reach the maximum number of points. Home button will take you to main section.

 ![score](/assets/images/yourscore.png)

 ![scorelist](/assets/images/scoresection.png)
#### Footer 
 Located at the bottom of the page. You will find font awesome icons representing social media.

 ![footer](/assets/images/footer.png)
#### End Game Screen
 You will be able to see your final result. You will be able to put your name on the scoreboard

 ![endgame](/assets/images/endgame.png)
### Tehnologies used
#### Languages 
* HTML - Used to design the basic website.
* CSS - Used to style the website and make it look more appealing.
* JavaScript - Used to provide interactivity with player. 
#### libraries
* [Font Awesome](https://fontawesome.com) - Used for icons on the website.
* [Google fonts](https://fonts.google.com) - Used for text font on page. 
#### Tools
* [Gitpod](https://gitpod.io/workspaces) - Used for building the website.
* [Github](https://github.com/) - Used to deploy the project. 
* [W3C HTML Validation Service](https://validator.w3.org/) - Used to test HTML.
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used to test CSS.
* [Devtools](https://developer.chrome.com/docs/devtools/#:~:text=Chrome%20DevTools%20is%20a%20set,you%20can%20open%20Chrome%20DevTools.) - I checked all the time how my code works and if there are any errors in console
* [JSHint](https://jshint.com/) - Used to test my java script if there is any mistakes.
### Testing
#### Html Validator
I had no major problems with html. The code itself is not complicated, so it wasn't that difficult.
I made a mistake adding href attribute to button. The W3 validator picked it up quickly. I removed unnecessary text and got rid of the error.

![html Error](/assets/images/htmlvalidationerr.png)

After another test, I did not encounter any errors

![html](/assets/images/htmlgood.png)

#### Css Validator
With css it was very similar to html. Nothing complicated is included in it. The entire file seems to apply the style to the page well. The code is commented out for easier reading. Any changes can be made very quickly and easily.
I did a lot of things by trial and error. Thanks to the first project, I achieved my goal very quickly.

![Css](/assets/images/cssvalidation.png)

#### JSHint
I had a lot of warnings in the beginning. Most of them had the same problem. When relying upon ECMAScript 6 features I need to inform the program so JSHint doesn't raise unnecessary warnings. I added a line of code to the beginning of the js file that fixed the warning. I found the answer on stack overflow. 

 /*jshint esversion: 6 */

![js warnings](/assets/images/javascriptwarnings.png)

I had a missing semicolon. That was easy to fix by adding it in the right place.

![js warnings](/assets/images/jshintwar.png)

I got a warning that ['number'] is better written in dot notation. I also looked for a solution on stack overflow. The solution was as easy as in the previous case. I added lines of code and got rid of the warnings

![jshint](/assets/images/jshintnowar.png)

PageSpeed ​​Insights showed nothing alarming. I just had to add height and width to the logo image. This is the result.

![page speed](/assets/images/pagespeed.png)

#### Manual Testing
Just writing the function was a challenge for me. Most things were done by trial and error. One of the problems that took me a long time was the lack of answers displayed. They were undefined. 

![err](/assets/images/answerundefined.png)

I changed the code in different ways. Nothing seemed to help. Eight hours later, with the help of google, I noticed that I forgot to add the data number in html. I managed to fix this error.

![datanumber](/assets/images/datanumber.png)

Some characters in the question body were displayed incorrectly. I added text formatting. Thanks to tutorials on youtube, I dealt with the error and the questions are now displayed correctly.

![datanumber](/assets/images/questiongood.png)

I had a problem with the wrong score displayed in the final score. The score was from the previous game. If this was your first game, the score field was blank. I was wondering what to do for a long time, until I finally noticed that the final score is not updated often enough. I added an update to the final score to the getNewQuestion function.

![scorefix](/assets/images/scorefix.png)

I tested the game itself. There were a lot of tests, in different ways. Questions load correctly. The answers are also loading and only one answer is correct. Points for correct answers are calculated correctly. The question number changes according to the one you are currently on.

### Deployment  
 After the initial code had been committed and pushed to GitHub, it was time to deploy the project. This project was deployed using GitHub by the following steps.
* Navigate to the repository on github and click **Settings**.
* Select **Pages** on the side navigation.
* Select the **None** dropdown, and then click **Main**.
* Click on the **Save** button.
* Now the website is now live on https://emcion.github.io/Project_2_Quiz/
### Credits 
#### For help, advice and insperation

I would like to thank the love maths project and the many tutorials on youtube. I wouldn't have made it without them. With a deeper look at the code. Now it's much easier for me to understand how it all works.

[Stackoverflow](https://stackoverflow.com/) was also very helpful. There you can find a solution with an explanation to most problems.

[W3school](https://www.w3schools.com/) is another place where I was looking for information. Everything is nicely explained and you can test it yourself.

Of course, the greatest support I received was from my mentor. Many thanks to him.

[Simen Daehlin](https://github.com/Eventyret)