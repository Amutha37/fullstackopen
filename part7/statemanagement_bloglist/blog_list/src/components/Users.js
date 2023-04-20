import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((state) => state.users)



  return (
    <div>
      <header>
        <h3> Users</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>User Name</th>
            <th>Blogs Created </th>
          </tr>
        </thead>
        {users.map((user, i) => (
          <tbody key={user.id}>
            <tr>
              <td>{i + 1}. </td>
              <td>
                {' '}
                {/* <Link to={`/users/${ user.id }`}> */}
                {/* style="float: right" */}
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>

              <td>{user.blogs.length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default Users
