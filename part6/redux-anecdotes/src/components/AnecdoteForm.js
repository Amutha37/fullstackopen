import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  // add new anecdotes

  const addAnecdotes = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createNewAnecdote(content))
    dispatch(setNotification(`Added new anecdote ${content}`, 5))
  }

  return (
    <div id='form'>
      <h2>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
