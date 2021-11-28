var express = require("express");
var router = express.Router();
const phones = require('../phones.json')

router.get("/:id", function (req, res, next) {

    const phoneId = parseInt(req.params.id);
    const phone = phones.find(x => x.id === phoneId);

    console.log(typeof (req.params.id));
    setTimeout(() => res.json(phone), process.env.PHONES_RESPONSE_DELAY || 0)

});

module.exports = router;