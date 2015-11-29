import {db} from '../helpers/db'
import {userDetail} from './userDetailModel'

var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

var User

module.exports = User = db.Model.extend({
  tableName: 'users',
  userDetail: function () {
    return this.hasOne(userDetail)
  },

  hasTimestamps: true,

  validateEmail: function (email) {
    if (!email) {
      return false
    }
    if (!emailRegex.test(email)) {
      return false
    }
    return true
  },

  validatePasswordLength: function (newPassword) {
    if (!newPassword) {
      return false
    }
    if (newPassword.length < 8) {
      return false
    }
    return true
  }
})
