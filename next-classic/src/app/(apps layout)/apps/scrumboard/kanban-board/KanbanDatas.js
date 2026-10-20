//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';

export const ITEM_TYPES = {
    CARD: "card",
    TASK: "task"
};

export const DATASET = {
    tasks: {
        // All Module Task
        "task-1": {
            id: "task-1",
            Task_Name: "应用页面",
            Avatar: [{ img: avatar13, name: "迪恩" }, { img: avatar2, name: "丹尼尔" }],
            InitAvatar: [{ avt: "B", bg: "avatar-soft-danger", name: "Tom" }],
            Footer: true,
            Task_Counter: "4/8",
            Task_Discuss: "24",
            Deadline: "22 Sep, 22",
        },
        "task-2": {
            id: "task-2",
            Task_Name: "身份验证",
            Footer: true,
            Task_Counter: "12/18",
            Task_Discuss: "24",
            Deadline: "22 Sep, 22",
        },
        "task-3": {
            id: "task-3",
            Task_Name: "菜单模块",
            Footer: false,
        },
        "task-4": {
            id: "task-4",
            Task_Name: "内容",
            Avatar: [{ img: avatar13, name: "迪恩" }, { img: avatar10, name: "温斯顿" }],
            Footer: true,
            Task_Counter: "0/3",
            Task_Discuss: "24",
            Deadline: "22 Sep, 22",
        },
        "task-5": {
            id: "task-5",
            Task_Name: "工具",
            Footer: false,
        },
        "task-6": {
            id: "task-6",
            Task_Name: "表单",
            Footer: true,
            Task_Counter: "18/18",
            Deadline: "22 Sep, 22",
        },
        "task-7": {
            id: "task-7",
            Task_Name: "表格",
            Footer: true,
            Task_Counter: "1/9",
            Task_Discuss: "5",
            Deadline: "30 Sep, 22",
        },
        "task-8": {
            id: "task-8",
            Task_Name: "图表",
            Footer: false,
        },
        "task-9": {
            id: "task-9",
            Task_Name: "地图",
            Footer: false,
        },
        "task-10": {
            id: "task-10",
            Task_Name: "最终包",
            Avatar: [{ img: avatar2, name: "丹尼尔" }],
            Footer: true,
            Task_Counter: "40/127",
            Task_Discuss: "24",
            Deadline: "15 Oct, 20",
        },

        // IN PROGRESS TASK
        "task-11": {
            id: "task-11",
            Task_Name: "个人资料页",
            Avatar: [{ img: avatar8, name: "凯瑟琳" }],
            Footer: true,
            Task_Counter: "4/8",
            Task_Discuss: "",
            Deadline: "18 Sep, 22",
            Progressed_Value: 45,
        },
        "task-12": {
            id: "task-12",
            Task_Name: "高级表格",
            Footer: true,
            Task_Counter: "4/8",
            Task_Discuss: "24",
            Deadline: "22 Sep, 22",
            Progressed_Value: 85,
        },
        "task-13": {
            id: "task-13",
            Task_Name: "CSS 编译",
            Avatar: [{ img: avatar2, name: "丹尼尔" }],
            InitAvatar: [{ avt: "A", bg: "avatar-soft-success",name:"胡玛" }],
            Badges: [{ title: "优先级", bg: "primary" }, { title: "Angular", bg: "danger" }],
            Footer: true,
            Task_Counter: "4/8",
            Task_Discuss: "",
            Deadline: "18 Sep, 22",
            Progressed_Value: 60,
        },
        "task-14": {
            id: "task-14",
            Task_Name: "列表",
            Footer: true,
            Task_Counter: "18/18",
            Task_Discuss: "24",
            Deadline: "28 Sep, 22",
            Progressed_Value: 20,
        },
        "task-15": {
            id: "task-15",
            Task_Name: "仪表盘",
            Footer: true,
            Task_Counter: "18/18",
            Task_Discuss: "24",
            Deadline: "28 Sep, 22",
            Progressed_Value: 10,
        },
        "task-16": {
            id: "task-16",
            Task_Name: "详情页",
            Avatar: [{ img: avatar2, name: "丹尼尔" }],
            Footer: true,
            Task_Counter: "18/18",
            Task_Discuss: "24",
            Deadline: "28 Sep, 22",
            Progressed_Value: 70,
        },

        // COMPLETED TASK
        "task-17": {
            id: "task-17",
            Task_Name: "表单",
            Description: "表单验证仅在线生效，请启动本地服务器进行检查。",
            Footer: true,
            Task_Counter: "18/18",
            Task_Discuss: "",
            Deadline: "28 Sep, 22",
            Progressed_Value: 100,
        },
        "task-18": {
            id: "task-18",
            Task_Name: "表格",
            Description: "",
            Footer: true,
            Task_Counter: "1/9",
            Task_Discuss: "5",
            Deadline: "30 Sep, 22",
            Progressed_Value: 100,
        },
        "task-19": {
            id: "task-19",
            Task_Name: "Application Pages",
            Description: "",
            Avatar: [{ img: avatar9, name: "胡玛" }, { img: avatar3, name: "凯瑟琳" }, { img: avatar7, name: "丹尼尔" }, { img: avatar13, name: "迪恩" }],
            InitAvatar: [{ avt: "C", bg: "avatar-soft-info",name:"查理" }],
            Footer: true,
            Task_Counter: "4/8",
            Task_Discuss: "",
            Deadline: "18 Sep, 22",
            Progressed_Value: 100,
        },
        "task-20": {
            id: "task-20",
            Task_Name: "身份验证",
            Footer: true,
            Task_Counter: "1/9",
            Task_Discuss: "5",
            Deadline: "30 Sep, 22",
            Progressed_Value: 100,
        },

        // PENDING TASK
        "task-21": {
            id: "task-21",
            Task_Name: "身份验证",
            Badges: [{ title: "未分配", bg: "light" }, { title: "协作者", bg: "danger" }],
            Footer: true,
            Task_Counter: "12/18",
            Task_Discuss: "24",
            Deadline: "22 Sep, 20",
        },
        "task-22": {
            id: "task-22",
            Task_Name: "内容",
            Avatar: [{ img: avatar13, name: "迪恩" }, { img: avatar10, name: "温斯顿" }],
            Footer: true,
            Task_Counter: "0/3",
            Task_Discuss: "24",
            Deadline: "24 Sep, 20",
        },
        "task-23": {
            id: "task-23",
            Task_Name: "工具",
            Footer: false,
        },
        "task-24": {
            id: "task-24",
            Task_Name: "表单",
            Footer: true,
            Task_Counter: "18/18",
            Task_Discuss: "24",
            Deadline: "24 Sep, 22",
        },
        "task-25": {
            id: "task-25",
            Task_Name: "表格",
            Footer: true,
            Task_Counter: "1/9",
            Task_Discuss: "5",
            Deadline: "30 Sep, 22",
        },
        "task-26": {
            id: "task-26",
            Task_Name: "图表",
            Footer: false,
        },


    },
    cards: {
        "card-1": {
            id: "card-1",
            title: "所有模块",
            taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6", "task-7", "task-8", "task-9", "task-10"]
        },
        "card-2": {
            id: "card-2",
            title: "进行中",
            taskIds: ["task-11", "task-12", "task-13", "task-14", "task-15", "task-16"]
        },
        "card-3": {
            id: "card-3",
            title: "已完成",
            taskIds: ["task-17", "task-18", "task-19", "task-20"]
        },
        "card-4": {
            id: "card-4",
            title: "待处理 ",
            taskIds: ["task-21", "task-22", "task-23", "task-24", "task-25", "task-26"]
        }
    },
    cardOrder: ["card-1", "card-2", "card-3", "card-4"]
};