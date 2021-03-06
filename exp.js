/*var express = require ("express") ;
var app = express();

app.get("/",function(req,res){
    res.end("Hello, My World!")
})

app.listen(8080 || process.env.PORT);*/

// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require('./apps/routing/apiRoutes')(app);
require('./apps/routing/htmlRoutes')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});