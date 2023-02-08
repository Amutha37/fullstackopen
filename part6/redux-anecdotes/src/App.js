import NewAnecdote from './components/NewAnecdote'
import Votes from './components/Votes'

const App = () => {
  // * const importantNotes = useSelector(state => state.filter(note => note.important))

  return (
    <div>
      <NewAnecdote />
      <Votes />
    </div>
  )
}

export default App
