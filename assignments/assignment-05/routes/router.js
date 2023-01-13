const express = require("express");
const { getcity } = require("../controls/city");
const { gethotel } = require("../controls/restraunt");
const { getwidiges } = require("../controls/widget");





const router = express.Router();


router.route("/citys").get(getcity);

router.route("/hotels/:city").get(gethotel);

router.route("/widget").get(getwidiges);



module.exports = router;