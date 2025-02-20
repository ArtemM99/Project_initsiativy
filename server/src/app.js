const express = require('express');
const morgan = require('morgan');
const app = express();
const initiativRouter = require('./routes/initiativRouter');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/init', initiativRouter);

module.exports = app;
