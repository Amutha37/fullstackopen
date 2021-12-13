const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// GET ALL blog list
blogsRouter.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})
// GET ALL blog list
blogsRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})
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

  // with mongoDB

  // if (body.title === undefined) {
  //   return response.status(400).json({ error: 'title missing' })
  // }
  // if (body.url === undefined) {
  //   return response.status(400).json({ error: 'url missing' })
  // }

  const blog = new Blog({
    title: 'Content Management',
    author: 'Andrew Humphries',
    url: 'https://www.paperflite.com/',
    likes: 10,
    // title: body.title,
    // author: body.author,
    // url: body.url,
    // likes: body.likes,
  })

  const saveBlog = await blog.save()
  response.json(saveBlog)
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
