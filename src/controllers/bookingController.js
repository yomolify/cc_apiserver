var Slot = require('../models/slotModel')

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
      return next(httpCodes('notFound'))
    }

    slot._user = req.decodedToken._id
    slot.patient = req.body.patient
    slot.available = false
    slot.save(function(err){
      if (err) {
        return next(httpCodes('serverError'))
      }

      res.locals.data = slot.toJSON()
      respond.sendSuccess(res)
    })
  })
}

router.post('/', authenticate, create)

module.exports = router