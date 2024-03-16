import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {CourseType} from '../types';

const baseUrl = 'https://logiclike.com/docs/'

type initialStateType = {
    content: CourseType[];
    loading: boolean;
    error: boolean;
}

const initialState: initialStateType = {
    content: [],
    loading: false,
    error: false,
}

export const fetchCourses = createAsyncThunk(
    'content/getContent',
    async () => {
        const res = await fetch(`${baseUrl}/courses.json`)
        return await res.json()
    })

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.content = action.payload;
            })
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourses.rejected, (state) => {
                state.loading = false;
            })
    },
})

export const contentReducer = contentSlice.reducer
