//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar4 from "@/assets/img/avatar4.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";

const contactList = [
    {
        group: "A",
        contacts: [
            {
                id: 1,
                name: "艾伦·里克曼",
                avatar: { type: "img", src: avatar2 },
                userStatus: "今天什么都不想做",
                status: "Online",
            },
            {
                id: 2,
                name: "阿什莉·朱德",
                avatar: { type: "img", src: avatar8 },
                userStatus: "我的生活我做主😍",
                status: "Online",
            },
            {
                id: 3,
                name: "亚当·桑德勒",
                avatar: { type: "img", src: avatar11 },
                userStatus: "你好，我正在使用 caoba",
                status: "Online",
            },
        ],
    },

    {
        group: "B",
        contacts: [
            {
                id: 4,
                name: "比利·禅",
                avatar: { type: "img", src: avatar4 },
                userStatus: "👿带我去那些地方！！",
                status: "Online",
            },
            {
                id: 5,
                name: "布莱德利·库珀",
                avatar: { type: "img", src: avatar1 },
                userStatus: "一直忙碌",
                status: "Online",
            },
            {
                id: 6,
                name: "布拉德·皮特",
                avatar: { type: "img", src: avatar15 },
                userStatus: "不打电话，只用心电感应",
                status: "Online",
            },
            {
                id: 7,
                name: "本·阿弗莱克",
                initAvatar: { type: "init", title: "本", variant: "soft-danger" },
                userStatus: "¬¬¬ 度假中",
                status: "Online",
            },
            {
                id: 8,
                name: "芭芭拉·哈尔希",
                avatar: { type: "img", src: avatar3 },
                userStatus: "像蟒蛇一样乏味",
                status: "Online",
            },
        ],
    },

    {
        group: "C",
        contacts: [
            {
                id: 9,
                name: "科林·汉克斯",
                avatar: { type: "img", src: avatar7 },
                userStatus: "不接电话，一直忙碌",
                status: "Online",
            },
            {
                id: 10,
                name: "查克·诺里斯",
                avatar: { type: "img", src: avatar9 },
                userStatus: "你好，我正在使用 caoba",
                status: "Active 9min ago",
            },
            {
                id: 11,
                name: "克里斯蒂安·贝尔",
                initAvatar: { type: "init", title: "克", variant: "soft-info" },
                userStatus: "暂无状态",
                status: "Active 7min ago",
            },
        ],
    },
];

export default contactList;