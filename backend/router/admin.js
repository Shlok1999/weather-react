const router = require('express').Router()
const { request } = require('express')
const jwt = require('jsonwebtoken')
let Admin = require('../models/admin.model')
const User = require('../models/user.model')

router.route('/').get((req, res)=>{
    Admin.find()
    .then(admins=> res.json(admins))
    .catch(err=> res.status(400).json(err))
})

// const createToken = async()=>{
//   const token =  await jwt.sign({_id: "62224dbdfa6fcaa005c9c834"}, "mynameisshlokranjanistudyengineering",{
//       expiresIn: "2000 seconds"
//   })
//   console.log(token)

//   const userVerify = await jwt.verify(token,"mynameisshlokranjanistudyengineering")
//   console.log(userVerify)

// }


// createToken();

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const confirmPass = req.body.confirmPass;

    const newAdmin = new Admin({username, password})

    if(password === confirmPass){
        newAdmin.save()
        .then(()=> res.json('Admin added'))
        .catch(err=> res.status(400).json(err))
    }
    else{
        alert("Passwords dont match")
    }
})

router.route('/login').post(async(req, res)=>{
    //Login Logic
    const {username, password} = req.body

    const usernameID = await Admin.findOne({
        username: username,
    })
    if(usernameID.password === password){
        res.status(201).json(usernameID)
    }
    else{
        res.status(400).json("Wrong credentials")
    }

    // console.log(usernameID)
})

router.route('/adddata', (req, res)=>{
    //Provide temperature data
})

module.exports = router