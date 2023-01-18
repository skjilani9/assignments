const mongoose = require("mongoose");

const hotel = new mongoose.Schema({
    _id:{
        type:Number,
        required:[true,"please enter the id"]
    },
    name:{
        type:String,
        required:[true ,"please enter the name"]
    },
    cityname:{
        type:String,
        required:[true,"please enter the cityname"]
    },
    city:{
        type:Number,
        required:[true,"please enter city number"]
    },
    area:{
        type:Number,
        required:[true,"please enter the area code"]
    },
    locality:{
        type:String,
        required:[true ,"please enter the locality"]
    },
    thumb:{
        type:String,
        required:[true,"please enter the thumb"]
    },
    cost:{
        type:Number,
        required:[true ,"please enter the cost"]
    },
    address:{
        type:String,
        required:[true,"please enter the address"]
    },
    type:[{
        mealtype:{
            type:Number,
            required:[true,"please enter the mealtype"]
        },
        name:{
            type:String,
            required:[true,"please enter the name"]
        }
    }],
    Cuisine:[{
        cuisine:{
            type:Number,
            required:[true,"please enter the cuisine"]
        },
        name:{
            type:String,
            required:[true,"please enter the name"]
        }
    }],
});

module.exports = mongoose.model("hotels",hotel);
