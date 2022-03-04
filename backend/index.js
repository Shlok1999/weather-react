const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

//Database
const mongoose = require('mongoose')
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log("MongoDB Connected Successfully")
})


const adminRouter = require('./router/admin')
const userRouter = require('./router/user')


app.use('/admin', adminRouter)
app.use('/user', userRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})