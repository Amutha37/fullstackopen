import { useMatch } from 'react-router-dom'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'
import CreateNew from './CreateNew'
import Anecdote from './Anecdote'
import AnecdoteList from './AnecdoteList'

const Menu = (props) => {
  const anecdotes = props.anecdotes
  const addNew = props.addNew

  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null

  return (
    <>
      <div id='nav_bar'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/anecdotes'>
          Anecdotes
        </Link>
        <Link className='link' to='/create'>
          Create
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
      </div>

      <Routes>
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route
          path='/anecdotes'
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route path='/create' element={<CreateNew addNew={addNew} />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
    </>
  )
}
export default Menu
