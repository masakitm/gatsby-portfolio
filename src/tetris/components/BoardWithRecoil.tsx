import * as React from 'react'

import { 
  ARROW_DOWN, 
  ARROW_LEFT, 
  ARROW_RIGHT, 
  ARROW_UP
} from '@/tetris/consts'

// recoil
import { useRecoilValue } from 'recoil'
import { isRunningState, gameOverState, speedState } from '@/tetris/recoil/tetrisRecoil'

import GridSquares from '@/tetris/components/GridSquares'
import * as styles from './board.module.css'
import { initGrid } from '../utils'

const { useEffect, useRef } = React

export default function Board(props: {
  restart: () => void,
  moveDown: () => void,
  moveLeft: () => void,
  moveRight: () => void,
  rotate: () => void
}) {
  const { restart, moveDown, moveLeft, moveRight, rotate } = props

  const requestRef = useRef(0)
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)

  // recoil
  const isRunning = useRecoilValue(isRunningState)
  const gameOver = useRecoilValue(gameOverState)
  const speed = useRecoilValue(speedState)

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