const fs = require('fs');

const readFromFile = (destination, file) => {
    fs.readFile(file, 'utf8', (err, data) =>
        // Error catching
        err ? console.error(err) : JSON.parse(data)
    );
};

const writeToFile = (destination, content) => {
    // String conversion and formatting so we can write it to a file properly
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        // Error catching
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
};

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        // Error catching
        if (err) {
            console.error(err);
        } else {
            // Appending new data to the file's contents
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            // Calling custom function to properly write data to a file
            writeToFile(file, parsedData);
        }
    });
};

module.exports = {
    readFromFile,
    writeToFile,
    readAndAppend
};