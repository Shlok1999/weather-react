const mongoose = require('mongoose')
const Schema = mongoose.Schema

const temperatureSchema = new Schema({
    date:{type: String, required: true},
    min_temp: {type: Number, required: true},
    max_temp: {type: Number, required: true}
})

const TempData = mongoose.model('TempData', temperatureSchema)
module.exports = TempData