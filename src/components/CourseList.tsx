import React, {ReactElement, useMemo} from 'react';
import './CourseList.scss';
import {Course} from '../types/types';
import CourseCard from './CourseCard';

type Props = {
    data: Course[]
}

const CourseList: React.FC<Props> = (props): ReactElement => {
    const {data} = props;

    const courses = useMemo(() => {
        return data?.map(item => <CourseCard key={item.id} {...item}/>)
    }, [data])

    return (
        <div className="courses-list">
            {courses}
        </div>
    );
};

export default CourseList;
