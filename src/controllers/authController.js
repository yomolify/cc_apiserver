var Router = require('express')
var User = require('../models/mongo_userModel')
var httpCodes = require('../helpers/httpCodesHelper')
var pgErrors = require('../helpers/pgErrorHelper')
var respond = require('../helpers/responseHelper')
var bcrypt = require('../helpers/bcryptHelper')
var jwt = require('../helpers/jwtHelper')

function login (req, res, next) {
  var email = req.body.email
  var password = req.body.password
  User.findOne({email: email}, function(err, user) {
    if (err) return next(httpCodes('serverError'));
    if (!user) return next(httpCodes('notFound'));
    user.comparePassword(password, function (err, isMatch) {
      if (err) return next(httpCodes('serverError'));
      if (!isMatch) {
        return next(httpCodes('unauthorized'));
      }
      return signAndSendToken(res, user)
    })
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

function signAndSendToken(res, user) {
  jwt.sign(user.toJSON()).then(function(token) {
    res.locals.data = {
      token: token
    }

    respond.sendSuccess(res)
  })
}

function signup (req, res, next) {
  var email = req.body.email
  var password = req.body.password

  var user = new User({email: email, password: password})

  user.save(function (err) {
    if (err) {
      return next(httpCodes('badRequest'))
    }

    return signAndSendToken(res, user)
  })
}

const auth = new Router
auth.post('/login', login)
auth.post('/logout', logout)
auth.post('/signup', signup)
auth.get('/validate', validateToken)

export {auth}