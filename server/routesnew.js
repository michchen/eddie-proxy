const express = require('express');
const app = express();

// npm
//const bodyParser = require('body-parser'); // turns the request into readble form?
//const logger = require('morgan');
const path = require('path');
const cors = require('cors');

// other files
const dotenv = require('dotenv').config();

app.get('/test', (req, res) => {
  res.send('test');
});


module.exports = app;


