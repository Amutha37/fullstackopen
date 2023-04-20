import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logUserOut } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setNotification(`signout `, 5))

    dispatch(logUserOut())
    navigate('/login')
  }, [dispatch, navigate])

  return null
}

export default LogOut
