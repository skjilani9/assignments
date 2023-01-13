const City = require("../modles/city.json");

exports.getcity = (req,res)=>{
    const result = City.map(item=>item.name);

    res.status(200).json({
        success:true,
        message:"citys fetch successfully",
        result
    });
};