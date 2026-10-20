import Image from 'next/image';
import classNames from 'classnames';
import { Badge, Dropdown } from 'react-bootstrap';
import { MoreVertical, Star } from 'react-feather';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar15 from '@/assets/img/avatar15.jpg';


const taskFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center gt-single-task" key={indx}>
                <div>
                    <span className={classNames("todo-star", { "marked": data.mark })}><span className="feather-icon"><Star /> </span></span>
                    <span className="todo-text">{data.text}</span>
                </div>
            </div>
        ))
    )
}

const avatarFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-${data.avtBg}` : ""))}>
                        {data.Img && <Image src={data.Img} alt="user" className="avatar-img" />}
                        {data.cstmAvt && <span className="initial-wrap">{data.cstmAvt}</span>}
                    </div>
                </div>
                <div className="media-body">
                    {data.userName}
                </div>
            </div>
        ))
    )
}


//Custom Tag Container
const tagFormater = (cell) => (
    cell ? <Badge
        size="sm"
        bg="white"
        className={classNames("badge-outline badge-wth-icon", { "badge-danger": cell === "High" || cell === "Urgent" }, { "badge-warning": cell === "Low" }, { "badge-orange": cell === "Medium" })}
    >
        <span>
            <i className="badge-dot ri-checkbox-blank-circle-fill" />
            {cell}
        </span>
    </Badge>
        :
        null
)

//Status Container
const statusFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <Dropdown className="selectable-dropdown" key={indx}>
                <Dropdown.Toggle variant={data.variant} className="btn-rounded" type="button">{data.status}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item data-color="#5e7d8a">暂停</Dropdown.Item>
                    <Dropdown.Item data-color="#FFC400">进行中</Dropdown.Item>
                    <Dropdown.Item data-color="#9e9e9e">待办</Dropdown.Item>
                    <Dropdown.Item data-color="#007D88">已完成</Dropdown.Item>
                    <Dropdown.Item data-color="#FF0101">待处理</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        ))
    )
}

//Custom Action Container
const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <Dropdown key={indx}>
                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                    <span className="icon">
                        <span className="feather-icon">
                            <MoreVertical />
                        </span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" >
                    <Dropdown.Item data-color="#5e7d8a">暂停</Dropdown.Item>
                    <Dropdown.Item data-color="#FFC400">进行中</Dropdown.Item>
                    <Dropdown.Item data-color="#9e9e9e">待办</Dropdown.Item>
                    <Dropdown.Item data-color="#007D88">已完成</Dropdown.Item>
                    <Dropdown.Item data-color="#FF0101">待处理</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        ))
    )
}


export const columns = [
    {
        accessor: "id",
        title: "ID",
        hidden: true,
    },
    {
        accessor: "task",
        title: "任务",
        sort: true,
        // cellFormatter: taskFormater,
    },
    {
        accessor: "priority",
        title: "优先级",
        sort: true,
        cellFormatter: tagFormater,
    },
    {
        accessor: "assignee",
        title: "负责人",
        sort: true,
        cellFormatter: avatarFormater,
        sortValue: (cell, row) => (cell.map((data) => (data.userName))),
    },
    {
        accessor: "due_date",
        title: "截止日期",
        sort: true,
    },
    {
        accessor: "status",
        title: "状态",
        sort: true,
        cellFormatter: statusFormater,
    },
    {
        accessor: "actions",
        title: "",
        cellFormatter: actionFormater,
    },
];

export const data = [
    {
        id: 1,
        starred: true,
        task: "与加拿大团队视频会议",
        priority: "High",
        assignee: [{ Img: avatar7, userName: " 汤姆·克鲁斯" }],
        due_date: "明天",
        status: [{ status: "To-Do", variant: "secondary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 2,
        starred: false,
        task: "客户目标会议",
        priority: "High",
        assignee: [{ Img: avatar9, userName: "凯瑟琳·琼斯" }],
        due_date: <span className="text-danger">昨天</span>,
        status: [{ status: "In Progres", variant: "warning" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 3,
        starred: false,
        task: "目标市场趋势分析",
        assignee: [{ Img: avatar7, userName: "汤姆·克鲁斯" }],
        due_date: "今天",
        status: [{ status: "Done", variant: "primary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 4,
        starred: true,
        task: "向道琼斯先生发送修订后的提案",
        priority: "Low",
        assignee: [{ Img: avatar10, userName: "马丁·路德·金" }],
        due_date: "周六",
        status: [{ status: "On Hold", variant: "info" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 5,
        starred: false,
        task: "安排首次演示电话",
        assignee: [{ cstmAvt: "Cb", avtBg: "primary", userName: "caoba" }],
        due_date: "周日",
        status: [{ status: "In Progress", variant: "warning" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 6,
        starred: true,
        task: "升级资源依赖",
        priority: "Medium",
        assignee: [{ Img: avatar15, userName: "老板宝宝" }],
        due_date: "27 Nov, 2020",
        status: [{ status: "Pending", variant: "danger" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 7,
        starred: false,
        task: "更新贡献指南和许可协议",
        assignee: [{ Img: avatar15, userName: "老板宝宝" }],
        due_date: "今天",
        status: [{ status: "Done", variant: "primary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 8,
        starred: false,
        task: "修复工具提示换行规则",
        priority: "High",
        assignee: [{ Img: avatar2, userName: "摩根·弗里曼" }],
        due_date: <span className="text-danger">4天前</span>,
        status: [{ status: "In Progress", variant: "warning" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 9,
        starred: true,
        task: "重新设计基础模型",
        priority: "Urgent",
        assignee: [{ Img: avatar2, userName: "查理·卓别林" }],
        due_date: "3 Aug, 2020",
        status: [{ status: "In Progress", variant: "warning" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 10,
        starred: true,
        task: "配置安全分析功能",
        priority: "Medium",
        assignee: [{ Img: avatar2, userName: "Tom Cruz" }],
        due_date: "8 Aug, 2020",
        status: [{ status: "On Hold", variant: "info" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 11,
        starred: false,
        task: "从收件箱移除通知面板",
        priority: "Urgent",
        assignee: [{ Img: avatar2, userName: "Boss Baby" }],
        due_date: "24 Sep, 2020",
        status: [{ status: "To-Do", variant: "secondary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 12,
        starred: false,
        task: "发送项目邀请",
        priority: "Low",
        assignee: [{ Img: avatar7, userName: "汤姆·克鲁斯" }],
        due_date: <span className="text-danger">昨天</span>,
        status: [{ status: "In Progress", variant: "warning" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 13,
        starred: false,
        task: "连接软件工具",
        priority: "High",
        assignee: [{ Img: avatar10, userName: "马丁·路德·金" }],
        due_date: "周六",
        status: [{ status: "Done", variant: "primary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 14,
        starred: false,
        task: "使用规划器加速项目审查",
        priority: "High",
        assignee: [{ Img: avatar9, userName: "凯瑟琳·琼斯" }],
        due_date: "15 Oct, 2020",
        status: [{ status: "Done", variant: "primary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    // {
    //     id: 4,
    //     task: [{ text: "Update contribution guidelines and licence", mark: false }],
    //     priority: "Low",
    //     assignee: [{ Img: avatar7, userName: "Morgan Freeman" }],
    //     due_date: "Today",
    //     status: [{ status: "Done", variant: "primary" }],
    //     actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    // },

]
