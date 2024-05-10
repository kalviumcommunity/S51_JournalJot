const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const {login,signup} = require('./Routes/Authserver')
const { startDatabase, isConnected } = require('./Config/Connection');
const {getRouter, postRouter, deleteRouter, putRouter} = require('./Routes/Profile.route')
const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use('/',login)
app.use('/',signup)

app.get('/', (req, res) => {
  res.send({message:'Welcome to the amazing world of Journal'})
})
app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  })
  })
app.get('/ping',(req,res)=>{
    res.send({message:'pong!, Welcome to the amazing world of Journaling'})
})

startDatabase()
.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})
})
