import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    blogNotification(state, action) {
      state = action.payload
      return state
    },
    clearNotification(state, action) {
      state = action.payload
      return state
    },
  },
})

export const { clearNotification, blogNotification } =
  notificationReducer.actions

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(blogNotification(message))
    setTimeout(() => {
      dispatch(clearNotification(null))
    }, delay * 1000)
  }
}

export default notificationReducer.reducer
