const express = require("express");
const router = express.Router();
const interest = require("../Model/Interest.js")


router.get("/", (req, res) => {
    res.json();
});


module.exports = router;