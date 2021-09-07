import React from 'react'
import { useSelector } from 'react-redux'

import * as styles from './messagepopup.module.css'

// Displays a message
export default function MessagePopup() {
  const isRunning = useSelector<RootState, boolean>(state => state.tetris.isRunning)
  const gameOver = useSelector<RootState, boolean>(state => state.tetris.gameOver)

  const getHiddenClassName = () => {
    if (gameOver || !isRunning) { return '' }
    return styles.hidden
  }

  const getMessage = () => {
    if (gameOver) { return 'Game Over' }
    if (!isRunning) { return 'Paused' }
    return ''
  }

  return (
    <div className={`${styles.message_popup} ${getHiddenClassName()}`}>
      <h1>{getMessage()}</h1>
    </div>
  )
}