import React from 'react'
import classnames from 'classnames'

const Grid = ({ grid }) => {


  let _grid = grid.map((row, i) => {
    return (
      <div
        key={i}
        className='row'
      >
        {row.map((cell, i) => {
          return (
            <div 
              key={i}
              className={classnames('cell', { alive: cell.alive })}
            >
            </div>
          )
        })}
      </div>
    )})
      
  return (
    <div
      className='table'
    >
      {_grid}
    </div>
  )
}


export default Grid
