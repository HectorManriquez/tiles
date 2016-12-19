/**
 * API routes for interacting with the database
 * All routes are part of /api
 */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './data/models/User';

const router = express.Router();

router.get('/', function(req, res) {
    // res.sendFile(__dirname + "/public/index.html");
    res.send('API Routes');
});

//
// Dashboard routes for viewing and modifying profile
// -----------------------------------------------------------------------------
router.get('/userDetails', (req, res) => {
    res.send('This is some data');
});

/**
 * POST to /signup
 * Creates a user
 */
router.post('/signup', (req, res) => {
    console.log(req.body);
    User.create({
        email: req.body.email,
        password: req.body.password
    }, (err) => {
        if (err) {
            res.send({
                status: 'failure'
            });
        } else {
            res.send({
                status: 'success'
            });
        }
    })
});

/**
 * UPDATE to /update
 */

export default router;