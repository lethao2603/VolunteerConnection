const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World123');
});

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect DB Success!');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});