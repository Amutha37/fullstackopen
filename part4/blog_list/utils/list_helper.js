/* eslint-disable semi */
const dummy = () => {
  return 1;
};

const TotalLikes = (blogs) => {
  return blogs.reduce((totalLikes, current) => totalLikes + current.likes, 0);
};

const FavouriteBlog = (blogs) => {
  const favour = blogs.map((blog) => blog.likes);
  // eslint-disable-next-line no-undef
  const id = favour.indexOf(Math.max(...favour));
  return {
    title: blogs[id].title,
    author: blogs[id].author,
    likes: blogs[id].likes,
  };
};
module.exports = {
  dummy,
  TotalLikes,
  FavouriteBlog,
  // eslint-disable-next-line semi
};
