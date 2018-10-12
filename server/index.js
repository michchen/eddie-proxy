const express = require('express');
const app = express();

// const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const router = require('./routes.js');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8080;

console.log(`process.env.PORT: ${PORT}`);

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());

app.use('/:id', express.static('public'));

app.set('port', PORT);

app.use('/api', router);

const server = app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});

server.setTimeout(1000);
