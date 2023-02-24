import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNewAnecdote(state, action) {
      state.push(action.payload)
    },
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

export const { createNewAnecdote, addVote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer
