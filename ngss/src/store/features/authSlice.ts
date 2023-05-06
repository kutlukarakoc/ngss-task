import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
/* TYPES */
import { ILogin } from '../../types/authTypes'

interface IAuth {
   login: ILogin,
   isLoading: boolean,
   error: string | null
   loginStatus: boolean
}

const initialState: IAuth = {
   login: JSON.parse(`${localStorage.getItem('login')}`) ?? {},
   isLoading: false,
   error: null,
   loginStatus: JSON.parse(`${localStorage.getItem('login')}`) ? true : false
}

export const postAuth = createAsyncThunk(
   'auth/postAuth',
   async (payload: { username: string, password: string }) => {
      const response = await axios.post('https://dummyjson.com/auth/login', payload)
      return response.data
   }
)

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postAuth.pending, (state) => {
         state.isLoading = true
         state.error = null
         state.loginStatus = false
      })
      builder.addCase(postAuth.fulfilled, (state, action) => {
         state.isLoading = false
         state.login = action.payload
         state.loginStatus = true
         localStorage.setItem('login', JSON.stringify(state.login))
      })
      builder.addCase(postAuth.rejected, (state, action) => {
         state.isLoading = false
         state.error = 'Something went wrong. Please try again later.'
         state.loginStatus = false
      })
   }
})

export const auth = (state: RootState) => state.auth.login
export default authSlice.reducer