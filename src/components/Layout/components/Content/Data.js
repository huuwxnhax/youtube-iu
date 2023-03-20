const DATAS = [
    {
        id_video: 1,
        titleChannel: 'On Ligue 1 In Vietnam',
        linkChannel: 'https://www.youtube.com/@OnLigue1InVietnam',
        avatar: 'https://yt3.ggpht.com/7rQ7FxD6vR83ECSND1fFDuv36n0xPJ2RW2R1PgIZ8IcfDWBxdeABaBP2ynDzgdC9eL-8FJhP=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=AZ6TKJifb3g',
        thumbnail:
            'https://i.ytimg.com/vi/AZ6TKJifb3g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwjjFG6urlckpYMc9PViTYc90YZg',
        hover: 'https://i.ytimg.com/an_webp/AZ6TKJifb3g/mqdefault_6s.webp?du=3000&sqp=CJjo854G&rs=AOn4CLBX_QH_2oD5p1RqwuLbk0Z0mHDWVg',
        time: '12:27',
        title: ' Hightlights Montpellier - PSG | Màn Gánh Team Đỉnh Cao Của Messi Khi PSG Không Có Mbappe và Neymar',
        views: '476 N lượt xem',
        timePost: '14 giờ trước',
    },

    {
        id_video: 2,
        titleChannel: 'TranTonMaiHang',
        linkChannel: 'https://www.youtube.com/@trantonmaihang',
        avatar: 'https://yt3.googleusercontent.com/BI6AADDLViwQY30wIKApLZkZlL_MSRVQ5XjzZnJpH65MtE5Ya-6_LFaHgCPyBw5gOsusgirgNw=s88-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=LlsIFHbBKDo',
        thumbnail:
            'https://i.ytimg.com/vi/LlsIFHbBKDo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALzQv94-RHU0tAkukcIW4AZvWVZw',
        time: '1:27:57',
        title: 'Chill songs that make you feel motivated and relaxed',
        views: '50 N lượt xem',
        timePost: '2 tuần trước',
    },

    {
        id_video: 3,
        titleChannel: 'ĐÔNG TÂY PROMOTION OFFCIAL',
        linkChannel: 'https://www.youtube.com/@dongtaypromotionofficial',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJX-eS0eDbMS4uhqmV71wp6qdM_y9FUYFHwJQKn16w=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=vsSC8tx7huU',
        thumbnail:
            'https://i.ytimg.com/vi/vsSC8tx7huU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh5sI_c1zSpTBBE_gexziyhprXqA',
        time: '1:43:30',
        title: '2 Ngày 1 Đêm Việt Nam | Tập 27: Trường Giang "mất tích", báo anh em giải cứu "xây xẩm mặt mày"',
        views: '866 N lượt xem',
        timePost: '22 giờ trước',
    },

    {
        id_video: 4,
        titleChannel: 'POPS Kids',
        linkChannel: 'https://www.youtube.com/@popskids',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJUG3P0SUwut7bBOEtjiXmtE9VzcmZIZGWk5q7nEwA=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=wr2PlC79yak',
        thumbnail:
            'https://i.ytimg.com/vi/wr2PlC79yak/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhVIGIoZTAP&rs=AOn4CLC6g1LRBIQlK00fP7j20NRkQJuWDQ',
        time: '25:08',
        title: '[S10] Doraemon - Tập 495 - Biển Cá Thành Tàu, Vi Rút Đua Đòi - Hoạt Hình Tiếng Việt',
        views: '555 N lượt xem',
        timePost: '8 giờ trước',
    },

    {
        id_video: 5,
        titleChannel: 'freeCodeCamp.org',
        linkChannel: 'https://www.youtube.com/@freecodecamp',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://youtu.be/ZxMB6Njs3ck',
        thumbnail:
            'https://i.ytimg.com/vi/ZxMB6Njs3ck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDe5xHtRweGLf7h5fey-Yd1ELiCkQ',
        time: '2:23:44',
        title: 'Learn Django by Building an Online Marketplace – Python Tutorial for Beginners',
        views: '26 N lượt xem',
        timePost: '1 ngày trước',
    },

    {
        id_video: 6,
        titleChannel: 'Hoàng Thùy Linh ',
        linkChannel: 'https://www.youtube.com/channel/UCMLVQcgkkFsTR7o8_sMt7lQ',
        avatar: 'https://yt3.ggpht.com/Q_PBorIM6gdCNC0q2VG83jbTMMvzmH_yUNimyqlY_MfN5oMQKBP82F9uGn6Rks2UgYgHnrQSWf4=s88-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=Q6ZNsHvspEg',
        thumbnail:
            'https://i.ytimg.com/vi/Q6ZNsHvspEg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2MB7H38KeXhcPFSi5P4CUe18K3A',
        time: '4:19',
        title: 'Hoàng Thuỳ Linh & ĐEN - Gieo Quẻ (Casting Coins) | Official Music Video',
        views: '51 Tr lượt xem',
        timePost: '1 năm trước',
    },

    {
        id_video: 7,
        titleChannel: 'VJ MUISC',
        linkChannel: 'https://www.youtube.com/@vjmuisc249',
        avatar: 'https://yt3.ggpht.com/9vvPR7FnAcdtQGGTwfyIBlE-laDWEODFpVHY65PnBWzLmVqNeeHv4Cj2Stc2lpfSnlD9-_wPAA=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=s3pdw_8iKg4',
        thumbnail:
            'https://i.ytimg.com/vi/s3pdw_8iKg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdGTPFftGZNeQLa9BwHHvEJxm3KQ',
        time: '8:42',
        title: 'Avatar 2 : The Way Of Water | Trailer 2 | Music',
        views: '39N lượt xem',
        timePost: '2 tháng trước',
    },

    {
        id_video: 8,
        titleChannel: 'estella',
        linkChannel: 'https://www.youtube.com/@estella15',
        avatar: 'https://yt3.ggpht.com/iHLmXPokjrHCnVIsz4MFfGO5BKWGFeMWh4iC8IjXipQB8b5MPpyoMnT5CN-pRZVqjePEVPm5=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=534_TUled-4',
        thumbnail:
            'https://i.ytimg.com/vi/534_TUled-4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF4oTDAP&rs=AOn4CLABC0DO2-RIQpJyu7KtCriOVJHv9w',
        time: '36:49',
        title: 'sometimes i enjoy being alone pt.2 ~ a playlist',
        views: '213 N lượt xem',
        timePost: '3 tuần trước',
    },

    {
        id_video: 9,
        titleChannel: 'THỎ BẢY MÀU',
        linkChannel: 'https://www.youtube.com/@thobaymauofficial',
        avatar: 'https://yt3.ggpht.com/nUn1DIIVQtqxdI5ubE_O8VhmT38NTA_7vIhS__sZsJfunY1uheawMvatoP9WMKu9nF8thJHK1g=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=U_6xHKGf3Ho',
        thumbnail:
            'https://i.ytimg.com/vi/U_6xHKGf3Ho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4wlXjCMa99Srx_hvbeX5f1euhoQ',
        time: '21:14',
        title: 'THỎ BẢY MÀU | THẦN BÀI MIỀN TÂY | HOẠT HÌNH TẾT 2023    ',
        views: '11 Tr lượt xem',
        timePost: '2 tuần trước',
    },

    {
        id_video: 10,
        titleChannel: 'Kent Survival',
        linkChannel: 'https://www.youtube.com/@KentSurvival',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJVoxIgNAmQ9XdWLlKJoeDlxQMFnWZ1eYUGkr9rq=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=8HZWw-LqXkI',
        thumbnail:
            'https://i.ytimg.com/vi/8HZWw-LqXkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPRh2Eo5QmAS9HJ3Hj-aFK4OjNrA',
        time: '22:51',
        title: 'Biggest Bushcraft Breakfast cooked on a Rock in the Rain',
        views: '12 Tr lượt xem',
        timePost: '2 năm trước',
    },
    {
        id_video: 11,
        titleChannel: 'Music Store',
        linkChannel: 'https://www.youtube.com/@MusicStoreLabel',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJUJpjVwcbl67lG5JXklG5WfclbefI82if6Q1k3D=s68-c-k-c0x00ffffff-no-rjv',
        video: 'https://www.youtube.com/watch?v=r-NbrmDClLE',
        thumbnail:
            'https://i.ytimg.com/vi/r-NbrmDClLE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhCIFIoZTAP&rs=AOn4CLC8kGkm39lyqrlZ3qXt1m00yFOM_Q',
        hover: '',
        time: '1:03:04',
        title: 'Top 20 songs of TheFatRat 2020 - TheFatRat Mega Mix',
        views: '5,4 Tr lượt xem',
        timePost: '2 năm trước',
    },
    {
        id_video: 12,
        titleChannel: 'HIEUTHUHAI',
        linkChannel: 'https://www.youtube.com/channel/UCe8b9jSSD-bNabF4hkNN5PQ',
        avatar: 'https://yt3.ggpht.com/j3oOk3XnBJv9zQFrVIeeqIagDlh48B81b_N3a1vzI5JJNZrWz6zLgsHomRcbAcdHkN5_sl3nUNM=s88-c-k-c0x00ffffff-no-rjv',
        video: 'https://www.youtube.com/watch?v=TTwlhJzXHo4',
        thumbnail:
            'https://i.ytimg.com/vi/TTwlhJzXHo4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAacHO8ItP9nSrg_0AdYaO3DkLTbw',
        hover: '',
        time: '4:01',
        title: 'HIEUTHUHAI - Vệ Tinh ft. Hoàng Tôn (prod. by Kewtiie) | OFFICIAL MVHIEUTHUHAI - Vệ Tinh ft. Hoàng Tôn (prod. by Kewtiie) | OFFICIAL MV',
        views: '21 Tr lượt xem',
        timePost: '6 tháng trước',
    },
];

const DATAS_MUSIC = [
    {
        id_video: 1,
        titleChannel: 'Our Memories',
        linkChannel: 'https://www.youtube.com/@ourmemories',
        avatar: 'https://yt3.ggpht.c',
        video: 'https://www.youtube.com/watch?v=GSw3vfveBv0',
        thumbnail: 'https://i.ytimg.com/vi/GSw3vfveBv0/hq720.jpg?s',
        hover: '',
        time: '1:06:55',
        title: 'English Songs Playlist ♫ Acoustic Cover Of Popular TikTok Songs ♫ English Love Song',
        views: '18 N lượt xem',
        timePost: '12 giờ trước',
    },

    {
        id_video: 2,
        titleChannel: 'TranTonMaiHang',
        linkChannel: 'https://www.youtube.com/@trantonmaihang',
        avatar: 'https://yt3.googleusercontent.com/BI6AADDLViwQY30wIKApLZkZlL_MSRVQ5XjzZnJpH65MtE5Ya-6_LFaHgCPyBw5gOsusgirgNw=s88-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=LlsIFHbBKDo',
        thumbnail:
            'https://i.ytimg.com/vi/LlsIFHbBKDo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALzQv94-RHU0tAkukcIW4AZvWVZw',
        time: '1:27:57',
        title: 'Chill songs that make you feel motivated and relaxed',
        views: '50 N lượt xem',
        timePost: '2 tuần trước',
    },

    {
        id_video: 3,
        titleChannel: 'Music Store',
        linkChannel: 'https://www.youtube.com/@MusicStoreLabel',
        avatar: 'https://yt3.ggpht.com/ytc/AL5GRJUJpjVwcbl67lG5JXklG5WfclbefI82if6Q1k3D=s68-c-k-c0x00ffffff-no-rjv',
        video: 'https://www.youtube.com/watch?v=r-NbrmDClLE',
        thumbnail:
            'https://i.ytimg.com/vi/r-NbrmDClLE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhCIFIoZTAP&rs=AOn4CLC8kGkm39lyqrlZ3qXt1m00yFOM_Q',
        hover: '',
        time: '1:03:04',
        title: 'Top 20 songs of TheFatRat 2020 - TheFatRat Mega Mix',
        views: '5,4 Tr lượt xem',
        timePost: '2 năm trước',
    },
    {
        id_video: 4,
        titleChannel: 'HIEUTHUHAI',
        linkChannel: 'https://www.youtube.com/channel/UCe8b9jSSD-bNabF4hkNN5PQ',
        avatar: 'https://yt3.ggpht.com/j3oOk3XnBJv9zQFrVIeeqIagDlh48B81b_N3a1vzI5JJNZrWz6zLgsHomRcbAcdHkN5_sl3nUNM=s88-c-k-c0x00ffffff-no-rjv',
        video: 'https://www.youtube.com/watch?v=TTwlhJzXHo4',
        thumbnail:
            'https://i.ytimg.com/vi/TTwlhJzXHo4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAacHO8ItP9nSrg_0AdYaO3DkLTbw',
        hover: '',
        time: '4:01',
        title: 'HIEUTHUHAI - Vệ Tinh ft. Hoàng Tôn (prod. by Kewtiie) | OFFICIAL MVHIEUTHUHAI - Vệ Tinh ft. Hoàng Tôn (prod. by Kewtiie) | OFFICIAL MV',
        views: '21 Tr lượt xem',
        timePost: '6 tháng trước',
    },
    {
        id_video: 5,
        titleChannel: 'Kyo',
        linkChannel: 'https://www.youtube.com/@qingyahttps://www.youtube.com/@qingya',
        avatar: 'https://yt3.ggpht.com/B8tq0NXjJimIw6AjjjLcFp5RXxQojQRXEsjKM1K-CnbLA0d7mjvoRIGhrUsXRM9bsIx7snct2w=s68-c-k-c0x00ffffff-no-rj',
        video: 'https://www.youtube.com/watch?v=edrrcIXEIjI',
        thumbnail:
            'https://i.ytimg.com/vi/edrrcIXEIjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxjxJGWNWWsZ-86-hW_BRDi0z0Ughttps://i.ytimg.com/vi/edrrcIXEIjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxjxJGWNWWsZ-86-hW_BRDi0z0Ug',
        hover: '',
        time: '3:43',
        title: 'Falling You - Trương Tịnh Nghi & Trần Phi Vũ | Falling You - 张婧仪 & 陈飞宇',
        views: '1,2 Tr lượt xem',
        timePost: '2 tháng trước',
    },
];

const DATAS_GAME = [{}];
const DATAS_LIVESTREAM = [{}];
const DATAS_COOKING = [{}];
const DATAS_CARTOON = [{}];
const DATAS_FOOTBALL = [{}];
const DATAS_NATURE = [{}];
const DATAS_NEW = [{}];
const DATAS_WATCHED = [{}];
const DATAS_POPULAR = [{}];
const DATAS_ACTION_GAME = [{}];

export const ITEMS = [
    {
        id: 1,
        title: 'Tất cả',
        content: [...DATAS],
    },
    {
        id: 2,
        title: 'Âm nhạc',
        content: [...DATAS_MUSIC],
    },
    {
        id: 3,
        title: 'Trò chơi',
        content: [...DATAS_GAME],
    },
    {
        id: 4,
        title: 'Trực tiếp',
        content: [...DATAS_LIVESTREAM],
    },
    {
        id: 5,
        title: 'Nấu ăn',
        content: [...DATAS_COOKING],
    },
    {
        id: 6,
        title: 'Hoạt hình',
        content: [...DATAS_CARTOON],
    },
    {
        id: 7,
        title: 'Bóng đá',
        content: [...DATAS_FOOTBALL],
    },
    {
        id: 8,
        title: 'Thiên nhiên',
        content: [...DATAS_NATURE],
    },
    {
        id: 9,
        title: 'Mới tải lên gần đây',
        content: [...DATAS_NEW],
    },
    {
        id: 10,
        title: 'Đã xem',
        content: [...DATAS_WATCHED],
    },
    {
        id: 11,
        title: 'Thịnh hành',
        content: [...DATAS_POPULAR],
    },

    {
        id: 12,
        title: 'Trò chơi hành động phiêu lưu',
        content: [...DATAS_ACTION_GAME],
    },
];
