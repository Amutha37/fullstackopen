import { useDispatch } from 'react-redux'
// none default  function exported with curly bracess
import { createNewAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdotes = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNewAnecdote(content))
  }

  return (
    <div>
      <div id='form'>
        <h2>Anecdotes</h2>
        <h3>create new</h3>
        <form onSubmit={addAnecdotes}>
          <input name='anecdote' />
          <button type='submit'>create</button>
        </form>
      </div>
    </div>
  )
}

export default NewAnecdote
