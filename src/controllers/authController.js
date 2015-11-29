var Router = require('express')
var User = require('../models/userModel')
var httpCodes = require('../helpers/httpCodesHelper')
var pgErrors = require('../helpers/pgErrorHelper')
var respond = require('../helpers/responseHelper')
var bcrypt = require('../helpers/bcryptHelper')

function login (req, res, next) {

}

function logout (req, res, next) {

}

function validateSignupInput (req, res, next) {
  var user = new User

  if (!user.validateEmail(req.body.email)) {
    return next(httpCodes('badRequest', 'invalid email'))
  }

  if (!user.validatePasswordLength(req.body.password)) {
    return next(httpCodes('badRequest', 'password too short'))
  }

  return next()
}

function signup (req, res, next) {
  var email = req.body.email
  var password = req.body.password
  return bcrypt.genPasswordHash(password)
  .then(function (hash) {
    var user = new User({email: email, password: hash})
    return user.save().then(function (user) {
      res.locals.data = user
      return respond.sendSuccess(res)
    }).catch(function (err) {
      if (err.code === pgErrors.KEY_EXISTS) {
        return next(httpCodes('badRequest', 'email already exists'))
      }
      return next(httpCodes('serverError'))
    })
  }).catch(function (err){
    return next(httpCodes('serverError'))
  })
}

const auth = new Router
auth.post('/login', login)
auth.post('/logout', logout)
auth.post('/signup', validateSignupInput, signup)

export {auth}