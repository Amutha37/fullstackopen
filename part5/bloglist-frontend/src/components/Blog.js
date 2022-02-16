import React, { useState } from 'react'

const Blog = ({ blog, ind, handleBlogLikes, logedUser, handleDeleteBlog }) => {
  const moreBtn = {
    color: 'blue',
  }
  const hideBtn = {
    color: 'brown',
  }

  const [showDetails, setShowDetails] = useState(false)
  const [blogUserName, setBlogUserName] = useState(`${blog.user.name}`)
  let [likes, setLikes] = useState(blog.likes)
  const showBlogInfo = { display: showDetails ? '' : 'none' }

  const addLikes = ({ target }) => {
    handleBlogLikes(target.value)
    setLikes(++likes)
  }

  // === deleteBlogList ===
  const deleteBlogList = ({ target }) => {
    handleDeleteBlog(target.value)
  }
  //   console.log('blogUserName', blogUserName, logedUser.name)

  if (blogUserName === null) {
    console.log('user', logedUser.name)
    setBlogUserName(logedUser.name)
  }
  return (
    <div className='table_wraper'>
      <ul>
        <div className='first'>
          <li>{ind + 1}.</li>
          <li>{blog.title}</li>
          <li>By : {blog.author}</li>

          <div className='btn_blog'>
            <button
              style={showDetails ? hideBtn : moreBtn}
              type='button'
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide' : 'More...'}
            </button>

            <>
              <button
                className='count'
                type='button'
                onClick={addLikes}
                value={blog.id}
              >
                +Likes
              </button>
              {blog.user.name === logedUser.name && (
                <button
                  className='delBlog'
                  type='button'
                  onClick={deleteBlogList}
                  value={blog.id}
                >
                  Remove
                </button>
              )}
            </>
          </div>
        </div>

        <div style={showBlogInfo} className='second'>
          <ul>
            <li>Url : {blog.url}</li>
            {/* <li>Likes : {blog.likes}</li> */}
            <li>Likes : {likes}</li>
            <li>user : {blogUserName}</li>
          </ul>
          {/* <td>{blog.author}</td>
          <td>{blog.url}</td>
          <td>{blog.likes}</td> */}
        </div>
      </ul>
    </div>
  )
}
export default Blog
