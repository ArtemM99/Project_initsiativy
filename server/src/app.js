const express = require('express');
const app = express();
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const initiativRouter = require('./routes/initiativRouter');



app.use(express.static('public'));
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/init', initiativRouter);


module.exports = app;
