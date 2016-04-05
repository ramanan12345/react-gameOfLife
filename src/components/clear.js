import React from 'react'
import Button from './button'

const Clear = ({ clear, title }) => (
  <Button 
    onClick={() => {
      clear()
    }}
    title={title}
  />
)

export default Clear
