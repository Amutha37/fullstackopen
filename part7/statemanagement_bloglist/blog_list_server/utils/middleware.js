const logger = require('./logger')
const jwt = require('jsonwebtoken')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  // console.log("Header:  ", request.headers);
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'validationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token',
    })
  } else if (error.name === 'Inavalid Token') {
    return response.status(401).json({
      error: 'token expired',
    })
  }
  logger.error(error.message)
  next(error)
}

const tokenExtractor = async (request, response, next) => {
  const authorization = request.get('authorization')

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null
  }
  try {
    const decodedToken = await jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken) {
      return response.status(401).json({ error: 'token missing or invalid' })
    } else {
      request.userDecodedToken = decodedToken
    }
  } catch (error) {
    request.userDecodedToken = null
  }

  next()
}

const userExtractor = async (request, response, next) => {
  const authorization = request.get('authorization')

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null
  }
  try {
    const userToken = await jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !userToken) {
      return response.status(401).json({ error: 'token missing or invalid' })
    } else {
      request.user = userToken.id
    }
  } catch (error) {
    request.user = null
  }

  next()
}
// token

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
}
