import * as React from 'react';

import { useModal } from '@/common/hooks/useModal'

import Board from '@/tetris/components/Board'
import NextBlock from '@/tetris/components/NextBlock'
import ScoreBoard from '@/tetris/components/ScoreBoard'
import MessagePopup from '@/tetris/components/MessagePopup';
import Header from '@/tetris/components/Header'
import CommonModal from '@/common/components/CommonModal'
import ModalContents from '@/tetris/components/ModalContents';

import * as styles from './tetrisgame.module.css'

export default function TetrisGame() {
  const { showModal, toggleModal } = useModal()

  return (
    <>
      <Header
        showModal={toggleModal}
      />
      
      <div className={styles.tetris}>
        <Board />
        <NextBlock />
        <ScoreBoard />
        <MessagePopup />
      </div>

      <CommonModal
        show={showModal}
        click={toggleModal}
      >
        <ModalContents />
      </CommonModal>
    </>
  );
}