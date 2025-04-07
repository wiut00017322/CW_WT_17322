This app is a Language Learning App where user can create flashcards with word-translation-topic for an efficient studying. Also, user can update/edit flashcards, read and delete them. App has a minimalistic style without anything extra.

This app was created using Express.js/Node.js as a base web framework.
In order to run the app locally it is required to:
- install all the required dependencies (libraries), which are:
  - firstly npm install
  - express (framework to create a server on Node.js)
  - mongoose (to work with MongoDB)
  - mongodb
  - pug (template engine for HTML rendering)
  - body-parser (allows to receive data from POST requests)
  - dotenv (loads environment variables from .env file)
  - express-validator (for validation)
- start application through the terminal: node app.js 
Then application should start running in localhost:3000 and MongoDB Atlas should be connected 

Here are links GitHub and Glitch: 
https://github.com/wiut00017322/CW_WT_17322.git 
https://pretty-bright-coast.glitch.me 

Code's Structure:
1. models/flashcard.js - it is a folder where mongoose-model is stored, which describes the structure of flashcards in the MongoDB database.
2. node_modules
3. public/style.css - here is file essential for building user-interface
4. routes/flashcards.js
         /index.js - routes folder contains all the logic for processing HTTP requests
5. views/index.pug - folder contains user interface templates written in the pug template language. It shows list of flashcards, stores a form to create and update flashcards, allows to delete cards, and works through AJAX in order not to reload page
6. .env file is used to store configuration settings and sensitive data like MONGODB_URI
7. .gitignore - contains node_modules files to ignore them
8. app.js - is a main file for my application 
9. package-lock.json
10. package.json
11. README.md

The structure is clear and understandable and also quite consistent with the required structure
         