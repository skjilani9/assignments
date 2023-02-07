const Errorhand = require("../utllies/errorhand");
const asyncerror = require("./asyncerror");
const jwt = require("jsonwebtoken");
const user = require("../modules/usermodules")





exports.isauthicate = asyncerror(async(req,res,next)=>{
    const  {token}  = req.cookies;
    console.log(token)
    if(!token) {
      return next(new Errorhand("please login to view the product",401));
      
    }
    
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await user.findById(decodedData.id);

    next();
});



exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new Errorhand(
            `Role: ${req.user.role} is not allowed to access this resouce `,
            403
          )
        );
      }
  
      next();
    };
  };