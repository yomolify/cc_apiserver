var Slot = require('../models/slotModel')
var mailgun = require('../helpers/emailHelper')
var httpCodes = require('../helpers/httpCodesHelper')
var respond = require('../helpers/responseHelper')

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

      var slotData = slot.toJSON()
      res.locals.data = slotData
      respond.sendSuccess(res)
      sendEmail(req.decodedToken, slotData)
    })
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
    text: JSON.stringify(slot)
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  })
}

router.post('/', authenticate, create)
router.get('/:id', authenticate, view)
router.delete('/:id', cancel)

module.exports = router