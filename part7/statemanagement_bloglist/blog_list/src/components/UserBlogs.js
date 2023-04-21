import React from 'react'

import { useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'

const UserBlogs = () => {
  const users = useSelector((state) => state.users)

  const matchuser = useMatch('/users/:id')

  const userBlogs = matchuser
    ? users.find((user) => user.id === matchuser.params.id)
    : null

  return (
    <>
      {userBlogs.blogs.length < 1 ? (
        <h3> {userBlogs.name} hasn't added any blog list.</h3>
      ) : (
        <h3> Blog list from {userBlogs.name} </h3>
      )}
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>Blog Title</th>
          </tr>
        </thead>
        {userBlogs.blogs.map((blog, i) => (
          <tbody key={blog.id}>
            <tr>
              <td>{i + 1}. </td>
              <td>{blog.title}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  )
}

export default UserBlogs
