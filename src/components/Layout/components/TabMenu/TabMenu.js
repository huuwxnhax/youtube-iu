import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Button from '../../../Button/Button';
import styles from './TabMenu.module.scss';
import { ITEMS } from '../Content/Data';
import Content from '../Content/Content';

const cx = classNames.bind(styles);

function TabMenu() {
    const [tabActive, setTabActive] = useState(ITEMS[0].id);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);

    const handleNextScroll = () => {
        setScrollLeft(scrollLeft - 100);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Fragment>
            <div className={cx('wrapper')}>
                <div className={cx('container')} style={{ marginLeft: `${scrollLeft}` }}>
                    <div className={cx('tabs-content')}>
                        {ITEMS.map((item) => (
                            <button
                                className={cx('menu-btn', { active: tabActive === item.id })}
                                key={item.id}
                                onClick={() => setTabActive(item.id)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    {width < 1820 && (
                        <div className={cx('scroll')}>
                            <Button circle onClick={handleNextScroll}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <Content tabActive={tabActive} />
        </React.Fragment>
    );
}

export default TabMenu;
