import React from 'react'
import Button from './button'

const fast = ({ fast, title }) => (
  <Button 
    onClick={() => {
      fast()
    }}
    title={title}
  />
)

export default fast
