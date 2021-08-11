import * as React from 'react';

import Board from '@/tetris/components/Board'
import NextBlock from '@/tetris/components/NextBlock'
import ScoreBoard from '@/tetris/components/ScoreBoard'
import MessagePopup from '@/tetris/components/MessagePopup';
import Header from '@/tetris/components/Header'

import * as styles from './tetrisgame.module.css'

export default function TetrisGame() {
  return (
    <>
      <Header />
      <div className={styles.tetris}>
        <Board />
        <NextBlock />
        <ScoreBoard />
        <MessagePopup />
      </div>
    </>
  );
}