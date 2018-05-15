// Express Server Definition
var express = require('express');
// Defines 'app' as a new Express app.
var app = express();

// Captures & allows acceptance of request payloads
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

// Import Service logic
var services = require('./services');

// Serve static files from 'public' directory
app.use(express.static(__dirname));

// Handles CORS errors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/* HTML Endpoints */
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});


/* JSON Endpoints */
// app.get('api/projects', services.projects.index);


// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
  console.log('Highwind airborne and listening @ localhost:3000/');
});
