import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const className = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <div className={cx('menu-item')}>
            <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
