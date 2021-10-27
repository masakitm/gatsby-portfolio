// lightsout
import * as React from "react"
import { clone } from '@/utils'
import { BOARD_SIZES } from '@/game/consts'

// recoil
import { useRecoilState } from 'recoil'
import { boardState, sizeState, stepsState } from '@/game/recoil/gameRecoil'

const { useMemo, useEffect } = React

const isCleared = (board: Board): boolean => board.flat().every((cell: Cell) => cell.status === true)

export function useLightsOut () {
  let id = 0

  // recoil
  const [recoilBoard, setRecoilBoard] = useRecoilState(boardState)
  const [recoilSize, setRecoilSize] = useRecoilState(sizeState)
  const [recoilSteps, setRecoilSteps] = useRecoilState(stepsState)

  // main
  useEffect(() => init(), [recoilSize])

  const allChecked = useMemo(() => isCleared(recoilBoard), [recoilBoard]);
  
  const createRow = (): Row => {
    const row = []

    for (let i = 0; i < recoilSize; i++) {
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
    
    for (let i = 0; i < recoilSize; i++) {
      board.push(createRow())
    }

    return board
  }

  const init = () => {
    if (!recoilSize) {
      setRecoilSize(BOARD_SIZES[0].value)
    }

    setRecoilBoard(createBoard())
    setRecoilSteps(0)
  }
 
  const update = (yi: number, xi: number) => {
    const cloned: Board = clone<Board>(recoilBoard)
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

    setRecoilBoard(cloned)
    setRecoilSteps(recoilSteps + 1)
  }

  return {
    board: recoilBoard,
    size: recoilSize,
    steps: recoilSteps,
    allChecked,
    init,
    update,
    setSize: setRecoilSize
  }
}