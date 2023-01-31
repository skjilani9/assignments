const Errorhand = require("../utllies/errorhand");

const asyncerror = require("../middleware/asyncerror");


const User = require("../modules/usermodules");


const sendtoken = require("../utllies/secssiontime");

const sendEmail = require("../utllies/sendmail");

const crypto = require("crypto");

const cloud = require("cloudinary")

const cloudinar = cloud.v2

// register user
exports.registeruser = asyncerror(async (req, res, next) => {

  const file = req.body.avatar;
  

  const mycloud = await cloudinar.uploader.upload(file, {
  
    upload_preset:"avatar",
    overwrite:true,
    invalidate:true,
    resource_type:"auto",
    width:300,
    crop:"scale",
  },(error)=>{

    if(error){
      console.log(error)
    }
  });

  const { name, email, password } = req.body;


  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });
  

  sendtoken(user, 201, res);
});

// login in user
exports.loginuser = asyncerror(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Errorhand("please enter the email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Errorhand("please enter valid email or password", 401));
  }

  const passwordMatch = await user.comparePassword(password);

  if (!passwordMatch) {
    return next(new Errorhand("please enter valid email or password", 401));
  }
  sendtoken(user, 200, res);
})



// logout user
exports.logout = asyncerror(async (req, res, next) => {

  res.cookie("token", null, {
    expries: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logout successfully",
  });
});




// forgot password


exports.forgotPassword = asyncerror(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new Errorhand("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new Errorhand(error.message, 500));
  };
});




// reset password
exports.resetPassword = asyncerror(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new Errorhand(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new Errorhand("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendtoken(user, 200, res);
});




// about me
exports.getuserdata = asyncerror(async (req, res, next) => {

  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});



// update password

exports.updatepassword = asyncerror(async (req, res, next) => {

  const user = await User.findById(req.user.id).select("+password");

  const passwordMatch = await user.comparePassword(req.body.oldpassword);

  if (!passwordMatch) {
    return next(new Errorhand("oldpassword is incorrect ", 401));
  }

  if (req.body.newpassword !== req.body.confirmPassword) {
    return next(new Errorhand("password  is mismatch ", 401));
  }

  user.password = req.body.newpassword;


  await user.save();


  sendtoken(user, 200, res);

});

// update profile

exports.updateprofile = asyncerror(async (req, res, next) => {

  const newdata = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newdata, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });

});




// get all users (admin)
exports.getallusers = asyncerror(async (req, res, next) => {

  const users = await User.find();

  res.status(200).json({
    success: true,
    users
  });
});




// get user data (admin)
exports.getsingleuser = asyncerror(async (req, res, next) => {
  const user = await User.findById(req.params.id);


  if (!user) {
    return next(new Errorhand(`user is not exits with this id:${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    user
  });
});


// update user profile(admin)
exports.updateuserprofile = asyncerror(async (req, res, next) => {

  const newdata = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newdata, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!user) {
    return next(new Errorhand(`user is not found with this id:${req.params.id}`, 404))
  }

  res.status(200).json({
    success: true,
  });

});




// delete profile(admin)
exports.deleteuserprofile = asyncerror(async (req, res, next) => {

  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new Errorhand(`user is not found with this id:${req.params.id}`, 404));
  }


  await user.remove();

  res.status(200).json({
    success: true,
  });

});