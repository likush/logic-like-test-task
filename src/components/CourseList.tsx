import React, {ReactElement, useMemo} from 'react';
import './CourseList.scss';
import CourseCard from './CourseCard';
import {useSelector} from 'react-redux';
import {selectedCourses} from '../selectors/selectors';

const CourseList: React.FC<{}> = (): ReactElement => {
    const data = useSelector(selectedCourses);

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
