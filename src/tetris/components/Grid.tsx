import React from 'react'

import * as styles from './grid.module.css'

type Props = {
  color: number
}

export default function Grid(props: Props) {
  const color = `color_${props.color}`

  return (
    <div
      className={`${styles.grid_square} ${styles[color]}`}
    />
  )
}