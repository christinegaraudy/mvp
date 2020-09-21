const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Listening on port 8080')
})

app.get('/', (req, res) => {
  res.send('hello world!');
});