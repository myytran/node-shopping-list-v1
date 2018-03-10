
const express = require('express');

// we'll use morgan to log the HTTP layer
const morgan = require('morgan');
// we'll use body-parser's json() method to
// parse JSON data sent in requests to this app
const bodyParser = require('body-parser');

// we import the ShoppingList model, which we'll
// interact with in our GET endpoint
const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at. Note that
// normally you wouldn't do this. Usually your
// server will simply expose the state of the
// underlying database.



//adding recipes and endpoin\
Recipes.create('tea', ['hot water', 'tea bag']);
Recipes.create('chili', ['tomato  paste', 'ground beef', 'beans']);
Recipes.create('rice', ['water', 'rice');



// recipes endpoint
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
