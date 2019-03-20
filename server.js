const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var routes_setter = require('./config/routes.js');
routes_setter(app);



app.listen(port, function() {
  console.log('Listening on', port);
});