import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
  ARROW_DOWN, 
  ARROW_LEFT, 
  ARROW_RIGHT, 
  ARROW_UP 
} from '@/tetris/consts'

import { 
  TetrisState, 
  moveDown, 
  moveLeft, 
  moveRight, 
  rotate 
} from '@/tetris/slice/tetrisSlice'

import GridSquares from '@/tetris/components/GridSquares'
import * as styles from './board.module.css'

const { useEffect, useRef } = React

export default function Board() {
  const tetris = useSelector<RootState, TetrisState>(state => state.tetris)
  const { isRunning, speed, gameOver } = tetris

  const requestRef = useRef(0)
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)
  const dispatch = useDispatch()

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
      dispatch(moveDown())
      progressTimeRef.current = 0
    }

    lastUpdateTimeRef.current = time
  }

  const addKeyEvents = () => {
    document.addEventListener('keydown', e => {
      switch (e.code) {
        case ARROW_DOWN:
          if (!isRunning || gameOver) { return } 
          dispatch(moveDown())
          break

        case ARROW_LEFT: 
          if (!isRunning || gameOver) { return } 
          dispatch(moveLeft())
          break
        
        case ARROW_RIGHT: 
          if (!isRunning || gameOver) { return } 
          dispatch(moveRight())
          break
        
        case ARROW_UP: 
          if (!isRunning || gameOver) { return } 
          dispatch(rotate())
          break
      }
    })
  }
  
  useEffect(() => {
    addKeyEvents()
  },[])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning])

  return (
    <div className={styles.grid_board}>
      <GridSquares />
    </div>
  )
}