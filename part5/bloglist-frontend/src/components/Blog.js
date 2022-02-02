import React from 'react'
const Blog = ({ blog, ind }) => (
  <>
    <tr>
      <td>{ind + 1}</td>
      <td>{blog.title}</td>
      <td>{blog.author}</td>
      <td>{blog.url}</td>
      <td>{blog.likes}</td>
    </tr>

    {/* <p>
      {blog.title} {blog.author}{' '}
    </p> */}
  </>
)

export default Blog
