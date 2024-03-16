import React, {useMemo} from 'react';
import './CourseCard.scss';
import {Course} from '../types/types';

const CourseCard = (props: Course) => {
    const {name, bgColor, image} = props

    const backgroundColor = useMemo(() => ({backgroundColor: bgColor}), [bgColor])

    return (
        <div className='course'>
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
