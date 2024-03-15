import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CourseType} from '../types';

const baseUrl = 'https://logiclike.com/docs/'

export const contentApi = createApi({
    reducerPath: 'contentApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        courses: builder.query<CourseType[], void>({
            query: () => '/courses.json',
        }),
    })
})

export const {useCoursesQuery} = contentApi;
