import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewLikes, deleteCurrentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Blog = ({ blog, seq }) => {
  const user = useSelector((state) => state.user)

  const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()
  if (!blog) return null
  if (!user) return null

  
  let blogUserName = blog.user.name

  if (!blogUserName) {
    blogUserName = user.name
  }

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  // let blogUserName = blog.user.name

  // const logedUser = user.name

  // if (!blogUserName) {
  //   blogUserName = logedUser
  // }

  const handleLike = () => {
    dispatch(updateNewLikes(blog))

    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const handleDelete = () => {
    const sureToDelete = window.confirm(
      `Confirm remove blog you're don't need!  :${blog.title}`
    )

    if (sureToDelete) {
      dispatch(deleteCurrentBlog(blog))
      dispatch(setNotification(`You deleted : '${blog.title}'`, 5))
    }
  }

  return (
    <>
      {/* <div className='table_wraper blog'> */}
      <tbody className='table_wraper blog' key={user.id}>
        <tr>
          <td
          // style={{
          //   width: '7px',
          // }}
          >
            {' '}
            {seq + 1}.{' '}
          </td>

          <td
          // style={{
          //   width: '20px',
          // }}
          >
            {blogUserName}
          </td>
          <td
            style={{
              width: '350px',
            }}
          >
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </td>
          <td>{blog.author}</td>
          <td>
            <button
              id='moreHideBtn'
              style={
                showDetails
                  ? {
                      color: 'white',
                      fontWeight: 'bold',
                      backgroundColor: 'brown',
                    }
                  : { color: 'blue', fontWeight: 'bold' }
              }
              type='button'
              onClick={handleBtn}
            >
              {buttonLabel}
            </button>
          </td>

          {/* show more  } */}
          {/* <div > */}
          {/* <tr> */}
          <td style={showBlogInfo}>
            <a
              style={{
                maxWidth: '180px',
              }}
              href={blog.url}
            >
              {blog.url}
            </a>{' '}
          </td>
          <td style={showBlogInfo}>
            {blog.likes}{' '}
            {/* <Button
              variant='outline-success'
              value={blog.id}
              onClick={handleLike}
            >
              Like
            </Button>{' '} */}
            <button id='like_btn' value={blog.id} onClick={handleLike}>
              Like
            </button>
          </td>

          {blogUserName === user.name && (
            <td style={showBlogInfo}>
              <Button variant='outline-danger' onClick={handleDelete}>
                Delete
              </Button>
              {/* <button
                id='del_btn'
                type='button'

                // value={blog.id}
              >
                Delete
              </button> */}
            </td>
          )}
          {/* </tr> */}
          {/* </div> */}
          {/* <Link to={`/users/${ user.id }`}> */}
          {/* style="float: right" */}
        </tr>
      </tbody>

      {/* <div className='btn_blog togglableContent'>
        <button
          id='moreHideBtn'
          style={
            showDetails
              ? {
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'brown',
                }
              : { color: 'blue', fontWeight: 'bold' }
          }
          type='button'
          onClick={handleBtn}
        >
          {buttonLabel}
        </button>
      </div> */}
      {/* </div> */}
    </>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default Blog
