const express = require('express');
const cors = require('cors');
require ('dotenv').config();

const app = express();
const port = process.env.port || 8080;

app.listen(8080, () => {
  console.log('Listening on port 8080')
})

app.get('/', (req, res) => {
  res.send('hello world!');
});