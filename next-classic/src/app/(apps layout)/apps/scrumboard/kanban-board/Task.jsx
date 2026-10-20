'use client';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Draggable } from '@hello-pangea/dnd';
import { Card, Dropdown, ProgressBar } from 'react-bootstrap';
import { Archive, ArrowUp, Bookmark, Calendar, Edit2, MoreVertical, Paperclip, Pocket, Repeat, Tag, Trash2, User } from 'react-feather';
import TaskDetails from './TaskDetails';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';

const Task = (props) => {

    const [showTaskInfo, setshowTaskInfo] = useState(false);
    return (
        <>
            <Draggable
                draggableId={props.task.id}
                index={props.index}
            >
                {(provided, snapshot) => (
                    <Card
                        className="card-border card-wth-progress card-simple tasklist-card"
                        key={props.task.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    // isDragging={snapshot.isDragging}
                    >
                        {props.task.Progressed_Value && <ProgressBar size="xs" variant={classNames({ "warning": props.task.Progressed_Value > 30 && props.task.Progressed_Value < 50 }, { "danger": props.task.Progressed_Value < 30 }, { "success": props.task.Progressed_Value === 100 })} now={props.task.Progressed_Value} className="progress-bar-xs" />}
                        <Card.Header className="card-header-action">
                            <h6 className="fw-bold">{props.task.Task_Name}</h6>
                            <div className="card-action-wrap">
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" size="xs" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreVertical />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item onClick={() => setshowTaskInfo(!showTaskInfo)}>
                                            <span className="feather-icon dropdown-icon">
                                                <Edit2 />
                                            </span>
                                            <span>编辑</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon">
                                                <User />
                                            </span>
                                            <span>指派给</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon">
                                                <Paperclip />
                                            </span>
                                            <span>附加文件</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon">
                                                <Tag />
                                            </span>
                                            <span>应用标签</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon">
                                                <Calendar />
                                            </span>
                                            <span>设置截止日期</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon">
                                                <Bookmark />
                                            </span>
                                            <span>关注任务</span>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider" />
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon"><ArrowUp />
                                            </span>
                                            <span>设为最高优先级</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon"> <Repeat />
                                            </span>
                                            <span>更改状态</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon"> <Pocket />
                                            </span>
                                            <span>保存为模板</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="feather-icon dropdown-icon"><Archive />
                                            </span>
                                            <span>移到归档</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="delete-task" onClick={() => props.onRemoveTask(props.task.id, props.cardId)} >
                                            <span className="feather-icon dropdown-icon">
                                                <Trash2 />
                                            </span>
                                            <span>删除</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        {(props.task.Avatar || props.task.Badges || props.task.Description) && <Card.Body>
                            {props.task.Description && <p>{props.task.Description}</p>}
                            {(props.task.Avatar || props.task.InitAvatar) && <div className="avatar-group avatar-group-overlapped">
                                {props.task.Avatar && props.task.Avatar.map((ele, indx) => (
                                    <HkTooltip placement="top" title={ele.name} key={indx} >
                                        <div className="avatar avatar-rounded">
                                            <Image src={ele.img} alt="user" className="avatar-img" />
                                        </div>
                                    </HkTooltip>
                                ))}
                                {props.task.InitAvatar && props.task.InitAvatar.map((elem, ind) => (
                                    <HkTooltip placement="top" title={elem.name} key={ind}>
                                        <div className={classNames("avatar avatar-xs avatar-rounded", (elem.bg))} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tom" key={ind} >
                                            <span className="initial-wrap">{elem.avt}</span>
                                        </div>
                                    </HkTooltip>
                                ))}
                            </div>}
                            {props.task.Badges && <div className="mt-2">
                                {props.task.Badges.map((badge, ind) => (
                                    <HkBadge bg={badge.bg} soft className="my-1 me-1" key={ind} >{badge.title}</HkBadge>
                                ))}
                            </div>}
                        </Card.Body>}
                        {
                            props.task.Footer && <Card.Footer className="text-muted justify-content-between">
                                <div>
                                    {props.task.Task_Counter && <span className="task-counter">
                                        <span><i className="ri-checkbox-line" /></span>
                                        <span>{props.task.Task_Counter}</span>
                                    </span>}
                                    {props.task.Task_Discuss && <span className="task-discuss">
                                        <span><i className="ri-message-3-line" /></span>
                                        <span>{props.task.Task_Discuss}</span>
                                    </span>}
                                </div>
                                <div>
                                    <span className="task-deadline">
                                        {props.task.Deadline}
                                    </span>
                                </div>
                            </Card.Footer>
                        }
                    </Card>
                )}
            </Draggable>

            <TaskDetails show={showTaskInfo} onHide={() => setshowTaskInfo(!showTaskInfo)} />
        </>
    )
}

export default Task
