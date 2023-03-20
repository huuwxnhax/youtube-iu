{
    ITEMS.forEach((item) => {
        if (item.id === 1 && Array.isArray(item.content)) {
            console.log(item.id);
            item.content.map((data) => (
                <div className={cx('container')} key={data.id_video}>
                    {/* link video */}
                    <a href={data.video}>
                        <div className={cx('thumbnail')}>
                            {/* eslint-disable-next-line */}
                            <img className={cx('thumbnail-img')} src={data.thumbnail} />
                            <span className={cx('overlay-time')}>{data.time}</span>
                        </div>
                    </a>

                    <div className={cx('details')}>
                        <div className={cx('thumb')}>
                            <a href={data.linkChannel}>
                                {/* eslint-disable-next-line */}
                                <img className={cx('avatar')} src={data.avatar} />
                            </a>
                        </div>
                        <div>
                            <a className={cx('title-link')} href={data.video}>
                                <h3 className={cx('title-video')}>{data.title}</h3>
                            </a>
                            <div>
                                <a className={cx('title-channel')} href={data.linkChannel}>
                                    <span>{data.titleChannel}</span>

                                    {/* check icon */}
                                    {!!icon && (
                                        <span className={cx('icon')}>
                                            <CheckIcon />
                                        </span>
                                    )}
                                </a>
                                <div className={cx('views')}>
                                    <span>{data.views}</span>
                                    <span>{data.timePost}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        }
    });
}

{
    test = [id_video, video, thumbnail, time, linkChannel, avatar, title, titleChannel, views, timePost];
}
