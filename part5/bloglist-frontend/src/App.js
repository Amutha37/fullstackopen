import './app.css'
import React, { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Blog from './components/Blog.js'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [errTextColour, setErrTextColour] = useState(true)
  const [blogs, setBlogs] = useState([])

  // == new blog list local state ===
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])
  // Handle the first loading page with user loged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  // === Add new blog list ===
  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
      // likes: 18,
    }
    setErrTextColour(false)
    blogService
      .create(blogObject)
      .then((returnedBlog) => {
        setBlogs(blogs.concat(returnedBlog))
        setTitle('')
        setUrl('')
        setAuthor('')
        setErrorMessage(`Blog '${blogObject.title}' succesfully saved.`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch((error) => {
        console.log(error.response.data)
        setErrTextColour(true)
        setErrorMessage(error.response.data)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  // === New Blog list form ===
  const blogForm = () => (
    <form onSubmit={addBlog} className='blog_list_container'>
      {/* <label>
    Name:
    <input type="text" name="name" />
  </label> */}
      <label>Title : </label>
      <input
        type='text'
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <label>Author : </label>
      <input
        type='text'
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />

      <label>URL : </label>
      <input
        type='text'
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />

      <button type='submit'>Save</button>
    </form>
  )
  // === handling loging ===
  const handleLogin = async (event) => {
    event.preventDefault()
    // console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrTextColour(true)
      setErrorMessage('Wrong user name or password!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // === login form ===

  const loginForm = () => (
    <div className='login_form_container'>
      <form className='login_form' onSubmit={handleLogin}>
        <div>
          username
          <input
            required
            autoComplete='off'
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            required
            autoComplete='on'
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )

  //  === signoff ===
  const signOff = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    return setUser(null)
  }
  return (
    <div className='main_container'>
      <h2>List of blogs collections</h2>
      <Notification message={errorMessage} textColor={errTextColour} />

      {/* == conditional form */}
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>{' '}
          <button type='button' onClick={signOff}>
            {' '}
            Log Out
          </button>
          <h3> Title Author</h3>
          {blogForm()}
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
