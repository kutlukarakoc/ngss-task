import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import postsSlice from './features/postsSlice'
import filterSlice from './features/filterSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice,
      posts: postsSlice,
      filter: filterSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch