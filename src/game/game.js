const NEIGHBOR_COORDS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

function Cell() {
  this.alive = Math.random() > 0.9
  this.neighbors = 0
}

function Game(size) {
  this.size = size
  this.grid = this.generateGrid(size)
}

Game.prototype.generateGrid = function(size) {
  let grid = []

  for(let x = 0; x < size; ++x) {
    let row = []
    for(let y = 0; y < size; ++y) {
      row.push(new Cell())
    }
    grid.push(row)
  }

  return grid
}

Game.prototype.findCell = function(x, y) {
  return this.grid[y][x]
}

Game.prototype.inBound = function(x, y) {
  return y >= 0 && y <= this.size - 1
}

Game.prototype.inBoundX = function(x, y) {
  return x >= 0 && y <= this.size - 1
}

Game.prototype.updateCell = function(x, y) {
  let cell = this.grid[y][x]
  cell.neighbors = 0

  NEIGHBOR_COORDS.forEach(coord => {
    let cell = findCell(coord[y + y][x + x])
  })
}


  





export default Game

