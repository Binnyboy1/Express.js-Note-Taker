// TODO: Import express
const express = require('express');
const path = require('path');

// TODO: Import 'db.json' file
const terms = require('../../../db/db.json');

const PORT = 3001;
const app = express();

// TODO: Initialize app variable
app.get('/', (req, res) => res.send('Test /terms'));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/terms', (req, res) =>
  res.json(terms)
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);