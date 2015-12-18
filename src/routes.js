import Router from 'express'
import {auth} from './controllers/authController'

var practitioners = require('./controllers/practitionerController')


const apiV1 = new Router
apiV1.use('/v1/auth', auth)
apiV1.use('/v1/practitioners', practitioners)

export {apiV1}