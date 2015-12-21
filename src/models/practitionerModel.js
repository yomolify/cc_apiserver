var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var practiceSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Neighborhood: {
    type: String
  },
  City: {
    type: String,
    required: true
  }
})


var practitionerSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Specialization: {
    type: String,
    required: true
  },
  Practice: practiceSchema
})

var Practitioner = mongoose.model('Practitioner', practitionerSchema);

module.exports = Practitioner
