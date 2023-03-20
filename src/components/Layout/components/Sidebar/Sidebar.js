import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import {
    AblumICon,
    AddIcon,
    CreaterStudioIcon,
    FeedbackIcon,
    GameIcon,
    HelpIcon,
    HomePageIcon,
    LibraryIcon,
    MusicIcon,
    NewsIcon,
    PopularIcon,
    ReportIcon,
    SettingIcon,
    ShortIcon,
    SportIcon,
    SubribeChannelIcon,
    VideoWatchedIcon,
    WatchLaterICon,
    YourVideoIcon,
    YoutubeKidsIcon,
    YoutubeMusicIcon,
    YoutubeTVIcon,
} from '../../../Icons/Icons';
import MenuSidebar, { MenuItem } from './MenuSidebar';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        Id: 1,
        title: 'Thư viện',
        icon: <LibraryIcon />,
    },
    {
        Id: 2,
        title: 'Video đã xem',
        icon: <VideoWatchedIcon />,
    },
    {
        Id: 3,
        title: 'Video của bạn',
        icon: <YourVideoIcon />,
    },
    {
        Id: 4,
        title: 'Xem sau',
        icon: <WatchLaterICon />,
    },
    {
        Id: 5,
        title: 'Nhạc chill',
        icon: <AblumICon />,
    },
];

function Sidebar() {
    const [showMore, setShowMore] = useState(false);
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItem title="Trang chủ" icon={<HomePageIcon />} />
                <MenuItem title="Shorts" icon={<ShortIcon />} />
                <MenuItem title="Kênh đăng ký" icon={<SubribeChannelIcon />} />
                <p className={cx('separate')}></p>
            </MenuSidebar>

            <MenuSidebar>
                {MENU_ITEMS.slice(0, showMore ? MENU_ITEMS.length : 5).map((item) => (
                    <MenuItem title={item.title} icon={item.icon} key={item.Id} />
                ))}
                {/* <MenuItem title="Thư viện" icon={<LibraryIcon />} />
                <MenuItem title="Video đã xem" icon={<VideoWatchedIcon />} />
                <MenuItem title="Video của bạn" icon={<YourVideoIcon />} />
                <MenuItem title="Xem sau" icon={<WatchLaterICon />} />
                <MenuItem title="Nhạc chill" icon={<AblumICon />} /> */}
                <MenuItem
                    title={showMore ? 'Ẩn bớt' : 'Thêm'}
                    icon={<AddIcon />}
                    onClick={(e) => {
                        setShowMore(!showMore);
                    }}
                />
                <p className={cx('separate')}></p>
            </MenuSidebar>
            <MenuSidebar>
                <h3 className={cx('menu-header')}>Kênh đăng ký</h3>

                <MenuItem
                    thump
                    notify
                    title="Mixigaming"
                    src="https://yt3.ggpht.com/ytc/AL5GRJUyZLSndhcJ_YiOnY9DuRp0Fznif8p4gdeVceARdQ=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    title="MixiChill"
                    src="https://yt3.ggpht.com/ytc/AL5GRJWBMX3E0fMBnXaMsd-zKkTilS_Y1QgWXfDRv9GTxg=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    title="Goose Dev"
                    src="https://yt3.ggpht.com/QUn85L9x2zznmNa6xCjYGZE45N1BeYNIdcHTo4YCzD3vPTpyvmJUl_uGQidWLM396Sypr6nxBYY=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    notify
                    title="Bro Code"
                    src="https://yt3.ggpht.com/ytc/AL5GRJXev2NIsDYSbxtF7rhC4IaUr8B6MiGw1B5plnmPug=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    notify
                    title="FreeCodeCamp"
                    src="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    notify
                    title="Web Dev Simplified"
                    src="https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem
                    thump
                    title="Rapital Offcial"
                    src="https://yt3.ggpht.com/KW6KcdBpMQ67BeZi5ufFN3mSQJ5F0NEJ-_TCtXOx50tNxhEqFaMFejMvoqDOzpITXECjxdwLdQ=s88-c-k-c0x00ffffff-no-rj"
                />

                <MenuItem title="Hiển thị thêm 30 mục nữa" icon={<AddIcon />} />
                <p className={cx('separate')}></p>
            </MenuSidebar>

            <MenuSidebar>
                <h3 className={cx('menu-header')}>Khám phá</h3>
                <MenuItem title="Thịnh hành" icon={<PopularIcon />} />
                <MenuItem title="Âm nhạc" icon={<MusicIcon />} />
                <MenuItem title="Trò chơi" icon={<GameIcon />} />
                <MenuItem title="Tin tức" icon={<NewsIcon />} />
                <MenuItem title="Thể thao" icon={<SportIcon />} />
                <p className={cx('separate')}></p>
            </MenuSidebar>

            <MenuSidebar>
                <h3 className={cx('menu-header')}>Dịch vụ khác của Youtube</h3>
                <MenuItem title="Creator Studio" icon={<CreaterStudioIcon />} />
                <MenuItem title="Youtube Music" icon={<YoutubeMusicIcon />} />
                <MenuItem title="Youtube Kids" icon={<YoutubeKidsIcon />} />
                <MenuItem title="Youtube TV" icon={<YoutubeTVIcon />} />
                <p className={cx('separate')}></p>
            </MenuSidebar>

            <MenuSidebar>
                <MenuItem title="Cài đặt" icon={<SettingIcon />} />
                <MenuItem title="Nhật ký báo cáo" icon={<ReportIcon />} />
                <MenuItem title="Trợ giúp" icon={<HelpIcon />} />
                <MenuItem title="Gửi ý kiến phản hồi" icon={<FeedbackIcon />} />
                <p className={cx('separate')}></p>
            </MenuSidebar>

            <p className={cx('footer')}>
                Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo Quảng cáo Nhà phát triển
            </p>
            <p className={cx('footer')}>
                Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt động Thử các tính năng mới
            </p>
            <p>© 2023 Google LLC</p>
        </aside>
    );
}

export default Sidebar;
