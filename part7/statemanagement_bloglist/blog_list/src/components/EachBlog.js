import React from 'react'
import CommentForm from './CommentForm'

const EachBlog = ({ blog }) => {
  if (!blog) return null
  
  return (
    <div>
      <h4>{blog.title}</h4>
      <div>Added by :{blog.user.name}</div>
      <div id='blo'>
        Likes : <strong>{blog.likes}</strong>
      </div>

      {/* comment option */}
      <CommentForm blog={blog} />
    </div>
  )
}
export default EachBlog
