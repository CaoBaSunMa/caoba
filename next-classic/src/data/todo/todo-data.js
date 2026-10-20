//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import avatar15 from '@/assets/img/avatar15.jpg';

export const DATASET = {
    tasks: {
        // Recently Assigned
        "task-1": {
            id: "task-1",
            checked: false,
            stared: true,
            task_name: "与加拿大团队视频会议",
            priority: "High",
            indicator: "danger",
            task_time: [{ time: "明天", text: "primary" }],
            img: avatar7,
            badge: [{ text: "电话", bg: "primary" }],
        },
        "task-2": {
            id: "task-2",
            checked: false,
            stared: false,
            task_name: "客户目标会议",
            priority: "High",
            indicator: "warning",
            task_time: [{ time: "昨天", text: "danger" }],
            img: avatar9,
            badge: [{ text: "会议", bg: "violet" }],
        },
        "task-3": {
            id: "task-3",
            checked: false,
            stared: false,
            task_name: "目标市场趋势分析",
            indicator: "danger",
            task_time: [{ time: "今天", text: "primary" }],
            img: avatar7,
            badge: [{ text: "会议", bg: "pink" }],
        },
        "task-4": {
            id: "task-4",
            checked: false,
            stared: true,
            task_name: "向道琼斯先生发送修订后的提案",
            priority: "Low",
            indicator: "gold",
            task_time: [{ time: "周六", text: "" }],
            img: avatar10,
            badge: [{ text: "项目", bg: "orange" }],
        },
        "task-5": {
            id: "task-5",
            checked: false,
            stared: false,
            task_name: "安排首次演示电话",
            indicator: "warning",
            task_time: [{ time: "周日", text: "" }],
            init_avt: [{ text: "H", bg: "primary" }],
        },
        "task-6": {
            id: "task-6",
            checked: false,
            stared: true,
            task_name: "升级资源依赖",
            priority: "Medium",
            indicator: "danger",
            task_time: [{ time: "2020年11月27日", text: "" }],
            img: avatar15,
            badge: [{ text: "电话", bg: "primary" }],
        },
        "task-7": {
            id: "task-7",
            checked: false,
            stared: false,
            task_name: "更新贡献指南和许可协议",
            indicator: "danger",
            task_time: [{ time: "今天", text: "primary" }],
            img: avatar15,
            badge: [{ text: "会议", bg: "pink" }],
        },

        //Yesterday
        "task-8": {
            id: "task-8",
            checked: false,
            stared: false,
            task_name: "修复工具提示换行规则",
            priority: "High",
            indicator: "warning",
            task_time: [{ time: "4天前", text: "danger" }],
            img: avatar2,
            badge: [{ text: "项目", bg: "warning" }],
        },
        "task-9": {
            id: "task-9",
            checked: false,
            stared: false,
            task_name: "重新设计基础模型",
            priority: "Urgent",
            indicator: "warning",
            task_time: [{ time: "2020年8月2日", text: "" }],
            img: avatar13,
        },
        "task-10": {
            id: "task-10",
            checked: false,
            stared: true,
            task_name: "配置安全分析功能",
            priority: "Medium",
            indicator: "gold",
            task_time: [{ time: "2020年8月8日", text: "" }],
            img: avatar7,
            badge: [{ text: "电话", bg: "primary" }],
        },

        "task-11": {
            id: "task-11",
            checked: false,
            stared: false,
            task_name: "从收件箱移除通知面板",
            priority: "Urgent",
            indicator: "danger",
            task_time: [{ time: "2020年9月24日", text: "" }],
            img: avatar15,
            badge: [{ text: "会议", bg: "pink" }],
        },

        //15 July, 20
        "task-12": {
            id: "task-12",
            checked: false,
            stared: false,
            task_name: "发送项目邀请",
            priority: "Low",
            indicator: "warning",
            task_time: [{ time: "昨天", text: "danger" }],
            img: avatar7,
            badge: [{ text: "项目", bg: "warning" }],
        },
        "task-13": {
            id: "task-13",
            checked: false,
            stared: false,
            task_name: "连接软件工具",
            priority: "High",
            indicator: "danger",
            task_time: [{ time: "周六", text: "" }],
            img: avatar10,
        },
        "task-14": {
            id: "task-14",
            checked: false,
            stared: false,
            task_name: "使用规划器加速项目审查",
            priority: "High",
            indicator: "danger",
            task_time: [{ time: "2020年10月15日", text: "" }],
            img: avatar9,
            badge: [{ text: "电话", bg: "primary" }],
        },

    },
    cards: {
        "card-1": {
            id: "card-1",
            title: "最近分配",
            taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6", "task-7"]
        },
        "card-2": {
            id: "card-2",
            title: "昨天",
            taskIds: ["task-8", "task-9", "task-10", "task-11"]
        },
        "card-3": {
            id: "card-3",
            title: "2020年7月15日",
            taskIds: ["task-12", "task-13", "task-14"]
        },
    },
    cardOrder: ["card-1", "card-2", "card-3"]
};