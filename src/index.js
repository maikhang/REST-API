// Express Module
const express = require('express');

const app = express();

// Helper Module
const morgan = require('morgan');

/*------------MIDDLEWARE------------*/
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

/*------------ROUTE------------*/
const route = require('./routes');

route(app);

//Export
module.exports = app;
