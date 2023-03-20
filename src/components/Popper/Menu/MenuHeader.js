import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuHeader({ title, onBack }) {
    return (
        <header>
            <Button circle onClick={onBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default MenuHeader;
