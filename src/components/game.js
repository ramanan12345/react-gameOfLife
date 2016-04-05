import React, { Component } from 'react'
import Grid from './grid'
import Controller from './controller'

class Game extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      game: this.props.game,
      speed: 0,
      generations: 0,
      running: false
    }
  }

  componentDidMount() {
    this.start()
  }

  start() {
    if(this.state.running) {
      return
    }

    const { game } = this.props
    const { update } = game

    const interval = setInterval(() => {
      update.call(game)

      this.setState({
        game: game,
        generations: game.generations
      })
    }, this.state.speed)

    this.setState({
      running: true,
      interval: interval,
      generations: game.generations
    })
  }

  addCell() {
    const { game } = this.state

    this.setState({
      game: game
    })
  }

  stop() {
    const { interval } = this.state

    clearInterval(interval)
    this.setState({
      running: false
    })
  }

  slow() {
    this.stop()

    this.setState({
      speed: 250
    }, this.start)
  }

  fast() {
    this.stop()

    this.setState({
      speed: 0
    }, this.start)
  }

  clearBoard() {
    const { game } = this.props
    const { clear } = game

    this.stop()
    clear.call(game)
    this.setState({
      generations: game.generations
    })
  }

  randomize() {
    const { game } = this.props
    const { randomize } = game

    randomize.call(game)
    this.setState({
      game: game
    })
  }

  render() {
    const { grid } = this.props.game
    return (

      <div>
        <div className='generations'>
          {`Generations: ${this.state.generations}`}
        </div>
        <Controller
          start={this.start.bind(this)}
          stop={this.stop.bind(this)}
          slow={this.slow.bind(this)}
          clear={this.clearBoard.bind(this)}
          random={this.randomize.bind(this)}
          fast={this.fast.bind(this)}
        />
        <Grid grid={grid} addCell={this.addCell.bind(this)} />
      </div>
    )
  }
}

export default Game
