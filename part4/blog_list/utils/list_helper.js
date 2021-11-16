let _ = require('lodash');

/* eslint-disable semi */
const dummy = () => {
  return 1;
};
// Total like
const TotalLikes = (blogs) => {
  return blogs.reduce((totalLikes, current) => totalLikes + current.likes, 0);
};

// most likes blog
const FavouriteBlog = (blogs) => {
  let Id = blogs.indexOf(blogs.reduce((p, c) => (p.likes > c.likes ? p : c)));
  return {
    title: blogs[Id].title,
    author: blogs[Id].author,
    likes: blogs[Id].likes,
  };
};

// using LODASH most blogs
const mostBlogs = (blogs) => {
  let countBlogs = _.countBy(blogs, (blog) => blog.author);

  // let valuePair = _.fromPairs([_.maxBy(Object.entries(typeCounts))]);
  let blogPairs = _.maxBy(Object.entries(countBlogs));

  return {
    author: blogPairs[0],
    blogs: blogPairs[1],
  };
};

module.exports = {
  dummy,
  TotalLikes,
  FavouriteBlog,
  mostBlogs,
  // mostLikes,
};
