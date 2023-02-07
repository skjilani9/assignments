const mongoose = require("mongoose");


const validator = require("validator");


const bcrpt = require("bcryptjs");


const token = require("jsonwebtoken")


const crypto = require("crypto");



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"name should not be greater than 30 digits"],
        minLength:[5,"name should not be less than 5 digits"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        validate:[validator.isEmail,"please enter the valid email id"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"password must be greater than 8 digits"],
        select:false,
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role:{
        type : String,
        default:"user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    resetPasswordToken:String,
    resetPasswordExpire: Date 

});


userSchema.pre("save", async function (next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrpt.hash(this.password,10)
});


userSchema.methods.getJWTToken = function(){
    return token.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPRIE,
    });
};


userSchema.methods.comparePassword = async function (password){
    return await bcrpt.compare(password , this.password);
};


userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
};


module.exports = mongoose.model("User", userSchema);