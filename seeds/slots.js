var Practitioner = require('../src/models/practitionerModel')
var Slot = require('../src/models/slotModel')
var moment = require('moment-timezone')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cc_users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', onOpen);

var times = [9, 10, 11, 12, 13, 14, 15, 16]

function timesToSlots (times) {
  var slots = times.slice(0)
  return slots.map(function(slot) {
    return moment()
      .hour(slot)
      .minute(0)
      .second(0)
      .millisecond(0)
      .tz('America/Vancouver')
      .toISOString()
  })
}

function onOpen (callback) {
  Practitioner.find({}).then(function(pracs) {
    pracs.forEach(function(prac) {
      var pracId = prac._id
      console.log("Making slots for pracId %s", pracId)

      var slots = timesToSlots(times)
      Slot.collection.insert(slots.map(function(slot){
        return {
          bookingTime: slot,
          _practitioner: pracId,
          available: true
        }
      }))
    })
  })
}

