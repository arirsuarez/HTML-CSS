const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meals = mongoose.model('Meal', new Schema({
    name: String,
    desc: String,
    user_id: String

}))

module.exports = Meals