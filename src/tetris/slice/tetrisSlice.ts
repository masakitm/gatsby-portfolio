import { createSlice } from "@reduxjs/toolkit";

import { getRandomShape, initGrid, getNextRotation, canMoveTo, checkRows, addBlockToGrid } from '@/tetris/utils'

export type Grid = number[][]
export type Shape = number
export type Rotation = 0 | 1 | 2 | 3
export type Position = number
export type IsRunning = boolean
export type Score = number
export type Speed = number
export type GameOver = boolean

export type TetrisState =  {
  grid: Grid,
  shape: Shape,
  nextShape: Shape,
  rotation: Rotation,
  x: Position,
  y: Position,
  isRunning: IsRunning,
  score: Score,
  speed: Speed,
  gameOver: GameOver
}

const initialState = (): TetrisState => {
  return {
    grid: initGrid(),
    shape: getRandomShape(),
    rotation: 0,
    nextShape: getRandomShape(),
    x: 3,
    y: -2,
    isRunning: true,
    score: 0,
    speed: 1000,
    line: 0,
    gameOver: false
  }
}

export const tetrisSlice = createSlice({
  name: 'tetris',
  initialState: initialState(),
  reducers: {
    moveRight: state => {
      const { shape, grid, x, y, rotation } = state

      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 }
      }

      return state
    },
    
    moveLeft: state => {
      const { shape, grid, x, y, rotation } = state

      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 }
      }

      return state
    },
    
    moveDown: state => {
      const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state

      const maybeY = y + 1

      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        return { ...state, y: maybeY }
      }
    
      const gridState = addBlockToGrid(shape, grid, x, y, rotation)
      const newGrid = gridState.grid
      const gameOver = gridState.gameOver
    
      if (gameOver) {
        const newState = { ...state }
        newState.shape = 0
        newState.grid = newGrid
        return { ...state, gameOver: true }
      }
    
      return { 
        ...initialState(),
        grid: newGrid,
        shape: nextShape,
        score: score + checkRows(newGrid), 
        isRunning 
      }
    },

    rotate: state => {
      const { shape, grid, x, y, rotation } = state

      const newRotation = getNextRotation(shape, rotation)

      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation }
      }

      return state
    },
    
    pause: state => {
      return { ...state, isRunning: false }
    },
    
    resume: state => {
      return { ...state, isRunning: true }
    },
    
    restart: () => {
      return initialState()
    }
  }
})

export const { moveDown, moveLeft, moveRight, rotate, pause, resume, restart } = tetrisSlice.actions