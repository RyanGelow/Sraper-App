// START YOUR SCRAPING!

const express = require("express");
const logger = require("morgan");
const exphbs  = require('express-handlebars');
const mongoose = require("mongoose");

const PORT = 3050;

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
})

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./app/routes');
app.use(routes);


mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
