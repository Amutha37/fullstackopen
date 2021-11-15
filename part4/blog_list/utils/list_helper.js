/* eslint-disable semi */
const dummy = () => {
  return 1;
};

const TotalLikes = (blogs) => {
  return blogs.reduce((totalLikes, current) => totalLikes + current.likes, 0);
};

const FavouriteBlog = (blogs) => {
  let Id = blogs.indexOf(blogs.reduce((p, c) => (p.likes > c.likes ? p : c)));
  return {
    title: blogs[Id].title,
    author: blogs[Id].author,
    likes: blogs[Id].likes,
  };
};

module.exports = {
  dummy,
  TotalLikes,
  FavouriteBlog,
  // eslint-disable-next-line semi
};
