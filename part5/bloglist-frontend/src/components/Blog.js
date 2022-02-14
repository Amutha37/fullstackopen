import React, { useState } from 'react'
const Blog = ({ blog, ind }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showText, setShowText] = useState('show')
  // const [status, setStatus] = useState(
  //   new Array(filteredList.length).fill(false)
  // )
  // const hideBlogInfo = { display: loginVisible ? 'none' : '' }
  const showBlogInfo = { display: showDetails ? '' : 'none' }

  // displayDetails = (e) => {
  //   setShowDetails(!showDetails)
  // }

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
                More
              </button>
            ) : (
              <button
                type='button'
                onClick={() => setShowDetails(!showDetails)}
              >
                Hide
              </button>
            )}

            {/* <button type='button' onClick={() => setShowDetails(!showDetails)}>
              Show
            </button> */}
          </div>
        </div>

        <div style={showBlogInfo} className='second'>
          <ul>
            <li>Url : {blog.url}</li>
            <li>Likes : {blog.likes}</li>
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
