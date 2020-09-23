const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const bodyParser = require('body-parser');
const dbConnection = require('./db/index.js');
const path = require('path');
const recipeFetcher = require('./api/recipes.js');
// const { Sequelize } = require('sequelize');


const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Listening on port 8080')
})

app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/api/search/:query', (req, res) => {
  const { params } = req;
  const { query } = params;
  recipeFetcher(query)
  .then(data => {
    res.send(data);
  })
});

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
app.get('/api/recipes', (req, res) => {
  getFaves((error, recipes) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.send(recipes);
    }
  })
});

//function to save recipes to database
const saveFaves = (title, image) => {
  const data = [title, image]
  dbConnection.query(`INSERT INTO saved_recipes (image, title) VALUES (?, ?);`, data, (error, results) => {
    if (error) {
      return console.error(error)
    }
    console.log('Rows added', results.affectedRows)
    return results
  });
};

// INSERT INTO `table_name`(column_1,column_2,...) VALUES (value_1,value_2,...);

//post
  //saving info.  save a recipe to faves. (each one will have a button to save)  store the recipe 
  //in the database
app.post('/saveRecipe', (req, res) => {
  const { image, label } = req.body;
  saveFaves(image, label) 
});

//function that lets you change title

const editFaves = () => {

};

//put
  //edit stored information.  click a button to change name for recipe.
// app.put()

//function that removes recipe
const deleteFaves = (title) => {
  const data = [title]
  dbConnection.query(`DELETE FROM saved_recipes WHERE title = ?;`, title, (error, results) => {
    if (error) {
      return console.error(error)
    }
    console.log('Deleted rows', results.affectedRows)
    return results
  });
};

//delete
  //make a button that lets you delete
app.post('/deleteRecipe', (req, res) => {
  const { label } = req.body;
  deleteFaves(label) 
});



module.exports = {
  app,
};