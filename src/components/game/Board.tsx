import * as React from 'react'
const { useEffect } = React

import { useLightsOut } from '../../hooks/useLightsOut'
import { useModal } from '../../hooks/useModal'

import Cell from './Cell'
import Header from './Header'
import Modal from './Modal'
import Congrats from './Congrats'
import Footer from './Footer'

import * as styles from './board.module.css'

export default function Board () {
  const { board, size, steps, allChecked, update, init, setSize } = useLightsOut()
  const { showModal, toggleModal } = useModal()

  useEffect(() => init(), [])

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
            isLastLevel={false}
          />
        )
      }

      <Footer
        size={size}
        click={setSize}
      />
    </div>
  )
}