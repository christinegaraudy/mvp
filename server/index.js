const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const bodyParser = require('body-parser');
const dbConnection = require('./db/index.js');
const path = require('path');

const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Listening on port 8080')
})

app.use(express.static(__dirname + '/../client'));

//function to retrieve recipes from database (this is where you db.query)
const getFaves = (cb) => {
  dbConnection.query('SELECT * FROM saved_recipes;', (error, recipes) => {
    cb(error, recipes);
  })
};

//get
  //getting the info from the backend. showing the saved recipes.  do a get request when the 
  //page loads, displaying them on right div (refresh button?) grab the recipes from the database
    //use getFaves
app.get('/', (req, res) => {
  getFaves((error, recipes) => {
    if (error) {
      console.log(error);
      res.status(500);
    } else {
      res.send(recipes);
    }
  })
});

//function to save recipes to database
const saveFaves = (title, cb) => {
  dbConnection.query(`INSERT INTO saved_recipes (title) VALUES ('${title}');`);
};

//post
  //saving info.  save a recipe to faves. (each one will have a button to save)  store the recipe 
  //in the database
app.post()

//put
  //edit stored information.  click a button to change name for recipe.


//delete
  //make a button that lets you delete




module.exports = {
  app,
};