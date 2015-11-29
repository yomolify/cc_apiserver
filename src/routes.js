import Router from 'express'
import {auth} from './controllers/authController'

const apiV1 = new Router
apiV1.use('/v1/auth', auth)

export {apiV1}