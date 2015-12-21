var Router = require('express').Router

var practitioners = require('./controllers/practitionerController')
var bookings = require('./controllers/bookingController')
var auth = require('./controllers/authController')


var apiV1 = new Router
apiV1.use('/v1/auth', auth)
apiV1.use('/v1/practitioners', practitioners)
apiV1.use('/v1/bookings', bookings)

export {apiV1}