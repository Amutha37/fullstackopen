const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

// user password schema
const bcrypt = require('bcrypt')
const User = require('../models/user')

//  ==== setTimeOut ====
jest.setTimeout(80000)
beforeEach(async () => {
  await User.deleteMany({})

  const passwordHash = await bcrypt.hash('sekret', 10)
  const user = new User({ username: 'root', passwordHash })
  await user.save()
})

//  ==== USER TEST
describe('getting users', () => {
  test('users are returned as json', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('gets all users', async () => {
    const response = await api.get('/api/users')
    expect(response.body).toHaveLength(1)
  })

  test('getting users doesnt return password/passwordHash', async () => {
    const response = await api.get('/api/users')
    const properties = Object.keys(response.body[0])

    expect(properties).not.toContain('password')
    expect(properties).not.toContain('passwordHash')
  })
})

describe('creation of new user', () => {
  test('creation succeds with status 200', async () => {
    const newUser = {
      username: 'AMutha',
      name: 'Amutha M',
      password: 'narracan',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()

    expect(usersAtEnd).toHaveLength(2)
  })

  test('fails if username missing w/ 400 and is required ', async () => {
    const newUser = {
      name: 'Superuser',
      password: '1234',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` is required')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(1)
  })

  test('fails if username isnt long enough w/ 400 and is shorter', async () => {
    const newUser = {
      username: 'ab',
      name: 'Abcde',
      password: 'ad2333',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain(
      'is shorter than the minimum allowed length (3)'
    )

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(1)
  })

  //   test('fails if username is taken w/ 400 and to be unique', async () => {
  //     const newUser = {
  //       username: 'root',
  //       name: 'Superuser',
  //       password: '12345',
  //     }

  //     const result = await api
  //       .post('/api/users')
  //       .send(newUser)
  //       .expect(400)
  //       .expect('Content-Type', /application\/json/)

  //     expect(result.body.error).toContain('`username` already exist.')

  //     const usersAtEnd = await helper.usersInDb()
  //     expect(usersAtEnd).toHaveLength(1)
  //   })

  test('fails if password missing w/ 400 and is required', async () => {
    const newUser = {
      username: 'superuser',
      name: 'Superuser',
      password: '',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`password` is required')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(1)
  })

  test(`fails if password isn't long enough w/ 400 and is shorter'`, async () => {
    const newUser = {
      username: 'MongoDb',
      name: 'MongoDbAtlas',
      password: 'a',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain(
      '`password` needs to be at least 3 characters long'
    )

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(1)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
