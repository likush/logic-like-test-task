import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CourseType} from '../types/types';
import {fetchCourses} from '../actions/content-actions-async';

type State = {
    courses: CourseType[];
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
        selectTag: (state, action: PayloadAction<string>) => {
            state.selectedTag = action.payload;
        },
        showAllTags: (state) => {
            state.selectedTag = null;
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

export const {selectTag, showAllTags} = coursesSlice.actions

export const coursesReducer = coursesSlice.reducer
