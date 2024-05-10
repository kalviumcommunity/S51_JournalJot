const express = require('express');
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const jwt = require('jsonwebtoken');
const profileModel= require('../Models/Profile.model')
const Joi= require('joi');
require('dotenv').config();

const schema=Joi.object({
    Profilename:Joi.string().required(),
    Nickname:Joi.string().required(),
    Hobbies:Joi.string().required(),
    Description:Joi.string().required()
})

const authenticationToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.spit(' ')[1]
        if(token==null) return res.sendStatus(401)
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
                    if(err) return res.sendStatus(403)
                    next()
                })
}

getRouter.get('/api/getallprofile',authenticationToken,async (req, res) => {
    try{
        const profile = await profileModel.find();
        res.status(200).json(profile);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}`
        })
    }
})

getRouter.get('/api/getprofile/:id',authenticationToken,async (req, res) => {
    try{
        const profile = await profileModel.findone({Id:req.params.id});
        res.status(200).json(profile);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

postRouter.post('/api/addprofile',authenticationToken,async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{Profilename,Nickname,Hobbies,Description} = req.body;
                const profile = await profileModel.create({Profilename,Nickname,Hobbies,Description});
                res.status(201).json(profile);}
                else {
                    return res.status(400).send({
                        message: `Bad request, error:${error}`
                    })
                    console.error(error)
                }
            } catch(err){
                console.log(err);
                return res.status(500).send({
                    message: "Internal server error"
                })
            }
            
        
})

putRouter.patch('/api/updateprofile/:id',authenticationToken,async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        let{Profilename,Nickname,Hobbies,Description} = req.body;
        const profile = await profileModel.findOneAndUpdate(filter,{Profilename,Nickname,Hobbies,Description});
        res.status(200).json(profile);}
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

deleteRouter.delete('/api/deleteprofile/:id',authenticationToken,async (req, res) => {
    try {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        const profile = await profileModel.findOneAndDelete(filter);
        res.status(200).json(profile);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {getRouter, postRouter, deleteRouter, putRouter} 