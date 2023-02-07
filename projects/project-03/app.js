const express = require("express");

const dataBase = require("./config/database");

const router = require('./routes/routes')

const host = "localhost"

const port = 5000

const app = express();

app.use(express.urlencoded({extended:true}))

app.use(express.json());


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use("/" , router);


dataBase();


app.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`)
});  