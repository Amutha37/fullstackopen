import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
// FETCHING DATA FROM SERVER
// import anecdoteService from './services/anecdotes'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
})
// mover the initialization to App component
// anecdoteService
//   .getAll()
//   .then((anecdotes) => store.dispatch(setAnecdotes(anecdotes)))

export default store
