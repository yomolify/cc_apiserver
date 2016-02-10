var Slot = require('../models/slotModel')
var mailgun = require('../helpers/emailHelper')
var httpCodes = require('../helpers/httpCodesHelper')
var respond = require('../helpers/responseHelper')
var moment = require('moment')
var Path = require('path')
var Fs = require('fs')
var email = Fs.readFileSync('./src/mailHtml/action.html', 'utf8');
var Router = require('express')

var router = new Router

function authenticate (req, res, next){
  if (!req.decodedToken || !req.decodedToken._id) {
    return next(httpCodes('unauthorized'))
  }
  return next()
}

function create (req, res, next) {
  var time = req.body._slot;
  var practitioner = req.body._practitioner;
  var user = req.decodedToken._id;
  Slot.create({bookingTime: time, _practitioner: practitioner, available: false, _user: user}, function(err, slot) {
    if (err) {
      console.log(err)
    }
    Slot.findById(slot._id).populate('_practitioner').populate('_user').exec(function (err, slot) {
    var slotData = slot.toJSON()
    res.locals.data = slotData
    respond.sendSuccess(res)
    sendEmail(req.decodedToken, slotData)
    })
  })
}
  // Slot.findById(req.body._slot).exec(function(err, slot){
  //   if (err) {
  //     return next(err)
  //   }
  //   if (!slot || !slot.available){
  //     console.log('slot is ', slot)
  //     console.log('padaake')
  //     return next(httpCodes('notFound'))
  //   }

  //   slot._user = req.decodedToken._id
  //   // slot.patient = req.body.patient
  //   slot.available = false
  //   slot.save(function(err){
  //     if (err) {
  //       return next(httpCodes('serverError'))
  //     }
  //     Slot.findById(slot).populate('_practitioner').populate('_user').exec(function (err, slot) {
  //     var slotData = slot.toJSON()
  //     res.locals.data = slotData
  //     respond.sendSuccess(res)
  //     sendEmail(req.decodedToken, slotData)
  //     })
  //   })
  // })

// function edit (req, res, next) {
//   Slot.findById(req.body._slot).exec(function(err, slot){
//     if (err) {
//       return next(err)
//     }

//     console.log('slot', slot)
//     slot.patient.firstName = req.body.firstName;
//     slot.patient.lastName = req.body.lastName;
//     slot.save(function(err, slot) {
//       var slotData = slot.toJSON()
//       res.locals.data = slotData
//       respond.sendSuccess(res)
//     })
//   })
// }

function view(req, res, next) {
  var user = req.params.id;
  var toReturn = [];
  Slot.find({available: false}).populate('_practitioner').exec(function(err, slots) {
    slots.forEach(function(slot) {
      if (slot._user.toString() === user.toString()) {
        toReturn.push(slot);
      }
    })
    res.locals.data = toReturn;
    respond.sendSuccess(res);
  })
}

function cancel(req, res, next) {
  var slotId = req.params.id
  Slot.findByIdAndUpdate(slotId, {$set: { available: true, _user: null}}).exec(function(err, slot) {
    res.locals.data = slot;
    respond.sendSuccess(res);
  })
}

function sendEmail(user, slot){
  var name = user.firstName;
  var nameemail = email.replace("Name", name)
  var doc = 'Dr ' + slot._practitioner.FirstName + ' ' + slot._practitioner.LastName
  var docemail = nameemail.replace("Doctor", doc)
  var time = moment(slot.bookingTime).subtract(8, 'hours').format("dddd, MMMM Do YYYY [at] h:mm a")
  var timeemail = docemail.replace("Time", time)
  var clinic = slot._practitioner.Practice.Name
  var clinicemail = timeemail.replace("Clinic", clinic)
  var location =  slot._practitioner.Practice.Address
  var locationemail = clinicemail.replace("Location", location)

  console.log('sending email to %s', user.email)
  var data = {
    from: 'Carecru <me@samples.mailgun.org>',
    to: user.email,
    subject: 'Appointment booked',
    // text: JSON.stringify(slot),
    // html: '<html> Appointment with Dr ' + slot._practitioner.FirstName + ' ' + slot._practitioner.LastName + ' has been booked for ' + moment(slot.bookingTime).format("dddd, MMMM Do YYYY [at] h:mm a") + ' in ' + slot._practitioner.Practice.Name + ' at the address: ' + slot._practitioner.Practice.Address + '.</html>'
    html: locationemail
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  })
}

router.post('/', authenticate, create)
// router.put('/', authenticate, edit)
router.get('/:id', authenticate, view)
router.delete('/:id', cancel)

module.exports = router