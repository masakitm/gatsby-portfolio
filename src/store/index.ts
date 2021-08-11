import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from '@/game/slice/gameSlice'
import { profileSlice } from '@/profile/slice/profileSlice'
import { tetrisSlice } from '@/tetris/slice/tetrisSlice'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    profile: profileSlice.reducer,
    tetris: tetrisSlice.reducer
  }
})

