const express = require('express');
const mongoose = require('mongoose');
const app = express();
const items = require('./routes/api/items');
require('dotenv').config();


// Database connection
const uri = process.env.ATLAS_URI;
mongoose
    .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

// json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/items', items)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to ${PORT}`));