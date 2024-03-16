import React, {useMemo} from 'react';
import {useCoursesQuery} from '../services/contentApi';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import './Page.scss';

const Page = () => {
    const {isLoading, data} = useCoursesQuery();

    const tagValues = useMemo(() => {
        let result = new Map();

        data?.forEach(({tags}) => {
            for (let i = 0; i < tags.length; i++) {
                result.set(tags[i], tags[i])
            }
        })

        return Array.from(result.values());
    }, [data])


    if (!data) {
        return null
    }

    return (
        <div>
            {isLoading ? 'loading...' :

                <div className="content">
                    <Sidebar data={tagValues}/>

                    <CourseList data={data}/>
                </div>}
        </div>
    )
}

export default Page;
