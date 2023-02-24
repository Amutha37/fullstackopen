import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anec = action.payload
      console.log('anec', anec)
      const voteToAdd = state.find((n) => n.id === anec.id)
      const addVote = {
        ...voteToAdd,
        votes: anec.votes + 1,
      }

      console.log('STATE', JSON.parse(JSON.stringify(state)))
      return state.map((dote) => (dote.id !== anec.id ? dote : addVote))
    },
    // Add note object to the backend db
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      state = action.payload
      return state
    },
  },
})

// switch (action.type) {
//   case 'NEW_ANECDOTES':
//   case 'VOTE': {

export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer
