import express from 'express'
import morgan from 'morgan'
import {apiV1} from './routes'

const app = express()
app.use('/api', apiV1)

const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log(`app listening on ${PORT}`)