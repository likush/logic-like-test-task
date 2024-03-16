import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CourseTag, Course} from '../types/types';
import {fetchCourses} from '../actions/content-actions-async';

type State = {
    courses: Course[];
    selectedTag: null | string;
    loading: boolean;
    error: boolean;
}

const initialState: State = {
    selectedTag: null,
    courses: [],
    loading: false,
    error: false,
}

export const coursesSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        selectTag: (state, action: PayloadAction<CourseTag>) => {
            if (state.selectedTag !== action.payload) {
                return {...state, selectedTag: action.payload}
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
                state.error = false;
            })
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourses.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    },
})

export const {selectTag} = coursesSlice.actions

export const coursesReducer = coursesSlice.reducer
