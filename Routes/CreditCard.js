const express = require("express");
const router = express.Router();
const creditCard = require("../Model/CreditCard.js");

router.get("/", (req, res) => {
    res.json(creditCard.creditCard1);
});

module.exports = router;