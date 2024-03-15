import React, {useMemo} from 'react';
import {useCoursesQuery} from '../services/contentApi';
import Course from './Course';

const Page = () => {
    const {isLoading, data, error} = useCoursesQuery();

    const courses = useMemo(() => {
        return data?.map(item => <Course key={item.id} {...item}/>)
    }, [data, isLoading])

    return (
        <div>
            {courses}
        </div>
    );
};

export default Page;
