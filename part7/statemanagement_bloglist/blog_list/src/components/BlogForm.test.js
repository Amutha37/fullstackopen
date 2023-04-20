import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

// 5.16: Blog list tests, step4

describe('New blog component tests', () => {
  test('Create a new blog check if the event handler receive the props', () => {
    const createBlog = jest.fn()

    const { container } = render(<BlogForm createBlog={createBlog} />)

    const title = container.querySelector('#title')
    const author = container.querySelector('#author')
    const url = container.querySelector('#url')

    const form = container.querySelector('form')

    fireEvent.change(title, {
      target: { value: 'Test to see a blog is created.' },
    })
    fireEvent.change(author, {
      target: { value: 'Amutha Muhunthan' },
    })
    fireEvent.change(url, {
      target: { value: 'https://charity.wtf/' },
    })

    fireEvent.submit(form)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].title).toBe(
      'Test to see a blog is created.'
    )
    expect(createBlog.mock.calls[0][0].author).toBe('Amutha Muhunthan')
    expect(createBlog.mock.calls[0][0].url).toBe('https://charity.wtf/')
  })
})
