
import { atom } from 'recoil';

export const boardState = atom<Board>({
  key: 'gameBoardState',
  default: []
})

export const boardSizeIndexState = atom<BoardSizeIndex>({
  key: 'gameBoardSizeIndexState',
  default: 0
})

export const sizeState = atom<number>({
  key: 'gameSizeState',
  default: 0
})

export const stepsState = atom<number>({
  key: 'gameStepsState',
  default: 0
})