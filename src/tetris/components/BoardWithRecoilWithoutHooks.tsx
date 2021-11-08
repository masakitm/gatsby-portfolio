import * as React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'

import { getNextRotation, canMoveTo, checkRows, addBlockToGrid } from '@/tetris/utils'

import { 
  ARROW_DOWN, 
  ARROW_LEFT, 
  ARROW_RIGHT, 
  ARROW_UP,
  POINTS
} from '@/tetris/consts'

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

import GridSquares from '@/tetris/components/GridSquares'
import * as styles from './board.module.css'

const { useEffect, useRef } = React

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

export default function Board() {
  const requestRef = useRef(0)
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)

  // recoil
  const isRunning = useRecoilValue(isRunningState)
  const gameOver = useRecoilValue(gameOverState)

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

  const moveRight = async () => {
    if (canMoveTo(shape, grid, x + 1, y, rotation)) {
      await setX(x + 1)
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

  // app
  const update = (time: number) => {
    requestRef.current = requestAnimationFrame(update)

    if (!isRunning) {
      return
    }

    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time
    }
    
    const deltaTime = time - lastUpdateTimeRef.current
    
    progressTimeRef.current += deltaTime

    if (progressTimeRef.current > speed) {
      moveDown()
      progressTimeRef.current = 0
    }

    lastUpdateTimeRef.current = time
  }

  const keyEventListener = (e: KeyboardEvent) => {
    switch (e.code) {
      case ARROW_DOWN:
        if (!isRunning || gameOver) { return } 
        moveDown()
        break

      case ARROW_LEFT: 
        if (!isRunning || gameOver) { return } 
        moveLeft()
        break
      
      case ARROW_RIGHT: 
        if (!isRunning || gameOver) { return } 
        moveRight()
        break
      
      case ARROW_UP: 
        if (!isRunning || gameOver) { return } 
        rotate()
        break
    }
  }
  
  const restartWhenLoaded = () => {
    restart()
  }

  useEffect(() => {
    restart()
    document.addEventListener('keydown', keyEventListener, true)
    document.addEventListener('load', restartWhenLoaded, true)

    // release when unmounted
    return () => {
      document.removeEventListener('keydown', keyEventListener, true)
      document.removeEventListener('load', restartWhenLoaded, true)
    }
  },[])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning, speed])

  return (
    <div className={styles.grid_board}>
      <GridSquares />
    </div>
  )
}