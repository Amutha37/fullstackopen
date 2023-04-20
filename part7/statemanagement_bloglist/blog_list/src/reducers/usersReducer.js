import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'

const allUsersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setAllUsers(state, action) {
      return action.payload
    },
  },
})

export const { setAllUsers } = allUsersSlice.actions

export const allUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAllUsers()
    dispatch(setAllUsers(users))
  }
}

export default allUsersSlice.reducer
