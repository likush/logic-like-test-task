import React from 'react';
import {useCoursesQuery} from '../services/contentApi';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import './Page.scss';


const Page = () => {
    const {isLoading, data, error} = useCoursesQuery();

    if (!data) {
        return null
    }

    return (
        <div>
            {isLoading ? 'loading...' :

                <div className="content">
                    <Sidebar/>

                    <CourseList data={data}/>
                </div>}
        </div>
    )
}

export default Page;
