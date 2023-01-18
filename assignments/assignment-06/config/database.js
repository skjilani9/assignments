const mongoose = require("mongoose");



const dataBase =( )=>{
    mongoose.set('strictQuery',false)
    mongoose.connect("mongodb://127.0.0.1:27017/assignment",{useUnifiedTopology:false}).then((data) => {
        console.log(`mongodb is connected with :mongodb://127.0.0.1:27017/assignment`);
    });
};

module.exports = dataBase;