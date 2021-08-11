import * as React from 'react'

import TetrisGame from '@/tetris/components/TetrisGame'
import ToTop from '@/common/components/ToTop'

export default function Tetris() {
  return (
    <>
      <ToTop />
      <TetrisGame />
    </>
  )
}