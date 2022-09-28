const { query } = require('express');
const express = require('express');
const path = require ('path');
const app = express();
const hbs = require('hbs');
const testRoute = require('./api/routes/index.js')
const testRoute1 = require('./api/routes/index1.js')




app.use('/enter', testRoute)
app.use('/quntity', testRoute1)

app.use((req, res) => {
    res.status(200).json({

    })
})


module.exports = app