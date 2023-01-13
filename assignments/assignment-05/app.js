const express = require("express");

const body = require("body-parser");

const router = require("./routes/router");

const hostname = "localhost";

const port = 8000;

const app = express();

app.use(body.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})


app.use('/',router);
app.listen(port,hostname,()=>{
    console.log(`server is starting on http://${hostname}:${port}`);
})


