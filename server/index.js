const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const path=require("path");

const app = express();
require("./db/conn");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(router);


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname,'client','build')))
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    res.send("Hello Pritesh");
})
app.listen(8000, () => {
    console.log("Port Start");
})
