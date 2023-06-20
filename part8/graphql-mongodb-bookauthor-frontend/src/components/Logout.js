// import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import { setNotification } from '../reducers/notificationReducer'

const LogOut = ({ setToken }) => {
  setToken(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const client = useApolloClient()

  localStorage.clear()
  client.resetStore()
  dispatch(setNotification(` You have logged out successfully .`, 5))
  navigate('/')
}

export default LogOut
