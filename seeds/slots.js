var Practitioner = require('../src/models/practitionerModel')
var Slot = require('../src/models/slotModel')
var moment = require('moment-timezone')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cc_users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', onOpen);

var times = [16, 17, 18, 19, 20, 21, 22, 23]
var days = [3, 4, 5, 8, 9, 10, 11, 12, 15, 16]

function timesToSlots (times) {
  var slots = times.slice(0)
  var returnDays = days.map(function (day) {
    // console.log('returnDays', moment().day(day))
      return slots.map(function(slot) {
        return moment().day(day)
          .hour(slot)
          .minute(0)
          .second(0)
          .millisecond(0)
          .tz('America/Vancouver')
          .toISOString()
    })
  })
  return returnDays;
}

function onOpen (callback) {
  Practitioner.find({}).then(function(pracs) {
    pracs.forEach(function(prac) {
      var pracId = prac._id
      console.log("Making slots for pracId %s", pracId)

      var slots = timesToSlots(times)
      slots.forEach(function(slot) {
        console.log('each slot is', slot)
        Slot.collection.insert(slot.map(function (ind) {
          console.log('each ind is', ind)
            return {
            bookingTime: ind,
            _practitioner: pracId,
            available: true
          }
        }))
      })
    })
  })
}

