import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
import { IPost } from '../../types/postTypes'

interface IPreviousPosts {
   posts: {
      posts: IPost[]
      total: number
      skip: number
      limit: number
   }
   isLoading: boolean
   isError: string | null
}

const initialState: IPreviousPosts = {
   posts: {
      posts: [],
      total: 0,
      skip: 0,
      limit: 0
   },
   isLoading: false,
   isError: null
}

export const fetchPreviousPosts = createAsyncThunk(
   'previousPosts/get',
   async (id: number) => {
      const response = await axios.get(`https://dummyjson.com/users/${id}/posts`)
      return response.data
   }
)

export const previousPostsSlice = createSlice({
   name: 'previosPosts',
   initialState,
   reducers: {
      clearPreviousPosts: (state) => {
         state.posts.posts = []
         state.posts.total = 0
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPreviousPosts.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(fetchPreviousPosts.fulfilled, (state, action) => {
         state.isLoading = false
         state.posts = action.payload
      })
      builder.addCase(fetchPreviousPosts.rejected, (state) => {
         state.isLoading = false
         state.isError = 'Something went wrong. Please try again later.'
      })
   }
})

export const previousPosts = (state: RootState): IPreviousPosts => state.previousPosts
export default previousPostsSlice.reducer
export const { clearPreviousPosts } = previousPostsSlice.actions