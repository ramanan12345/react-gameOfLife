import React, { Component } from 'react'
import classnames from 'classnames'
import raf from 'raf'

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

    let tick = () => {
      update.call(game)

      this.setState({
        grid: game.grid,
        generations: game.generations
      })

      raf(tick)
    }

    raf(tick)
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
        <div>
          <div><span>{`Generations: ${this.state.generations}`}</span></div>
          <div
            className='table'
          >
            {_grid}
          </div>
        </div>
      )
  }
}


export default Grid
