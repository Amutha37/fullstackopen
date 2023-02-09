import { useSelector, useDispatch } from 'react-redux'

import { addVote } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  let sortVotes = (a, b) => b.votes - a.votes

  const highestVotes = anecdotes.sort(sortVotes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {highestVotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div id='list'>
            {anecdote.content} has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </div>
  )
}

export default App
