const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
// GET ALL blog list
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map((blog) => blog.toJSON()))
})
// pull one record blog
// check for individual id to load from the url to code to filter
blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})
// create/add new blog list
blogsRouter.post('/', async (request, response) => {
  const userToken = request.user
  const user = await User.findById(userToken)
  // with mongoDB
  if (!request.body.title || !request.body.url) {
    return response.status(400).json({
      error: '`title and url` is required',
    })
  }
  const blog = new Blog({
    // title: body.title,
    // author: body.author,
    // url: body.url,
    // likes: body.likes,
    ...request.body,
    user: user.id,
  })
  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog.id)
  await user.save()
  response.json(savedBlog)
})

// update database
blogsRouter.put('/:id', async (request, response, next) => {
  const user = request.user

  //   const { body } = request
  //   const user = body.user
  try {
    const blog = await Blog.findById(request.params.id)

    if (blog.user.toString() === user.toString()) {
      const blogUpdate = {
        ...request.body,
        // ...body,
      }

      await Blog.findByIdAndUpdate(request.params.id, blogUpdate, { new: true })
      response.status(200).end()
    }
  } catch (error) {
    next(error)
  }
})
// deleting database
blogsRouter.delete('/:id', async (request, response, next) => {
  const user = request.user
  try {
    const blog = await Blog.findById(request.params.id)
    if (blog.user.toString() === user.toString()) {
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } else {
      return response.status(401).json({ error: 'Unauthorized' })
    }
  } catch (error) {
    next(error)
  }
  // next(error)
})
module.exports = blogsRouter
