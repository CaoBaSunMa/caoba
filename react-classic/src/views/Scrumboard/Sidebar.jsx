import React, { useState } from 'react';
import { Alert, Button, Nav } from 'react-bootstrap';
import { Archive, Book, Globe, Layout, Lock, MoreVertical, Plus, Settings, Star, Trash2, UserCheck, ZapOff } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkTooltip from '../../components/@hk-tooltip/HkTooltip';
import AddNewBoard from './AddNewBoard';
import AddNewFavBoard from './KanbanBoard/AddNewFavBoard';


const Sidebar = () => {
    const [addNewBoard, setAddNewBoard] = useState(false);
    const [addFavBoard, setAddFavBoard] = useState(false);

    return (
        <>
            <Nav className="taskboardapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Button variant="primary" className="btn-rounded btn-block mb-4" onClick={() => setAddNewBoard(!addNewBoard)} >新建看板</Button>
                        <div className="menu-group">
                            <Nav as="ul" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li">
                                    <Nav.Link active >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Layout />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">所有看板</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">收藏看板</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Lock />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">私有看板</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <UserCheck />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">公开看板</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Trash2 />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">已删除</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">收藏看板</div>
                            <Button size="xs" variant="light" className="btn-icon btn-rounded" onClick={() => setAddFavBoard(!addFavBoard)}>
                                <HkTooltip id="tooltip1" title="添加看板" placement="top">
                                    <span className="feather-icon">
                                        <Plus />
                                    </span>
                                </HkTooltip>
                            </Button>
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
                                            <Button size="sm" variant="flush-light" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Lock />
                                                    </span>
                                                </span>
                                            </Button>
                                            <Button size="sm" variant="flush-light" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreVertical />
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
                                            <Button variant="flush-light" size="sm" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <Globe />
                                                    </span>
                                                </span>
                                            </Button>
                                            <Button size="sm" variant="flush-light" className="btn-icon btn-rounded flush-soft-hover">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreVertical />
                                                    </span>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Nav.Item>

                            </Nav>
                        </div>
                        <Alert variant="warning" className="mt-5">
                            <Alert.Heading as="h6" className="heading-wth-icon">
                                <span className="head-icon">
                                    <span className="feather-icon">
                                        <ZapOff />
                                    </span>
                                </span>
                                试用期于 1 月 14 日结束
                            </Alert.Heading>
                            <p className="fs-7">您的试用期还剩最后 3 天。立即续订以保持连接。</p>
                        </Alert>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="taskboardapp-fixednav">
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
                {/*/ Sidebar Fixnav*/}
            </Nav>
            {/* Add New Board */}
            <AddNewBoard show={addNewBoard} onHide={() => setAddNewBoard(!addNewBoard)} />
            {/* Add Fav Board */}
            <AddNewFavBoard show={addFavBoard} onHide={() => setAddFavBoard(!addFavBoard)} />

        </>
    )
}

export default Sidebar
