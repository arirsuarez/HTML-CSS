const express = require('express')
const app = express()

app.get('*', (req, res) => {
    console.log('Mi primera app Serverless');
    res.send( { mensaje: 'Hola que tul?'})
})

module.exports = app