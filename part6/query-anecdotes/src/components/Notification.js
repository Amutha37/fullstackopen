import { useCounterValue } from '../CounterContext'

const Notification = () => {
  const counter = useCounterValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    color: 'green',
    fontWeight: 'bold',
    fontSize: '20px',
  }

  // if (true) return null

  return (
    <div className='message' style={style}>
      {counter}
    </div>
  )
}

export default Notification
