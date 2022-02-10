import React, { useState } from 'react'

const LoginForm = ({ createLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
          <input value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            autoComplete='off'
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm
