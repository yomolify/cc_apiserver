var Practitioner = require('../models/practitionerModel')
var Slot = require('../models/slotModel')
var httpCodes = require('../helpers/httpCodesHelper')
var respond = require('../helpers/responseHelper')

var Router = require('express')

var router = new Router

router.get('/', function (req, res) {
  Practitioner
  .find({})
  .exec(function(err, data) {
    data.Time = req.query.time || (new Date).toISOString()
    res.locals.data = {Practitioners: data}
    respond.sendSuccess(res)
  })
})

// return promise which resolves with slot objects
function getSlotsForPrac (pracId) {
  return new Promise(function(resolve, reject){
    Slot.find({
      practitionerId: pracId
    }).exec(function(err, slots){
      return resolve(slots)
    })
  })
}

getSlotsForPrac('56750289fe70532b369537b1')

router.get('/:id', function (req, res, next) {
  Practitioner
  .findById(req.params.id)
  .exec(function (err, data) {
    if (err) {
      return next(httpCodes('badRequest'))
    }

    if (!data) {
      return next(httpCodes('notFound'))
    }

    data = data.toJSON()

    // TODO: remove this hack
    data.selectedpractice = data.FirstName + ' ' + data.LastName
    data.practiceinfo = 'I am a braces expert'
    data.practiceisopen = true

    getSlotsForPrac(data._id).then(function(slots){
      data.Slots = slots
      res.locals.data = data
      respond.sendSuccess(res)
    })
  })
})

module.exports = router

// function onOpen (callback) {
//   Practitioner.find({}).then(function(pracs) {
//     var pracIds = pracs.map(function(prac) {
//       return {
//         practitionerId: prac._id.toString()
//       }
//     })

//     Slot.find({
//       $or: pracIds
//     }).then(function(slots){
//       console.log(slots.length)
//     })
//   })
// }
