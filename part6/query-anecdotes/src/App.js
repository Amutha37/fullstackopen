import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import { CounterContextProvider } from './CounterContext'

const App = () => {
  return (
    <div>
      <CounterContextProvider>
        <h3>Anecdote App</h3>
        <Notification />
        <AnecdoteForm />
        <AnecdoteList />
      </CounterContextProvider>
    </div>
  )
}

export default App
