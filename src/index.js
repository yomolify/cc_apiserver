var express = require('express')
var morgan = require('morgan')
import {apiV1} from './routes'
var bodyParser = require('body-parser')
var response = require('./helpers/responseHelper')
var jwt = require('./helpers/jwtHelper')
require('./helpers/mongodbHelper')

var app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/api', jwt.parseToken)

app.get('/cancel', function(req, res) {
  return res.sendStatus(200)
})
app.get('/loadInfo', function(req, res) {
  return res.sendStatus(200)
})
app.get('/newPatientForm', function(req, res) {
  return res.sendStatus(200)
})
app.get('/returningPatientForm', function(req, res) {
  return res.sendStatus(200)
})
app.get('/sendSelectedTime/:time', function(req, res) {
  console.log('s', req.params.time)
  return res.json(req.params.time)
})
app.post('/sendSelectedTime/:time', function(req, res) {
  console.log('s', req.params.time)
  return res.json(req.params.time)
})

app.use('/api', apiV1)

app.use(response.catchErrors)

var PORT = process.env.CC_USER_API_PORT || 3030
app.listen(PORT)
console.log(`app listening on ${PORT}`)