import {db} from '../helpers/db'

const User = db.Model.extend({
  tableName: 'user_details'
})