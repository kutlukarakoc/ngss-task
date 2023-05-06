import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
/* TYPES */
import { IUser } from '../../types/userTypes'

interface IUserSlice {
   user: IUser
   isLoading: boolean
   error: string | null
}

const initialState: IUserSlice = {
   user: JSON.parse(`${localStorage.getItem('user')}`) ?? {},
   isLoading: false,
   error: null
}

export const userSlice = ({
   name: 'user',
   initialState,

})