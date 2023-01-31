const express = require("express");

const cors = require('cors');


const app = express();


const cookiepars = require("cookie-parser");

const bodyparser = require("body-parser")

const upload = require("express-fileupload")


const errmiddleware = require("./middleware/middleware");

app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({limit:"50mb", extended:true}));
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     next();
// })

app.use(cookiepars());

app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());



const product = require("./routes/productsroute");
const user = require("./routes/userroute");
const order = require("./routes/orderroutes");



app.use("/api/v1",product);

app.use("/api/v1",user);

app.use("/api/v1",order);

app.use(errmiddleware);


module.exports = app