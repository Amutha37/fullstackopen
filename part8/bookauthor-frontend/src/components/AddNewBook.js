import { useState } from 'react'

// state management
import { useField } from '../hooks'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useMutation } from '@apollo/client'
import { CREATE_BOOK, ALL_BOOKS } from '../queries'

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

console.log('create...CREATE TO')

const AddNewBook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetPublished, ...published } = useField('text')

  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }],

    onError: (error) => {
      console.log('error', error)
      const errors = error.graphQLErrors[0].extensions.error.errors
      const messages = Object.values(errors)
        .map((e) => e.message)
        .join('\n')
      console.log('messageul', messages)
      dispatch(setNotification(`Error   : ${messages}`, 5))
    },
  })

  // dispatch(setNotification(`Error: ${messages}`, 5))

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBookDetails = {
      author: author.value,
      title: title.value,
      published: Number(published.value),
      genres: genres,
    }

    createBook({ variables: newBookDetails })

    dispatch(
      setNotification(`Added new book list  : ${newBookDetails.title}`, 5)
    )

    resetTitle()
    resetAuthor()
    resetPublished()

    setGenres([])
    navigate('/books')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  const handleReset = (e) => {
    e.preventDefault()
    resetTitle()
    resetAuthor()
    resetPublished()
  }

  console.log('create...')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Author :
          <Input label='author' {...author} />
        </div>
        <div>
          Title :
          <Input label='title' {...title} />
        </div>
        <div>
          Published :
          <Input label='published' {...published} />
        </div>

        {/* ADDING genres  */}
        <div>
          Genre :
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type='button'>
            add genre
          </button>
        </div>

        {genres && <div>Genres: {genres.join()}</div>}

        <Button type='submit'>ADD </Button>
        <TomatoButton onClick={handleReset}>Reset</TomatoButton>
      </form>
    </div>
  )
}

export default AddNewBook
