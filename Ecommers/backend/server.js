const app = require("./app");
const cloud = require("cloudinary");

const dotenv = require("dotenv");

const dataBase = require("./config/database");



// uncaught errors
process.on("uncaughtException", (err) =>{
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to unhandler promise rejection");
    server.close(()=>{
        process.exit(1);
    });
});


dotenv.config({path:"backend/config/config.env"});




dataBase();

cloud.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})



const server = app.listen(process.env.PORT,(err)=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});

// unhandlererrors 

process.on("unhandledRejection", (err) =>{
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to unhandler promise rejection");
    server.close(()=>{
        process.exit(1);
    });
});