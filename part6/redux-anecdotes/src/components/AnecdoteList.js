import { useDispatch, useSelector } from 'react-redux'
// none default  function exported with curly bracess
import { addVote } from '../reducers/anecdoteReducer'

const Vote = ({ anecdote, handleClick }) => {
  return (
    <div id='list'>
      {anecdote.content} has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  )
}

const AnecdoteList = () => {
  // * const importantNotes = useSelector(state => state.filter(note => note.important))

  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  let sortVotes = (a, b) => b.votes - a.votes

  anecdotes.sort(sortVotes)

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Vote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(addVote(anecdote.id))}
        />
      ))}
    </div>
  )
}

export default AnecdoteList
