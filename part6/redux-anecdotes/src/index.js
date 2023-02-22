import React from 'react'
import './app.css'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
// import filterAnecdote from './reducers/filterReducer'
//...
console.log('here1')
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
  },
})

store.subscribe(() => console.log('', store.getState()))
console.log('here')
// store.dispatch(filterAnecdote(''))
// store.dispatch(
//   createNewAnecdote(
//     'Combine reducers forms one reducer from many simple reducers'
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
