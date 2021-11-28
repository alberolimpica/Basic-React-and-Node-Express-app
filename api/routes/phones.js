var express = require("express");
var router = express.Router();
const phones = require('../phones.json')

router.get("/", function (req, res, next) {
    //res.send("This is where you will get your phones!");
    setTimeout(() => res.json(phones), process.env.PHONES_RESPONSE_DELAY || 0)
});

module.exports = router;