import React from 'react';
import './Sidebar.scss';

type Props = {
    // todo: refactor
    data: any;
}

const Sidebar = (props: Props) => {
    const {data} = props;

    return (
        <div className="sidebar">
            {data.map((tag: string) =>
                <button className="tag">{tag}</button>
            )}
        </div>
    );
};

export default Sidebar;
