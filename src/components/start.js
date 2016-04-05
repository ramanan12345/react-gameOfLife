import React from 'react'
import Button from './button'

const Start = ({ start, title }) => (
  <Button 
    onClick={() => {
      start()
    }}
    title={title}
  />
)

export default Start
