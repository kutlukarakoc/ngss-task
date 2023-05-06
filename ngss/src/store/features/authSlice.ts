import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
import { ILogin } from '../../types/authTypes'
import { IUser } from '../../types/userTypes'

interface IAuth {
    login: ILogin | null
    loginLoading: boolean
    loginError: string | null
    loginStatus: boolean
    user: IUser | null
    userLoading: boolean
    userError: string | null
}

const initialState: IAuth = {
    login: JSON.parse(`${localStorage.getItem('login')}`) ?? {},
    loginLoading: false,
    loginError: null,
    loginStatus: JSON.parse(`${localStorage.getItem('login')}`) ? true : false,
    user: JSON.parse(`${localStorage.getItem('user')}`) ?? {},
    userLoading: false,
    userError: null
}

export const postAuth = createAsyncThunk(
    'auth/postAuth',
    async (payload: { username: string, password: string }) => {
        const response = await axios.post('https://dummyjson.com/auth/login', payload)
        return response.data
    }
)

export const getUserById = createAsyncThunk(
    'auth/getUserById',
    async (userId: number) => {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`)
        return response.data
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearLogin: (state) => {
            state.login = null
            state.loginStatus = false
            localStorage.removeItem('login')
        },
        clearUser: (state) => {
            state.user = null
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postAuth.pending, (state) => {
            state.loginLoading = true
            state.loginError = null
            state.loginStatus = false
        })
        builder.addCase(postAuth.fulfilled, (state, action) => {
            state.loginLoading = false
            state.login = action.payload
            state.loginStatus = true
            localStorage.setItem('login', JSON.stringify(state.login))
        })
        builder.addCase(postAuth.rejected, (state) => {
            state.loginLoading = false
            state.loginError = 'Something went wrong. Please try again later.'
            state.loginStatus = false
        })
        builder.addCase(getUserById.pending, (state) => {
            state.userLoading = true
            state.userError = null
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user))
        })
        builder.addCase(getUserById.rejected, (state) => {
            state.userLoading = false
            state.userError = 'Something went wrong. Please try again later.'
        })
    },
})

export const auth = (state: RootState) => state.auth
export default authSlice.reducer
export const { clearLogin, clearUser } = authSlice.actions
