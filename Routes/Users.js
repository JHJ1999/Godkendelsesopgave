const express = require("express");
const router = express.Router();


router.get("/users", (req, res) => {
    res.send("hello get");
});


module.exports = router;
