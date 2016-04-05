import React, { Component } from 'react'
import Row from './row'


const Grid = ({ grid, addCell }) => (
  <div className='table'>
    {grid.map((row, i) => {
      return (
        <Row row={row} key={i} addCell={addCell} />
      )
    })}
  </div>
)

export default Grid
