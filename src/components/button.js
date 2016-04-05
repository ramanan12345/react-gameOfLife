import React from 'react'

const Button = (props) => {
  return (
    <button 
      onClick={props.onClick}
      {...props}
    >
      {props.title}
    </button>
  )
}

export default Button
