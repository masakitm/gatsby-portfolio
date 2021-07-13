// lightsout
import * as React from "react"
const { useMemo, useState, useEffect } = React

import { clone } from '@/utils'
import { BOARD_SIZES } from '@/consts'

const isCleared = (board: Board): boolean => board.flat().every((cell: Cell) => cell.status === true)

export function useLightsOut () {
  let id = 0

  const [board, setBoard] = useState<Board>([])
  const [size, setSize] = useState<number>(BOARD_SIZES[0].value)
  const [steps, setSteps] = useState<number>(0)

  const allChecked = useMemo(() => isCleared(board), [board]);

  useEffect(() => init(), [size])
  
  const createRow = (): Row => {
    const row = []

    for (let i = 0; i < size; i++) {
      row.push(
        {
          id,
          status: Math.random() >= 0.5
        }
      )
      id++
    }

    return row
  }

  const createBoard = (): Board => {
    const board = []
    
    for (let i = 0; i < size; i++) {
      board.push(createRow())
    }

    return board
  }

  const init = () => {
    setBoard(createBoard())
    setSteps(0)
  }
 
  const update = (yi: number, xi: number) => {
    const cloned: Board = clone<Board>(board)
    cloned[yi][xi].status = !cloned[yi][xi].status

    if (cloned[yi - 1]) {
      cloned[yi - 1][xi].status = !cloned[yi - 1][xi].status
    }

    if (cloned[yi + 1]) {
      cloned[yi + 1][xi].status = !cloned[yi + 1][xi].status
    }

    if (cloned[yi][xi - 1]) {
      cloned[yi][xi - 1].status = !cloned[yi][xi - 1].status
    }

    if (cloned[yi][xi + 1]) {
      cloned[yi][xi + 1].status = !cloned[yi][xi + 1].status
    }

    setBoard(cloned)
    setSteps(prevState => prevState + 1)
  }

  return {
    board,
    size,
    steps,
    allChecked,
    init,
    update,
    setSize
  }
}