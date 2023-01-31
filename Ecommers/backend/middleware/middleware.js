const Errorhand =  require("../utllies/errorhand")



module.exports = (err,req,res,next)=>{
    err.message = err.message || "internal server problem";
    err.statuscode = err.statuscode || 500;



    //unvalid id
    if(err.name ==="CastError"){
        const message = `resources not valid: ${err.path}`;
        err = new Errorhand(message,400);
    }


    if(err.code === 11000){
        const message =`Dupilicate ${Object.keys(err.keyvalue)} enterted`;
        err = new Errorhand(message,400);
    }

    // if(err.name === "jsonwebtoken"){
    //     const message =``;
    //     err = new Errorhand(message,400);
    // }


    if(err.name === "tokenExpireerror"){
        const message =`token is expire try again`;
        err = new Errorhand(message,400);
    }


    res.status(err.statuscode).json({
        success:false,
        message:err.message,
    });
};


