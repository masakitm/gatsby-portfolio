import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { md: string } = {
  md: ''
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateMd: (state, action: PayloadAction<string>) => {
      state.md = action.payload
    }
  }
})

export const { updateMd } = profileSlice.actions