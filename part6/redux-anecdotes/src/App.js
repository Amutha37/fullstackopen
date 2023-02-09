import { useSelector, useDispatch } from 'react-redux'

import { createNewAnecdote, addVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  // add new anecdotes

  const addAnecdotes = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNewAnecdote(content))
  }

  let sortVotes = (a, b) => b.votes - a.votes

  const highestVotes = anecdotes.sort(sortVotes)

  return (
    <div id='form'>
      <h2>Anecdotes</h2>
      {highestVotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div id='list'>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <h2 id='form'>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
