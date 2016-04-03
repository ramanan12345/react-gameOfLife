import { Game } from '../src/game/game'

let game = new Game(8)

console.log(game.grid)

game.update()

console.log('----------------')

console.log(game.grid)

