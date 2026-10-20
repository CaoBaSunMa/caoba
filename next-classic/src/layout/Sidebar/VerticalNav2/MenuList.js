import * as Icons from 'tabler-icons-react';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import { nanoid } from 'nanoid';

export const DashboardMenu = [
    {
        id: nanoid(),
        title: '仪表盘',
        icon: <Icons.Template />,
        link: '/dashboard',
        badge: <HkBadge size="sm" bg="pink" soft className="ms-auto" >热</HkBadge>
    },

    //Apps group
    {
        id: nanoid(),
        title: '应用',
        grouptitle: true
    },
    {
        id: nanoid(),
        title: '聊天',
        icon: <Icons.MessageDots />,
        path: '/apps/chat/',
        children: [
            { id: nanoid(), link: '/apps/chat/chats', name: '聊天记录' },
            { id: nanoid(), link: '/apps/chat/groups', name: '群组' },
            { id: nanoid(), link: '/apps/chat/contact', name: '联系人' },
        ]
    },
    {
        id: nanoid(),
        title: '聊天弹窗',
        icon: <Icons.MessageCircle />,
        path: '/apps/chat-popup/',
        children: [
            { id: nanoid(), link: '/apps/chat-popup/direct-message', name: '私信' },
            { id: nanoid(), link: '/apps/chat-popup/chat-bot', name: '聊天机器人' },
        ]
    },
    {
        id: nanoid(),
        title: '日历',
        icon: <Icons.CalendarTime />,
        link: '/apps/calendar',
    },
    {
        id: nanoid(),
        title: '邮件',
        icon: <Icons.Inbox />,
        link: '/apps/email',
    },
    {
        id: nanoid(),
        title: 'Scrum看板',
        icon: <Icons.LayoutKanban />,
        iconBadge: <HkBadge bg="primary" size="sm" pill className="position-top-end-overflow">3</HkBadge>,
        path: '/apps/scrumboard',
        children: [
            { id: nanoid(), link: '/apps/scrumboard/project-board', name: '所有看板' },
            { id: nanoid(), link: '/apps/scrumboard/kanban-board', name: '项目看板' },
            { id: nanoid(), link: '/apps/scrumboard/pipeline', name: '流程看板' },
        ]
    },
    {
        id: nanoid(),
        title: '联系人',
        icon: <Icons.Notebook />,
        path: '/apps/contact',
        children: [
            { id: nanoid(), link: '/apps/contact/contact-list', name: '联系人列表' },
            { id: nanoid(), link: '/apps/contact/contact-cards', name: '联系人卡片' },
            { id: nanoid(), link: '/apps/contact/edit-contact', name: '编辑联系人' },
        ]
    },
    {
        id: nanoid(),
        title: '文件管理',
        icon: <Icons.FileCheck />,
        path: '/apps/file-manager',
        children: [
            { id: nanoid(), link: '/apps/file-manager/list-view', name: '列表视图' },
            { id: nanoid(), link: '/apps/file-manager/grid-view', name: '网格视图' },
        ]
    },
    {
        id: nanoid(),
        title: '图库',
        icon: <Icons.Photo />,
        link: '/apps/gallery',
    },
    {
        id: nanoid(),
        title: '待办',
        icon: <Icons.ListDetails />,
        badge: <HkBadge bg="success" soft className="ms-2">2</HkBadge>,
        path: '/apps/todo',
        children: [
            { id: nanoid(), link: '/apps/todo/task-list', name: '任务列表' },
            { id: nanoid(), link: '/apps/todo/gantt', name: '甘特图' },
        ]
    },
    {
        id: nanoid(),
        title: '博客',
        icon: <Icons.Browser />,
        path: '/apps/blog',
        children: [
            { id: nanoid(), link: '/apps/blog/posts', name: '文章' },
            { id: nanoid(), link: '/apps/blog/add-new-post', name: '新建文章' },
            { id: nanoid(), link: '/apps/blog/post-detail', name: '文章详情' },
        ]
    },
    {
        id: nanoid(),
        title: '发票',
        icon: <Icons.FileDigit />,
        path: '/apps/invoices',
        children: [
            { id: nanoid(), link: '/apps/invoices/invoice-list', name: '发票列表' },
            { id: nanoid(), link: '/apps/invoices/invoice-templates', name: '发票模板' },
            { id: nanoid(), link: '/apps/invoices/create-invoice', name: '创建发票' },
            { id: nanoid(), link: '/apps/invoices/invoice-preview', name: '发票预览' },
        ]
    },
    {
        id: nanoid(),
        title: '集成',
        icon: <Icons.Code />,
        path: '/apps/integrations',
        children: [
            { id: nanoid(), link: '/apps/integrations/all-apps', name: '所有应用' },
            { id: nanoid(), link: '/apps/integrations/app-detail', name: '应用详情' },
            { id: nanoid(), link: '/apps/integrations/integration', name: '集成' },
        ]
    },

    //Pages group
    {
        id: nanoid(),
        title: '页面',
        grouptitle: true
    },
    {
        id: nanoid(),
        title: '身份验证',
        icon: <Icons.UserPlus />,
        children: [
            {
                id: nanoid(),
                link: '#',
                title: '登录',
                children: [
                    { id: nanoid(), link: '/auth/login', name: '登录' },
                    { id: nanoid(), link: '/auth/login/simple', name: '简约登录' },
                    { id: nanoid(), link: '/auth/login/classic', name: '经典登录' }
                ]
            },
            {
                id: nanoid(),
                link: '#',
                title: '注册',
                children: [
                    { id: nanoid(), link: '/auth/signup', name: '注册' },
                    { id: nanoid(), link: '/auth/signup/simple', name: '简约注册' },
                    { id: nanoid(), link: '/auth/signup/classic', name: '经典注册' }
                ]
            },
            { id: nanoid(), link: '/auth/lock-screen', name: '锁屏' },
            { id: nanoid(), link: '/auth/reset-password', name: '重置密码' },
            { id: nanoid(), link: '/error-404', name: '错误 404' },
            { id: nanoid(), link: '/error-503', name: '错误 503' },
        ]
    },

    {
        id: nanoid(),
        title: '个人资料',
        icon: <Icons.UserSearch />,
        badgeIndicator: <HkBadge bg="danger" indicator className="position-absolute top-0 start-100" />,
        path: '/profile',
        children: [
            { id: nanoid(), link: '/profile', name: '个人资料' },
            { id: nanoid(), link: '/profile/edit-profile', name: '编辑个人资料' },
            { id: nanoid(), link: '/profile/account', name: '账户' },
        ]
    },

    //Documentation page
    {
        id: nanoid(),
        title: '文档',
        grouptitle: true
    },
    {
        id: nanoid(),
        title: '文档',
        icon: <Icons.FileCode2 />,
        link: 'https://caoba.caoba.com/documentation/introduction',
        target: '_blank',
    },
    {
        id: nanoid(),
        title: '组件',
        icon: <Icons.Layout />,
        link: 'https://caoba.caoba.com/documentation/avatar',
        target: '_blank',
    },

];
