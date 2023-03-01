import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useQuery } from 'react-query'
import { getAll } from './requests'

const App = () => {
  const handleVote = (anecdote) => {
    console.log('vote', anecdote)
  }

  const { data, isError, isLoading } = useQuery('anecdotes', getAll, {
    retry: 1,
  })

  if (isLoading) {
    return <div>loading data...</div>
  }
  if (isError) {
    return (
      <span>
        Error : {`anecdote service not available due to problem in server`}
      </span>
    )
  }

  const anecdotes = data

  return (
    <div>
      <h3>Anecdote App</h3>
      <Notification />
      <AnecdoteForm />
      <ol>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <li>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  )
}

export default App
