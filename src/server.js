/**
 * Server configuration
 */

/**
 * Module dependencies
 */
import 'babel-polyfill';
import path from 'path';
import express from 'express';
import session from 'express-session';
import flash from 'express-flash';
import expressValidator from 'express-validator';
import compression from 'compression';
import bodyParser from 'body-parser';
import passport from 'passport';
import React from 'react';

const MongoStore = require('connect-mongo')(session);

import routes from './routes';
import apiRoutes from './apiRoutes';
import {
    port,
    databaseUrl,
    sessionSecret
} from './config';

/**
 * Create express instance
 */
const app = express();

/**
 * Express configuration
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression);
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: sessionSecret,
    store: new MongoStore({
        url: databaseUrl,
        autoReconnect: true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash);


/**
 * Register routes in express
 */
app.use('/api', apiRoutes);
app.use('/', routes);

/**
 * Launch the server
 */
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});