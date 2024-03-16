import store from '../stores/store';

export type CourseType = {
    bgColor: string;
    image: string;
    name: string;
    id: string;
    tags: string[];
}


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
