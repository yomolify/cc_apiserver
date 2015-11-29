var Router = require('express')
var User = require('../models/userModel')
var httpCodes = require('../helpers/httpCodesHelper')
var pgErrors = require('../helpers/pgErrorHelper')
var respond = require('../helpers/responseHelper')

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
  var user = new User({email: email})
  user.save().then(function (user) {

  }).catch(function (err) {
    if (err.code === pgErrors.KEY_EXISTS) {
      return next(httpCodes('badRequest', 'email already exists'))
    }
    return next(httpCodes('serverError'))
  })
}

const auth = new Router
auth.post('/login', login)
auth.post('/logout', logout)
auth.post('/signup', validateSignupInput, signup)

export {auth}