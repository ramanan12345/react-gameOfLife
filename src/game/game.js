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
  if(this.inBound(x) && this.inBound(y)) {
    return this.grid[y][x]
  } 

  return undefined
}

Game.prototype.inBound = function(coord) {
  return coord >= 0 && coord <= this.size - 1
}

Game.prototype.invert = function(coord) {
  switch(true) {
    case coord < 0:
      return this.size - 1
    case coord > this.size - 1:
      return 0
    default:
      return coord
  }
}

Game.prototype.isAlive = function(cell) {
  let neighbors = cell.neighbors

  if(cell.alive && neighbors < 2) {
    return false
  }

  if(cell.alive && (neighbors === 2 || neighbors === 3)) {
    return true
  }

  if(cell.alive && neighbors > 3) {
    return false
  }

  if(!cell.alive && neighbors === 3) {
    return true
  }


  return false
}

Game.prototype.updateCell = function(x, y) {
  let parentCell = this.findCell(x, y)
  parentCell.neighbors = 0

  for(let i = 0; i < NEIGHBOR_COORDS.length; ++i) {
    let dy = this.invert(y + NEIGHBOR_COORDS[i][0])
    let dx = this.invert(x + NEIGHBOR_COORDS[i][1])
    let cell = this.findCell(dx, dy)

    if(cell.alive) {
      ++parentCell.neighbors
    }
  }

  parentCell.alive = this.isAlive(parentCell)

  return parentCell
}

Game.prototype.updateAllCells = function() {
  let grid = this.grid

  for(let y = 0; y < grid.length; ++y) {
    let row = grid[i]
    for(let x = 0; x < row.length; ++x) {
      this.updateCell(x, y)
    }
  }
}

export { Cell, Game } 
