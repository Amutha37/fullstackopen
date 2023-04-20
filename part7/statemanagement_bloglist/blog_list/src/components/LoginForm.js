import React, { useState } from 'react'

import CreateUserForm from './CreateUserForm'
import LoginInputForm from './LoginInputForm'

const LoginForm = () => {
  const [isrendered, setisrendered] = useState(false)

  const toggleBool = () => setisrendered(!isrendered)

  return !isrendered ? (
    <LoginInputForm toggleBool={toggleBool} />
  ) : (
    <CreateUserForm toggleBool={toggleBool} />
  )
}

export default LoginForm
