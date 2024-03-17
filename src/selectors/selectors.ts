import {createSelector} from '@reduxjs/toolkit';
import {Course, RootState} from '../types/types';

export const selectedTag = (state: RootState) => state.courses.selectedTag;
export const allCourses = (state: RootState) => state.courses.courses;
export const coursesStatus = (state: RootState) => state.courses.loading;
export const coursesError = (state: RootState) => state.courses.error;

export const selectedCourses = createSelector(
    selectedTag,
    allCourses,
    (selectedTag, courses) => {
        if (!selectedTag) return courses;

        return courses.filter((course: Course) => course.tags.includes(selectedTag));
    },
)
