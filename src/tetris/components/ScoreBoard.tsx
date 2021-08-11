import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pause, resume, restart } from '@/tetris/slice/tetrisSlice'

import { TetrisState } from '@/tetris/slice/tetrisSlice'

import * as styles from './scoreboard.module.css'

export default function ScoreBoard() {
  const dispatch = useDispatch()
  const tetris = useSelector<RootState, TetrisState>(state => state.tetris)
  const { score, isRunning, gameOver } = tetris

  const onClickPauseButton = () => {
    if (gameOver) { 
      return 
    }

    if (isRunning) {
      dispatch(pause())
      return
    }

    dispatch(resume())
  }

  const onClickStartButton = () => {
    dispatch(restart())
  }

  return (
    <div className={styles.score_board}>
      <div>スコア: <span className="bold">{ score }</span></div>
      <div>レベル: <span className="bold">1</span></div>

      <button
        className={styles.score_board_button} 
        onClick={onClickPauseButton}
      >
        {isRunning ? 'ちゅうだん' : 'つづけてあそぶ'}
      </button>

      <button 
        className={styles.score_board_button} 
        onClick={onClickStartButton}
      >
        さいしょから
      </button>
    </div>
  )
}