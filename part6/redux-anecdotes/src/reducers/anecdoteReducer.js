const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW_ANECDOTES':
      return [...state, action.payload]

    case 'VOTE': {
      const id = action.payload.id
      const voteToAdd = state.find((n) => n.id === id)
      const addVote = {
        ...voteToAdd,
        votes: voteToAdd.votes + 1,
      }
      return state.map((note) => (note.id !== id ? note : addVote))
    }
    default:
      return state
  }
}

// create new anecdote
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNewAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTES',
    payload: {
      content,
      id: generateId(),
      votes: 0,
    },
  }
}

// vote
export const addVote = (id) => {
  return {
    type: 'VOTE',
    payload: { id },
  }
}

export default reducer
