import {configureStore} from '@reduxjs/toolkit';
import {coursesReducer} from '../slices/coursesSlice';

const store = configureStore({
    reducer: {
        courses: coursesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

