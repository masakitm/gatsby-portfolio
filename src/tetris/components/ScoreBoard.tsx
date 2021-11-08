import * as React from 'react'

import { useRecoilValue } from 'recoil'

import { 
  isRunningState, 
  lineState, 
  scoreState, 
  levelState, 
  gameOverState,
} from '@/tetris/recoil/tetrisRecoil'

import * as styles from './scoreboard.module.css'

export default function ScoreBoard(props: { 
  restart: () => void,
  pause: () => void,
  resume: () => void
}) {
  const { restart, pause, resume } = props

  const line = useRecoilValue(lineState)
  const score = useRecoilValue(scoreState)
  const level = useRecoilValue(levelState)
  const gameOver = useRecoilValue(gameOverState)
  const isRunning = useRecoilValue(isRunningState)

  const onClickPauseButton = () => {
    if (gameOver) {
      return
    } 

    if (isRunning) {
      pause()
      return
    }

    resume()
  }

  const onClickStartButton = () => {
    restart()
  }

  return (
    <div className={styles.score_board}>
      <div>レベル: <span className="bold">{ level }</span></div>
      <div>スコア: <span className="bold">{ score }</span></div>
      <div>ライン: <span className="bold">{ line }</span></div>

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