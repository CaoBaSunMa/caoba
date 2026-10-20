import * as Icons from 'tabler-icons-react';
import HkBadge from '../../components/@hk-badge/@hk-badge';

export const SidebarMenu = [
    {
        group: '',
        contents: [
            {
                name: '仪表盘',
                icon: <Icons.Template />,
                path: '/dashboard',
                badge: <HkBadge size="sm" bg="pink" soft className="ms-auto" >热</HkBadge>
            },
        ]
    },
    {
        group: '应用',
        contents: [
            {
                id: 'dash_chat',
                name: '聊天',
                icon: <Icons.MessageDots />,
                path: '/apps/chat',
                childrens: [
                    {
                        name: '聊天记录',
                        path: '/apps/chat/chats',
                        grp_name: "apps",
                    },
                    {
                        name: '群组',
                        path: '/apps/chat/chat-groups',
                        grp_name: "apps",
                    },
                    {
                        name: '联系人',
                        path: '/apps/chat/chat-contact',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: 'dash_chatpop',
                name: '聊天弹窗',
                icon: <Icons.MessageCircle />,
                path: '/apps/chat-bot',
                childrens: [
                    {
                        name: '私信',
                        path: '/apps/chat-bot/chatpopup',
                        grp_name: "apps",
                    },
                    {
                        name: '聊天机器人',
                        path: '/apps/chat-bot/chatbot',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: 'dash_chatpop',
                name: '日历',
                icon: <Icons.CalendarTime />,
                path: '/apps/calendar',
                grp_name: "apps",
            },
            {
                name: '邮件',
                icon: <Icons.Inbox />,
                path: '/apps/email',
                grp_name: "apps",
            },
            {
                id: "dash_scrumboard",
                name: 'Scrum看板',
                icon: <Icons.LayoutKanban />,
                path: '/apps/taskboard',
                iconBadge: <HkBadge bg="primary" size="sm" pill className="position-top-end-overflow">3</HkBadge>,
                childrens: [
                    {
                        name: '所有看板',
                        path: '/apps/taskboard/projects-board',
                        grp_name: "apps",
                    },
                    {
                        name: '项目看板',
                        path: '/apps/taskboard/kanban-board',
                        grp_name: "apps",
                    },
                    {
                        name: '流程看板',
                        path: '/apps/taskboard/pipeline',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_contact",
                name: '联系人',
                icon: <Icons.Notebook />,
                path: '/apps/contacts',
                childrens: [
                    {
                        name: '联系人列表',
                        path: '/apps/contacts/contact-list',
                        grp_name: "apps",
                    },
                    {
                        name: '联系人卡片',
                        path: '/apps/contacts/contact-cards',
                        grp_name: "apps",
                    },
                    {
                        name: '编辑联系人',
                        path: '/apps/contacts/edit-contact',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_file",
                name: '文件管理',
                icon: <Icons.FileCheck />,
                path: '/apps/file-manager',
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
                icon: <Icons.Photo />,
                path: '/apps/gallery',
                grp_name: "apps",
            },
            {
                id: "dash_task",
                name: '待办',
                icon: <Icons.ListDetails />,
                path: '/apps/todo',
                badge: <HkBadge bg="success" soft className="ms-2">2</HkBadge>,
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
                icon: <Icons.Browser />,
                path: '/apps/blog',
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
                icon: <Icons.FileDigit />,
                path: '/apps/invoices',
                childrens: [
                    {
                        name: '发票列表',
                        path: '/apps/invoices/invoice-list',
                        grp_name: "apps",
                    },
                    {
                        name: '发票模板',
                        path: '/apps/invoices/invoice-templates',
                        grp_name: "apps",
                    },
                    {
                        name: '创建发票',
                        path: '/apps/invoices/create-invoice',
                        grp_name: "apps",
                    },
                    {
                        name: '发票预览',
                        path: '/apps/invoices/invoice-preview',
                        grp_name: "apps",
                    },
                ]
            },
            {
                id: "dash_integ",
                name: '集成',
                icon: <Icons.Code />,
                path: '/apps/integrations',
                childrens: [
                    {
                        name: '所有应用',
                        path: '/apps/integrations/all-apps',
                        grp_name: "apps",
                    },
                    {
                        name: '应用详情',
                        path: '/apps/integrations/integrations-detail',
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

    {
        group: '页面',
        contents: [
            {
                id: "dash_pages",
                name: '身份验证',
                icon: <Icons.UserPlus />,
                path: '/auth',
                childrens: [
                    {
                        id: "dash_log",
                        name: '登录',
                        path: '/auth',
                        childrens: [
                            {
                                name: '登录',
                                path: '/auth/login',
                            },
                            {
                                name: '简约登录',
                                path: '/auth/login-simple',
                            },
                            {
                                name: '经典登录',
                                path: '/auth/login-classic',
                            },
                        ]
                    },
                    {
                        id: "dash_sign",
                        name: '注册',
                        path: '/auth',
                        childrens: [
                            {
                                name: '注册',
                                path: '/auth/signup',
                            },
                            {
                                name: '简约注册',
                                path: '/auth/signup-simple',
                            },
                            {
                                name: '经典注册',
                                path: '/auth/signup-classic',
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
                icon: <Icons.UserSearch />,
                path: '/pages',
                badgeIndicator: <HkBadge bg="danger" indicator className="position-absolute top-0 start-100" />,
                childrens: [
                    {
                        name: '个人资料',
                        path: '/pages/profile',
                        grp_name: "apps",
                    },
                    {
                        name: '编辑个人资料',
                        path: '/pages/edit-profile',
                        grp_name: "apps",
                    },
                    {
                        name: '账户',
                        path: '/pages/account',
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
                icon: <Icons.FileCode2 />,
                path: 'https://caoba.caoba.com/documentation/introduction',
            },
            {
                name: '组件',
                icon: <Icons.Layout />,
                path: 'https://caoba.caoba.com/documentation/avatar',
            },
        ]
    },

]
