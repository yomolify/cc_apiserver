var Router = require('express')
var User = require('../models/userModel')
var httpCodes = require('../helpers/httpCodesHelper')
var pgErrors = require('../helpers/pgErrorHelper')
var respond = require('../helpers/responseHelper')
var bcrypt = require('../helpers/bcryptHelper')
var jwt = require('../helpers/jwtHelper')

function login (req, res, next) {
  var email = req.body.email
  var password = req.body.password
  var user = new User({email: email})

  return user.fetch().then(function (user) {
    if (!user) {
      return next(httpCodes('unauthorized'))
    }

    var hash = user.get('password')

    bcrypt.comparePasswordHash(password, hash)
    .then(function () {
      return jwt.sign(user.toJSON()).then(function(token) {
        res.locals.data = {
          token: token
        }

        respond.sendSuccess(res)
      })
    }).catch(function () {
      return next(httpCodes('unauthorized'))
    })
  }).catch(function (err) {
    return next(httpCodes('serverError'))
  })
}

function logout (req, res, next) {

}

function validateToken (req, res, next) {
  if (!req.decodedToken) {
    return next(httpCodes('unauthorized'))
  }

  return next(httpCodes('ok'))
}

function reissueToken (req, res, next) {

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
      // this uses User#serialize to prepare user object for response
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
auth.get('/validate', validateToken)

export {auth}