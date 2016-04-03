import React from 'react'
import { connect } from 'react-redux'
import Grid from '../components/grid'

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: function() {
    }
  }
}


const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
