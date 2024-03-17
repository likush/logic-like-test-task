import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from './types/types';
import {coursesError, coursesStatus, selectedCourses} from './selectors/selectors';
import {fetchCourses} from './actions/content-actions-async';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import CourseList from './components/CourseList';
import './App.scss';

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const courses = useSelector(selectedCourses);
    const isLoading = useSelector(coursesStatus)
    const isError = useSelector(coursesError)

    useEffect(() => {
        dispatch(fetchCourses())
    }, [dispatch])

    if (isLoading) {
        return <Loader/>
    }

    if (!isLoading && isError) {
        return <ErrorMessage/>
    }

    if (!isLoading && courses.length > 0) {
        return (
            <main>
                <div className="content">
                    <Sidebar/>

                    <CourseList/>
                </div>
            </main>
        )
    }

    return null;
}

export default App;
