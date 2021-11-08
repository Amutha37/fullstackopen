const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const express = require('express')

const app = express()
const blogsRouter = require('./controllers/blogs')
const cors = require('cors')
// const Blog = require('./models/blog')

// mongoDB atlas
const mongoose = require('mongoose')
const mongoUrl = config.MONGODB_URI

logger.info('connecting to', mongoUrl)

mongoose
  .connect(mongoUrl)
  .then((result) => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

// error handler
// const errorHandler = (error, request, response, next) => {
//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } else if (error.name === 'validation Error') {
//     return response.status(400).json({ error: error.message })
//   }
//   next(error)
// }

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// const PORT = config.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

module.exports = app
