# TicTacToe
Tic-Tac-Toe Challenge - React.Js


As this project was used to challenge my skills in FrontEnd, I thought it would be interesting to apply the use of REST Api.

The fastest way I found to apply this knowledge was to set up a JSON server to act as my server 
(but the logic would be the same if it was a local server, a service such as MongoDB, etc.)


Therefore, to run this project it is necessary to run on the console, as usual:

$npm start


and still run JSON Server:

$ npx json-server --port 3001 --watch db.json


My goal with the JSON server integration is to persist scoreboard data, so we can avoid losing this information when refreshing the webpage
