/**
 * Main routes for rendering react components
 */

import express from 'express';
// import Models from '../data/';

const router = express.Router();

//
// React router will handle all front end routes
// -----------------------------------------------------------------------------
router.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

export default router;