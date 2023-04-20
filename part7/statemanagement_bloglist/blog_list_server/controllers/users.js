const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

// usersRouter.get('/', async (request, response) => {
//   const users = await User.find({}).populate('notes')

//   response.json(users)
// })
usersRouter.get('/', async (request, response) => {
  // const users = await User.find({}).populate('blogs')

  // response.json(users)
  const users = await User.find({}).populate('blogs', {
    title: 1,
    author: 1,
    url: 1,
    likes: 1,
    blogs: 1,
  })
  response.json(users.map((u) => u.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  const body = request.body
  if (!body.username) {
    return response.status(400).json({
      error: '`username` is required',
    })
  } else if (body.username.length < 3) {
    return response
      .status(400)
      .json({ error: 'is shorter than the minimum allowed length (3)' })
  }

  if (!body.password || body.password.length < 3) {
    return response.status(400).json({
      error: !body.password
        ? '`password` is required'
        : '`password` needs to be at least 3 characters long',
    })
  } else if (body.password.length < 5) {
    return response
      .status(400)
      .json({ error: 'Password must be grater than 4' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter
