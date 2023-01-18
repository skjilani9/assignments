const express = require("express");
const { createproduct, getproduct, filterpage } = require("../Control/control");





const router = express.Router();

router.route("/product").post(createproduct);

router.route("/get").get(getproduct);

router.route("/filter").post(filterpage);


module.exports = router;