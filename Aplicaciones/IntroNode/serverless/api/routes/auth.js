const express = require('express')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
const { isAuthenticated } = require('../auth')

const router = express.Router()

const signToken = (id) => {
    return jwt.sign({ _id }, 'secret', {
        expiresIn: 60 * 60 * 24 * 365,
    })
}

router.post('/register', (req, res) => { 
   const { email, password } = req.body
   crypto.randomBytes(16, (err, salt) => {
       const newSalt = salt.toString('base64')
       crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) => {
           const encryptedPass = key.toString('base64')
           Users.findOne({ email }).exec()
           .then(user => {
               if (user) {
                   res.send('Usuario Existente')
               }
               Users.create({
                   email,
                   password: encryptedPass,
                   salt: newSalt,
               }).then(() => {
                   res.send('Usuario Creado')
               })
           })
       })
   } )
})

router.post('/login', (req, res) => { 
    const { email, password } = req.body
    Users.findOne({ email }).exec()
    .then(user => {
        if (!user) {
            res.send('Usuario y/o Pass incorrecto')
        }
        crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) => {
          const encryptedPass = key.toString('base64')
          if (user.password === encryptedPass) {
            const token = signToken(user._id)
            return res.send({ token })
          }
          return res.send('Usuario y/o Pass incorrecta')
        })
    })
})

router.get('/me', isAuthenticated, (req, res) => {
    res.send(req.user)
})

module.exports = router