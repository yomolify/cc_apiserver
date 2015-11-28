import {db} from '../helpers/db'
import {userDetail} from './userDetailModel'

const User = db.Model.extend({
  tableName: 'users',
  userDetail: function () {
    return this.hasOne(userDetail)
  }
})

export {User}