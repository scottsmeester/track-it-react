var express = require('express'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose'),
  routes = require('./routes'),
  config = require('./config');

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


app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.html'));
    // res.render('templates/' + req.params.templateid);
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});