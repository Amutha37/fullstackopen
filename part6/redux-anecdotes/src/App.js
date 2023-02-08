import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  //  add votes
  const addVote = (id) => {
    return {
      type: 'VOTE',
      payload: { id },
    }
  }
  // add new anecdotes

  const addAnecdotes = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const generateId = () => Number((Math.random() * 1000000).toFixed(0))

    dispatch({
      type: 'NEW_ANECDOTES',
      payload: {
        content,
        id: generateId(),
        votes: 0,
      },
    })
  }

  return (
    <div id='form'>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
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
