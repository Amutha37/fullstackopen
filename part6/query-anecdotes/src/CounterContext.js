import { createContext, useReducer, useContext } from 'react'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'MES':
      return action.payload
    case 'CLE':
      return action.payload
    default:
      return state
  }
}

const CounterContext = createContext()

export const useCounterValue = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[0]
}

export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, '')

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContext
