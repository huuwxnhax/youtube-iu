import styles from './MenuSidebar.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ className, icon, title, src, thump = false, notify = false, onClick }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} onClick={onClick}>
            <span className={cx('icon')}>{icon}</span>
            {thump && (
                <div className={cx('thump')}>
                    {/* eslint-disable-next-line */}
                    <img className={cx('avatar')} src={src} />
                </div>
            )}
            <span className={cx('title')}>{title}</span>
            {notify && <div className={cx('notify')}></div>}
        </NavLink>
    );
}

export default MenuItem;
