const mongoose = require("mongoose");



const dataBase =( )=>{
    mongoose.set('strictQuery',false)
    mongoose.connect(process.env.DB_URI,{useUnifiedTopology:false}).then((data) => {
        console.log(`mongodb is connected with :${data.connection.host}`);
    });
};

module.exports = dataBase;



// 