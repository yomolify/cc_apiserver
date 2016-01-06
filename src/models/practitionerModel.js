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
  },
  Slogan: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Services: {
    type: [String],
    required: true
  },
  InsuranceProviders: {
    type: [String],
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
    // Needs to be updated in next sprint.
    // Should read:
    //    type: [String]
    type: String,
    required: true
  },
  PersonalStatement:{
    type: String,
    required: true
  },
  Education: {
    type: String,
    required: true
  },
  Languages: {
    type: [String],
    required: true
  },
  Practice: practiceSchema,
  Slots:[{
    type: Schema.Types.ObjectId,
    ref: 'Slot'
  }]
})

var Practitioner = mongoose.model('Practitioner', practitionerSchema);

module.exports = Practitioner
