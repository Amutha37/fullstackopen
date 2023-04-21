import './app.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { allUsers } from './reducers/usersReducer'

import { useDispatch, useSelector } from 'react-redux'

import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import Menu from './components/Menu'

function App() {
  const dispatch = useDispatch()

  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    dispatch(allUsers())
    // === sorting data ===
  }, [dispatch])

  // from store
  const user = useSelector((state) => state.user)
  let blogs = useSelector((state) => state.blogs)

  blogs = blogs.slice().sort((a, b) => b.likes - a.likes)

  return (
    <div className='main_container'>
      {user === null && (
        <Togglable buttonLabel='Log In'>
          <LoginForm />
        </Togglable>
      )}
      {user && (
        <Menu blogs={blogs} logedUser={user} blogFormRef={blogFormRef} />
      )}
    </div>
  )
}

export default App
