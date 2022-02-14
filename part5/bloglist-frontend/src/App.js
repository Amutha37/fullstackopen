import './app.css'
import React, { useState, useEffect, useRef } from 'react'
import Notification from './components/Notification'
import Blog from './components/Blog.js'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [errTextColour, setErrTextColour] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [showing, setShowing] = useState(false)

  const blogFormRef = useRef()

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
  const addBlog = async (blogObject) => {
    // const newBlog = { title, author, url }

    // blogService.create(blogObject).then((returnedBlog) => {
    //   setBlogs(blogs.concat(returnedBlog))
    // })
    blogFormRef.current.toggleVisibility()
    setErrTextColour(false)
    try {
      const saveBlog = await blogService.create(blogObject)

      setBlogs([...blogs, saveBlog])
      setShowing(true)
      setErrorMessage(`Blog '${saveBlog.title}' succesfully saved.`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } catch (error) {
      console.log(error.response.data)
      setErrTextColour(true)
      setShowing(true)
      setErrorMessage(error.response.data)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // === handling loging ===
  const handleLogin = async (loginObject) => {
    try {
      const user = await loginService.login({
        username: loginObject.username,
        password: loginObject.password,
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrTextColour(true)
      setShowing(true)
      setErrorMessage('Wrong user name or password!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // === login form ===

  const loginForm = () => (
    <Togglable buttonLabel='log in'>
      <LoginForm createLogin={handleLogin} />
    </Togglable>
  )

  // === New Blog list form ===
  const blogForm = () => (
    <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
      <BlogForm createBlog={addBlog} signOff={signOff} />
    </Togglable>
  )

  //  === signoff ===
  const signOff = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    return setUser(null)
  }
  // === handleLikes ===
  const handleBlogLikes = async (blogId) => {
    const blogToChange = blogs.find((blog) => blog.id === blogId)

    const updatedBlog = {
      ...blogToChange,
      likes: ++blogToChange.likes,
      user: blogToChange.user.id,
    }
    await blogService.update(blogId, updatedBlog)
  }

  return (
    <>
      {/* <h2></h2> */}
      {showing && (
        <Notification message={errorMessage} textColor={errTextColour} />
      )}

      {/* == conditional form */}
      {user === null ? (
        loginForm()
      ) : (
        <>
          <div className='logInBy'>
            <p>{user.name} logged-in</p>
            <button type='button' onClick={signOff}>
              {' '}
              Log Out
            </button>
          </div>
          {blogForm()}
          <h2>List of blogs</h2>
          {blogs.map((blog, i) => (
            <Blog
              key={blog.id}
              blog={blog}
              ind={i}
              handleBlogLikes={handleBlogLikes}
            />
          ))}
        </>
      )}
    </>
  )
}

export default App
