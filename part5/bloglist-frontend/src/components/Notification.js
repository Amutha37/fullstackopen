import React from 'react'

const Notification = ({ message, textColor }) => (
  <p className={textColor ? 'error' : 'success'}>{message}</p>
)

export default Notification
