import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs }) => {
  if (!blogs) return null

  return (
    <div>
      <header>
        <h2>List of blogs</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>User Name</th>
            <th>Blog </th>
            <th>By</th>
            <th> View More</th>

            <th>Url</th>
            <th>Likes</th>
            <th>Delete</th>
          </tr>
        </thead>
        {blogs.map((blog, i) => (
          <Blog key={blog.id} blog={blog} seq={i} />
        ))}
      </table>
    </div>
  )
}

export default BlogList
