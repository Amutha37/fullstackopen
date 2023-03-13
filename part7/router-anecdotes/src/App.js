import { useNavigate, useMatch } from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Notification from './components/Notification'

const App = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState('')
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`A new anecdote successfully created : ${anecdote.content}`)
    setTimeout(() => {
      setNotification(null)
    }, 10000)
    navigate('/')
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>

      {notification ? <Notification notification={notification} /> : null}
      <Menu anecdotes={anecdotes} addNew={addNew} />

      <Footer />
    </div>
  )
}

export default App
