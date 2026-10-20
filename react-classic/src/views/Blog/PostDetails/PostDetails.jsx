import React from 'react';
import { Card, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Edit, Settings, Zap } from 'react-feather';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import TinymceEditor from '../../../components/TinymceEditor/TinymceEditor';
import BlogAside from '../BlogAside';
import HkDropZone from '../../../components/@hk-drop-zone/HkDropZone';

//Images
import mock1 from '../../../assets/img/gallery/mock1.jpg';
import mock2 from '../../../assets/img/gallery/mock2.jpg';
import mock3 from '../../../assets/img/gallery/mock3.jpg';
import mock4 from '../../../assets/img/gallery/mock4.jpg';
import mock5 from '../../../assets/img/gallery/mock5.jpg';
import mock6 from '../../../assets/img/gallery/mock6.jpg';

const PostDetails = () => {
    return (
        <div className="blog-body">
            <SimpleBar className="nicescroll-bar">
                <Container fluid>
                    <Row>
                        <Col xxl={9} lg={8}>
                            <Form className="edit-post-form">
                                <Form.Group className="mb-3">
                                    <Form.Label>文章标题</Form.Label>
                                    <Form.Control defaultValue="构建高效的数据面板用户界面设计" placeholder="文章标题" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>固定链接</Form.Label>
                                    <Form.Control defaultValue="https://caoba.com/theme/caoba" placeholder="文章标题" />
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
                                                        <TinymceEditor initialvalue={"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: center;\"><span style=\"color: #bdc3c7;\" data-mce-style=\"color: #bdc3c7;\">→ 这是一个功能完整的编辑器演示，欢迎探索！ ←</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: center;\"><br></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 style=\"text-align: center; color:#298DFF\">TinyMCE 是世界上可定制性最强、最灵活的富文本编辑器。</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: center;\"><strong> <span style=\"font-size: 14px;\" data-mce-style=\"font-size: 14px;\"> <span>轻盈下载即可使用，TinyMCE 能应对您遇到的任何挑战。</span> </span> </strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: center;\"><br></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table style=\"border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;\" data-mce-style=\"border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;\" class=\"mce-item-table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 25%; text-align: center; padding: 7px;\" ><span>🛠 50+ <span class=\"mce-spellchecker-annotation mce-spellchecker-word mce-cram_68622596921598605361436\" aria-invalid=\"spelling\" data-mce-highlight-id=\"mce-cram_68622596921598605361436\" data-mce-bogus=\"1\" data-mce-annotation=\"插件\" data-mce-lingo=\"zh_CN\">插件</span></span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 25%; text-align: center; padding: 7px;\" ><span>💡 高级支持</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 25%; text-align: center; padding: 7px;\" ><span>🖍 自定义皮肤</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 25%; text-align: center; padding: 7px;\" ><span>⚙ 完整 API 访问权限</span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"} />
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="tabCode">
                                                    <div contentEditable="true" suppressContentEditableWarning={true} >
                                                        &lt;div class="col"&gt;
                                                        &lt;a href="#some"&gt;
                                                        &lt;div class="card card-border" style="background-image:url('dist/img/gallery/mock5.jpg');"&gt;
                                                        &lt;/div&gt;
                                                        &lt;/a&gt;
                                                        &lt;/div&gt;
                                                    </div>
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
                                                    <Nav.Link>
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
                                                    <HkDropZone />
                                                    <Row sm className="row-cols-xl-6 row-cols-lg-3 row-cols-sm-2 row-cols-1 uploaded-img-prev">
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock1})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock2})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock3})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock4})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock5})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link to="#">
                                                                <Card className="card-border" style={{ backgroundImage: `url(${mock6})` }}>
                                                                </Card>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Col>
                        <Col xxl={3} lg={4} className="col-xxl-3 col-lg-4">
                            <BlogAside />
                        </Col>
                    </Row>
                </Container>
            </SimpleBar>
        </div>
    )
}

export default PostDetails
