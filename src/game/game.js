const NEIGHBOR_COORDS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

function Cell() {
  this.alive = Math.random() > 0.5
  this.neighbors = 0
}

function Game(size) {
  this.size = size
  this.grid = this.generateGrid(size)
  this.generations = 0
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
  return coord >= 0 && coord < this.size 
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

Game.prototype.isAlive = function(x, y) {
  let cell = this.findCell(x, y)
  let neighbors = cell.neighbors

  if(cell.alive && neighbors < 2) {
     cell.alive = false
  } else if(cell.alive && (neighbors === 2 || neighbors === 3)) {
     cell.alive = true
  } else if(cell.alive && neighbors > 3) {
    cell.alive = false
  } else if(!cell.alive && neighbors === 3) {
    cell.alive = true
  } 
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
}


Game.prototype.updateAllCells = function() {
  for(let y = 0; y < this.size; ++y) {
    for(let x = 0; x < this.size; ++x) {
      this.updateCell(x, y)
    }
  }
}

Game.prototype.updateState = function() {
  for(let y = 0; y < this.size; ++y) {
    for(let x = 0; x < this.size; ++x) {
      this.isAlive(x, y)
    }
  }
}

Game.prototype.update = function() {
  this.updateAllCells()
  this.updateState()
  ++this.generations
}

export { Cell, Game } 
