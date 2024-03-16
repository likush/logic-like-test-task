import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../types';

export const selectedTag = (state: RootState) => state.filter.selectedTag;
export const allCourses = (state: RootState) => state.content.content;
export const coursesStatus = (state: RootState) => state.content.loading;

export const selectedTags = createSelector(
    selectedTag,
    allCourses,
    (selectedTag, courses) => {
        if (!selectedTag) return courses;

        return courses.filter(course => course.tags.includes(selectedTag));
    },
)
