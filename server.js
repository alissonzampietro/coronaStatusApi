//server.js

const express = require('express');
require('babel-polyfill');
const cors = require('cors');
const env = require('./env');
const infoRoutes = require('./app/routes/infoRoute');
 const analisysRoutes = require('./app/routes/analysisRoute');

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', analisysRoutes);
app.use('/api/v1', infoRoutes);


app.listen(env.port).on('listening', () => {
  console.log(`Running at port ${env.port}`);
});


module.exports = app;