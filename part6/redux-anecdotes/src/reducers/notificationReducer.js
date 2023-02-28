import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    anecdoteNotification(state, action) {
      state = action.payload
      return state
    },
    clearNotification(state, action) {
      state = action.payload
      return state
    },
  },
})

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(anecdoteNotification(message))
    setTimeout(() => {
      dispatch(clearNotification(null))
    }, delay * 1000)
  }
}

export const { clearNotification, anecdoteNotification } =
  notificationReducer.actions
export default notificationReducer.reducer
