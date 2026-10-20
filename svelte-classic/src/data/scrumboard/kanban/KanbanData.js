//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';

export const column = [
    {
        title: "所有模块",
        tasks: [
            {
                id: 1,
                Task_Name: "应用页面",
                Avatar: [{ type: 'avt', img: avatar13, name: "迪恩" }, { type: 'initAvt', avt: "B", bg: "avatar-soft-danger", name: "汤姆" }, { type: 'avt', img: avatar2, name: "丹尼尔" }],
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "24",
                Deadline: "2022年9月22日",
            },
            {
                id: 2,
                Task_Name: "身份认证",
                Footer: true,
                Task_Counter: "12/18",
                Task_Discuss: "24",
                Deadline: "2022年9月22日",
            },
            {
                id: 3,
                Task_Name: "菜单模块",
                Footer: false,
            },
            {
                id: 4,
                Task_Name: "内容",
                Avatar: [{ type: 'avt', img: avatar13, name: "迪恩" }, { type: 'avt', img: avatar10, name: "温斯顿" }],
                Footer: true,
                Task_Counter: "0/3",
                Task_Discuss: "24",
                Deadline: "2022年9月22日",
            },
            {
                id: 5,
                Task_Name: "Utilities",
                Footer: false,
            },
            {
                id: 6,
                Task_Name: "表单",
                Footer: true,
                Task_Counter: "18/18",
                Deadline: "2022年9月22日",
            },
            {
                id: 7,
                Task_Name: "数据表",
                Footer: true,
                Task_Counter: "1/9",
                Task_Discuss: "5",
                Deadline: "2022年9月30日",
            },
            {
                id: 8,
                Task_Name: "图表",
                Footer: false,
            },
            {
                id: 9,
                Task_Name: "地图",
                Footer: false,
            },
            {
                id: 10,
                Task_Name: "最终打包",
                Avatar: [{ type: 'avt', img: avatar2, name: "丹尼尔" }],
                Footer: true,
                Task_Counter: "40/127",
                Task_Discuss: "24",
                Deadline: "2020年10月15日",
            }
        ]
    },
    {
        title: "进行中",
        tasks: [
            {
                id: 1,
                Task_Name: "个人资料页面",
                Avatar: [{ type: 'avt', img: avatar8, name: "凯瑟琳" }],
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "",
                Deadline: "2022年9月18日",
                Progressed_Value: 45,
            },
            {
                id: 2,
                Task_Name: "高级数据表",
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "24",
                Deadline: "2022年9月22日",
                Progressed_Value: 85,
            },
            {
                id: 3,
                Task_Name: "CSS 编译",
                Avatar: [{ type: 'initAvt', avt: "A", bg: "avatar-soft-success", name: "胡玛" }, { type: 'avt', img: avatar2, name: "丹尼尔" }],
                Badges: [{ title: "优先级", bg: "badge-soft-primary" }, { title: "Angular", bg: "badge-soft-danger" }],
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "",
                Deadline: "2022年9月18日",
                Progressed_Value: 60,
            },
            {
                id: 4,
                Task_Name: "列表",
                Footer: true,
                Task_Counter: "18/18",
                Task_Discuss: "24",
                Deadline: "2022年9月28日",
                Progressed_Value: 20,
            },
            {
                id: 5,
                Task_Name: "仪表盘",
                Footer: true,
                Task_Counter: "18/18",
                Task_Discuss: "24",
                Deadline: "2022年9月28日",
                Progressed_Value: 10,
            },
            {
                id: 6,
                Task_Name: "详情页面",
                Avatar: [{ type: 'avt', img: avatar2, name: "丹尼尔" }],
                Footer: true,
                Task_Counter: "18/18",
                Task_Discuss: "24",
                Deadline: "2022年9月28日",
                Progressed_Value: 70,
            }
        ]
    },
    {
        title: "已完成",
        tasks: [
            {
                id: 1,
                Task_Name: "表单",
                Description: "表单验证仅在线时生效。请激活本地服务器后检查。",
                Footer: true,
                Task_Counter: "18/18",
                Task_Discuss: "",
                Deadline: "2022年9月28日",
                Progressed_Value: 100,
            },
            {
                id: 2,
                Task_Name: "数据表",
                Description: "",
                Footer: true,
                Task_Counter: "1/9",
                Task_Discuss: "5",
                Deadline: "2022年9月30日",
                Progressed_Value: 100,
            },
            {
                id: 3,
                Task_Name: "应用页面",
                Description: "",
                Avatar: [{ type: "avt", img: avatar9, name: "胡玛" }, { type: "avt", img: avatar3, name: "凯瑟琳" }, { type: "avt", img: avatar7, name: "丹尼尔" }, { type: "initAvt", avt: "C", bg: "avatar-soft-info", name: "查理" }, { type: "avt", img: avatar13, name: "迪恩" }],
                Footer: true,
                Task_Counter: "4/8",
                Task_Discuss: "",
                Deadline: "2022年9月18日",
                Progressed_Value: 100,
            },
            {
                id: 4,
                Task_Name: "身份认证",
                Footer: true,
                Task_Counter: "1/9",
                Task_Discuss: "5",
                Deadline: "2022年9月30日",
                Progressed_Value: 100,
            }
        ]
    },
    {
        title: "待处理",
        tasks: [
            {
                id: 1,
                Task_Name: "身份认证",
                Badges: [{ title: "未分配", bg: "badge-soft-light" }, { title: "协作者", bg: "badge-soft-danger" }],
                Footer: true,
                Task_Counter: "12/18",
                Task_Discuss: "24",
                Deadline: "2020年9月22日",
            },
            {
                id: 2,
                Task_Name: "内容",
                Avatar: [{ type: 'avt', img: avatar13, name: "迪恩" }, { type: 'avt', img: avatar10, name: "温斯顿" }],
                Footer: true,
                Task_Counter: "0/3",
                Task_Discuss: "24",
                Deadline: "2020年9月24日",
            },
            {
                id: 3,
                Task_Name: "工具",
                Footer: false,
            },
            {
                id: 4,
                Task_Name: "表单",
                Footer: true,
                Task_Counter: "18/18",
                Task_Discuss: "24",
                Deadline: "2022年9月24日",
            },
            {
                id: 5,
                Task_Name: "数据表",
                Footer: true,
                Task_Counter: "1/9",
                Task_Discuss: "5",
                Deadline: "2022年9月30日",
            },
            {
                id: 6,
                Task_Name: "图表",
                Footer: false,
            }
        ]
    }
]