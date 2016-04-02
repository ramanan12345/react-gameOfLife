import test from 'tape'
import { Game, Cell } from '../src/game/game'

test('game instance creates grid with size n', (t) => {
  let game = new Game(20)
  let grid = game.grid

  t.plan(22)

  t.ok(Array.isArray(grid), 'grid should be an array')
  t.equal(grid.length, 20, 'grid should have 20 rows')

  grid.forEach(row => {
    t.equal(row.length, 20, 'each row should have 20 cells')
  })
})

test('game should be able to find a cell', (t) => {
  let game = new Game(2)

  let cell = game.findCell(0,0)
  let invalidCellX = game.findCell(20, 0)
  let invalidCellY = game.findCell(0, -1)

  t.plan(5)

  t.ok(cell instanceof Cell, 'cell should be instance of cell')
  t.notOk(invalidCellX instanceof Cell, 'can not find cells with invalid coords')
  t.notOk(invalidCellY instanceof Cell, 'can not find cells with invalid coords')
  t.equal(invalidCellX, undefined, 'invalid cells should be undefined')
  t.equal(invalidCellY, undefined, 'invalid cells should be undefined')
})

test('testing isAlive mehotd', (t) => {
  let game = new Game(20)
  let aliveWithTwo = {
    alive: true,
    neighbors: 2
  }
  let aliveWithOne = {
    alive: true,
    neighbors: 1
  }
  let aliveWithFour = {
    alive: true,
    neighbors: 4
  }
  let deadWithThree = {
    alive: false,
    neighbors: 3
  }
  let deadWithFour = {
    alive: false,
    neighbors: 4
  }
  let deadWithTwo = {
    alive: false,
    neighbors: 2
  }

  t.plan(6)

  t.ok(game.isAlive(aliveWithTwo), 'live cell with two neighbors should live on')
  t.notOk(game.isAlive(aliveWithOne), 'live cell with fewer than two should die')
  t.notOk(game.isAlive(aliveWithFour), 'live cell with more than three should die')
  t.ok(game.isAlive(deadWithThree), 'dead cell with exactly three neighbors becomes alive')
  t.notOk(game.isAlive(deadWithFour), 'dead cells that do not have three neighbors die')
  t.notOk(game.isAlive(deadWithTwo), 'dead cells that do not have three neighbors die')
})


