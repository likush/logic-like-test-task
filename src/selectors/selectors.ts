import {createSelector} from '@reduxjs/toolkit';
import {CourseType, RootState} from '../types/types';

export const selectedTag = (state: RootState) => state.courses.selectedTag;
export const allCourses = (state: RootState) => state.courses.courses;
export const coursesStatus = (state: RootState) => state.courses.loading;

export const selectedTags = createSelector(
    selectedTag,
    allCourses,
    (selectedTag, courses) => {
        if (!selectedTag) return courses;

        return courses.filter((course: CourseType) => course.tags.includes(selectedTag));
    },
)