import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from '../types';

const initialState: CounterState = {
    selectedTag: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectTag: (state, action: PayloadAction<string>) => {
            state.selectedTag = action.payload;
        },
        showAllTags: (state) => {
            state.selectedTag = null;
        },

    },
})

export const { selectTag, showAllTags } = filterSlice.actions

export default filterSlice.reducer
