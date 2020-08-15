# NFLGambling by Declan Walsh
NFLGambling Web App with MERN


This web application was remodelled from the senior thesis of Declan Walsh, Patrick Doud, Henry Laurich, and Daniel Tang. I, Declan Walsh, was in
a training program for React.js before it was cancelled due to Covid-19. This project is me using my newfound React knowledge to create a more functional
web application. During this process I also learned Node.js with Express to create the backend web server. I expanded on my previous knowledge of MongoDB and also 
developed skills in Authentication with Javascript packages like Joi and Json Web Tokens.

Prior to this remodelling, this project used Vue.js on the Front End and Flask on the back end. The reason for wanting to redo it all is that after looking at our both bodies of code, I felt it was messy, hard to understand, and most importantly, rigorously ignored the design principles of both Flask and Vue.js. Now that I have a better grasp on designing clean front end web applications, I figured I would gain practice by redoing an application that I already had a boilerplate idea for.

Purpose of the app:
At its core, this app was always meant to predict the winners of NFL games based on the Vegas gambling lines. That means that it was also designed for the purpose of gambling. As somebody who does not gamble on sports, I wanted to make this accessible to people like myself who are mainly interested in the prediction aspect of the application. So rather than just being basic predictions on games, the new app will also collect user predictions. Each week a user can try and predict their own outcomes of each game. Eventually I hope to make it a competitive feature where friends or strangers can compete to try and predict the outcomes of games, and from there maybe add the gambling aspect. If 10 friends enter a pool and each put $10 on the line, the winner is the user who predicts the most games correctly. My friends and I used to do this in high school but on pieces of printed out paper. This was about all the sports gambling I could stomach.

With friends and leagues, we can create healthy competition with the option to add gambling. Maybe if I can clean up the math and gain enough of a user base I can provide a prize pool for the person that predicts the most games in a week or season but that is a shadowy goal in the future. 

For now, the main idea is to list each game of the current week as well as model predictions on the game. Users can use this information or choose to bet against it and create their own week of bets.
