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

app.get('/about', async function(req, res) {
  res.render('about');
}

);
app.get('/reviews', async function(req, res) {
  res.render('review');
}
);

app.get('/contact', async function(req, res) {
  res.render('contact');
}
);

app.get('/tutoring/:type', async function(req, res) {
  let type = req.params.type;
  if(type == 'math'){
    return res.render('tutoring/math');
  }
  if(type == 'sat'){
    return res.render('tutoring/sat');
  }
  else{
    return res.render('error');
  }

}
);

app.get('/', async function(req, res) {
  res.render('home');
});

app.all('*', async (req, res, next) => {
    res.render('error')
})













// Set the server to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000!')
});
