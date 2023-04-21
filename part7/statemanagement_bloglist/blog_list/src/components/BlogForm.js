import React from 'react'
import { useField } from '../hooks'

import { createBlogInfo } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid Chocolate;
  border-radius: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`
const TomatoButton = styled(Button)`
  background: tomato;
`

const BlogForm = ({ togglableRef }) => {
  // const title = useField('text')
  // const author = useField('text')
  // const url = useField('text')
  // const reset = useField('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    togglableRef.current.toggleVisibility()

    const newBlogInfo = {
      title: title.value,
      author: author.value,
      url: url.value,
    }
    dispatch(createBlogInfo(newBlogInfo))
    dispatch(
      setNotification(`Added new blog link to list : ${newBlogInfo.title}`, 5)
    )

    resetTitle()
    resetAuthor()
    resetUrl()
    navigate('/blogs')
  }

  const handleReset = (e) => {
    e.preventDefault()
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  return (
    <div>
      <h2>Create A New Blog List</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Tittle :
          <Input label='title' {...title} />
        </div>
        <div>
          Author :
          <Input label='author' {...author} />
        </div>
        <div>
          URL :
          <Input label='url' {...url} />
        </div>
        <Button>Create </Button>
        <TomatoButton Click={handleReset}>Reset</TomatoButton>
      </form>
    </div>
  )
}

export default BlogForm
