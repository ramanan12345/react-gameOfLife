import React from 'react'
import { connect } from 'react-redux'
import Game from '../components/game'

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLiveCell: function() {
      console.log('hello')

    }
  }
}


const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GridContainer
