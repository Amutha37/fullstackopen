const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// GET ALL blog list
blogsRouter.get('/', async (request, response) => {
  // Blog.find({}).then((blogs) => {
  //   response.json(blogs)
  // })
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })

  response.json(blogs.map((blog) => blog.toJSON()))
})

// token authorization
const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

// pull one record blog
// check for individual id to load from the url to code to filter
blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  // .then((blog) => {
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
  // })
  //     .catch((error) => next(error))
})
// create/add new blog list
blogsRouter.post('/', async (request, response) => {
  const body = request.body

  // token authorization
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  // const user = await User.findById(body.userId)
  // with mongoDB

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.json(savedBlog)
  // blog
  //   .save()
  //   .then((result) => {
  //     response.status(201).json(result)
  //   })
  //   .catch((error) => next(error))
})

// update database
blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  const newLikes = 6
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: newLikes,
    // user: body._id,
  }

  await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog)
    })
    .catch((error) => next(error))
})

// deleting database
blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = blogsRouter
