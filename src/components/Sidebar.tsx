import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTag, showAllTags} from '../slices/coursesSlice';
import './Sidebar.scss';
import {allCourses} from '../selectors/selectors';

const Sidebar = () => {
    const dispatch = useDispatch()
    const courses = useSelector(allCourses)

    const tags = useMemo(() => {
        let result = new Map();

        courses.forEach(({tags}: { tags: string[] }) => {
            for (let i = 0; i < tags.length; i++) {
                result.set(tags[i], tags[i])
            }
        })

        return Array.from(result.values());
    }, [courses])

    const onAllTagsPress = useCallback(() => dispatch(showAllTags()), [dispatch])
    const onTagPress = useCallback((tag: string) => dispatch(selectTag(tag)), [dispatch]);

    return (
        <div className="sidebar">
            <button onClick={onAllTagsPress} className="tag tag_selected">
                Все темы
            </button>
            {tags.map((tag: string) =>
                <button key={tag} onClick={() => onTagPress(tag)} className="tag">
                    {tag}
                </button>
            )}
        </div>
    );
};

export default Sidebar;
