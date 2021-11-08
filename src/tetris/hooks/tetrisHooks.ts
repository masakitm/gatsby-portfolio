import { useRecoilState, useSetRecoilState } from 'recoil'

import { POINTS } from '@/tetris/consts'

import { getNextRotation, canMoveTo, checkRows, addBlockToGrid } from '@/tetris/utils'

import { 
  isRunningState, 
  xState, 
  gridState, 
  shapeState, 
  rotationState, 
  lineState, 
  scoreState, 
  speedState, 
  levelState, 
  yState,
  gameOverState,
  nextShapeState,

  defaultGrid,
  defaultShape,
  defaultRotation,
  defaultNextShape,
  defaultX,
  defaultY,
  defaultIsRunning,
  defaultScore,
  defaultLine,
  defaultSpeed,
  defaultLevel,
  defaultGameOver
} from '@/tetris/recoil/tetrisRecoil'

import {
  Speed,
  Line
} from '@/tetris/recoil/tetrisRecoil'

const speedPerLevel = 30

const isLevelUpped = (line: Line, rows: number) => {
  return Math.floor(line / 10) < Math.floor((line + rows) / 10)
}

const getSpeed = (isLevelUpped: boolean, speed: Speed, speedPerLevel: Speed) => {
  if (!isLevelUpped) {
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

export function useTetris () {
  const [x, setX] = useRecoilState(xState)
  const [y, setY] = useRecoilState(yState)
  const [grid, setGrid] = useRecoilState(gridState)
  const [rotation, setRotation] = useRecoilState(rotationState)
  const setIsRunning = useSetRecoilState(isRunningState)
  const [shape, setShape] = useRecoilState(shapeState)
  const [line, setLine] = useRecoilState(lineState)
  const [score, setScore] = useRecoilState(scoreState)
  const [speed, setSpeed] = useRecoilState(speedState)
  const [level, setLevel] = useRecoilState(levelState)
  const setGameOver = useSetRecoilState(gameOverState)
  const [nextShape, setNextShape] = useRecoilState(nextShapeState)

  const moveRight = () => {
    if (canMoveTo(shape, grid, x + 1, y, rotation)) {
      setX(x + 1)
      console.log(x)
    }
  }

  const moveLeft = () => {
    if (canMoveTo(shape, grid, x - 1, y, rotation)) {
      setX(x - 1)
      console.log(x)
    }
  }

  const moveDown = () => {
    // 落下継続処理
    const maybeY = y + 1
    if (canMoveTo(shape, grid, x, maybeY, rotation)) {
      setY(maybeY)
      console.log(y)
    }
    
    // ゲームオーバー処理
    const gridStateObj = addBlockToGrid(shape, grid, x, y, rotation)
    const newGrid = gridStateObj.grid
    const { gameOver } = gridStateObj

    if (gameOver) {
      setShape(0)
      setGrid(newGrid)
      setGameOver(true)
    }
  
    // 停止処理
    const rows = checkRows(newGrid)
    const levelUp = isLevelUpped(line, rows)
    
    setGrid(newGrid)
    setShape(nextShape)
    setLine(line + rows)
    setScore(score + POINTS[rows])
    setSpeed(getSpeed(levelUp, speed, speedPerLevel))
    setLevel(levelUp ? level + 1 : level)
  }

  const rotate = () => {
    const newRotation = getNextRotation(shape, rotation)

    if (canMoveTo(shape, grid, x, y, newRotation)) {
      setRotation(newRotation)
    }
  }

  const pause = () => {
    setIsRunning(false)
  }
  
  const resume = () => {
    setIsRunning(true)
  }
  
  const init = () => {
    setGrid(defaultGrid)
    setShape(defaultShape)
    setRotation(defaultRotation)
    setX(defaultX)
    setY(defaultY)
    setIsRunning(defaultIsRunning)
    setLine(defaultLine)
    setScore(defaultScore)
    setSpeed(defaultSpeed)
    setLevel(defaultLevel)
    setGameOver(defaultGameOver)
    setNextShape(defaultNextShape)
  }

  const restart = () => {
    setGrid(defaultGrid)
    setShape(defaultShape)
    setRotation(defaultRotation)
    setX(defaultX)
    setY(defaultY)
    setIsRunning(defaultIsRunning)
    setLine(defaultLine)
    setScore(defaultScore)
    setSpeed(defaultSpeed)
    setLevel(defaultLevel)
    setGameOver(defaultGameOver)
    setNextShape(defaultNextShape)
  }

  return {
    moveDown,
    moveLeft,
    moveRight,
    rotate,
    pause,
    resume,
    restart
  }
}