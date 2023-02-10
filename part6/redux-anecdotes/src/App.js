import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App
