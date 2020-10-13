const express = require("express");
const router = express.Router();
const image = require("../Model/Image.js")

router.get("/", (req, res) => {
    res.json(image.qrfreeUser)
});


module.exports = router;