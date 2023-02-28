import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'
import { setNotification } from '../reducers/notificationReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const searchContent = event.target.value

    dispatch(filterAnecdote(searchContent.toString().toLowerCase()))
    dispatch(
      setNotification(
        `You are filtering the list for   : '${searchContent
          .toString()
          .toLowerCase()}'`,
        5
      )
    )
  }

  return (
    <div id='filter'>
      Filter : <input name='search' onChange={handleChange} />
    </div>
  )
}

export default Filter
