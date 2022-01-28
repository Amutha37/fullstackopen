import React, { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Blog from './components/Blog'
import blogService from './services/blogs'

import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('Amutha')
  const [password, setPassword] = useState('Amutha')
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  // === login handler ===
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username,
        password,
      })
      // window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      setUser(user)
      blogService.setToken(user.token)

      console.log('logging in with', username, password)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
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
            autoComplete='off'
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

  return (
    <div>
      <h2>Blogs List Collections</h2>
      <Notification message={errorMessage} />

      {/* login form || bloglist*/}
      {!user ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
