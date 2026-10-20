'use client';
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import DatePicker from 'react-datepicker';
// react-datepicker 的 locale 需要 date-fns 的 locale 对象，
// 传字符串 "zh-cn" 会报 "A locale object was not found for the provided string"。
import { zhCN } from 'date-fns/locale';
import { Archive, Bell, Book, Calendar, Plus, Settings } from 'react-feather';
import { Badge, Button, Dropdown, Form, Nav } from 'react-bootstrap';
import AddCategory from './AddCategory';
import SetReminder from './SetReminder';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import "react-datepicker/dist/react-datepicker.css";

const CalendarSidebar = ({ createNewEvent }) => {
    const [addCategory, setAddCategory] = useState(false);
    const [reminder, setReminder] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const onChange = (dates) => {
        const [start] = dates;
        setStartDate(start);
    };
    return (
        <>
            <nav className="calendarapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" className="btn-rounded btn-block">创建</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={createNewEvent} >
                                    <span className="feather-icon dropdown-icon">
                                        <Calendar />
                                    </span>
                                    <span>新建日程</span>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setReminder(!reminder)} >
                                    <span className="feather-icon dropdown-icon">
                                        <Bell />
                                    </span>
                                    <span>设置提醒</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="text-center mt-4">
                            <div id="inline_calendar" className="d-inline-block">
                                <DatePicker
                                    selected={startDate}
                                    onChange={onChange}
                                    dateFormatCalendar={"MMM yyyy"}
                                    selectsRange
                                    inline
                                    locale={zhCN}
                                />
                            </div>
                        </div>
                        <div className="separator separator-light" />
                        <div className="title-sm text-primary">近期日程</div>
                        <div className="upcoming-event-wrap">
                            <Nav as="ul" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <div className="d-flex align-items-center">
                                            <Badge bg="violet" className="badge-indicator badge-indicator-lg me-2" />
                                            <span className="event-time">今天，17:00 起</span>
                                        </div>
                                        <div className="event-name">caoba 团队会议</div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <div className="d-flex align-items-center">
                                            <Badge bg="primary" className="badge-indicator badge-indicator-lg me-2" />
                                            <span className="event-time">明天，14:35</span>
                                        </div>
                                        <div className="event-name">靛蓝航空飞往印尼</div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <div className="d-flex align-items-center">
                                            <Badge bg="warning" className="badge-indicator badge-indicator-lg me-2" />
                                            <span className="event-time">7月24日，09:30</span>
                                        </div>
                                        <div className="event-name">Awwwards 大会</div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">分类</div>
                            <Button size="xs" variant="light" className="btn-icon btn-rounded" onClick={() => setAddCategory(!addCategory)} >
                                <HkTooltip id="tooltip1" placement="top" title="添加分类" >
                                    <span className="feather-icon">
                                        <Plus />
                                    </span>
                                </HkTooltip>
                            </Button>
                        </div>
                        <div className="categories-wrap">
                            <Form.Check
                                id="customChecksc1"
                                type="checkbox"
                                label="会议"
                                defaultChecked
                            />
                            <Form.Check
                                id="customChecksc2"
                                type="checkbox"
                                label="航班"
                                defaultChecked
                            />
                            <Form.Check
                                id="customChecksc3"
                                type="checkbox"
                                label="生日"
                                defaultChecked
                            />
                            <Form.Check
                                id="customChecksc4"
                                type="checkbox"
                                label="大会"
                            />
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="calendarapp-fixednav">
                    <div className="hk-toolbar">
                        <Nav className="nav-light">
                            <Nav.Item className="nav-link">
                                <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                    <HkTooltip id="tooltip2" placement="top" title="设置" >
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Settings />
                                            </span>
                                        </span>
                                    </HkTooltip>
                                </Button>
                            </Nav.Item>
                            <Nav.Item className="nav-link">
                                <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                    <HkTooltip id="tooltip3" placement="top" title="归档" >
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Archive />
                                            </span>
                                        </span>
                                    </HkTooltip>
                                </Button>
                            </Nav.Item>
                            <Nav.Item className="nav-link">
                                <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                    <HkTooltip id="tooltip2" placement="top" title="帮助" >
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Book />
                                            </span>
                                        </span>
                                    </HkTooltip>
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </nav>

            {/* Add Category */}
            <AddCategory show={addCategory} hide={() => setAddCategory(!addCategory)} />
            {/* New Event */}
            <SetReminder show={reminder} hide={() => setReminder(!reminder)} />
        </>
    )
}

export default CalendarSidebar;