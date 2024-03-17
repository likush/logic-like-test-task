import React, {ReactElement, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTag} from '../slices/coursesSlice';
import './Sidebar.scss';
import {allCourses, selectedTag} from '../selectors/selectors';
import {CourseTag} from '../types/types';

const Sidebar: React.FC<{}> = (): ReactElement => {
    const dispatch = useDispatch()
    const courses = useSelector(allCourses)
    const selectedValue = useSelector(selectedTag)

    const tags = useMemo(() => {
        let result = new Map();

        courses.forEach(({tags}: { tags: string[] }) => {
            for (let i = 0; i < tags.length; i++) {
                result.set(tags[i], tags[i])
            }
        })

        return Array.from(result.values());
    }, [courses])

    const onTagPress = useCallback((tag: CourseTag) => dispatch(selectTag(tag)), [dispatch]);

    const getTagClassnames = (value: CourseTag) => `tag ${value === selectedValue ? 'tag_selected' : ''}`

    return (
        <aside className="sidebar">
            <button onClick={() => onTagPress(null)} className={getTagClassnames(null)}>
                Все темы
            </button>
            {tags.map((tag: string) =>
                <button onClick={() => onTagPress(tag)}
                        className={getTagClassnames(tag)}
                        key={tag}>
                    {tag}
                </button>
            )}
        </aside>
    );
};

export default Sidebar;
