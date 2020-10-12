const express = require("express");
const router = express.Router();
const Users = require("../Model/Users.js")


router.get("/", (req, res) => {
    res.json(Users.myUsers);
});


module.exports = router;