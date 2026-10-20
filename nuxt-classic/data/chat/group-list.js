//Images
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar5 from '@/assets/img/avatar5.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';

const groupList = [
    {
        id: 12,
        group: "开发者舞台",
        avatar: { type: "img", src: avatar1 },
        lastChat: "代码构建与评审专区",
        status: "5分钟前活跃",
    },
    {
        id: 13,
        group: "设计师们",
        avatar: { type: "img", src: avatar8 },
        lastChat: "不知道我是怎么做到的？😍",
        status: "7分钟前活跃",
    },
    {
        id: 14,
        group: "caoba",
        initAvatar: { type: "init", title: "H", variant: "primary" },
        lastChat: "你好，我正在使用 caoba",
        status: "8分钟前活跃",
    },
    {
        id: 15,
        group: "支持团队",
        avatar: { type: "img", src: avatar5 },
        lastChat: "contact@caoba.com",
        status: "5分钟前活跃",
    },
    {
        id: 16,
        group: "caoba 团队",
        avatar: { type: "img", src: avatar7 },
        lastChat: "忙着创造奇迹 :)",
        status: "1分钟前活跃",
    },
    {
        id: 17,
        group: "管理层",
        initAvatar: { type: "init", title: "管", variant: "soft-danger" },
        lastChat: "不打电话，只用心电感应",
        status: "5分钟前活跃",
    },

]

export default groupList
