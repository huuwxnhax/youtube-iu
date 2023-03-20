import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayoyut.module.scss';
import classNames from 'classnames/bind';
import TabMenu from '../components/TabMenu/TabMenu';
// import Content from '../components/Content/Content';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <TabMenu />
                    {children}
                    {/* <Content /> */}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
