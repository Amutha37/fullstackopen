import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const searchContent = event.target.value

    dispatch(filterAnecdote(searchContent.toString().toLowerCase()))
  }

  return (
    <div id='filter'>
      Filter <input name='search' onChange={handleChange} />
    </div>
  )
}

export default Filter
