const express = require("express");
const mongoose = require("mongoose");
const User = require("../db/User");
const Recruiter = require("../db/Recruiter");

const router = express.Router();



router.get("/student", async (req, res) =>{
    let data = await User.find();
    console.log(data)

    res.status(200).json({"data":data});
})

router.get("/recruiter", async (req, res) =>{
    let data = await Recruiter.find();
    console.log(data)

    res.status(200).json({"data":data});
})


module.exports = router;
