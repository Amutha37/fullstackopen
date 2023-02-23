import { useSelector } from 'react-redux'

// anecdotes: anecdoteReducer,
//   filter: filterReducer,

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  const style = {
    border: 'solid',
    backgroundColor: 'grey',
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
    color: 'y',
  }
  return <div style={style}>{notification}</div>
}

export default Notification
