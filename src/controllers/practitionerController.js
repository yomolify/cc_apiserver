var Practitioner = require('../models/practitionerModel')
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

    res.locals.data = data
    respond.sendSuccess(res)
  })
})

module.exports = router

