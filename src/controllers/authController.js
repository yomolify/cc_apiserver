var Router = require('express')
var User = require('../models/userModel')
var httpCodes = require('../helpers/httpCodesHelper')
var respond = require('../helpers/responseHelper')
var pgErrors = require('../helpers/pgErrorHelper')
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
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var password = req.body.password
  var phone = req.body.phone
  var gender = req.body.gender
  var dob = req.body.dob

  var user = new User({firstName: firstName, lastName: lastName, email: email, password: password, phone: phone, gender: gender, dob: dob})

  user.save(function (err) {
    if (err) {
      console.log(err)
      return next(httpCodes('badRequest'))
    }

    return signAndSendToken(res, user)
  })
}

function view (req, res, next) {
  var user = req.params.id

  User.findById(user, function (err, user) {
    res.locals.data = user;
    console.log('found user', user)
    respond.sendSuccess(res);
  })
}

function edit(req, res, next) {
  var user = req.body.id;
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  // var email = req.body.email
  var phone = req.body.phone
  // var gender = req.body.gender
  var dob = req.body.dob
  console.log(typeof(user))

  User.findByIdAndUpdate(user, {firstName: firstName, lastName: lastName, phone: phone, dob: dob}, function(err, user) {
    if (err) {
      console.log(err)
      return next(httpCodes('serverError'));}
    if (!user) return next(httpCodes('notFound'));
    res.locals.data = user;
    console.log('user', user);
    respond.sendSuccess(res);
  })
}

var auth = new Router
auth.post('/login', login)
auth.post('/signup', signup)
auth.post('/edit', edit)
auth.get('/view/:id', view)

module.exports = auth