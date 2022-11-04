// TODO: Import express
const express = require('express');
const path = require('path');

// TODO: Import 'db.json' file
const database = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for homepage ✅-Working
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page ✅-Working
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route that will return the content of our `db.json` file ✅-Working
app.get('/api/notes', (req, res) =>
    res.json(database)
);

/* Post Route that will
 * recieve a new note to save ✅-Working
 * give new note a unique id -Not yet
 * add it to the db.json file -Not yet
 * return the new note to the client ~Kinda
*/
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    // console.log(body);
    res.json(`Title: ${title}, Text: ${text}`)
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    console.log(path.join(__dirname, '/public/index.html'));
});