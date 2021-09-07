import { createSlice } from "@reduxjs/toolkit";

import { POINTS } from '@/tetris/consts'
import { getRandomShape, initGrid, getNextRotation, canMoveTo, checkRows, addBlockToGrid } from '@/tetris/utils'

const speedPerLevel = 30

export type Grid = number[][]
export type Shape = number
export type Rotation = 0 | 1 | 2 | 3
export type Position = number
export type IsRunning = boolean
export type Score = number
export type Speed = number
export type GameOver = boolean
export type Line = number
export type Level = number

export type TetrisState = {
  grid: Grid,
  shape: Shape,
  nextShape: Shape,
  rotation: Rotation,
  x: Position,
  y: Position,
  isRunning: IsRunning,
  score: Score,
  speed: Speed,
  line: Line,
  gameOver: GameOver,
  level: Level
}

const isLevelUp = (line: Line, rows: number) => {
  return Math.floor(line / 10) < Math.floor((line + rows) / 10)
}

const getSpeed = (isLevelUp: boolean, speed: Speed, speedPerLevel: Speed) => {
  if (!isLevelUp) {
    return speed
  }

  if (speed - speedPerLevel >= 0) {
    return speed - speedPerLevel
  }

  if(speed - speedPerLevel < 0) {
    return 0
  }

  return speed
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
    speed: 800,
    line: 0,
    gameOver: false,
    level: 1
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
      const { shape, grid, x, y, rotation, nextShape, score, isRunning, line, speed, level } = state

      // 落下継続処理
      const maybeY = y + 1
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        return { ...state, y: maybeY }
      }
      
      const gridState = addBlockToGrid(shape, grid, x, y, rotation)
      const newGrid = gridState.grid

      // ゲームオーバー処理
      const gameOver = gridState.gameOver
    
      if (gameOver) {
        const newState = { ...state }
        newState.shape = 0
        newState.grid = newGrid
        return { ...state, gameOver: true }
      }
    
      // 停止処理
      const rows = checkRows(newGrid)
      const levelUp = isLevelUp(line, rows)
      
      return { 
        ...initialState(),
        grid: newGrid,
        shape: nextShape,
        line: line + rows,
        score: score + POINTS[rows],
        speed: getSpeed(levelUp, speed, speedPerLevel),
        level: levelUp ? level + 1 : level,
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