import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Notification from './Notification'
import styled from 'styled-components'
import Authors from './Authors'
import Books from './Books'
import NewBook from './AddNewBook'
import Home from './Home'
import Footer from './Footer'
import SampleFlex from './SampleFlex'
import { useSelector } from 'react-redux'

const Page = styled.div`
  padding: 1em;

  background: papayawhip;
`

const Navigation = styled.div`
  text-decoration: none;
  background: BurlyWood;
  padding: 1em;
`

const Menu = () => {
  const notification = useSelector((state) => state.notification)

  return (
    <div id='nav_bar'>
      <Page>
        <Navigation>
          <Link className='link' to='/'>
            Home
          </Link>

          <Link className='link' to='/authors'>
            Authors
          </Link>

          <Link className='link' to='/books'>
            Books
          </Link>
          <Link className='link' to='/create'>
            Add Book
          </Link>
        </Navigation>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/authors' element={<Authors />} />

          <Route path='/books' element={<Books />} />

          <Route path='/create' element={<NewBook />} />
        </Routes>
        {notification && <Notification />}
      </Page>
      <Footer />
      <SampleFlex />
    </div>
  )
}

export default Menu
