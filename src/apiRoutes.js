/**
 * API routes for interacting with the database
 */

import express from 'express';
const router = express.Router();

router.get("/", function(req, res) {
    // res.sendFile(__dirname + "/public/index.html");
    res.send('API Routes');
});

export default router;