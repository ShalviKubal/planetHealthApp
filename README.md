# planetHealthApp
Node server Hits the googles API sheets to get data after authentication and displays on UI using angular 1.5

This project has  a angular UI and a node serve to get data from a google sheets.

Step 1: Setup of spreadsheet and granting access.This is a one time step.
Go to the Google APIs Console.
Create a new project.
Click Enable API. Search for and enable the Google Drive API.
Create credentials for a Web Server to access Application Data.
Name the service account and grant it a Project Role of Editor.
Download the JSON file.
Copy the JSON file to your code directory and rename it to client_secret.json
Find the client_email inside client_secret.json. 
Back in your spreadsheet, click the Share button in the top right, and paste the client email into the People field to give it edit rights. Hit Send.

Command to run the server : node index.js

Command to run the UI : npm run serve

Hit on broswer to see the results : http://localhost:3000
