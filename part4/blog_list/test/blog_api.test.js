const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const jwt = require('jsonwebtoken')

const api = supertest(app)

// user password schema
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Blog = require('../models/blog')
// mongoDB test data initialization
//  ==== setTimeOut ====
jest.setTimeout(80000)

//  ===== global token =====
let globalToken

// describe('when there is initially some notes saved', () => {
beforeEach(async () => {
  await User.deleteMany({})

  let passwordHash = await bcrypt.hash('Tokenpass', 10)

  const user = new User({
    username: 'Token',
    passwordHash,
  })

  await user.save()

  const response = await api
    .post('/api/login')
    .send({ username: 'Token', password: 'Tokenpass' })
  globalToken = `Bearer ${response.body.token}`

  await Blog.deleteMany({})

  blogs = helper.initialBlogs.map(
    (blog) => new Blog({ ...blog, user: user.id })
  )
  await Blog.insertMany(blogs)
})

describe('When there is initially some blogs', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

// step 1
describe('return corrent amount of blogs', () => {
  test('return the correct amount of blogs post', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })
})

// step 2
describe('check unique id property', () => {
  test('verifies the unique identifier propety of the blog named is id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
  })
})
// add blogs
// 1. add new obj
describe('add first new blog', () => {
  test('a valid blog can be added', async () => {
    // new blog

    const newBlog = {
      title: 'Content Management',
      author: 'Matt',
      url: 'https://www.paperflite.com/',
      likes: 12,
    }
    await api
      .post('/api/blogs')
      .set('Authorization', globalToken)
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const contents = blogsAtEnd.map((r) => r.title)
    expect(contents).toContain('Content Management')
  })
})

// Test missing like and set default 0
// step 11
describe('Likes property missing from request', () => {
  test('If likes propery is missing set default the vote to be 0', async () => {
    const newBlog = {
      title: 'My Garden',
      author: 'Michael Cooke',
      url: 'https://www.michaelcooke.com.au/blog',
    }

    expect(newBlog).not.toHaveProperty('likes')

    await api
      .post('/api/blogs')
      .set('Authorization', globalToken)
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    const addedBlog = blogsAtEnd[blogsAtEnd.length - 1]
    expect(addedBlog.likes).toBe(0)
  })
})

// Test for new data if the title and url properties missing respond with 400 bad request
// step 12
describe('Title and url missing should response with 400 Bad Request', () => {
  test('Fails with status 400 if data invalid', async () => {
    const newTestBlog = {
      author: 'Michael Cooke',
      likes: 10,
    }
    await api
      .post('/api/blogs')
      .set('Authorization', globalToken)
      .send(newTestBlog)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
  })
})
// test for updating  likes for blog post
describe('update individual blog', () => {
  test('a likes can be updated', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToUpdate = blogsAtStart[0]

    const newLikes = 6
    const blog = {
      ...blogToUpdate,
      likes: newLikes,
    }

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .set('Authorization', globalToken)
      .send(blog)
      .expect(200)

    const blogsAfterUpdate = await helper.blogsInDb()

    expect(blogsAfterUpdate[0].likes).toBe(blog.likes)
  })
})
//  test for removing individual blog
describe('deleting a blog', () => {
  test('succeeds deleting with status code 204', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    const deleteBlog = await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('Authorization', globalToken)
    expect(deleteBlog.status).toBe(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

    const id = blogsAtEnd.map((r) => r.id)

    expect(id).not.toContain(blogToDelete.id)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
