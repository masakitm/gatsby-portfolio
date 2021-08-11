import { clone } from '@/utils/index'
import { PIECES, BOARD_HEIGHT, BOARD_WIDTH, POINTS } from '@/tetris/consts'

import { Grid, Shape, Rotation, Position, GameOver } from '@/tetris/slice/tetrisSlice'

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomShape = () => {
  return getRandomNumber(1, PIECES.length - 1)
}

// [[0x10]x20]
export const initGrid = (): Grid => Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(0))

export const getNextRotation = (shape: Shape, rotation: Rotation): Rotation => {
  return (rotation + 1) % PIECES[shape].length as Rotation
}

export const canMoveTo = (shape: Shape, grid: Grid, x: Position, y: Position, rotation: Rotation): boolean => {
  const currentShape = PIECES[shape][rotation]

  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      if (currentShape[row][col] !== 0) {
        const proposedX = col + x
        const proposedY = row + y

        if (proposedY < 0) {
          continue
        }

        const possibleRow = grid[proposedY]

        if (possibleRow) {
          if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
            return false
          }
        } else {
          return false
        }
      }
    }
  }
  return true
}

export const addBlockToGrid = (
  shape: Shape,
  grid: Grid,
  x: Position,
  y: Position,
  rotation: Rotation
): { 
  grid: Grid,
  gameOver: GameOver 
} => {
  const block = PIECES[shape][rotation]
  const newGrid = clone(grid)
  let blockOffGrid = false

  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        const yIndex = row + y
        if (yIndex < 0) {
          blockOffGrid = true
        } else {
          newGrid[row + y][col + x] = shape
        }
      }
    }
  }

  return { grid: newGrid, gameOver: blockOffGrid }
}


export const checkRows = (grid: Grid) => {
  let completedRows = 0
  
  for (let row = 0; row < grid.length; row++) {
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      grid.splice(row, 1)
      grid.unshift(Array(BOARD_WIDTH).fill(0))
    }
  }
  return POINTS[completedRows]
}