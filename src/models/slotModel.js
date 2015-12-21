var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slotSchema = new Schema({
  bookingTime: {
    type: String,
    required: true
  },
  _practitioner: {
    type: Schema.Types.ObjectId,
    ref: 'Practitioner',
    required: true
  }
})


var Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot
