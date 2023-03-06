import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'CRE':
      return action.payload
    case 'VOT':
      return action.payload

    default:
      return state
  }
}

const notificationContext = createContext()

export const usenotificationValue = () => {
  const notificationAndDispatch = useContext(notificationContext)
  return notificationAndDispatch[0]
}

export const usenotificationDispatch = () => {
  const notificationAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default CounterContext
