const express = require("express");
const { createorder, singleorder, myorder, allorders, updateorder, deleteOrder } = require("../control/ordercontrol");
const { isauthicate, authorizeRoles } = require("../middleware/athu");






const router = express.Router();



router.route("/order/new").post(isauthicate,createorder);

router.route("/order/:id").get(isauthicate,authorizeRoles("admin"),singleorder);

router.route("/orders/me").get(isauthicate,myorder);

router.route("/admin/orders").get(isauthicate,authorizeRoles("admin"),allorders);

router.route("/admin/order/:id").put(isauthicate,authorizeRoles("admin"),updateorder);

router.route("/admin/order/:id").delete(isauthicate,authorizeRoles("admin"),deleteOrder);




module.exports = router;