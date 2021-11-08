import { atom } from 'recoil'

import { getRandomShape, initGrid } from '@/tetris/utils'

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

export const defaultGrid: Grid = initGrid()
export const defaultShape: Shape = getRandomShape()
export const defaultRotation: Rotation = 0
export const defaultNextShape: Shape = getRandomShape()
export const defaultX: Position = 3
export const defaultY: Position = -2
export const defaultIsRunning: IsRunning = true
export const defaultScore: Score = 0
export const defaultLine: Line = 0
export const defaultSpeed: Speed = 800
export const defaultLevel: Level = 0
export const defaultGameOver: GameOver = false

export const gridState = atom<Grid>({
  key: 'tetrisGridState',
  default: initGrid()
})

export const shapeState = atom<Shape>({
  key: 'tetrisShapeState',
  default: getRandomShape()
})

export const rotationState = atom<Rotation>({
  key: 'tetrisRotationState',
  default: 0
})

export const nextShapeState = atom<Shape>({
  key: 'tetrisNextShapeState',
  default: getRandomShape()
})

export const xState = atom<Position>({
  key: 'tetrisXState',
  default: 3
})

export const yState = atom<Position>({
  key: 'tetrisYState',
  default: -2
})

export const isRunningState = atom<IsRunning>({
  key: 'tetrisIsRunningState',
  default: true
})

export const scoreState = atom<Score>({
  key: 'tetrisScoreState',
  default: 0
})

export const lineState = atom<Line>({
  key: 'tetrisLineState',
  default: 0
})

export const speedState = atom<Speed>({
  key: 'tetrisSpeedState',
  default: 800
})

export const levelState = atom<Level>({
  key: 'tetrisLevelState',
  default: 0
})

export const gameOverState = atom<GameOver>({
  key: 'tetrisGameOverState',
  default: false
})