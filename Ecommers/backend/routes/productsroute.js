const express = require("express");
const { getAllproducts, createproduct, updateproducts, deleteproduct, singleproduct, reviewscreate, getproductreview, deletereviews } = require("../control/productcontrol");
const { isauthicate, authorizeRoles} = require("../middleware/athu");



const router = express.Router();

router.route("/products").get(getAllproducts);


router.route("/products/new").post(isauthicate,authorizeRoles("admin") , createproduct);


router.route("/products/:id").put(isauthicate,authorizeRoles("admin") , updateproducts);


router.route("/products/:id").delete(isauthicate ,authorizeRoles("admin") , deleteproduct);



router.route("/products/:id").get(singleproduct);

router.route("/reviews").put(isauthicate,reviewscreate);


router.route("/review/:id").get(getproductreview);


router.route("/review").delete(isauthicate,deletereviews);

module.exports = router