import React from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { Activity, Archive, CheckSquare, ChevronLeft, ChevronRight, Clock, Edit2, Edit3, Heart, Mail, MoreVertical, Phone, Plus, Shield, Slash, Star, Trash, Upload, Video, XSquare, Zap } from 'react-feather';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDropbox, faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import HkAvatarUploader from '../../../components/@hk-avatar-uploader/@hk-avatar-uploader';

//Image
import avatar2 from '../../../assets/img/avatar2.jpg';

const ContactDetails = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} centered size="xl" dialogClassName="contact-detail-modal" >
            <Modal.Body className="p-0">
                <header className="contact-header">
                    <div className="d-flex align-items-center">
                        <span className="me-3">
                            <HkAvatarUploader
                                defaultImg={avatar2}
                            />
                        </span>
                        <div>
                            <div className="cp-name text-truncate">曼达琳·肖恩</div>
                            <p>无来电，一直忙碌</p>
                            <Rating initialValue={3} readonly size="20" />
                        </div>
                    </div>
                    <div className="contact-options-wrap">
                        <ul className="hk-list hk-list-sm justify-content-center d-xl-flex d-none">
                            <li>
                                <a className="btn btn-icon btn-soft-primary btn-rounded" href="#some">
                                    <span className="btn-icon-wrap">
                                        <span className="feather-icon">
                                            <Mail />
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-icon btn-soft-success btn-rounded" href="#some">
                                    <span className="btn-icon-wrap">
                                        <span className="feather-icon">
                                            <Phone />
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-icon btn-soft-danger btn-rounded" href="#some">
                                    <span className="btn-icon-wrap">
                                        <span className="feather-icon">
                                            <Video />
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <Dropdown className="mx-3  d-xl-block d-none">
                            <Dropdown.Toggle variant="light" type="button">操作</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>操作</Dropdown.Item>
                                <Dropdown.Item>另一个操作</Dropdown.Item>
                                <Dropdown.Item>其他选项</Dropdown.Item>
                                <div className="dropdown-divider" />
                                <Dropdown.Item>分隔链接</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="align-items-center d-xl-flex d-none">1 - 10，共 30 条</div>
                        <Link to="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle  d-xl-inline-block d-none" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="上一个">
                            <span className="btn-icon-wrap">
                                <span className="feather-icon">
                                    <ChevronLeft />
                                </span>
                            </span>
                        </Link>
                        <Link to="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle  d-xl-inline-block d-none" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="下一个">
                            <span className="btn-icon-wrap">
                                <span className="feather-icon">
                                    <ChevronRight />
                                </span>
                            </span>
                        </Link>
                        <Dropdown as="a" href="#some" >
                            <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret  d-xl-inline-block d-nonet" >
                                <span className="btn-icon-wrap">
                                    <span className="feather-icon">
                                        <MoreVertical />
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" >
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Star />
                                    </span>
                                    <span>星标消息</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Archive />
                                    </span>
                                    <span>归档消息</span>
                                </Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Slash />
                                    </span>
                                    <span>屏蔽内容</span>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/apps/email">
                                    <span className="feather-icon dropdown-icon">
                                        <XSquare />
                                    </span>
                                    <span>关闭</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>
                <div className="contact-body contact-detail-body">
                    <SimpleBar className='nicescroll-bar' >
                        <div className="d-flex flex-xl-nowrap flex-wrap">
                            <div className="contact-info w-xl-35 w-100">
                                <Dropdown className="action-btn">
                                    <Dropdown.Toggle className="btn btn-light dropdown-toggle " type="button">操作</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>操作</Dropdown.Item>
                                        <Dropdown.Item>另一个操作</Dropdown.Item>
                                        <Dropdown.Item>其他选项</Dropdown.Item>
                                        <Dropdown.Divider as="div" />
                                        <Dropdown.Item>分隔链接</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Card>
                                    <Card.Header>
                                        <a href="#some">个人资料信息</a>
                                        <Button size="xs" variant="light" className="btn-icon btn-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="编辑">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="cp-info">
                                            <li>
                                                <span>名</span>
                                                <span>摩根</span>
                                            </li>
                                            <li>
                                                <span>姓</span>
                                                <span>弗里曼</span>
                                            </li>
                                            <li>
                                                <span>邮箱</span>
                                                <span>morgan@flights.com</span>
                                            </li>
                                            <li>
                                                <span>电话</span>
                                                <span>+912-4532-1234</span>
                                            </li>
                                            <li>
                                                <span>位置</span>
                                                <span>纽约</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <div className="separator-full" />
                                <Card>
                                    <Card.Header>
                                        <a href="#some">更多信息</a>
                                        <Button size="xs" variant="light" className="btn-icon btn-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="编辑">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="cp-info">
                                            <li>
                                                <span>职位</span>
                                                <span>摩根</span>
                                            </li>
                                            <li>
                                                <span>公司</span>
                                                <span>弗里曼</span>
                                            </li>
                                            <li>
                                                <span>语言</span>
                                                <span>morgan@flights.com</span>
                                            </li>
                                            <li>
                                                <span>生日</span>
                                                <span>-</span>
                                            </li>
                                            <li>
                                                <span>位置</span>
                                                <span>纽约</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <div className="separator-full" />
                                <Card>
                                    <Card.Header>
                                        <a href="#some">标签</a>
                                        <Button variant="light" size="xs" className="btn-icon btn-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="添加标签">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Plus />
                                                </span>
                                            </span>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <span className="badge badge-soft-violet">协作</span>
                                        <span className="badge badge-soft-danger">React 开发</span>
                                    </Card.Body>
                                </Card>
                                <div className="separator-full" />
                                <Card>
                                    <Card.Header>
                                        <a href="#some">社交账号</a>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="hk-list hk-list-sm">
                                            <li>
                                                <Button variant="primary" className="btn-icon btn-rounded btn-primary">
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faBehance} />
                                                    </span>
                                                </Button>
                                            </li>
                                            <li>
                                                <Button variant="warning" className="btn-icon btn-rounded">
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faGoogleDrive} />
                                                    </span>
                                                </Button>
                                            </li>
                                            <li>
                                                <Button variant="info" className="btn-icon btn-rounded">
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faDropbox} />
                                                    </span>
                                                </Button>
                                            </li>
                                            <li>
                                                <Button variant="dark" className="btn-icon btn-rounded">
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon={faGithub} />
                                                    </span>
                                                </Button>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <div className="separator-full" />
                                <Card>
                                    <Card.Header>
                                        <a href="#some">个人简介</a>
                                        <Button size="xs" variant="light" className="btn-icon btn-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="编辑">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。</p>
                                    </Card.Body>
                                </Card>
                                <div className="separator-full" />
                                <Card>
                                    <Card.Header>
                                        <a href="#some">设置</a>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="cp-action">
                                            <li>
                                                <Link to="#">
                                                    <span className="cp-icon-wrap">
                                                        <span className="feather-icon">
                                                            <Upload />
                                                        </span>
                                                    </span>
                                                    分享联系人
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span className="cp-icon-wrap">
                                                        <span className="feather-icon">
                                                            <Heart />
                                                        </span>
                                                    </span>
                                                    添加到收藏
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="link-danger">
                                                    <span className="cp-icon-wrap">
                                                        <span className="feather-icon">
                                                            <Trash />
                                                        </span>
                                                    </span>
                                                    删除联系人
                                                </Link>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="contact-more-info">
                                <Tab.Container defaultActiveKey="tab_summery">
                                    <Nav variant="tabs" className="nav-line nav-icon nav-light">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab_summery">
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Zap />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">摘要</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Activity />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">动态</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Edit3 />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">笔记</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Mail />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">邮箱</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Phone />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">通话</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <CheckSquare />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">任务</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Clock />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">日程</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                                <span className="nav-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Shield />
                                                    </span>
                                                </span>
                                                <span className="nav-link-text">销售</span>
                                            </Nav.Link>
                                        </Nav.Item >
                                    </Nav >
                                    <Tab.Content className="mt-7">
                                        <Tab.Pane eventKey="tab_summery">
                                            <Form>
                                                <Row>
                                                    <Col md={12} as={Form.Group} className="mb-3">
                                                        <div className="form-label-group">
                                                            <Form.Label>写一条笔记</Form.Label>
                                                            <small className="text-muted">1200</small>
                                                        </div>
                                                        <Form.Control as="textarea" rows={8} placeholder="写下内部备注" />
                                                    </Col>
                                                </Row>
                                                <Button variant="outline-light">添加笔记</Button>
                                            </Form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div className="pipeline-status-wrap mt-7">
                                    <div className="title-lg mb-3">线索管道状态</div>
                                    <ul className="pipeline-stutus">
                                        <li className="completed"><span>进行中</span></li>
                                        <li className="active"><span>跟进中</span></li>
                                        <li><span>已安排服务</span></li>
                                        <li><span>沟通中</span></li>
                                        <li><span>胜/败</span></li>
                                    </ul>
                                    <div className="clearfix" />
                                </div>
                                <div className="activity-wrap mt-7">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="title-lg mb-0">动态</div>
                                        <Form.Select className="mw-150p">
                                            <option value={0}>全部动态</option>
                                            <option value={1}>一</option>
                                            <option value={2}>二</option>
                                            <option value={3}>三</option>
                                        </Form.Select>
                                    </div>
                                    <div className="title-sm text-primary mb-3">6月24日</div>
                                    <ul className="activity-thread">
                                        <li>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-icon avatar-sm avatar-primary avatar-rounded">
                                                        <span className="initial-wrap"><span className="feather-icon">
                                                            <Mail />
                                                        </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="activity-text">你向该联系人发送了 <span className="text-dark text-capitalize">1 条消息</span>。</div>
                                                        <div className="activity-time">22:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                        <span className="initial-wrap">M</span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="activity-text"><span className="text-dark text-capitalize">摩根·弗里曼</span> 有时也被这样称呼，是用于排版印刷、平面或网页设计的占位文本。这段话出自 15 世纪一位不知名的排字工人之手，据信是他打乱的文字。</div>
                                                        <div className="activity-time">22:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar  avatar-icon avatar-sm avatar-info avatar-rounded">
                                                        <span className="initial-wrap"><span className="feather-icon">
                                                            <Shield />
                                                        </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="activity-text">您的交易金额 <span className="text-dark">$208.15</span> 已于 02.12.18（<span className="text-dark">周一</span>）15:30 通过 PayU Money 在线支付。</div>
                                                        <div className="activity-time">22:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="title-sm text-primary mt-5 mb-3">6月25日</div>
                                    <ul className="activity-thread">
                                        <li>
                                            <div className="media">
                                                <div className="media-head">
                                                    <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                        <span className="initial-wrap">M</span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        <div className="activity-text"><span className="text-dark">摩根·弗里曼</span> 回复了您关于预约日程的提问。 </div>
                                                        <div className="activity-time">22:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div >
                        </div >
                    </SimpleBar >
                </div >
            </Modal.Body >
        </Modal >
    )
}

export default ContactDetails
