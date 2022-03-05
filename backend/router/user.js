const router = require('express').Router()

let User = require('../models/user.model')

router.route('/').get((req, res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json(err))
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const confirmPass = req.body.confirmPass;

    const newUser = new User({username, password})

    if(password === confirmPass){
        newUser.save()
        .then(()=> res.json('User added'))
        .catch(err=> res.status(400).json(err))
    }
})

router.route('/login').post(async(req, res)=>{
    //Login Logic
    const {username, password} = req.body

    const usernameID = await User.findOne({
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

module.exports = router