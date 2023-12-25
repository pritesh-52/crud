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
        const preveruse = await user.findOne({ email: email });
        console.log(preveruse);

        if (preveruse) {
            res.status(404).json("User Already Exists");
        }
        else {
            const adduser = new user({ name, email, age, mobile, work, address, desc });
            const newdata = await adduser.save();
            res.status(201).json(newdata);
        }

    }
    catch (e) {
        res.status(404).json(e);
    }
});
/* Get All Data */
router.get("/getdata", async (req, res) => {
    try {
        const userdata = await user.find();
        res.status(200).send(userdata);
        console.log(userdata);
    }
    catch (e) {
        res.status(404).json(e);
    }
})

/* Get Particulr data */

router.get("/getuser/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getuser = await user.findById(_id);

        if (!getuser) {
            res.status(404).send("Record Not Found");
        }
        else {
            res.status(200).send(getuser);
            console.log(getuser);
        }


    }
    catch (e) {
        res.status(404).send(e);
    }
});

/* Edit Data */

router.patch("/edit/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const editdata=await user.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(200).send(editdata);
    }
    catch(e)
    {
        res.status(404).send(e);
    }

})

/* Delete Data */
 router.delete("/delete/:id",async(req,res)=>{
    try
    {   
        const _id=req.params.id;
        const deletedata=await user.findByIdAndDelete(_id);
        res.status(200).send(deletedata);

    }
    catch(e)
    {
        res.status(404).send(e);
    }

 })

module.exports = router;