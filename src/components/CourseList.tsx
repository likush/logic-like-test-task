import React, {useMemo} from 'react';
import './CourseList.scss';
import {CourseType} from '../types';
import CourseCard from './CourseCard';

type Props = {
    data: CourseType[]
}

const CourseList = (props: Props) => {
    const {data} = props;

    const courses = useMemo(() => {
        return data?.map(item => <CourseCard key={item.id} {...item}/>)
    }, [data])

    return (
        <div className="coursesList">
            {courses}
        </div>
    );
};

export default CourseList;
