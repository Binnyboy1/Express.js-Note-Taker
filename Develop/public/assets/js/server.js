// TODO: Import express
const express = require('express');
const path = require('path');

// TODO: Import 'db.json' file
const database = require('../../../db/db.json');

const PORT = 3001;
const app = express();

// GET Route for homepage ✅-Working
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../index.html'))
);

// GET Route for notes page ✅-Working
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../../notes.html'))
);

// GET Route that will return the content of our `db.json` file ✅-Working
app.get('/api/notes', (req, res) =>
  res.json(database)
);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);