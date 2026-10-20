'use client';
import { Card, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Edit, Settings, Zap } from 'react-feather';
import SimpleBar from 'simplebar-react';
import TinymceEditor from '@/components/TinymceEditor/TinymceEditor';
import BlogAside from '../BlogAside';
import HkDropZone from '@/components/@hk-drop-zone/HkDropZone';

const NewPostBody = () => {
    return (
        <div className="blog-body">
            <SimpleBar className="nicescroll-bar">
                <Container fluid>
                    <Row>
                        <Col xxl={9} lg={8}>
                            <Form className="edit-post-form">
                                <Form.Group className="mb-3" >
                                    <Form.Label>文章标题</Form.Label>
                                    <Form.Control placeholder="文章标题" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>固定链接</Form.Label>
                                    <Form.Control placeholder="固定链接" />
                                </Form.Group>
                                <Tab.Container defaultActiveKey="tabClassic" >
                                    <Nav variant="tabs" className="nav-light border-bottom-0">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tabClassic">
                                                <span className="nav-link-text">经典</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tabCode">
                                                <span className="nav-link-text">代码</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Card className="card-border rounded-top-start-0">
                                        <Card.Body>
                                            <Tab.Content className="mt-0">
                                                <Tab.Pane eventKey="tabClassic">
                                                    <div className="tinymce-wrap">
                                                        <TinymceEditor />
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="tabCode">
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card.Body>
                                    </Card>
                                </Tab.Container>
                                <Card className="card-border advance-option-post">
                                    <Card.Body>
                                        <Card.Title>高级选项</Card.Title>
                                        <Tab.Container defaultActiveKey="summery" >
                                            <Nav variant="tabs" className="nav-line nav-icon nav-light border-bottom">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="summery">
                                                        <span className="nav-icon-wrap">
                                                            <span className="feather-icon">
                                                                <Zap />
                                                            </span>
                                                        </span>
                                                        <span className="nav-link-text">文章轮播图片</span>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="#" >
                                                        <span className="nav-icon-wrap">
                                                            <span className="feather-icon">
                                                                <Settings />
                                                            </span>
                                                        </span>
                                                        <span className="nav-link-text">文章设置</span>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link disabled>
                                                        <span className="nav-icon-wrap">
                                                            <span className="feather-icon">
                                                                <Edit />
                                                            </span>
                                                        </span>
                                                        <span className="nav-link-text">版本历史</span>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="summery">
                                                    <HkDropZone>
                                                        <span className="main-text">上传一张高质量图片</span><div className="fw-light text-muted"> 让您的博客文章更具吸引力</div>
                                                    </HkDropZone>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Col>
                        <Col xxl={3} lg={4}>
                            <BlogAside />
                        </Col>
                    </Row>
                </Container>
            </SimpleBar>
        </div >
    )
}

export default NewPostBody
