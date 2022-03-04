const mongoose = require('mongoose')

var Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
