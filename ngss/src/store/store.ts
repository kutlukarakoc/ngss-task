import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import postsSlice from './features/postsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch