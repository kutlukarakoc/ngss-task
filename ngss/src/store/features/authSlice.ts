import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';
/* TYPES */
import { IUser } from '../../types/userTypes';

interface IAuth {
   user: IUser,
   isLoading: boolean,
   error: string | null
}

const initialState: IAuth = {
   user: JSON.parse(`${localStorage.getItem('user')}`) ?? {},
   isLoading: false,
   error: null
}

export const postAuth = createAsyncThunk(
   'auth/postAuth',
   async (payload: { username: string, password: string }) => {
      const response = await axios.post('https://dummyjson.com/auth/login', payload);
      return response.data;
   }
);

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postAuth.pending, (state) => {
         state.isLoading = true;
         state.error = null;
      });
      builder.addCase(postAuth.fulfilled, (state, action) => {
         state.isLoading = false;
         state.user = action.payload;
         localStorage.setItem('user', JSON.stringify(state.user));
      });
      builder.addCase(postAuth.rejected, (state, action) => {
         state.isLoading = false;
         state.error = 'Something went wrong. Please try again later.';
      });
   }
});

export const auth = (state: RootState) => state.auth.user;
export default authSlice.reducer;