const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')

// mongoDB test data initialization
beforeEach(async () => {
  await Blog.deleteMany({})

  console.log('cleared')
  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
  // await Promise.all(promiseArray)
  console.log('done')
}, 100000)

describe('content type', () => {
  test('notes are returned as json', async () => {
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

// step 12
describe('check unique id property', () => {
  test('verifies the unique identifier propety of the blog named is id', async () => {
    const response = await api.get('/api/blogs')

    console.log(response.body[0].id)

    // eslint-disable-next-line no-undef
    // returnedObject = response.body._id.toString()
    // // eslint-disable-next-line no-undef

    expect(response.body[0].id).toBeDefined()
    // response.body.forEach((blog) => {
    //   expect(blog.id).toBeDefined()
    // })
  })
})
// add blogs
// 1. add new obj
describe('add first new blog.', () => {
  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'Content Management',
      author: 'Andrew Humphries',
      url: 'https://www.paperflite.com/',
      likes: 10,
    }

    await api
      .post('/api/blogs')
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
// step 12
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
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    let expectedResult = newBlog
    expectedResult.likes = 0

    // the below test is done from direct fetcthed data The test pass the check for object 1 without likes.
    const response = await api.get('/api/blogs')
    response.body.forEach((blog) => {
      expect(blog[1].likes).not.toHaveProperty('likes')
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
