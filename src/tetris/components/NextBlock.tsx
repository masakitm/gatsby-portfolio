import * as React from 'react'
import { useSelector } from 'react-redux'

import { PIECES } from '@/tetris/consts'

import Grid from '@/tetris/components/Grid'

import * as styles from './nextblock.module.css'

export default function NextBlock() {
  const nextShape = useSelector<RootState, number>(state => state.tetris.nextShape)

  const box = PIECES[nextShape][0]
  
  const grid = box.map((rows, row) => {
    return rows.map((square, col) => {
      return <Grid key={`${row}-${col}`} color={square ? nextShape : square} />
    })
  })

  return (
    <div className={styles.next_block}>
      {grid}
    </div>
  )
}