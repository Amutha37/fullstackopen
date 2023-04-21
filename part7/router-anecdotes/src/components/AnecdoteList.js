import { Link } from 'react-router-dom'
import React from 'react'
import { Table } from 'react-bootstrap'

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>

      <Table striped>
        <tbody>
          {anecdotes.map((anecdote) => (
            <tr key={anecdote.id}>
              <td>
                {' '}
                <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
              </td>
              <td>{anecdote.author}</td>
              <td>{anecdote.info}</td>
              <td>{anecdote.votes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

// AnecdoteList.propTypes = {
//   anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default AnecdoteList
