import * as React from 'react';

import { useModal } from '@/common/hooks/useModal'
import { useTetris } from '@/tetris/hooks/tetrisHooks'

import Board from '@/tetris/components/BoardWithRecoil'
import NextBlock from '@/tetris/components/NextBlock'
import ScoreBoard from '@/tetris/components/ScoreBoard'
import MessagePopup from '@/tetris/components/MessagePopup';
import Header from '@/tetris/components/Header'
import CommonModal from '@/common/components/CommonModal'
import ModalContents from '@/tetris/components/ModalContents';

import * as styles from './tetrisgame.module.css'

export default function TetrisGame() {
  const { showModal, toggleModal } = useModal()
  const { restart, pause, resume, moveDown, moveLeft, moveRight, rotate } = useTetris()

  return (
    <>
      <Header
        showModal={toggleModal}
      />
      
      <div className={styles.tetris}>
        <Board
          restart={restart}
          moveDown={moveDown}
          moveLeft={moveLeft}
          moveRight={moveRight}
          rotate={rotate}
        />
        <NextBlock />
        <ScoreBoard 
          restart={restart}
          pause={pause}
          resume={resume}
        />
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