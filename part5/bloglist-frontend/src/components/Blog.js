import React, { useState } from 'react'
import Buttons from './Buttons'

const Blog = ({ blog, ind, handleBlogLikes, logedUser, handleDeleteBlog }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [blogUserName, setBlogUserName] = useState(blog.user.name)
  let [likes, setLikes] = useState(blog.likes)

  const addLikes = ({ target }) => {
    handleBlogLikes(target.value)
    setLikes(++likes)
  }

  // === deleteBlogList ===
  const deleteBlogList = ({ target }) => {
    handleDeleteBlog(target.value)
  }
  // === Button control ===

  const handleBtn = () => setShowDetails(!showDetails)
  const showBlogInfo = { display: showDetails ? '' : 'none' }

  if (blogUserName === undefined) {
    setBlogUserName(logedUser)
  }

  return (
    <>
      <div className='table_wraper blog'>
        <ul>
          <div>
            <li>{ind + 1}.</li>
            <li className='title'>Title : {blog.title}</li>
            <li className='author'>By : {blog.author}</li>

            <div style={showBlogInfo} className='blogAll'>
              <li>Url : {blog.url}</li>
              <li id='likesCount'>Likes : {likes}</li>
              <li>user : {blogUserName}</li>
            </div>
          </div>
        </ul>
        <div className='btn_blog'>
          <Buttons
            handleBtn={handleBtn}
            addLikes={addLikes}
            deleteBlogList={deleteBlogList}
            blog={blog}
            logedUser={logedUser}
            showDetails={showDetails}
            blogUserName={blogUserName}
          />
        </div>
      </div>
    </>
  )
}
export default Blog
