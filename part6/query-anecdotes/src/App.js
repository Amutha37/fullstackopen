import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'

import { CounterContextProvider } from './CounterContext'

const App = () => {
  const timer = setTimeout(() => console.log('Initial timeout!'), 1000)
  clearTimeout(timer)
  setTimeout(() => alert('Hey ??'), 1000)
  clearTimeout()
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
