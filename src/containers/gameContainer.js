import React from 'react'
import { connect } from 'react-redux'
import Game from '../components/game'

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const GridContainer = connect(
  mapStateToProps,
  null
)(Game)

export default GridContainer
