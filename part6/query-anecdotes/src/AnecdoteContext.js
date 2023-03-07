import { createContext, useReducer, useContext } from 'react'

const anecdoteReducer = (state, action) => {
  switch (action.type) {
    case 'MES':
      return action.payload
    case 'CLE':
      return action.payload
    default:
      return state
  }
}

const anecdoteContext = createContext()

export const useAnecdoteValue = () => {
  const anecdoteAndDispatch = useContext(anecdoteContext)
  return anecdoteAndDispatch[0]
}

export const useAnecdoteDispatch = () => {
  const anecdoteAndDispatch = useContext(anecdoteContext)
  return anecdoteAndDispatch[1]
}

export const AnecdoteContextProvider = (props) => {
  const [anecdote, anecdoteDispatch] = useReducer(anecdoteReducer, '')

  return (
    <anecdoteContext.Provider value={[anecdote, anecdoteDispatch]}>
      {props.children}
    </anecdoteContext.Provider>
  )
}

export default anecdoteContext
