import React from 'react'
import Button from './button'

const random = ({ random, title }) => (
  <Button 
    onClick={() => {
      random()
    }}
    title={title}
  />
)

export default random
