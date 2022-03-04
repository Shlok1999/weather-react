const router = require('express').Router()

let Admin = require('../models/admin.model')

router.route('/').get((req, res)=>{
    Admin.find()
    .then(admins=> res.json(admins))
    .catch(err=> res.status(400).json(err))
})

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
})

module.exports = router