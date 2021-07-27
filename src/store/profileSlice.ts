import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProfileState = {
  md: string 
}

const initialState: ProfileState = {
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