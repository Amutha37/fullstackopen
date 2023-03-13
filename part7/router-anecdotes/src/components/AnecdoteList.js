import { Link } from 'react-router-dom'
import React from 'react'

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// AnecdoteList.propTypes = {
//   anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default AnecdoteList
