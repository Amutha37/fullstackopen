import React from 'react'

const BlogForm = ({
  onSubmit,
  handleChangeTitle,
  handleChangeAuthor,
  handleChangeUrl,
  valTitle,
  valAuthor,
  valUrl,
}) => {
  return (
    <div className='newBlog'>
      <h2>Create a new blog list</h2>

      <form onSubmit={onSubmit} className='blog_list_container'>
        <label>
          Title :
          <input
            type='text'
            value={valTitle}
            name='title'
            placeholder='title'
            onChange={handleChangeTitle}
          />
        </label>
        <label>
          Author :
          <input
            type='text'
            value={valAuthor}
            name='author'
            placeholder='author'
            onChange={handleChangeAuthor}
          />
        </label>
        <label>
          URL :
          <input
            type='text'
            value={valUrl}
            name='url'
            placeholder='web url'
            onChange={handleChangeUrl}
          />
        </label>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default BlogForm
