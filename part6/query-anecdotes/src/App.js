import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import { AnecdoteContextProvider } from './AnecdoteContext'

const App = () => {
  return (
    <div>
      <AnecdoteContextProvider>
        <h3>Anecdote App</h3>
        <Notification />
        <AnecdoteForm />
        <AnecdoteList />
      </AnecdoteContextProvider>
    </div>
  )
}

export default App
