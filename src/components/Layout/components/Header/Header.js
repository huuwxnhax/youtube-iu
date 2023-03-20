import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {
    CreatePostIcon,
    CreateVideoIcon,
    GuideIcon,
    LiveIcon,
    LogoIcon,
    NotificationIcon,
    UploadIcon,
} from '../../../Icons/Icons';
import Search from '../Search/Search';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button/Button';
import Menu from '../../../Popper/Menu/Menu';

const cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS_CREATE = [
        {
            title: 'Tải vieo lên',
            icon: <UploadIcon />,
        },
        {
            title: 'Phát trực tiếp',
            icon: <LiveIcon />,
        },
        {
            title: 'Tạo bài đăng',
            icon: <CreatePostIcon />,
        },
    ];

    const handleMenuChange = (menuItem) => {};

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <Button circle>
                        <GuideIcon />
                    </Button>
                    <div className={cx('logo')}>
                        <LogoIcon className={cx('logo-link')} />
                    </div>
                </div>

                {/* search */}
                <Search />

                {/* menu action */}
                <div className={cx('header-right')}>
                    <Menu items={MENU_ITEMS_CREATE} onChange={handleMenuChange}>
                        <Tippy content="Tạo" placement="bottom" arrow={false}>
                            <div>
                                <Button circle>
                                    <CreateVideoIcon />
                                </Button>
                            </div>
                        </Tippy>
                    </Menu>
                    <Tippy content="Thông báo" placement="bottom" arrow={false}>
                        <div>
                            <Button circle>
                                <NotificationIcon />
                            </Button>
                        </div>
                    </Tippy>
                    <button className={cx('user-btn')}>
                        <span className={cx('text')}>N</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
