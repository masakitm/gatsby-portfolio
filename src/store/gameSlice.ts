import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GameState =  {
  board: Board,
  size: number,
  steps: number
} 

const initialState: GameState = {
  board: [],
  size: 0,
  steps: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<Board>) => {
      state.board = action.payload
    },
    updateSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
    },
    updateSteps: (state, action: PayloadAction<number>) => {
      state.steps = action.payload
    }
  }
})

export const { updateBoard, updateSize, updateSteps } = gameSlice.actions