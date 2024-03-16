import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTag, showAllTags} from '../features/filterSlice';
import {RootState} from '../types';
import './Sidebar.scss';

type Props = {
    // todo: refactor
    data: any;
}

const Sidebar = (props: Props) => {
    const {data} = props;

    const selected = useSelector((state: RootState) => console.log(state))
    const dispatch = useDispatch()

    const onAllTagsPress = useCallback(() => dispatch(showAllTags()), [dispatch])
    const onTagPress = useCallback((tag: string) => dispatch(selectTag(tag)), [dispatch]);

    return (
        <div className="sidebar">
            <button onClick={onAllTagsPress} className="tag tag_selected">
                Все темы
            </button>
            {data.map((tag: string) =>
                <button onClick={() => onTagPress(tag)} className="tag">
                    {tag}
                </button>
            )}
        </div>
    );
};

export default Sidebar;
