import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useModal } from '@/common/hooks/useModal'
import { updateSize, updateBoardSizeIndex } from '@/game/slice/gameSlice'
import { useLightsOut } from '@/game/hooks/useLightsOutWithStore'
import { BOARD_SIZES } from '@/game/consts'

import Cell from '@/game/components/Cell'
import Header from '@/game/components/Header'
import CommonModal from '@/common/components/CommonModal'
import ModalContents from '@/game/components/ModalContents'
import Congrats from '@/game/components/Congrats'
import Footer from '@/game/components/Footer'

import * as styles from './board.module.css'

export default function Board () {
  const { board, size, steps, allChecked, update, init } = useLightsOut()
  const { showModal, toggleModal } = useModal()

  // redux
  const dispatch = useDispatch()
  const setSize = (size: number) => dispatch(updateSize(size))
  const setBoardSizeIndex = (size: number) => dispatch(updateBoardSizeIndex(size))
  const boardSizeIndex = useSelector<RootState, number>(state => state.game.boardSizeIndex)

  const moveBoard = () => {
    if (BOARD_SIZES[boardSizeIndex + 1]) {
      setBoardSizeIndex(boardSizeIndex + 1)
      setSize(BOARD_SIZES[boardSizeIndex].value)
      return
    }

    setBoardSizeIndex(0)
    setSize(BOARD_SIZES[boardSizeIndex].value)
  }

  return (
    <div>
      <Header
        reset={init}
        showModal={toggleModal}
      />

      <div className={styles.board}>
        {
          board.map((row, yIndex) => {
            return (
              <div
                className={styles.row}
                key={yIndex}
                style={{ 
                  height: `calc(100% / ${size} - 4px)`,
                  marginTop: yIndex ? `${4 + 4 / (size - 1)}px` : 0
                }}
              >
                {
                  row.map((cell, xIndex) => {
                    return (
                      <Cell
                        key={cell.id}
                        click={() => update(yIndex, xIndex)}
                        size={size}
                        status={cell.status}
                        allChecked={allChecked}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>

      <div className={styles.steps}>
        ????????????: <span className={styles.count}>{steps}</span>
      </div>

      <CommonModal
        show={showModal}
        click={toggleModal}
      >
        <ModalContents />
      </CommonModal>

      {
        allChecked && (
          <Congrats
            moveBoard={moveBoard}
            isLastLevel={(boardSizeIndex + 1) === BOARD_SIZES.length}
          />
        )
      }

      <Footer
        size={size}
        moveBoard={moveBoard}
      />
    </div>
  )
}