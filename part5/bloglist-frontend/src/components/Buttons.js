import React from 'react'

// Button component
const Button = ({
  handleBtn,
  addLikes,
  deleteBlogList,
  blog,
  logedUser,
  showDetails,
  blogUserName,
}) => {
  // const moreBtn = {
  //   color: 'blue',
  // }
  // const hideBtn = {
  //   color: 'black',
  // }
  const moreDetailBtn = (
    <div className='btn_blog'>
      <button
        className='count'
        type='button'
        onClick={addLikes}
        value={blog.id}
      >
        +Likes
      </button>
      {blogUserName === logedUser.name && (
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
        className='hideMore_btn'
        style={
          showDetails
            ? { color: 'black', fontWeight: 'bold' }
            : { color: 'blue', fontWeight: 'bold' }
        }
        type='button'
        onClick={handleBtn}
      >
        {showDetails ? 'Hide' : 'More...'}
      </button>
      {showDetails && moreDetailBtn}
    </>
  )
}
export default Button
