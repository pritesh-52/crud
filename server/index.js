const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const app = express();
require("./db/conn");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("",(req,res)=>{
    res.send("Hello");

})

app.listen(8000, () => {
    console.log("Port Start");
})
