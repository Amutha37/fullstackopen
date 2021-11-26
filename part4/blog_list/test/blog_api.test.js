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
describe('all blogs', () => {
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

    // expect(response.body[0].id).toBeDefined()
    response.body.forEach((blog) => {
      expect(blog.id).toBeDefined()
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
