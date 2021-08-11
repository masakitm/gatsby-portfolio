import * as React from 'react'
import { useSelector } from 'react-redux'

import { TetrisState } from '@/tetris/slice/tetrisSlice'
import { PIECES } from '@/tetris/consts'

import Grid from '@/tetris/components/Grid'

export default function GridSquares () {
  const tetris = useSelector<RootState, TetrisState>(state => state.tetris)
  const { grid, shape, rotation, x, y } = tetris

  const block = PIECES[shape][rotation]
  const blockColor = shape

  const gridSquares = grid.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      const blockX = col - x
      const blockY = row - y

      const getColor = () => {
        if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
          return block[blockY][blockX] === 0 ? square : blockColor
        }
        return square
      }

      const key = row * grid[0].length + col;

      return (
        <Grid
          key={key}
          color={getColor()} 
        />
      )
    })
  })
  
  return (
    <>
      {gridSquares}
    </>
  )
}