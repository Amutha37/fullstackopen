import React, { useState } from 'react'
// import Blog from './components/RateLikes.js'

const Blog = ({ blog, ind, handleBlogLikes }) => {
  const [showDetails, setShowDetails] = useState(false)
  let [likes, setLikes] = useState(blog.likes)
  const showBlogInfo = { display: showDetails ? '' : 'none' }

  const addLikes = ({ target }) => {
    handleBlogLikes(target.value)
    setLikes(++likes)
    // blog.likes = blog.likes + likes
  }
  return (
    <div className='table_wraper'>
      <ul>
        <div className='first'>
          <li>{ind + 1}.</li>
          <li>{blog.title}</li>
          <li>By : {blog.author}</li>

          <div className='btn_blog'>
            {!showDetails ? (
              <button
                type='button'
                onClick={() => setShowDetails(!showDetails)}
              >
                More...
              </button>
            ) : (
              <>
                <button
                  type='button'
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Hide
                </button>
                <button
                  className='count'
                  type='button'
                  onClick={addLikes}
                  value={blog.id}
                >
                  +Likes
                </button>
              </>
            )}
          </div>
        </div>

        <div style={showBlogInfo} className='second'>
          <ul>
            <li>Url : {blog.url}</li>
            <li>Likes : {likes}</li>
            <li>user : {blog.user.name}</li>
          </ul>
        </div>
      </ul>
    </div>
  )
}

export default Blog
