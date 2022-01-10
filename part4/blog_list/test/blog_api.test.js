const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')

// user password schema
const bcrypt = require('bcrypt')
const User = require('../models/user')

// mongoDB test data initialization
beforeEach(async () => {
  await Blog.deleteMany({})

  console.log('cleared')
  // for (let blog of helper.initialBlogs) {
  //   let blogObject = new Blog(blog)
  //   await blogObject.save()
  // }
  // using insert
  // await Blog.insertMany(helper.initialBlogs)
  // using all promise
  const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog))
  const promiseArray = blogObjects.map((blog) => blog.save())
  await Promise.all(promiseArray)
  console.log('done')
}, 100000)

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
describe('add first new blog', () => {
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
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    let expectedResult = newBlog
    expectedResult.likes = 0

    // the below test is done from direct fetcthed data The test pass the check for object 1 without likes.
    // const response = await api.get('/api/blogs')
    // response.body.forEach((blog) => {
    //   expect(blog[1]).not.toHaveProperty('likes')
    // })
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

    await api.post('/api/blogs').send(newTestBlog).expect(400)
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
  })
})

//  test for removing individual blog
describe('deleting a blog', () => {
  test('succeeds deleting with status code 204', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]
    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

    const id = blogsAtEnd.map((r) => r.id)

    expect(id).not.toContain(blogToDelete.id)
  })
})

// test for updating  likes for blog post
describe('update individual blog', () => {
  test('a likes can be updated', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToUpdate = blogsAtStart[0]

    const newLikes = 6
    const blog = {
      title: blogToUpdate.title,
      author: blogToUpdate.author,
      url: blogToUpdate.url,
      likes: newLikes,
    }

    await api.put(`/api/blogs/${blogToUpdate.id}`).send(blog).expect(200)
  })
})
// USER ADMIN
//  Test blogs for user password authentication

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'AMutha',
      name: 'Amutha Muhunthan',
      password: 'narracan',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map((u) => u.username)
    expect(usernames).toContain(newUser.username)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
