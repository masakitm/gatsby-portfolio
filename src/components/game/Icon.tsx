import * as React from 'react'
import { ICON_CELLS } from '../../consts'

import * as styles from './icon.module.css'

type Props = {
  coloredCells: number[],
  size: number
}

const defaultProps = {
  coloredCells: [5,8,9],
  size: 6
}

const iconCellList: number[] = (() => {
  let list = []
  for (let i = 1; i <= ICON_CELLS; i++) { 
    list.push(i) 
  }
  return list
})()

export default function Icon (props: Props = defaultProps) {
  const { size, coloredCells } = props

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {
          iconCellList.map(item => {
            return (
              <div
                style={{ width: `${size}px`, height: `${size}px` }}
                key={`icon_cell-${item}`}
                className={`${styles.cell} ${coloredCells.includes(item) && styles.colored}`}
              />
            )
          })
        }
      </div>
    </div>
  )
}