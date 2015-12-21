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
    populateSlotsforPracs(data).then(function(data){
      res.locals.data = {Practitioners: data}
      respond.sendSuccess(res)
    })
  })
})

function populateSlotsforPracs(pracs){
  return new Promise(function(resolve, reject) {
    var pracIds = pracs.map(function(prac) {
      return {
        _practitioner: prac._id
      }
    })

    var pracMap = {}
    pracs.forEach(function(prac){
      pracMap[prac._id] = prac.toJSON()
    })

    Slot.find({
      $or: pracIds
    }).exec(function(err, slots){
      if (err) {
        // TODO handle error condition
        console.log(err)
      } else {
        slots.forEach(function(slot){
          pracMap[slot._practitioner].Slots.push(slot.toJSON())
        })
      }
      resolve(Object.keys(pracMap).map(function(id){
        return pracMap[id]
      }))
    })
  })
}

// return promise which resolves with slot objects
function getSlotsForPrac (pracId) {
  return new Promise(function(resolve, reject){
    Slot.find({
      _practitioner: pracId
    }).exec(function(err, slots){
      console.log(err)
      return resolve(slots)
    })
  })
}

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
//   })
// }
