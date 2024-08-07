const express = require('express');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../config/generateToken');
const { options } = require('../routes/userRoutes');
const signupUser = asyncHandler(async (req,res) => {
    const {name,username,password,pic} = req.body;
    if(!name || !username || !password)
    {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
     
    const userExits = await User.findOne({username});
    if(userExits)
    {
        res.status(400);
        throw new Error("User already Exists");
    }

    const user = await User.create({name,username,password,pic});
    if(user)
    {
        res.status(201).json({_id:user._id,name:user.name,username:user.username,pic:user.pic,token:generateToken(user._id)});
    }
    else
    {
        res.status(400);
        throw new Error("failed to create an user");
    }
})

const signinUser = asyncHandler(async (req,res) => {
    const {username, password} = req.body;
    if(!username || !password)
    {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const userExits = await User.findOne({username});
    if(userExits && userExits.matchPassword(password))
    {
        res.status(201).json({_id:userExits._id,name:userExits.name,username:userExits.username,pic:userExits.pic,token:generateToken(userExits._id)});
    }
    else
    {
        res.status(400);
        throw new Error("Wrong credentials entered");
    }
})

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { username : { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  });

module.exports = {signupUser,signinUser,allUsers};
