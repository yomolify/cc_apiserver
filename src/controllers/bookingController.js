var Slot = require('../models/slotModel')
var mailgun = require('../helpers/emailHelper')
var httpCodes = require('../helpers/httpCodesHelper')
var respond = require('../helpers/responseHelper')
var moment = require('moment')

var Router = require('express')

var router = new Router

function authenticate (req, res, next){
  if (!req.decodedToken || !req.decodedToken._id) {
    return next(httpCodes('unauthorized'))
  }
  return next()
}

function create (req, res, next) {
  Slot.findById(req.body._slot).exec(function(err, slot){
    if (err) {
      return next(err)
    }
    if (!slot || !slot.available){
      console.log('padaake')
      return next(httpCodes('notFound'))
    }

    slot._user = req.decodedToken._id
    slot.patient = req.body.patient
    slot.available = false
    slot.save(function(err){
      if (err) {
        return next(httpCodes('serverError'))
      }
      Slot.findById(slot).populate('_practitioner').exec(function (err, slot) {
        var slotData = slot.toJSON()
      res.locals.data = slotData
      respond.sendSuccess(res)
      sendEmail(req.decodedToken, slotData)
      })
    })
  })
}

function edit (req, res, next) {
  Slot.findByIdAndUpdate(req.body._slot, { 'patient.firstName': req.body.firstName, 'patient.lastName': req.body.lastName} ).exec(function(err, slot){
    if (err) {
      return next(err)
    }

    console.log('slot', slot)
    var slotData = slot.toJSON()
      res.locals.data = slotData
      respond.sendSuccess(res)
  })
}

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
  console.log('sending email to %s', user.email)
  var data = {
    from: 'Carecru <me@samples.mailgun.org>',
    to: user.email,
    subject: 'Appointment booked',
    // text: JSON.stringify(slot),
    html: '<html> Appointment with Dr ' + slot._practitioner.FirstName + ' ' + slot._practitioner.LastName + ' has been booked for ' + moment(slot.bookingTime).format("dddd, MMMM Do YYYY [at] h:mm a") + ' in ' + slot._practitioner.Practice.Name + ' at the address: ' + slot._practitioner.Practice.Address + '.</html>'
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  })
}

router.post('/', authenticate, create)
router.put('/', authenticate, edit)
router.get('/:id', authenticate, view)
router.delete('/:id', cancel)

module.exports = router