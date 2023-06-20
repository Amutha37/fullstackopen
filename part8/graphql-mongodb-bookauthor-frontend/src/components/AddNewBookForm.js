import { useState } from 'react'

// state management
import { useField } from '../hooks'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useMutation } from '@apollo/client'
import { ALL_BOOKS, ALL_AUTHORS } from '../graphql/queries'
import { CREATE_BOOK } from '../graphql/mutations'
import { updateCache } from '../App'

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

const AddNewBookForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetPublished, ...published } = useField('text')

  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
    onError: (error) => {
      console.log('Error', error)

      dispatch(setNotification(`ERROR: ${error}`, 5))
    },
    update: (cache, response) => {
      updateCache(cache, { query: ALL_BOOKS }, response.data.addBook)
      // cache.updateQuery({ query: ALL_BOOKS }, ({ allBooks }) => {
      //   return {
      //     allBooks: allBooks.concat(response.data.addBook),
      //   }
      // })

      dispatch(setNotification(`New book list successfully added.`, 5))
      navigate('/books')
      resetTitle()
      resetAuthor()
      resetPublished()
      setGenres([])
    },
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBookDetails = {
      author: author.value,
      title: title.value,
      published: Number(published.value),
      genres: genres.length > 0 ? genres : [],
    }

    createBook({ variables: newBookDetails })
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
    setGenres([])
    navigate('/create')
  }

  return (
    <div>
      <h2>Add New Book</h2>
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
          <button onClick={addGenre} type='button' id='add_genre'>
            Add Genre
          </button>
        </div>

        {genres && <div>Genres: {genres.join()}</div>}

        <Button type='submit'>Submit </Button>
        <TomatoButton onClick={handleReset}>Reset</TomatoButton>
      </form>
    </div>
  )
}

export default AddNewBookForm
