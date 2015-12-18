var Router = require('express').Router

var practitioners = require('./controllers/practitionerController')
var auth = require('./controllers/authController')


var apiV1 = new Router
apiV1.use('/v1/auth', auth)
apiV1.use('/v1/practitioners', practitioners)

export {apiV1}