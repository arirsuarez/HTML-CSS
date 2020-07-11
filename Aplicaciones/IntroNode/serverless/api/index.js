const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

const Users = mongoose.model('User', new mongoose.Schema({ name: String }))

Users.create({ name: 'Andy Hull'})
Users.create({ name: 'Franco Orellana'})
Users.create({ name: 'Mercedes'})
Users.create({ name: 'Ari'})
Users.create({ name: 'Pablo'})
Users.create({ name: 'Fede MOreno'})

app.get('*', (req, res) => {
    Users.find()
    .then(x => res.send(x))
})

module.exports = app

// Contraseña MOngoDB: 1Dqiq5csMA608pne

// "mongodb+srv://lenttimaster:1Dqiq5csMA608pne@lentti-db.pku37.mongodb.net/<dbname>?retryWrites=true&w=majority"