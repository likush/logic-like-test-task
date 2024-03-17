import {createSelector} from '@reduxjs/toolkit';
import {Course, RootState} from '../types/types';

type SelectedTag =  string | null;
type AllCourses = Course[];

export const selectedTag = (state: RootState): SelectedTag => state.courses.selectedTag;
export const allCourses = (state: RootState): AllCourses => state.courses.courses;
export const coursesStatus = (state: RootState): boolean => state.courses.loading;
export const coursesError = (state: RootState): boolean => state.courses.error;

export const selectedCourses = createSelector(
    selectedTag,
    allCourses,
    (selectedTag: SelectedTag, courses: AllCourses) => {
        if (!selectedTag) return courses;

        return courses.filter((course: Course) => course.tags.includes(selectedTag));
    },
)
