import { useAnecdoteValue } from '../AnecdoteContext'

const Notification = () => {
  const anecdote = useAnecdoteValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    color: 'green',
    fontWeight: 'bold',
    fontSize: '20px',
  }

  // if (true) return null

  return (
    <div className='message' style={style}>
      {anecdote}
    </div>
  )
}

export default Notification
