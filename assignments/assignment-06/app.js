const express = require("express");

const mongoose = require("mongoose");

const body = require("body-parser");

const router = require("./Routes/routes");

const dataBase = require("./config/database");

const host ="localhost";

const port = 8055;

const app = express();
app.use(body.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/',router);

dataBase();

app.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`)
});