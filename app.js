const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const firebase = require('firebase');
require('firebase/auth');

// Firebase Params
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = express();

// Getting routes
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const servicesRouter = require('./routes/services');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Adding routes to Express Application
app.use('/', indexRouter); // /*
app.use('/auth', authRouter); // /auth/*
app.use('/user', userRouter); // /user/*
app.use('/services', servicesRouter); // /services/*

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