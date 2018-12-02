const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

// Getting routes
const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Adding routes to Express Application
app.use('/', indexRouter); // GET /*

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  // Return error
  return res.status(statusCode).json({
    code: statusCode,
    message: err.message,
  });
});

module.exports = app;
