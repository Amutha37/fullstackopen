import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'
import loginService from '../services/login'

const loginSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setLogin(state, action) {
      return action.payload
    },
    setLogoff(state, action) {
      return action.payload
    },
    setUser(state, action) {
      return action.payload
    },
  },
})

export const { setUser, setLogin, setLogoff } = loginSlice.actions

export const initialUser = () => {
  return async (dispatch) => {
    const user = await userService.getUser()

    dispatch(setUser(user))
  }
}

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const { username, password } = credentials
    const user = await loginService.login({ username, password })
    userService.setUser(user)
    dispatch(setLogin(user))
  }
}

export const logUserOut = () => {
  return async (dispatch) => {
    userService.removeUser()
    dispatch(setLogoff(null))
  }
}

// const user = await loginService.getUser()
// dispatch(setUser(user))

export default loginSlice.reducer
