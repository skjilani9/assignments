const express = require("express");
const { registeruser, loginuser, logout, forgotPassword, resetPassword, getuserdata, updatepassword, updateprofile, getallusers, getsingleuser, updateuserprofile, deleteuserprofile } = require("../control/usercontrol");
const { isauthicate, authorizeRoles ,} = require("../middleware/athu");

const router = express.Router();



router.route("/register").post(registeruser);


router.route("/login").post(loginuser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);


router.route("/logout").get(logout);


router.route("/me").get( isauthicate, getuserdata);


router.route("/password/update").put(isauthicate ,updatepassword);


router.route("/me/update").put(isauthicate,updateprofile);


router.route("/admin/users").get(isauthicate,authorizeRoles("admin"),getallusers);


router.route("/admin/user/:id").get(isauthicate,authorizeRoles("admin"),getsingleuser);


router.route("/admin/user/update/:id").put(isauthicate,authorizeRoles("admin"),updateuserprofile);


router.route("/admin/user/delete/:id").delete(isauthicate,authorizeRoles("admin"),deleteuserprofile);

module.exports = router;


