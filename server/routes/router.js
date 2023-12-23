const express = require("express");
const router = express.Router();
const user = require("../models/user");


/* Register User */
router.post("/register", async (req, res) => {
    const { name, email, age, mobile, work, address, desc } = req.body;
    if (!name || !email || !age || !mobile || !work || !address || !desc) {
        res.status(404).json("Plz fill the all filed");
    }

    try {
        const preveruse=await user.findOne({email:email});
        console.log(preveruse);

        if(preveruse)
        {
            res.status(404).json("User Already Exists");
        }
        else
        {
            const adduser=new user({name, email, age, mobile, work, address, desc});
            const newdata=await adduser.save();
            res.status(201).json(newdata);
        }

    }
    catch (e) {
        res.status(404).json(e);
    }
});

router.get("/getdata",async(req,res)=>{
    try
    {
        const userdata=await user.find();
        res.status(200).send(userdata);
        console.log(userdata);
    }
    catch(e)
    {
        res.status(404).json(e);
    }
})
module.exports = router;