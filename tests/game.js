import test from 'tape'
import Game from '../src/game/game'

test('init', (t) => {
  let x = 1

  t.plan(1)

  t.equal(typeof Game, 'functi', 'Game should be a function')
})
