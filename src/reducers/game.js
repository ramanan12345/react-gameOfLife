import { Game } from '../game/game'

let gameState = new Game(70)

const game = (state = gameState, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default game
