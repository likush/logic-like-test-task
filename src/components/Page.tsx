import React, {ReactElement, useEffect} from 'react';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import './Page.scss';
import {useDispatch, useSelector} from 'react-redux';
import {coursesError, coursesStatus, selectedCourses} from '../selectors/selectors';
import {AppDispatch} from '../types/types';
import {fetchCourses} from '../actions/content-actions-async';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const Page: React.FC<{}> = (): ReactElement | null => {
    const dispatch = useDispatch<AppDispatch>();
    const courses = useSelector(selectedCourses);
    const isLoading = useSelector(coursesStatus)
    const isError = useSelector(coursesError)

    useEffect(() => {
        dispatch(fetchCourses())
    }, [dispatch])

    if (!isLoading && isError) {
        return <ErrorMessage/>
    }

    if (!courses) {
        return null
    }

    return (
        <main>
            {
                isLoading ? <Loader/> :
                    <div className="content">
                        <Sidebar/>

                        <CourseList data={courses}/>
                    </div>
            }
        </main>
    )
}

export default Page;
