import {configureStore} from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice'
import {contentReducer} from '../features/contentSlice';

const store = configureStore({
    reducer: {
        filter: filterReducer,
        content: contentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

