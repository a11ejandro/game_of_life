import { WORLD_HEIGHT, WORLD_WIDTH, NEIGHBOURS_TO_SURVIVE, NEIGHBOURS_TO_REPRODUCE } from './constants'

export function createRandomWorld () {
  let matrix = []
  for (let row = 0; row < WORLD_HEIGHT; row++) {
    matrix[row] = []
    for (let column = 0; column < WORLD_WIDTH; column++) {
      matrix[row][column] = Math.random() < 0.5
    }
  }

  return matrix
}

export function tick (world) {
  let newWorld = []

  for (let row = 0; row < WORLD_HEIGHT; row ++) {
    newWorld[row] = []
    for (let column = 0; column < WORLD_WIDTH; column ++) {
      const neighboursCount = aliveNeighboursCount(world, row, column)
      if (world[row][column]) { // Survival check
        newWorld[row][column] = NEIGHBOURS_TO_SURVIVE.includes(neighboursCount)
      } else { // reproduction check
        newWorld[row][column] = neighboursCount === NEIGHBOURS_TO_REPRODUCE
      }
    }
  }

  return newWorld
}

function aliveNeighboursCount (world, row, column) {

  // max indexes, not lengths
  const maxHeight = WORLD_HEIGHT - 1
  const maxWidth = WORLD_WIDTH - 1

  const north = row === 0 ? 0 : world[row - 1][column]
  const northEast = (row === 0 || column === maxWidth) ? 0 : world[row - 1][column + 1]
  const east = column === maxWidth ? 0 : world[row][column + 1]
  const southEast = (row === maxHeight || column === maxWidth) ? 0 : world[row + 1][column + 1]
  const south = row === maxHeight ? 0 : world[row + 1][column]
  const southWest = (row === maxHeight || column === 0) ? 0 : world[row + 1][column - 1]
  const west = column === 0 ? 0 : world[row][column - 1]
  const northWest = (row === 0 || column === 0) ? 0 : world[row - 1][column - 1]

  return north + northEast + east + southEast + south + southWest + west + northWest
}
