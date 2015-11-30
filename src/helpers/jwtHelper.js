var jwt = require('jsonwebtoken')
var Promise = require('bluebird')
var secret = require('../../config.json').jwt_secret

function sign(payload) {
  return new Promise(function (resolve, reject) {
    return jwt.sign(payload, secret, {expiresIn: '1d'}, function (token){
      return resolve(token)
    })
  })
}

function verify(token) {
  return new Promise(function (resolve, reject) {
    return jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return reject()
      }
      return resolve(decoded)
    });
  })
}

function parseToken(req, res, next) {
  var token = req.get('auth-token')
  return verify(token).then(function (decodedToken) {
    req.decodedToken = decodedToken
  }).catch(function() {}).finally(function() {
    return next()
  })
}

module.exports = {
  sign: sign,
  verify: verify,
  parseToken: parseToken
}