const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var routes_setter = require('./config/routes.js');
routes_setter(app);


app.listen(port, function() {
  console.log('Listening on', port);
});