var viewitems = {
    logoItem: {
        href: '#',
        title: 'Logo',
        src: require('../../source/img/logo.png'),
        height: '62px',
        width: '292px',
    },
    userItem: {
        userName: 'User',
        enterpriseName: 'Enterprise',
        userSetting: 'User Setting',
        helpCenter: 'Help Center',
        EULA: 'EULA',
        logout: 'Logout',
    },
    sidenavItems: [{
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Depts',
            isActive: false,
        },
        {
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Files',
            isActive: true,
        },
        {
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Shared',
            isActive: false,
        },
        {
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Received',
            isActive: false,
        },
        {
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Share Link',
            isActive: false,
        },
        {
            path: '#',
            iconClass: 'glyphicon-user',
            content: 'Recycle Bin',
            isActive: false,
        },
    ],
};

module.exports = viewitems;
