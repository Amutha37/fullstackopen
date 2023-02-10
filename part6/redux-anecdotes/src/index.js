// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './App'

// import reducer from './reducers/anecdoteReducer'

// const store = createStore(reducer)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

import React from 'react'
import './app.css'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { createNewAnecdote } from './reducers/anecdoteReducer'
import { filterAnecdote } from './reducers/filterReducer'
//...

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
})

const store = createStore(reducer)

// console.log('ALL', store.getState())

store.subscribe(() => console.log('ALL', store.getState()))
store.dispatch(filterAnecdote('code'))
store.dispatch(
  createNewAnecdote(
    'combineReducers forms one reducer from many simple reducers'
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
