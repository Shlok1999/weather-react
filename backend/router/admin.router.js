const Admin = require('../models/admin.models')
const TemperatureData = require('../models/tempdata.models')
const router = require('express').Router()



//SIGNUP
router.route('/signup').get((req, res)=>{
    console.log('Admin Register page')
})
router.route('/signup').post((req, res)=>{
    const {email, password, confirmPass} = req.body


    if(password===confirmPass){
        const newAdmin = new Admin({email, password, confirmPass});
        newAdmin.save()
        .then(()=>res.json('New Admin added'))
        .catch((err)=> res.json(err))
    }
    else{
        res.json("Error")
    }

    
})

//LOGIN
let loggedin = false;
router.route('/login').post(async(req, res, err)=>{
    const {email, password} = req.body
    const adminEmail = await Admin.findOne({email:email})
    
    if(adminEmail.password === password){
        res.status(200).json("Admin logged in")
    }
    else{
        res.status(400).json("Invalid Credentials"+ err)
    }
   
})
router.route('/').get((req, res)=>{
    console.log('Admin Login Page')
})

router.route('/addTempData').post((req, res)=>{
    const {date, min_temp, max_temp} = req.body
    const tempData = new TemperatureData({date, min_temp, max_temp})
    tempData.save()
    .then(()=> res.json("Temperature data saved"))
    .catch((err)=> res.json(err))
})


module.exports = router