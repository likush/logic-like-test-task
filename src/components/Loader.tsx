import React from 'react';
import './Loader.scss';

const LOADER_ITEMS = 12;

const Loader = () => {

    const loaderItems = Array(LOADER_ITEMS).fill(null);

    return (
        <div className="loader">
            {loaderItems.map((_, index) => <div key={index}/>)}
        </div>
    );
};

export default Loader;
