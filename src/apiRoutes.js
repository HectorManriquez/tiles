/**
 * API routes for interacting with the database
 * All routes are part of /api
 */

import express from 'express';
import passport from 'passport';
import User from './data/models/User';

const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();

/**
 * Passport configuration serializer/deserializer
 */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

/**
 * User data is serialized into the req.user when user successfully logs in
 * Only care about _id and email to be used when requesting user information
 */
passport.deserializeUser((id, done) => {
    User.findById(id, {
        email: 1
    }, (err, user) => {
        done(err, user);
    });
});

/**
 * Passport configuration for retrieving a user using email and password
 */
passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
        User.findOne({email: email.toLowerCase()}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username and or password'});
            }
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, {message: 'Incorrect username and or password'});
            });
        });
    }
));

/**
 * Dashboard routes for viewing and modifying profile
 */

/**
 * GET to /dashboard
 * Get a users information
 */
router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        User.findById(req.user._id, {
            email: 1,
            firstName: 1,
            lastName: 1,
            picture: 1,
            description: 1
        }, (err, doc) => {
            if (err) {
                res.send({
                    status: 'failure'
                })
            } else {
                res.send(doc)
            }
        })
    } else {
        console.log('user not authenticated');
        res.redirect('/#/login');
    }
});

/**
 * GET to /users
 * Get all users
 */
router.get('/users', (req, res) => {
    User.find({}, {
        email: 1,
        firstName: 1,
        lastName: 1,
        picture: 1,
        description: 1
    }, {
        limit: 10
    }, (err, docs) => {
        if (err) {
            res.send({
                status: 'failure'
            })
        } else {
            res.send(docs)
        }
    })
});

/**
 * POST to /login
 */
router.post('/login', (req, res, next) => {
    /**
     * Req authentication only needs to happen when logging in
     */
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log(info);
            res.redirect('/login');
        }
        /**
         * req.isAuthenticated is then set to true if passport.authenticate is successful
         * and once req.logIn is called
         */
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        })
    })(req, res, next);
});

/**
 * GET /logout
 * Logs out user
 */
router.get('/logout', (req, res) => {
    console.log('logged out');
    req.logout();
    res.redirect('/');
});

/**
 * POST to /signup
 * Creates a user
 */
router.post('/signup', (req, res) => {
    User.create(req.body, (err) => {
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
 * POST to /update
 * Updates a user's information if user exists
 * Returns updated document
 */
router.post('/update', (req, res) => {
    User.findOneAndUpdate({
        email: req.body.email
    }, req.body, {
        new: true,
        fields: {
            email: 1,
            picture: 1,
            firstName: 1,
            lastName: 1,
            description: 1
        }
    }, (err, doc) => {
        if (doc == null) {
            res.send({
                status: 'failure'
            });
        } else {
            res.send(doc);
        }
    })
});

export default router;