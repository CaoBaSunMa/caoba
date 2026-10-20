'use client';
import { useState } from 'react';
import { Badge, Button, Col, Form, Modal, Nav, Row } from 'react-bootstrap';
import { Archive, Book, Edit, Inbox, Plus, Send, Settings, Star, Trash2 } from 'react-feather';
import SimpleBar from 'simplebar-react';
import ComposeEmail from './ComposeEmail';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';


const EmailSidebar = () => {
    const { states, dispatch } = useGlobalStateContext();
    const [addCategory, setAddCategory] = useState(false);

    return (
        <>
            <Nav className="emailapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Button variant="primary" className="btn-rounded btn-block mb-4 show-compose-popup" onClick={() => dispatch({ type: "compose_email", composeEmail: !states.emailState.composeEmail })} >
                            写邮件
                        </Button>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column" defaultActiveKey="inbox" >
                                <Nav.Item>
                                    <Nav.Link eventKey="inbox" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Inbox />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">收件箱</span>
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
                                                <Send />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">已发送</span>
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
                                        <span className="nav-link-text">草稿</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Trash2 />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">回收站</span>
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
                        <div className="menu-group">
                            <Nav as="ul" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <Badge bg="primary" className="badge-indicator badge-indicator-lg me-2" />
                                        <span className="nav-link-text">团队</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <Badge bg="success" className="badge-indicator badge-indicator-lg me-2" />
                                        <span className="nav-link-text">支持</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <Badge bg="orange" className="badge-indicator badge-indicator-lg me-2" />
                                        <span className="nav-link-text">更新</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <Badge bg="pink" className="badge-indicator badge-indicator-lg me-2" />
                                        <span className="nav-link-text">主要</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="emailapp-fixednav">
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

            {/* Add Category Modal*/}
            <Modal show={addCategory} onHide={() => setAddCategory(!addCategory)} centered size="sm" >
                <div className="modal-content">
                    <Modal.Body>
                        <Button bsPrefix="btn-close" onClick={() => setAddCategory(!addCategory)}>
                            <span aria-hidden="true">×</span>
                        </Button>
                        <h6 className="text-uppercase fw-bold mb-3">添加分类</h6>
                        <Form>
                            <Row className="gx-3">
                                <Col sm={12}>
                                    <Form.Group className="mb-3" >
                                        <Form.Control type="text" placeholder="分类名称" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" className="float-end" onClick={() => setAddCategory(!addCategory)} >添加</Button>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

            {/* Compose email */}
            <ComposeEmail show={states.emailState.composeEmail} onClose={() => dispatch({ type: "compose_email" })} />
        </>
    )
}


export default EmailSidebar;