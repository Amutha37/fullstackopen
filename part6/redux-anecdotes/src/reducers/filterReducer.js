// const filterReducer = (state = '', action) => {
//   console.log('ACTION: ', action)
//   switch (action.type) {
//     case 'SET_FILTER':
//       return action.payload
//     default:
//       return state
//   }
// }

// export const filterAnecdote = (filter) => {
//   console.log('filter: ', filter)
//   return {
//     type: 'SET_FILTER',
//     payload: filter,
//   }
// }

import { createSlice } from '@reduxjs/toolkit'

const initialFilterState = ''

const filterReducer = createSlice({
  name: 'filter',
  initialFilterState,
  reducers: {
    filterAnecdote(state, action) {
      return (state = action.payload)
    },
  },
})

export const { filterAnecdote } = filterReducer.actions
export default filterReducer.reducer
