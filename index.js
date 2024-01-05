var express = require('express');
var app = express();
var path = require('path');
var engine = require('ejs-mate')

// Set the view engine to ejs
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Route for rendering the ejs view
app.get('/', function(req, res) {
  res.render('home', { title: 'Hey', message: 'Hello there!' });
});

// setting static files location
app.use(express.static(path.join(__dirname, 'assets')));

// Set the server to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000!')
});