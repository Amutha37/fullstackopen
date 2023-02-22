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
  const dispatch = useDispatch()
  // * const importantNotes = useSelector(state => state.filter(note => note.important))

  // const anecdotes = useSelector(({ filter, anecdotes }) => {
  const anecdotes = useSelector((state) => {
    console.log('state', state)
    if (state.filter === null) {
      return state.anecdotes
    }
    return state.anecdotes.filter((row) =>
      row.content.toString().toLowerCase().includes(state.filter)
    )
  })
  // ? above
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
