'use client';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Info, Plus, Star } from 'react-feather'
import { Button, Form, InputGroup, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import Image from 'next/image';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';

const BoardHeader = ({ showSidebar, toggleSidebar, showInfo, toggleInfo }) => {
    const { states, dispatch } = useGlobalStateContext();

    return (
        <header className="taskboard-header">
            <div className="d-flex align-items-center flex-1">
                <div className="d-flex">
                    <Link href="#" className="taskboardapp-title link-dark">
                        <h1>
                            caoba
                            <span className="task-star marked">
                                <span className="feather-icon">
                                    <Star />
                                </span>
                            </span>
                        </h1>
                    </Link>
                    <div className="ms-3">
                        <InputGroup>
                            <span className="input-affix-wrapper">
                                <span className="input-prefix">
                                    <i className="ri-lock-line" />
                                </span>
                                <Form.Select>
                                    <option value={1}>私有看板</option>
                                    <option value={2}>公开看板</option>
                                </Form.Select>
                            </span>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <Form.Select className="d-xxl-none flex-1 mx-3">
                <option value={1}>任务看板</option>
                <option value={2}>会话</option>
                <option value={3}>待办列表</option>
                <option value={4}>文件</option>
                <option value={5}>链接</option>
            </Form.Select>
            <Nav variant="pills" className="nav-pills-rounded active-theme nav-light px-2 flex-shrink-0 d-xxl-flex d-none">
                <Nav.Item>
                    <Nav.Link active>
                        <span className="nav-link-text">任务看板</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <span className="nav-link-text">会话</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <span className="nav-link-text">待办列表</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <span className="nav-link-text">文件</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <span className="nav-link-text">链接</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="taskboard-options-wrap flex-1">
                <div className="d-flex ms-auto">
                    <div className="avatar-group avatar-group-overlapped d-xl-flex d-none me-3">
                        <div className="avatar avatar-rounded">
                            <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="凯瑟琳">
                                <Image src={avatar8} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-rounded">
                            <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="迪恩">
                                <Image src={avatar13} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-xs avatar-soft-danger avatar-rounded">
                            <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="汤姆">
                                <span className="initial-wrap">T</span>
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-rounded">
                            <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="摩根">
                                <Image src={avatar2} alt="user" className="avatar-img" />
                            </HkTooltip>
                        </div>
                        <div className="avatar avatar-icon avatar-primary avatar-rounded">
                            <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="提示文本">
                                <span className="initial-wrap"><span className="feather-icon"><Plus /></span></span>
                            </HkTooltip>
                        </div>
                    </div>
                    <div className="v-separator d-xl-flex d-none" />
                    <Button as="a" variant="flush-dark" className={classNames("btn-icon btn-rounded flush-soft-hover taskboardapp-info-toggle ms-xl-0", { "active": showInfo })} onClick={toggleInfo} >
                        <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="信息">
                            <span className="icon">
                                <span className="feather-icon">
                                    <Info />
                                </span>
                            </span>
                        </HkTooltip>
                    </Button>
                    <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" onClick={() => dispatch({ type: 'top_nav_toggle' })} >
                        <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="折叠" >
                            <span className="icon">
                                <span className="feather-icon">
                                    {
                                        states.layoutState.topNavCollapse ? <ChevronDown /> : <ChevronUp />
                                    }
                                </span>
                            </span>
                        </HkTooltip>
                    </Button>
                </div>
            </div>
            <div className={classNames("hk-sidebar-togglable", { "active": !showSidebar })} onClick={toggleSidebar} />
        </header>
    )
}

export default BoardHeader;