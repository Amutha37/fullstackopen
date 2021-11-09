const listHelper = require('../utils/list_helper')

describe('dummy data', () => {
  test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '61846696203d0a5c62b64a88',
      title: 'TechCrunch',
      author: 'Michael Arrington',
      url: 'https://techcrunch.com/',
      likes: 5,
      __v: 0,
    },
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.TotalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  const listMoreBlogs = [
    {
      _id: '61846a7e203d0a5c62b64a8a',
      title: 'Neil Patel/blog',
      author: 'Neil Patel',
      url: 'https://neilpatel.com/blog/',
      likes: 4,
      __v: 0,
    },
  ]

  test('when list has only two blog, equals the likes of that', () => {
    const result = listHelper.TotalLikes(listMoreBlogs)
    expect(result).toBe(4)
  })
})
