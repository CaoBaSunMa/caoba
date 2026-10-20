// SidebarMenu.js
import * as Icons from '@tabler/icons-svelte';
import HkBadge from '../../hk-components/@hk-badge/HkBadge.svelte';

export const SidebarMenu = [
    {
        group: '',
        contents: [
            {
                name: '仪表盘',
                icon: Icons.IconTemplate,
                path: '/dashboard',
                badge: {
                    component: HkBadge,
                    props: { size: "sm", bg: "pink", soft: true, class: "ms-auto" },
                    text: "热"
                }
            },
        ]
    },
    {
        group: '应用',
        contents: [
            {
                id: 'dash_chat',
                name: '聊天',
                icon: Icons.IconMessageDots,
                path: '/apps/chat/',
                childrens: [
                    {
                        name: '聊天记录',
                        path: '/apps/chat/chats',
                        grp_name: "apps",
                    },
                    {
                        name: '群组',
                        path: '/apps/chat/group',
                        grp_name: "apps",
                    },
                    {
                        name: '联系人',
                        path: '/apps/chat/contact',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: 'dash_chatpop',
                name: '聊天弹窗',
                icon: Icons.IconMessageCircle,
                path: '/apps/chat-popup/',
                childrens: [
                    {
                        name: '私信',
                        path: '/apps/chat-popup/direct-message',
                        grp_name: "apps",
                    },
                    {
                        name: '聊天机器人',
                        path: '/apps/chat-popup/chat-bot',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: 'dash_calendar',
                name: '日历',
                icon: Icons.IconCalendarTime,
                path: '/apps/calendar',
                grp_name: "apps",
            },
            {
                name: '邮件',
                icon: Icons.IconInbox,
                path: '/apps/email',
                grp_name: "apps",
            },
            {
                id: "dash_scrumboard",
                name: 'Scrum看板',
                icon: Icons.IconLayoutKanban,
                path: '/apps/scrumboard/',
                iconBadge: {
                    component: HkBadge,
                    props: { bg: "primary", size: "sm", pill: true, class: "position-top-end-overflow" },
                    text: "3"
                },
                childrens: [
                    {
                        name: '所有看板',
                        path: '/apps/scrumboard/project-board',
                        grp_name: "apps",
                    },
                    {
                        name: '项目看板',
                        path: '/apps/scrumboard/kanban-board',
                        grp_name: "apps",
                    },
                    {
                        name: '流程看板',
                        path: '/apps/scrumboard/pipeline',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_contact",
                name: '联系人',
                icon: Icons.IconNotebook,
                path: '/apps/contact/',
                childrens: [
                    {
                        name: '联系人列表',
                        path: '/apps/contact/contact-list',
                        grp_name: "apps",
                    },
                    {
                        name: '联系人卡片',
                        path: '/apps/contact/contact-card',
                        grp_name: "apps",
                    },
                    {
                        name: '编辑联系人',
                        path: '/apps/contact/edit-contact',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_file",
                name: '文件管理',
                icon: Icons.IconFileCheck,
                path: '/apps/file-manager/',
                childrens: [
                    {
                        name: '列表视图',
                        path: '/apps/file-manager/list-view',
                        grp_name: "apps",
                    },
                    {
                        name: '网格视图',
                        path: '/apps/file-manager/grid-view',
                        grp_name: "apps",
                    },
                ]
            },
            {
                name: '图库',
                icon: Icons.IconPhoto,
                path: '/apps/gallery',
                grp_name: "apps",
            },
            {
                id: "dash_task",
                name: '待办',
                icon: Icons.IconListDetails,
                path: '/apps/todo/',
                badge: {
                    component: HkBadge,
                    props: { bg: "success", soft: true, class: "ms-2" },
                    text: "2"
                },
                childrens: [
                    {
                        name: '任务列表',
                        path: '/apps/todo/task-list',
                        grp_name: "apps",
                    },
                    {
                        name: '甘特图',
                        path: '/apps/todo/gantt',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_blog",
                name: '博客',
                icon: Icons.IconBrowser,
                path: '/apps/blog/',
                childrens: [
                    {
                        name: '文章',
                        path: '/apps/blog/posts',
                        grp_name: "apps",
                    },
                    {
                        name: '新建文章',
                        path: '/apps/blog/add-new-post',
                        grp_name: "apps",
                    },
                    {
                        name: '文章详情',
                        path: '/apps/blog/post-detail',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_invoice",
                name: '发票',
                icon: Icons.IconFileDigit,
                path: '/apps/invoice/',
                childrens: [
                    {
                        name: '发票列表',
                        path: '/apps/invoice/invoice-list',
                        grp_name: "apps",
                    },
                    {
                        name: '发票模板',
                        path: '/apps/invoice/invoice-templates',
                        grp_name: "apps",
                    },
                    {
                        name: '创建发票',
                        path: '/apps/invoice/create-invoice',
                        grp_name: "apps",
                    },
                    {
                        name: '发票预览',
                        path: '/apps/invoice/invoice-preview',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_integ",
                name: '集成',
                icon: Icons.IconCode,
                path: '/apps/integrations/',
                childrens: [
                    {
                        name: '所有应用',
                        path: '/apps/integrations/all-apps',
                        grp_name: "apps",
                    },
                    {
                        name: '应用详情',
                        path: '/apps/integrations/app-detail',
                        grp_name: "apps",
                    },
                    {
                        name: '集成',
                        path: '/apps/integrations/integration',
                        grp_name: "apps",
                    },
                ]
            },
        ]
    },
    // Pages group
    {
        group: '页面',
        contents: [
            {
                id: "dash_pages",
                name: '身份验证',
                icon: Icons.IconUserPlus,
                path: '/auth/',
                childrens: [
                    {
                        id: "dash_log",
                        name: '登录',
                        path: '/auth/login/',
                        childrens: [
                            {
                                name: '登录',
                                path: '/auth/login',
                            },
                            {
                                name: '简约登录',
                                path: '/auth/login/simple',
                            },
                            {
                                name: '经典登录',
                                path: '/auth/login/classic',
                            },
                        ]
                    },
                    {
                        id: "dash_sign",
                        name: '注册',
                        path: '/auth/signup/',
                        childrens: [
                            {
                                name: '注册',
                                path: '/auth/signup',
                            },
                            {
                                name: '简约注册',
                                path: '/auth/signup/simple',
                            },
                            {
                                name: '经典注册',
                                path: '/auth/signup/classic',
                            },
                        ]
                    },
                    {
                        name: '锁屏',
                        path: '/auth/lock-screen',
                    },
                    {
                        name: '重置密码',
                        path: '/auth/reset-password',
                    },
                    {
                        name: '错误 404',
                        path: '/error-404',
                    },
                    {
                        name: '错误 503',
                        path: '/auth/error-503',
                    },
                ]
            },
            {
                id: "dash_profile",
                name: '个人资料',
                path: '/profile',
                badgeIndicator: {
                    component: HkBadge,
                    props: { bg: "danger", indicator: true, class: "position-absolute top-0 start-100" },
                },
                childrens: [
                    {
                        name: '个人资料',
                        path: '/profile/',
                        grp_name: "apps",
                    },
                    {
                        name: '编辑个人资料',
                        path: '/profile/edit-profile',
                        grp_name: "apps",
                    },
                    {
                        name: '账户',
                        path: '/profile/account',
                        grp_name: "apps",
                    },
                ]
            },
        ]
    },
    {
        group: '文档',
        contents: [
            {
                name: '文档',
                icon: Icons.IconFileCode2,
                path: 'https://caoba.caoba.com/documentation/introduction',
            },
            {
                name: '组件',
                icon: Icons.IconLayout,
                path: 'https://caoba.caoba.com/documentation/avatar',
            },
        ]
    },
];
