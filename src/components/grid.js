import React, { Component } from 'react'
import classnames from 'classnames'

class Grid extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      grid: [],
      generations: 0,
      intervalId: null
    }

  }

  componentDidMount() {
    this.start()
  }

  start() {
    const { game } = this.props
    const { update } = game

    let intervalId = setInterval(() => {
      update.call(game)

      this.setState({
        grid: game.grid,
        generations: game.generations
      })
    }, 0)

    this.setState({
      intervalId: intervalId
    })
  }

  render() {

    const grid = this.state.grid

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
}


export default Grid
