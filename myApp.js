let express = require('express');
let app = express();
require('dotenv').config();
var bodyParser = require("body-parser");

// Configure body-parser middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// GET handler for /name route
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

// POST handler for /name route
app.post("/name", function(req, res) {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

module.exports = app;
