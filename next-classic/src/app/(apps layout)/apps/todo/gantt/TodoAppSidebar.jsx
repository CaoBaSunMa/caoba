'use client';
import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as Icons from 'react-feather';
import AddNewProject from './AddNewProject';
import AddNewTask from '../AddNewTask';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import Link from 'next/link';

const TodoAppSidebar = () => {
    const [addNewTask, setAddNewTask] = useState(false);
    const [addNewBoard, setAddNewBoard] = useState(false);

    return (
        <>
            <nav className="todoapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Button variant="primary" className="btn-rounded btn-block mb-4" onClick={() => setAddNewTask(!addNewTask)}>添加任务</Button>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item className="active">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Icons.GitPullRequest />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">甘特图</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Icons.List />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">我的任务</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Icons.Calendar />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">日历</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Icons.File />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">文件</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Icons.Activity />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">动态</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="title-sm text-primary">优先级</div>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <Nav.Link className="link-with-badge">
                                        <HkBadge indicator bg="danger" className="badge-indicator-lg me-2" />
                                        <span className="nav-link-text">紧急</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-with-badge">
                                        <HkBadge indicator bg="orange" className="badge-indicator-lg me-2" />
                                        <span className="nav-link-text">高</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-with-badge">
                                        <HkBadge indicator bg="yellow" className="badge-indicator-lg me-2" />
                                        <span className="nav-link-text">中</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-with-badge">
                                        <HkBadge indicator bg="gold" className="badge-indicator-lg me-2" />
                                        <span className="nav-link-text">低</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">项目</div>
                            <a href="#" className="btn btn-xs btn-icon btn-rounded btn-light" onClick={() => setAddNewBoard(!addNewBoard)} >
                                <HkTooltip placement="top" title="新建项目">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Icons.Plus />
                                        </span>
                                    </span>
                                </HkTooltip>
                            </a>
                        </div>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <div>
                                        <div className="media d-flex align-items-center">
                                            <div className="media-head me-2">
                                                <div className="avatar avatar-xs avatar-primary avatar-rounded">
                                                    <span className="initial-wrap">J</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="name">caoba</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <Button variant='flush-light' size="sm" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.Lock />
                                                    </span>
                                                </span>
                                            </Button>
                                            <Button variant='flush-light' size="sm" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.MoreVertical />
                                                    </span>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div>
                                        <div className="media d-flex align-items-center">
                                            <div className="media-head me-2">
                                                <div className="avatar avatar-xs avatar-pink avatar-rounded">
                                                    <span className="initial-wrap">Cb</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    <div className="name">caoba</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <Button variant='flush-light' size="sm" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.Globe />
                                                    </span>
                                                </span>
                                            </Button>
                                            <Button variant='flush-light' size="sm" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Icons.MoreVertical />
                                                    </span>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="todoapp-fixednav">
                    <div className="hk-toolbar">
                        <Nav className="nav-light">
                            <Nav.Item className="nav-link">
                                <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                    <HkTooltip id="tooltip2" placement="top" title="设置" >
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Icons.Settings />
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
                                                <Icons.Archive />
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
                                                <Icons.Book />
                                            </span>
                                        </span>
                                    </HkTooltip>
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                {/*/ Sidebar Fixnav*/}
            </nav>
            <AddNewTask show={addNewTask} hide={() => setAddNewTask(false)} />
            <AddNewProject show={addNewBoard} onHide={() => setAddNewBoard(false)} />
        </>
    )
}

export default TodoAppSidebar
