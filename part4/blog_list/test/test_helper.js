const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'TechCrunch',
    author: 'Michael Arrington',
    url: 'https://techcrunch.com/',
    likes: 4.5,
    _id: '61846696203d0a5c62b64a88',
  },
  {
    title: 'Neil Patel/blog',
    author: 'Neil Patel',
    url: 'https://neilpatel.com/blog/',
    id: '61846a7e203d0a5c62b64a8a',
  },
  {
    title: 'Greatist',
    author: 'Greatist',
    url: 'https://greatist.com/',
    likes: 3,
    _id: '6188503729028f6d04889ad2',
  },
  {
    title: 'tiny buddha',
    author: 'Tiny Buddha',
    url: 'https://tinybuddha.com/',
    likes: 15,
    _id: '61886cbad0598d4f69a8269f',
  },
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((u) => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
}
