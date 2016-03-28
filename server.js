var http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    express = require('express');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// DB connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/salesTools');

// Index Route
// app.get('/', routes.index);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// app.use(express.static(__dirname));
// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.html'));
});

var server = app.listen(port, function() {
  // if (err) {
  //   console.log(err);
  //   return;
  // }
  console.log('Express server listening on port ' + server.address().port);
});