import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react'
import Blog from './Blog'

describe('Blog component tests', () => {
  let blog = {
    title:
      'HOW CAN YOU TELL IF THE COMPANY YOU’RE INTERVIEWING WITH IS ROTTEN ON THE INSIDE?',
    author: 'Charity Majors Blog',
    url: 'https://charity.wtf/',
    likes: 3,
    user: {
      username: 'Dell',
      name: 'Amutha M',
      id: '61f7379ebf40302ea7ef16ce',
    },
    id: '61f9ba4fde00fa3403f2bc65',
  }

  // testing dislay title and author
  // 5.13: Blog list tests, step1
  test('display title and author on default', () => {
    const { container } = render(<Blog blog={blog} />)

    const div = container.querySelector('.blog')
    expect(div).toBeDefined()
    expect(div).toBeVisible()
    expect(div).toHaveTextContent(`${blog.title}`)
    expect(div).toHaveTextContent(`${blog.author}`)
  })

  // TESTING BUTTONS
  // 5.14: Blog list tests, step2

  test('click on More... button to see more infomation', () => {
    const { container } = render(<Blog blog={blog} />)

    const moreInfo = screen.getByText('More...')
    fireEvent.click(moreInfo)

    const allInfo = container.querySelector('.blogAll')
    expect(allInfo).toBeVisible()
    expect(allInfo).toHaveTextContent(`${blog.url}`)
    expect(allInfo).toHaveTextContent(`${blog.likes}`)
  })

  //  Test clicking like buttons 2 times and count 2
  // 5.15: Blog list tests, step3
  test('click like button twice and likes will plus two', () => {
    const mockHandler = jest.fn()

    const { container } = render(
      <Blog blog={blog} handleBlogLikes={mockHandler} />
    )

    const moreInfo = screen.getByText('More...')
    fireEvent.click(moreInfo)

    const allInfo = container.querySelector('.blogAll')
    expect(allInfo).toBeVisible()

    const likeButton = screen.getByText('+Likes')
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})
