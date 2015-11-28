import Router from 'express'
import _ from 'lodash'
import {login, logout, signup} from './controllers/authController'

const auth = new Router
auth.post('/login', login)
auth.post('/logout', logout)
auth.post('/signup', signup)

const apiV1 = new Router
apiV1.use('/v1/auth', auth)

export {apiV1}