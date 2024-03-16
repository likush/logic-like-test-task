import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchData} from '../network/fetch';

export const fetchCourses = createAsyncThunk(
    'courses/getCourses',
    async () => {
        return await fetchData('docs/courses.json')
    })
