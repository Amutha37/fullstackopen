import { useDispatch, useSelector } from 'react-redux'
// none default  function exported with curly bracess
import React from 'react'
import { updateChangedVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  // * const importantNotes = useSelector(state => state.filter(note => note.important))

  const anecdotes = useSelector((state) => {
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

  const handleVote = (anecdote) => {
    dispatch(updateChangedVote(anecdote))
    dispatch(setNotification(`You voted for : '${anecdote.content}'`, 5))
  }

  return (
    <div>
      <ol>
        {anecdotes.map((anecdote, index) => (
          <li id='list' key={index}>
            {anecdote.content} has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default AnecdoteList
