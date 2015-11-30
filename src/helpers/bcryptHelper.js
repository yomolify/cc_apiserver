var bcrypt = require('bcrypt');
var Promise = require('bluebird');

function genPasswordHash (password) {
  return new Promise(function (resolve, reject){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
          return reject(err)
        }
        return resolve(hash)
      });
    });
  })
}

// Load hash from your password DB.
function comparePasswordHash (password, hash) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(password, hash, function(err, res) {
      if (err) {
        return reject(err)
      }
      if (!res) {
        return reject()
      }
      return resolve(hash)
    });
  });
}

module.exports = {
  genPasswordHash: genPasswordHash,
  comparePasswordHash: comparePasswordHash
}