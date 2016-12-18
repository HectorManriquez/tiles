/**
 * Main routes for rendering react components
 */

import express from 'express';
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(__dirname + "/assets.js");
});

export default router;