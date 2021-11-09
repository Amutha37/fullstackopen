const dummy = () => {
  return 1
}

const TotalLikes = (blogs) => {
  return blogs.reduce((totalLikes, current) => totalLikes + current.likes, 0)
}

module.exports = {
  dummy,
  TotalLikes,
}
