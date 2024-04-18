const express = require('express')
const app=express()
const {startDatabase,isConnected} = require('./Config/Connection')


app.get('/', (req,res)=>{
    res.send({message:'Welcome to world of Journaling'})
})

app.get('/home', (req, res)=>{
    res.json({message: isConnected()? 'Database is connected' : 'Disconnected from database'})
})

startDatabase()

.then(()=>{
    app.listen(3000, async()=>{
        console.log('Starting Server...')
        console.log('Server started running on port 3000')
    })
})