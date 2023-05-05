import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IUser {
   user: any
}

const initialState: IUser = {
   user: JSON.parse(`${localStorage.getItem('user')}`) ?? {}
}

export const slice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      name: (state, action: PayloadAction<any>) => {

      }
   }
})

export const { name } = slice.actions
export const auth  = (state: RootState) => state.auth.user
export default slice.reducer