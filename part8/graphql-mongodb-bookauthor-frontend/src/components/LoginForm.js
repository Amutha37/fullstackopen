import { useEffect } from 'react'
// state management
import { useField } from '../hooks'
import { usePasswordField } from '../hooks'
import { useMutation } from '@apollo/client'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { LOGIN } from '../graphql/mutations'
import { useNavigate } from 'react-router-dom'
// style
import styled from 'styled-components'

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid Chocolate;
  border-radius: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`

const LoginForm = ({ setToken }) => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('secret')
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = usePasswordField('password')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      dispatch(
        setNotification(`Login error ${error.graphQLErrors[0].message}`, 5)
      )
    },
  })

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('book-user-token', token)
      dispatch(setNotification(` Loged In successfully .`, 5))
      navigate('/books')
    }
  }, [result.data]) // eslint-disable-line

  const handleLoginsubmit = async (event) => {
    event.preventDefault()
    const LoginCredential = {
      username: username.value,
      password: password.value,
    }

    login({ variables: LoginCredential })
    resetUsername()
    resetPassword()
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLoginsubmit}>
        <div>
          Username :
          <Input label='username' {...username} authoComplete='off' />
          {/* <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          /> */}
        </div>
        <div>
          Password :
          <Input autoComplete='off' label='password' {...password} />
          {/* <input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          /> */}
        </div>
        <Button type='submit'>Login </Button>
        {/* <button type='submit'>login</button> */}
      </form>
    </div>
  )
}

export default LoginForm
