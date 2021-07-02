import * as React from 'react'
import * as styles from './congrats.module.css'

import Icon from './Icon'

type Props = {
  isLastLevel: boolean
}

const cells = [1,2,3,4,5,6,7,8,9]

export default function Congrats (props: Props) {
  const { isLastLevel } = props

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
            <Icon
              coloredCells={cells}
              size={6}
            />
          </div>
        )
      }

      {
        isLastLevel && (
          <div>
            <p className="mb1">パズルマスターです！おめでとう！</p>
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