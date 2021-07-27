import * as React from 'react'
const { useState, useEffect } = React

import IconArrow from '@/components/common/IconArrow'
import Icon from '@/components/game/Icon'

import * as styles from './congrats.module.css'

type Props = {
  isLastLevel: boolean,
  moveBoard: () => void
}

export default function Congrats (props: Props) {
  const { isLastLevel, moveBoard } = props

  const [cells, setCells] = useState<[] | number[]>([])

  useEffect(() => {
    setTimeout(() => setCells([1,2,3,4,5,6,7,8,9]), 1800)
  }, [])

  return (
  <div className={styles.contents}>
    <div className={styles.congrats}>
      <h2 className={styles.mb1}>ステージクリア！</h2>

      {
        !isLastLevel && (
          <div>
            <p className={styles.mb1}>
              おめでとう！<br />
              次のステージにチャレンジしてみましょう<br />
            </p>

            <div>
              <Icon
                coloredCells={cells}
                size={6}
              />
            </div>

            <button
              className={styles.button}
              onClick={moveBoard}
            >
              次へすすむ <IconArrow />
            </button>
          </div>
        )
      }

      {
        isLastLevel && (
          <div>
            <p className="mb1">あなたはパズルマスターです！おめでとう！</p>
            <Icon
              coloredCells={cells}
              size={6}
            />
          </div>
        )
      }
    </div>
  </div>
  )
}