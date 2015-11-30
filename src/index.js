var express = require('express')
var morgan = require('morgan')
import {apiV1} from './routes'
var bodyParser = require('body-parser')
var response = require('./helpers/responseHelper')
var jwt = require('./helpers/jwtHelper')

var app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/api', jwt.parseToken)

app.use('/api', apiV1)

app.use(response.catchErrors)

var PORT = process.env.PORT || 4000
app.listen(PORT)
console.log(`app listening on ${PORT}`)