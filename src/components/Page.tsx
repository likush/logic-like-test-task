import React, {useEffect, useMemo} from 'react';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import './Page.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCourses} from '../features/contentSlice';
import {allCourses, coursesStatus} from '../selectors/selectors';

const Page = () => {
    const dispatch = useDispatch();
    const courses = useSelector(allCourses)
    const isLoading = useSelector(coursesStatus)

    useEffect(() => {
        dispatch(fetchCourses())
    }, [dispatch])

    const tagValues = useMemo(() => {
        let result = new Map();

        courses?.forEach(({tags}: {tags: string[]}) => {
            for (let i = 0; i < tags.length; i++) {
                result.set(tags[i], tags[i])
            }
        })

        return Array.from(result.values());
    }, [courses])

    if (!courses) {
        return null
    }

    return (
        <div>
            {isLoading ? 'loading...' :

                <div className="content">
                    <Sidebar data={tagValues}/>

                    <CourseList data={courses}/>
                </div>}
        </div>
    )
}

export default Page;
