const Hotel = require("../modles/product.json");



exports.gethotel = (req,res)=>{

    const hotel = req.params.city;

    const result = Hotel.filter(item =>item.city_name===hotel);

    res.status(200).json({
        success:true,
        message:"restarant with city name are",
        result
    })
}