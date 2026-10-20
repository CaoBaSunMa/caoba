import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Archive, Book, Download, Edit, Inbox, Plus, Printer, Settings, Star, Trash2, Upload } from 'react-feather';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import HkBadge from '../../components/@hk-badge/@hk-badge';
import HkTooltip from '../../components/@hk-tooltip/HkTooltip';
import AddLabel from './AddLabel';
import AddTag from './AddTag';
import CreateNewContact from './CreateNewContact';


const ContactAppSidebar = () => {
    const [addLabels, setAddLabels] = useState(false);
    const [addTags, setAddTags] = useState(false);
    const [addNewContact, setAddNewContact] = useState(false);

    return (
        <>
            <Nav className="contactapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Button variant="primary" className="btn-rounded btn-block mb-4" onClick={() => setAddNewContact(!addNewContact)}>
                            新建联系人
                        </Button>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <Nav.Link active >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Inbox />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">全部联系人</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">重要</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Archive />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">归档</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Edit />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">待处理</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
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
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Upload />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">导出</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Download />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">导入</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Printer />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">打印</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">标签组</div>
                            <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setAddLabels(!addLabels)} >
                                <HkTooltip placement="top" title="添加标签">
                                    <span className="feather-icon">
                                        <Plus />
                                    </span>
                                </HkTooltip>
                            </Button>
                        </div>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <Nav.Link className="link-badge-right" href="#">
                                        <span className="nav-link-text">设计</span>
                                        <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">136</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-badge-right" href="#">
                                        <span className="nav-link-text">开发</span>
                                        <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">2</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-badge-right" href="#">
                                        <span className="nav-link-text">库存</span>
                                        <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">86</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="link-badge-right" href="#">
                                        <span className="nav-link-text">人力资源</span>
                                        <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">34</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="title-sm text-primary mb-0">标签</div>
                            <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setAddTags(!addTags)} >
                                <HkTooltip placement="top" title="添加标签">
                                    <span className="feather-icon">
                                        <Plus />
                                    </span>
                                </HkTooltip>
                            </Button>
                        </div>
                        <div className="tag-cloud">
                            <HkBadge as={Link} to="#" bg="white" className="badge-light" outline text="dark" >协作</HkBadge>
                            <HkBadge as={Link} to="#" bg="white" className="badge-light" outline text="dark" >React 开发</HkBadge>
                            <HkBadge as={Link} to="#" bg="white" className="badge-light" outline text="dark" >Angular 开发</HkBadge>
                            <HkBadge as={Link} to="#" bg="white" className="badge-light" outline text="dark" >促销</HkBadge>
                            <HkBadge as={Link} to="#" bg="white" className="badge-light" outline text="dark" >广告</HkBadge>
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="contactapp-fixednav">
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
            {/* Create New Contact */}
            <CreateNewContact show={addNewContact} close={() => setAddNewContact(!addNewContact)} />
            {/* Add Label */}
            <AddLabel show={addLabels} hide={() => setAddLabels(!addLabels)} />
            {/* Add Tag */}
            <AddTag show={addTags} hide={() => setAddTags(!addTags)} />
        </>
    )
}

export default ContactAppSidebar
