import React from 'react'
import Button from './button'

const slow = ({ slow, title }) => (
  <Button 
    onClick={() => {
      slow()
    }}
    title={title}
  />
)

export default slow
