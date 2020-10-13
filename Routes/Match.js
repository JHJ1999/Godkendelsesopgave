const express = require("express");
const router = express.Router();
const match = require("../Model/Match.js")

router.get("/", (req, res) => {
    res.json(match.match);
});


module.exports = router;
