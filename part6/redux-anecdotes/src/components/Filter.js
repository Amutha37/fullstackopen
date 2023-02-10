import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault()
    const searchContent = event.target.search.value
    event.target.search.value = ''
    dispatch(filterAnecdote(searchContent))
  }

  return (
    <div id='filter'>
      Filter <input name='search' onChange={handleChange} />
    </div>
  )
}

export default Filter
