var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  hasInsurance: {
    type: Boolean
  }
})

var bookingSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  _slot: {
    type: Schema.Types.ObjectId,
    ref: 'Slot',
    required: true
  },
  _practitioner: {
    type: Schema.Types.ObjectId,
    ref: 'Practitioner',
    required: true
  },
  bookingTime: {
    type: String,
    required: true
  },
  patient: patientSchema
})

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking
