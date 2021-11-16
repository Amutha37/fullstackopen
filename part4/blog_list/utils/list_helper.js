let _ = require('lodash');

/* eslint-disable semi */
const dummy = () => {
  return 1;
};
// Total like
const TotalLikes = (blogs) => {
Console.log(’Total-likes :’,sumBlogs(blogs.likes);
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
  let typeCounts = _.countBy(blogs, (blog) => blog.author);

  let valuePair = [_.maxBy(Object.entries(typeCounts))];
  console.log(valuePair);
Object.entries(valuePair){
  return {
    author: ‘${key}’,
    blogs_Count: ‘${value}
  };
}
};

module.exports = {
  dummy,
  TotalLikes,
  FavouriteBlog,
  mostBlogs,
};
