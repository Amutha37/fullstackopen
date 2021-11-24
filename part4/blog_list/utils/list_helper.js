let _ = require('lodash')

/* eslint-disable semi */
const dummy = () => {
  return 1
}
// Total like
const TotalLikes = (blogs) => {
  return blogs.reduce((totalLikes, current) => totalLikes + current.likes, 0)
}

// most likes blog
const FavouriteBlog = (blogs) => {
  let Id = blogs.indexOf(blogs.reduce((p, c) => (p.likes > c.likes ? p : c)))
  return {
    title: blogs[Id].title,
    author: blogs[Id].author,
    likes: blogs[Id].likes,
  }
}

// using LODASH most blogs
const mostBlogs = (blogs) => {
  let countBlogs = _.countBy(blogs, (blog) => blog.author)

  // let valuePair = _.fromPairs([_.maxBy(Object.entries(typeCounts))]);
  let blogPairs = _.maxBy(Object.entries(countBlogs))

  return {
    author: blogPairs[0],
    blogs: blogPairs[1],
  }
}
// most likes

const mostLikes = (blogs) => {
  let newObj = _.map(blogs, (o) => _.pick(o, ['author', 'likes']))
  let summalikes = _(newObj)
    .map('author')
    .uniq()
    .map(function (key) {
      var user = _(newObj).filter({
        author: key,
      })
      return {
        author: key,
        likes: user.sumBy('likes'),
        // gender: user.get('[0]').gender
      }
    })
    .value()
  let sumaLikes = _.maxBy(summalikes, 'likes')
  console.log('sumaLikes', sumaLikes)
  return {
    author: sumaLikes.author,
    likes: sumaLikes.likes,
  }
}

module.exports = {
  dummy,
  TotalLikes,
  FavouriteBlog,
  mostBlogs,
  mostLikes,
}
