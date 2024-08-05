const express = require('express')
require('dotenv').config()  
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const signup =express.Router();      
const userModel = require('../Models/User.model')
const login = express.Router();
    

signup.post('/signup',async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        console.log(req.body);
    
            const name = req.body.name
            const email = req.body.email
            const password =  hashedPassword
                //  await userModel.create(newUser);
         const newUser = new userModel({ name, email, password: password });
         await newUser.save();
         const user=newUser;
         const accessToken = jwt.sign({email:user.email,name:user.name,password:user.password},process.env.ACCESS_TOKEN_SECRET )
        res.status(201).json({message:"Signup successful",accessToken: accessToken});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
        
    }
});
login.post('/login',async (req, res) => {
    const user = await userModel.findOne({email:req.body.email});
   if(user==null){
    return res.status(400).send('Cannot find user');
   }
   try{
    if(await bcrypt.compare(req.body.password,user.password)){
        const accessToken = jwt.sign({email:user.email,name:user.name,password:user.password},process.env.ACCESS_TOKEN_SECRET )
        res.json( {accessToken: accessToken})
    }else{
        res.status(401).send('Wrong Password')
    }
   }catch(err){
    res.status(500).json(user);
    console.log(user)
   }
})
module.exports = {login,signup}