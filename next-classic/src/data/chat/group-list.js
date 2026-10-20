//Images
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar5 from '@/assets/img/avatar5.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';

const groupList = [
    {
        id: 12,
        group: "开发者工坊",
        avatar: { type: "img", src: avatar1 },
        lastChat: "代码构建者与审核者工坊",
        status: "Active 5min ago",
    },
    {
        id: 13,
        group: "设计师们",
        avatar: { type: "img", src: avatar8 },
        lastChat: "不知道我怎么做到的？😍",
        status: "Active 7min ago",
    },
    {
        id: 14,
        group: "云翔",
        initAvatar: { type: "init", title: "云", variant: "primary" },
        lastChat: "你好，我正在使用caoba",
        status: "Active 8min ago",
    },
    {
        id: 15,
        group: "技术支持团队",
        avatar: { type: "img", src: avatar5 },
        lastChat: "contact@caoba.com",
        status: "Active 5min ago",
    },
    {
        id: 16,
        group: "caoba团队",
        avatar: { type: "img", src: avatar7 },
        lastChat: "正在创造奇迹 :)",
        status: "Active 1min ago",
    },
    {
        id: 17,
        group: "管理层",
        initAvatar: { type: "init", title: "管", variant: "soft-danger" },
        lastChat: "不打电话，只用心灵感应",
        status: "Active 5min ago",
    },

]

export default groupList
