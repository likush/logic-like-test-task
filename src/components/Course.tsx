import React from 'react';
import './CourseCard.scss';
import {CourseType} from '../types';

type Props = CourseType;

const Course = (props: Props) => {
    const {name, id, bgColor, image} = props

    return (
        <div className='container'>
            <img
                style={{backgroundColor: bgColor}}
                className='courseImage'
                src={image}
                alt="Logo"
            />
            <p>{name}</p>
        </div>
    );
};

export default Course;
