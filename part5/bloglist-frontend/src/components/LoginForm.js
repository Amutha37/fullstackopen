import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ createLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }

  // === handle Login ===

  const handleLogin = (event) => {
    event.preventDefault()

    createLogin({
      username,
      password,
    })

    setUsername('')
    setPassword('')
  }

  //  === handleChange ===

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            value={username}
            id='username'
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            id='password'
            type='password'
            value={password}
            autoComplete='off'
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit' id='login-button'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
