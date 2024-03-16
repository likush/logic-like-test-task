import React, {useMemo} from 'react';
import './CourseCard.scss';
import {CourseType} from '../types';

const CourseCard = (props: CourseType) => {
    const {name, bgColor, image} = props

    const backgroundColor = useMemo(() => ({backgroundColor: bgColor}), [bgColor])

    return (
        <div className='container'>
            <img
                style={backgroundColor}
                className='img'
                src={image}
                alt={name}
            />
            <p className='title'>{name}</p>
        </div>
    );
};

export default CourseCard;
