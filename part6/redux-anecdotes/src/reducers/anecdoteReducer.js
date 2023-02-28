import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anec = action.payload

      // const voteToAdd = state.find
      // console.log('STATE', JSON.parse(JSON.stringify(state)))
      return state.map((dote) => (dote.id !== anec.id ? dote : anec))
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

export const updateChangedVote = (anecdote) => {
  const changeAnnecdoteVote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }
  return async (dispatch) => {
    dispatch(addVote(changeAnnecdoteVote))
    await anecdoteService.updateVote(changeAnnecdoteVote)
  }
}

export const updateNewVote = (anecdote) => {
  const changeVote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }
  return async (dispatch) => {
    dispatch(addVote(changeVote))
    await anecdoteService.updateVote(changeVote)
  }
}

export default anecdoteSlice.reducer
