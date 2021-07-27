type CssValue =  string | number

type Style = {
  [cssProperties: string]: CssValue
}

type Cell = {
  status: boolean,
  id: number 
}

type Row = [] | Cell[]
type Board = [] | Row[]

type Empty = null | undefined

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch
