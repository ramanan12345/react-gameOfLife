import React from 'react'
import Button from './button'

const Stop = ({ stop, title }) => (
  <Button 
    onClick={() => {
      stop()
    }}
    title={title}
  />
)

export default Stop
    


