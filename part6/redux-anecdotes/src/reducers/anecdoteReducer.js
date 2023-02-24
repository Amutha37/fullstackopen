import { createSlice } from '@reduxjs/toolkit'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNewAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0,
      })
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
