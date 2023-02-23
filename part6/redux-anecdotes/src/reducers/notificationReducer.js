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
  },
})

let timeoutId = null

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(anecdoteNotification(message))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(
      () => dispatch(anecdoteNotification(null)),
      delay * 1000
    )
  }
}

export const { anecdoteNotification } = notificationReducer.actions
export default notificationReducer.reducer
