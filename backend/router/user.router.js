const TemperatureData = require('../models/tempdata.models')
const User = require('../models/user.models')
const router = require('express').Router()

router.route('/').get((req, res)=>{
    console.log('User Login Page')
})
router.route('/signup').get((req, res)=>{
    console.log('User Register page')
})
router.route('/signup').post((req, res)=>{
    const {email, password, confirmPass} = req.body


    if(password===confirmPass){
        const newAdmin = new User({email, password, confirmPass});
        newAdmin.save()
        .then(()=>res.json('New User added'))
        .catch((err)=> res.json(err))
    }
    else{
        res.json("Error")
    }

    
})

router.route('/login').post(async(req, res, err)=>{
    const {email, password} = req.body
    const adminEmail = await Admin.findOne({email:email})
    
    if(adminEmail.password === password){
        res.status(200).json("User logged in")
    }
    else{
        res.status(400).json("Invalid Credentials"+ err)
    }
   
})

router.route('/getData').get(async(req, res)=>{
    const {date, min_temp, max_temp} = req.body
    const DataTemp = await TemperatureData.find({})
    res.json(DataTemp)
})

module.exports = router
