var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slotSchema = new Schema({
  bookingTime: {
    type: String,
    required: true
  },
  practitionerId: {
    type: String,
    required: true
  }
})


var Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot
