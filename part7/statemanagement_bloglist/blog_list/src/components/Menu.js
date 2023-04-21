import React from 'react'
import { Routes, Route, Link, useMatch, Navigate } from 'react-router-dom'
import Notification from './Notification'
import Home from './Home'
import EachBlog from './EachBlog'
import UserBlogs from './UserBlogs'
import BlogList from './BlogList'
import BlogFormInput from './BlogFormInput'
import Footer from './Footer'
import Users from './Users'
import LoginForm from './LoginForm'
import LogOut from './LogOut'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  text-decoration: none;
  background: BurlyWood;
  padding: 1em;
`

const Menu = (props) => {
  const blogs = props.blogs
  const blogFormRef = props.blogFormRef

  const notification = useSelector((state) => state.notification)
  const user = useSelector((state) => state.user)

  const matchblog = useMatch('/blogs/:id')

  const blog = matchblog
    ? blogs.find((blog) => blog.id === matchblog.params.id)
    : null

  // const padding = {
  //   padding: 5,
  // }

  return (
    <div id='nav_bar'>
      <Page>
        <Navigation>
          <Link className='link' to='/'>
            Home
          </Link>

          <Link className='link' to='/blogs'>
            Blogs
          </Link>
          <Link className='link' to='/users'>
            Users
          </Link>

          <Link className='link' to='/create'>
            Create
          </Link>
          {user.name ? (
            <em id='log_in'>Logged in : {user.name} </em>
          ) : (
            <Link className='link' to='/login'>
              login
            </Link>
          )}

          {user.name && (
            <Link id='logOut' className='link' to='/logout'>
              LogOut
            </Link>
          )}
        </Navigation>

        {notification && <Notification />}

        <Routes>
          <Route path='/blogs/:id' element={<EachBlog blog={blog} />} />

          <Route
            path='/blogs'
            element={<BlogList blogs={blogs} user={user} />}
          />

          <Route
            path='/users'
            element={user ? <Users /> : <Navigate replace to='/login' />}
          />

          <Route path='/login' element={<LoginForm />} />

          <Route path='/users/:id' element={<UserBlogs />} />

          <Route
            path='/create'
            element={<BlogFormInput blogFormRef={blogFormRef} />}
          />

          <Route path='/logout' element={<LogOut />} />

          <Route path='/' element={<Home />} />
          {user && <Route path='/' element={<Home />} />}
        </Routes>
      </Page>
      <Footer />
    </div>
  )
}
export default Menu
