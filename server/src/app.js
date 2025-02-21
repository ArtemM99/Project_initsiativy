const express = require('express');
const morgan = require('morgan');
const app = express();
const initiativRouter = require('./routes/initiativRouter');
const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const aiRouter = require('./routes/aiRoute');
// const cookieParser = require('cookie-parser');
// const tokenRouter = require('./routes/tokenRouter');
// const authRouter = require('./routes/authRouter');

// app.use(cookieParser());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/init', initiativRouter);
app.use('/api/auth', authRouter);
app.use('/api/ai', aiRouter);

app.use('/api/tokens', tokenRouter);

module.exports = app;
