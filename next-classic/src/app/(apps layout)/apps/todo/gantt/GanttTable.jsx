'use client';
import { useEffect, useState } from 'react';
import HkDataTable from '@/components/@hk-data-table'
import HkAvatar from '@/components/HkAvatar';
import { useTasks } from '@/context';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { Badge, Dropdown } from 'react-bootstrap';
import { MoreVertical, Star } from 'react-feather';

//Custom Tag Container
const tagFormater = (cell) => {
    return (
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
}

//Custom Assignee Formatter
// `assignee` is an array of `{ userName, cstmAvt?, avtBg?, Img? }` descriptors. Without a
// cellFormatter the raw objects get handed to React as children, which throws
// "Objects are not valid as a React child".
const assigneeFormater = (cell) => {
    const people = Array.isArray(cell) ? cell : [cell];
    return (
        <div>
            {people.filter(Boolean).map((data, indx) => (
                <div className="media align-items-center" key={indx}>
                    <div className="media-head me-2">
                        <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-soft-${data.avtBg || 'primary'}` : ""))}>
                            {data.Img && <HkAvatar src={data.Img} name={data.userName} size={32} className="avatar-img" />}
                            {!data.Img && data.cstmAvt && <span className="initial-wrap">{data.cstmAvt}</span>}
                        </div>
                    </div>
                    <div className="media-body">
                        <span className="d-block text-high-em">{data.userName}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

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

const mapTaskToRow = (task, index) => ({
    id: task.id || index + 1,
    starred: task.starred || task.stared || false,
    task: task.title || task.task_name || task.name || '',
    priority: task.priority || '',
    assignee: task.assignee
        ? (Array.isArray(task.assignee) ? task.assignee : [{ userName: task.assignee }])
        : [{ cstmAvt: "Cb", avtBg: "primary", userName: "caoba" }],
    due_date: task.dueDate || task.due_date || '',
    status: [{ status: task.status || 'To-Do', variant: task.statusVariant || 'secondary' }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
});

const columns = [
    {
        accessor: "id",
        title: "ID",
        hidden: true,
    },
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
        cellFormatter: assigneeFormater,
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

const GanttTable = () => {

    const { tasks: apiTasks, fetchTasks } = useTasks();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useEffect(() => {
        if (apiTasks && apiTasks.length > 0) {
            setData(apiTasks.map(mapTaskToRow));
        }
    }, [apiTasks]);

    return (
        <SimpleBar autoHide={false} style={{ maxHeight: "100vh" }} className="split">
            <HkDataTable
                column={columns}
                rowData={data}
                rowSelection={true}
                markStarred={true}
                classes="table-wrap gt-todo-table nowrap"
            />
        </SimpleBar>
    )
}

export default GanttTable
