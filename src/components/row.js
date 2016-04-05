import React from 'react'
import classnames from 'classnames'

const Row = ({ row, addCell }) => (
  <div className='row'>
    {row.map((cell, i) => {
      return (
        <div 
         key={i} 
          className={classnames('cell', { alive: cell.alive })}
          onClick={() => {
            cell.alive = !cell.alive
            addCell()
          }}
        >
        </div>
      )
    })}
  </div>
)

export default Row

