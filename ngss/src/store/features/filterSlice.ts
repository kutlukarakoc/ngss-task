import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
import { IUser } from '../../types/userTypes'

interface IFilter {
	filteredUsers: IUser[]
	isLoading: boolean
	isError: string | null
}

interface IFilterParams {
	filterKey: string,
	filterValue: string | number
}

const initialState: IFilter = {
	filteredUsers: [],
	isLoading: false,
	isError: null
}

export const filterUser = createAsyncThunk(
	'filter/getUsers',
	async ({ filterKey, filterValue }: IFilterParams) => {
		const response = await axios.get(`https://dummyjson.com/users/filter?key=${filterKey}&value=${filterValue}`)
		return response.data
	}
)

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(filterUser.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(filterUser.fulfilled, (state, action) => {
			state.isLoading = false
			state.filteredUsers = action.payload
		})
		builder.addCase(filterUser.rejected, (state) => {
			state.isLoading = false
			state.isError = 'Something went wrong. Please try again later.'
		})
	}
})

export const filter = (state: RootState): IFilter => state.filter
export default filterSlice.reducer