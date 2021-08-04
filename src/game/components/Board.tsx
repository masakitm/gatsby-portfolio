import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateSize, updateBoardSizeIndex } from '@/game/slice/gameSlice'
import { useLightsOut } from '@/game/hooks/useLightsOutWithStore'
import { useModal } from '@/game/hooks/useModal'
import { BOARD_SIZES } from '@/game/consts'

import Cell from './Cell'
import Header from './Header'
import Modal from './Modal'
import Congrats from './Congrats'
import Footer from './Footer'

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
        おした数: <span className={styles.count}>{steps}</span>
      </div>

      <Modal
        show={showModal}
        click={toggleModal}
      />

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