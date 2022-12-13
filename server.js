// required modules
const express = require('express');
const path = require('path');

const app = express();

//Importing routers
const noteRoute = require('./routes/noteRoute')
const htmlRoute = require('./routes/htmlRoute')

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Route for note calls
app.use('/note', noteRoute);
// Route for HTML calls
app.use('/', htmlRoute);

// verifies the server connected to the port properly
app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});
