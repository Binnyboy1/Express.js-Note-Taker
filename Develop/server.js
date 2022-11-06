const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

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
 * give new note a unique id ✅-Working
 * >> Learned from: 11-Express -> 17-Ins_POST-Fetch
 * add it to the db.json file -Not yet
 * return the new note to the client ~Kinda
*/
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    // console.log(body);

    const newNote = {
        title,
        text,
        id: uuid()
    };

    // Convert the data to a string so we can save it
    const newNoteStr = JSON.stringify(newNote, null, 4);

    // Write the string to a file
    fs.appendFile(`./db/db.json`, newNoteStr, (err) =>
        err
            ? console.error(err)
            : console.log(
                `Success:\n${newNote}`
            )
    );

    // Create a response so we can show the user a confirmation
    const response = {
        status: 'success',
        body: newNote
    };

    // Output a response
    console.log(response);
    res.status(201).json(response);
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    console.log(path.join(__dirname, '/public/index.html'));
});