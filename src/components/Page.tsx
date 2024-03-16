import React, {useEffect} from 'react';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import './Page.scss';
import {useDispatch, useSelector} from 'react-redux';
import {coursesStatus, selectedCourses} from '../selectors/selectors';
import {AppDispatch} from '../types/types';
import {fetchCourses} from '../actions/content-actions-async';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const courses = useSelector(selectedCourses);
    const isLoading = useSelector(coursesStatus)

    useEffect(() => {dispatch(fetchCourses())}, [dispatch])

    if (!courses) {
        return null
    }

    return (
        <div>
            {isLoading ? 'loading...' :
                <div className="content">
                    <Sidebar/>

                    <CourseList data={courses}/>
                </div>}
        </div>
    )
}

export default Page;
