const express = require('express');
const multer = require('multer');
const path = require('path');
const JournalRouter = express.Router();
const jwt = require('jsonwebtoken');
const JournalModel= require('../Models/Journal.model')
const Joi= require('joi');

require('dotenv').config();
const schema=Joi.object({
    title:Joi.string().required(),
    content:Joi.string().required(),
    date:Joi.date().required(),
    email:Joi.string(),
    imageUrl:Joi.string().required()
})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
      next()
    })
}


  JournalRouter.get('/api/getalljournal',authenticateToken,async (req, res) => {
    try{
        const journal = await JournalModel.find();
        res.status(200).json(profile);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}`
        })
    }
})

JournalRouter.get('/api/getjournal/:email',authenticateToken,async (req, res) => {
    try{
        const journal = await JournalModel.find({email:req.params.email});
        res.status(200).json(journal);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

JournalRouter.get('/api/getjournalbyid/:id',authenticateToken,async (req, res) => {
    try{
        const journal = await JournalModel.find({_id:req.params.id});
        res.status(200).json(journal);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

JournalRouter.post('/api/addjournal',async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{title,content,date ,email,imageUrl} = req.body;
                const journal = await JournalModel.create({title,content,date,email,imageUrl});
                res.status(201).json(journal);}
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

JournalRouter.patch('/api/updatejournal/:id',authenticateToken,async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {id} = req.params;
        let{title,content,date,email} = req.body;
        const journal = await JournalModel.findOneAndUpdate({_id:id},{title,content,date,email});
        res.status(200).json(journal);}
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

JournalRouter.delete('/api/deletejournal/:id',authenticateToken,async (req, res) => {
    try {
        const {id} = req.params;
        // const filter ={"Id":Number(id)}
        const journal = await JournalModel.findOneAndDelete({_id:id});
        res.status(200).json(journal);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {JournalRouter} 