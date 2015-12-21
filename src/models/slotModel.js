var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  hasInsurance: {
    type: Boolean
  }
})

var slotSchema = new Schema({
  bookingTime: {
    type: String,
    required: true
  },
  _practitioner: {
    type: Schema.Types.ObjectId,
    ref: 'Practitioner',
    required: true
  },
  patient: patientSchema,
  available: {
    type: Boolean,
    required: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})


var Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot
