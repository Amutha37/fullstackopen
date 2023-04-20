import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import userService from '../services/user'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { setNotification } from '../reducers/notificationReducer'

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 3px solid Chocolate;
  border-radius: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`

const CreateUserForm = (props) => {
  const dispatch = useDispatch()

  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetName, ...name } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const navigate = useNavigate()

  // === handle Login ===

  const handleSubmit = (event) => {
    event.preventDefault()

    const credentials = {
      // blogs: [],
      username: username.value,
      name: name.value,
      password: password.value,
    }
    userService.createNewUser(credentials)
    dispatch(setNotification(`New user created   ${credentials.username}`, 5))
    resetUsername()
    resetName()
    resetPassword()
    navigate('/login')
  }

  //  reset
  const handleReset = (e) => {
    e.preventDefault()
    resetUsername()
    resetName()
    resetPassword()
  }

  return (
    <div>
      <h2>Create New User</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <Input label='username' {...username} />
        </div>
        <div>
          name
          <Input label='name' {...name} />
        </div>
        <div>
          password
          <Input label='password' {...password} autoComplete='off' />
        </div>

        <Button type='submit' id='login-button' onClick={handleSubmit}>
          Create
        </Button>
        <Button id='reset' onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={props.toggleBool}>Login </Button>
      </form>
    </div>
  )
}

export default CreateUserForm
