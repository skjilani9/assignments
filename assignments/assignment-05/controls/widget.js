const widget = require("../modles/widget.json");


exports.getwidiges = (req,res)=>{
    const result = widget

    res.status(200).json({
        success:true,
        message:"widget find successfully",
        result
    })
}