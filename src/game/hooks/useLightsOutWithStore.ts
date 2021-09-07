// lightsout
import * as React from "react"
import { clone } from '@/utils'
import { BOARD_SIZES } from '@/game/consts'
import { useSelector, useDispatch } from "react-redux";
import { GameState, updateBoard, updateSize, updateSteps } from '@/game/slice/gameSlice'

const { useMemo, useEffect } = React

const isCleared = (board: Board): boolean => board.flat().every((cell: Cell) => cell.status === true)

export function useLightsOut () {
  let id = 0

  // redux
  const dispatch = useDispatch()
  const { board, size, steps } = useSelector<RootState, GameState>(state => state.game)
  
  const setSteps = (payload: number) => dispatch(updateSteps(payload))
  const setSize = (payload: number) => dispatch(updateSize(payload))
  const setBoard = (payload: Board) => dispatch(updateBoard(payload))

  // main
  useEffect(() => init(), [size])

  const allChecked = useMemo(() => isCleared(board), [board]);
  
  const createRow = (): Row => {
    const row = []

    for (let i = 0; i < size; i++) {
      row.push({
        id,
        status: Math.random() >= 0.5
      })
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
    if (!size) {
      setSize(BOARD_SIZES[0].value)
    }

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
    setSteps(steps + 1)
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