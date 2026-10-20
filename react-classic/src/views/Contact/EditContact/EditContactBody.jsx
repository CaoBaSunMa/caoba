import React, { useState } from 'react';
import HkAvatarUploader from '../../../components/@hk-avatar-uploader/@hk-avatar-uploader';
import HkTooltip from '../../../components/@hk-tooltip/HkTooltip';
import { Badge, Button, Card, Col, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDropbox, faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { Activity, CheckSquare, Clock, Edit2, Edit3, Heart, Mail, Phone, Plus, Shield, Trash, Upload, Video, Zap } from 'react-feather';
//Internal Components
import ProfileInfo from './ProfileInfo';
import MoreInfo from './MoreInfo';
import AddTags from './AddTags';
import AddBio from './AddBio';

//Image
import avatar2 from '../../../assets/img/avatar2.jpg';

const EditContactBody = () => {
    const [profileInfo, setProfileInfo] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false);
    const [addTags, setAddTags] = useState(false);
    const [addBio, setAddBio] = useState(false);

    return (
        <>
            <div className="contact-body contact-detail-body">
                <SimpleBar className="nicescroll-bar">
                    <div className="d-flex flex-xxl-nowrap flex-wrap">
                        <div className="contact-info w-xxl-30 w-100">
                            <Dropdown className="action-btn">
                                <Dropdown.Toggle variant="light">操作</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>操作</Dropdown.Item>
                                    <Dropdown.Item>另一个操作</Dropdown.Item>
                                    <Dropdown.Item>其他选项</Dropdown.Item>
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item>分隔链接</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="text-center mt-5">
                                <div className="mx-auto" style={{ width: 118 }} >
                                    <HkAvatarUploader
                                        defaultImg={avatar2}
                                    />
                                </div>
                                <div className="cp-name text-truncate mt-3">曼达琳·肖恩</div>
                                <p>无来电，一直忙碌</p>
                                <Rating initialValue={3} readonly size="20" />
                                <ul className="hk-list hk-list-sm justify-content-center mt-2">
                                    <li>
                                        <Button variant="soft-primary" className="btn-icon btn-rounded">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Mail />
                                                </span>
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="soft-success" className="btn-icon btn-rounded">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Phone />
                                                </span>
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="soft-danger" className="btn-icon btn-rounded">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Video />
                                                </span>
                                            </span>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <Card>
                                <Card.Header>
                                    <Link to="#">个人资料信息</Link>
                                    <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setProfileInfo(!profileInfo)} >
                                        <HkTooltip placement="top" title="编辑" >
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </HkTooltip>
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
                                    <Link to="#">更多信息</Link>
                                    <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setMoreInfo(!moreInfo)}>
                                        <HkTooltip placement="top" title="编辑" >
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </HkTooltip>
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
                                    <Link to="#">标签</Link>
                                    <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setAddTags(!addTags)} >
                                        <HkTooltip placement="top" title="添加标签" >
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Plus />
                                                </span>
                                            </span>
                                        </HkTooltip>
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                    <Badge bg='soft-violet' className="badge-soft-violet me-1">协作</Badge>
                                    <Badge bg='soft-danger' className="badge-soft-danger me-1">React 开发</Badge>
                                </Card.Body>
                            </Card>
                            <div className="separator-full" />
                            <Card>
                                <Card.Header>
                                    <Link to="#">社交账号</Link>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="hk-list hk-list-sm">
                                        <li>
                                            <Button variant="primary" className="btn-icon btn-rounded">
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
                                    <Link to="#">个人简介</Link>
                                    <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setAddBio(!addBio)} >
                                        <HkTooltip placement="top" title="编辑" >
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Edit2 />
                                                </span>
                                            </span>
                                        </HkTooltip>
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                    <p>你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。</p>
                                </Card.Body>
                            </Card>
                            <div className="separator-full" />
                            <Card>
                                <Card.Header>
                                    <Link to="#">设置</Link>
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
                            <Tab.Container activeKey="tab_summery" >
                                <Nav variant='tabs' className="nav-line nav-icon nav-light">
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
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="mt-7">
                                    <Tab.Pane eventKey="tab_summery">
                                        <Form>
                                            <Row>
                                                <Col md={12} as={Form.Group} className="mb-3" >
                                                    <div className="form-label-group">
                                                        <Form.Label>写一条笔记</Form.Label>
                                                        <small className="text-muted">1200</small>
                                                    </div>
                                                    <Form.Control as="textarea" rows={8} placeholder="写下内部备注" />
                                                </Col>
                                            </Row>
                                            <Button variant="outline-light" className="mt-2">添加笔记</Button>
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
                        </div>
                    </div>
                </SimpleBar>
            </div>

            {/* Add Tag */}
            <AddTags show={addTags} hide={() => setAddTags(!addTags)} />
            {/* Profile Information */}
            <ProfileInfo show={profileInfo} hide={() => setProfileInfo(!profileInfo)} />
            {/* More Info */}
            <MoreInfo show={moreInfo} hide={() => setMoreInfo(!moreInfo)} />
            {/* Add Bio */}
            <AddBio show={addBio} hide={() => setAddBio(!addBio)} />

        </>
    )
}

export default EditContactBody;
