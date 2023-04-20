import React from 'react'
// import PropTypes from 'prop-types'
// Button component
const Button = ({
  handleBtn,
  addLikes,
  deleteBlogList,
  blog,
  logedUser,
  showDetails,
  blogUserName,
  // props
}) => {
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  const moreDetailBtn = (
    <div className='btn_blog  togglableContent'>
      <button
        className='count'
        type='button'
        onClick={addLikes}
        value={blog.id}
      >
        +Likes
      </button>
      {blogUserName === logedUser && (
        <button
          className='delBlog'
          type='button'
          onClick={deleteBlogList}
          value={blog.id}
        >
          Remove
        </button>
      )}
    </div>
  )
  return (
    <>
      <button
        id='moreHideBtn'
        style={
          showDetails
            ? { color: 'black', fontWeight: 'bold' }
            : { color: 'blue', fontWeight: 'bold' }
        }
        type='button'
        onClick={handleBtn}
      >
        {buttonLabel}
      </button>
      {showDetails && moreDetailBtn}
    </>
  )
}
export default Button
