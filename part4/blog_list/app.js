const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
require('express-async-errors')
const express = require('express')

const app = express()
const blogsRouter = require('./controllers/blogs')
const cors = require('cors')
require('express-async-errors')

// mongoDB atlas
const mongoose = require('mongoose')
const mongoUrl = config.MONGODB_URI

logger.info('connecting to', mongoUrl)

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
