import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import type { RootState } from '../store'
import { IUser } from '../../types/userTypes'
import { IPost } from '../../types/postTypes'

interface IPostWithUser  {
    user: IUser[]
    posts: IPost[]
    isLoading: boolean
    isError: string | null
}

const initialState: IPostWithUser = {
    user: [],
    posts: [],
    isLoading: false,
    isError: null,
}

/* an async thunk that fetches posts and users from an API */
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (skip: number) => {
        const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${skip}`)
        const posts: IPost[] = await response.data.posts

        /* get all users who are related to the posts that were fetched */
        /* used Promise.allSettled to wait for all the promises to complete and then starts processing them all at once */
        const userResponses = await Promise.allSettled(
            posts.map(post => axios.get(`https://dummyjson.com/users/${post.userId}`))
        )
        /* filter users response if its only fulfilled and add it to users variable */
        const users: IUser[] = userResponses
            .filter((response): response is PromiseFulfilledResult<AxiosResponse<IUser>> => response.status === 'fulfilled')
            .map(response => response.value.data)

        /* combine the users and the posts that were matched by  */
        const postsWithUsers: IPost[] = posts.map(post => {
            const user = users.find(user => user.id === post.userId)
            return { ...post, user }
        })

        return postsWithUsers
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            let newPosts = action.payload
            /* filter item if already exists in state */
            const filteredPosts = newPosts.filter(newPost => !state.posts.some((post) => post.id === newPost.id))
            state.posts = [...state.posts, ...filteredPosts]
        })

        builder.addCase(fetchPosts.rejected, (state) => {
            state.isLoading = false
            state.isError = 'Something went wrong. Please try again later.'
        })
    },
})

export const posts = (state: RootState) => state.posts
export default postsSlice.reducer
