import { useEffect } from 'react';
import classNames from 'classnames';
import { Badge, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import { useTasks } from '../../../context/TaskProvider';


const avatarFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-${data.avtBg}` : ""))}>
                        {data.Img && <img src={data.Img} alt="user" className="avatar-img" />}
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
                    <Dropdown.Item data-color="#5e7d8a">搁置</Dropdown.Item>
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
                    <Dropdown.Item data-color="#5e7d8a">搁置</Dropdown.Item>
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
        accessor: "task",
        title: "任务",
        sort: true,
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

export const useGanttData = () => {
    const { tasks, fetchTasks, loading } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const data = tasks.map((task) => ({
        starred: task.starred || task.stared || false,
        task: task.task_name || task.title || task.name || '',
        priority: task.priority || '',
        assignee: task.assignee
            ? (Array.isArray(task.assignee) ? task.assignee : [{ Img: task.assigneeAvatar || task.avatar, userName: task.assignee || task.assigneeName || '' }])
            : task.avatar ? [{ Img: task.avatar, userName: task.assigneeName || '' }] : [{ cstmAvt: "Cb", avtBg: "primary", userName: task.assigneeName || '' }],
        due_date: task.due_date || task.dueDate || task.due || '',
        status: task.status
            ? (Array.isArray(task.status) ? task.status : [{ status: task.status, variant: task.statusVariant || 'secondary' }])
            : [{ status: "待办", variant: "secondary" }],
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
    }));

    return { data, loading };
};
