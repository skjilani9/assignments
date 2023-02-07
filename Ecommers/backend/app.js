const express = require("express");

const app = express();

const cookiepars = require("cookie-parser");

const bodyparser = require("body-parser")

const upload = require("express-fileupload")

const errmiddleware = require("./middleware/middleware");

const cors = require('cors');



app.use(express.json());

app.use(cookiepars());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());


app.use(cors());


const product = require("./routes/productsroute");
const user = require("./routes/userroute");
const order = require("./routes/orderroutes");



app.use("/api/v1", product);

app.use("/api/v1", user);

app.use("/api/v1", order);

app.use(errmiddleware);

module.exports = app