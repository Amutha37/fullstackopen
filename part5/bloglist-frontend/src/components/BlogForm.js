import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  // == new blog list local state ===
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  // === handle change ===
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  }
  const handleChangeUrl = (event) => {
    setUrl(event.target.value)
  }

  // === add blog ===

  const addBlog = (e) => {
    e.preventDefault()

    createBlog({
      title,
      author,
      url,
    })

    setTitle('')
    setUrl('')
    setAuthor('')
  }

  return (
    <div className='newBlog'>
      <h2>Create a new blog list</h2>
      <form onSubmit={addBlog}>
        <label>
          Title
          <input
            type='text'
            value={title}
            id='title'
            placeholder='title'
            onChange={handleChangeTitle}
          />
        </label>
        <label>
          Author
          <input
            type='text'
            value={author}
            id='author'
            placeholder='author'
            onChange={handleChangeAuthor}
          />
        </label>
        <label>
          URL
          <input
            type='text'
            value={url}
            id='url'
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
