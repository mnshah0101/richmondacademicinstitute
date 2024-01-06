var express = require('express');
var app = express();
var path = require('path');
var engine = require('ejs-mate')

// Set the view engine to ejs
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Route for rendering the ejs view


// setting static files location
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/about', function(req, res) {
  res.render('about');
}
);
app.get('/reviews', function(req, res) {
  res.render('review');
}
);

app.get('/contact', function(req, res) {
  res.render('contact');
}
);

app.get('/', function(req, res) {
  res.render('home');
});


//if any other route is requested, render 404
app.get('*', function(req, res) {
  res.render('404');
}
);



app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});



// Set the server to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000!')
});
