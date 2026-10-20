import React from 'react';
import { Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';
import HkTooltip from '../../components/@hk-tooltip/HkTooltip';
import HkBadge from '../../components/@hk-badge/@hk-badge';

//Images
import avatar9 from '../../assets/img/avatar9.jpg';
import avatar10 from '../../assets/img/avatar10.jpg';
import avatar12 from '../../assets/img/avatar12.jpg';
import avatar15 from '../../assets/img/avatar15.jpg';
import mock2 from '../../assets/img/gallery/mock2.jpg';

const FileInfo = ({ onHide }) => {
    return (
        <div className="file-info">
            <SimpleBar className="nicescroll-bar">
                <Button bsPrefix="btn-close" className="info-close" onClick={onHide}>
                    <span aria-hidden="true">×</span>
                </Button>
                <div className="file-name">bruce-mars-fiEG-PkjG</div>
                <span>JPG 文件</span>
                <img src={mock2} alt="user" className="d-block img-fluid my-4 w-250p" />
                <Tab.Container defaultActiveKey="tabInfo" >
                    <Nav as="ul" justify variant="tabs" className="nav-light nav-segmented-tabs active-theme mt-5">
                        <Nav.Item>
                            <Nav.Link eventKey="tabInfo">
                                <span className="nav-link-text">详情</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tabActivity">
                                <span className="nav-link-text">动态</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="mt-5">
                        <Tab.Pane eventKey="tabInfo" >
                            <div className="collapse-simple">
                                <Card>
                                    <Card.Header>
                                        <Link to="#fl_info" role="button" data-bs-toggle="collapse" aria-expanded="true">规格信息</Link>
                                    </Card.Header>
                                    <div id="fl_info" className="collapse show">
                                        <Card.Body>
                                            <ul className="fm-info">
                                                <li>
                                                    <span>修改时间</span>
                                                    <span>2020年11月20日</span>
                                                </li>
                                                <li>
                                                    <span>大小</span>
                                                    <span>15.2 GB</span>
                                                </li>
                                                <li>
                                                    <span>创建者</span>
                                                    <span>摩根·弗里曼</span>
                                                </li>
                                                <li>
                                                    <span>创建时间</span>
                                                    <span>2020年11月12日</span>
                                                </li>
                                                <li>
                                                    <span>尺寸</span>
                                                    <span>1950 x 1245</span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Link role="button" data-bs-toggle="collapse" to="#shared_with" aria-expanded="true">共享成员 </Link>
                                    </Card.Header>
                                    <div id="shared_with" className="collapse show">
                                        <Card.Body>
                                            <ul className="hk-list">
                                                <li>
                                                    <HkTooltip placement="top" title="凯瑟琳" >
                                                        <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                                            <img src={avatar9} alt="user" className="avatar-img" />
                                                            <HkBadge bg="transparent" className="badge-icon badge-circle text-blue badge-icon-xxs position-bottom-end-overflow-1"  >
                                                                <div className="badge-icon-wrap">
                                                                    <i className="ri-upload-2-fill" />
                                                                </div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                                    <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                                        <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                                        <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                                    </g>
                                                                </svg>
                                                            </HkBadge>
                                                        </div>
                                                    </HkTooltip>
                                                </li>
                                                <li>
                                                    <HkTooltip placement="top" title="迪恩" >
                                                        <div className="avatar avatar-sm  avatar-rounded">
                                                            <img src={avatar10} alt="user" className="avatar-img" />
                                                        </div>
                                                    </HkTooltip>
                                                </li>
                                                <li>
                                                    <HkTooltip placement="top" title="温斯顿" >
                                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                            <span className="initial-wrap">W</span>
                                                        </div>
                                                    </HkTooltip>
                                                </li>
                                                <li>
                                                    <a href='#som' className="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded" data-bs-toggle="modal" data-bs-target="#invite_people">
                                                        <HkTooltip placement="top" title="添加" >
                                                            <span className="initial-wrap">
                                                                <span className="feather-icon">
                                                                    <Plus />
                                                                </span>
                                                            </span>
                                                        </HkTooltip>
                                                    </a>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Link role="button" data-bs-toggle="collapse" to="#settings" aria-expanded="true">设置 </Link>
                                    </Card.Header>
                                    <div id="settings" className="collapse show">
                                        <Card.Body>
                                            <ul className="fm-action">
                                                <li>
                                                    <Link to="#">
                                                        <span className="text-danger">删除文件</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        出现问题
                                                    </Link>
                                                </li>
                                            </ul>
                                            <Link to="#" className="d-block text-dark fs-7 mb-2">提交反馈并举报会话</Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tabActivity">
                            <div className="collapse-simple">
                                <Card>
                                    <Card.Header>
                                        <Link to="#act_info1" role="button" data-bs-toggle="collapse" aria-expanded="true">昨天</Link>
                                    </Card.Header>
                                    <div id="act_info1" className="collapse show">
                                        <Card.Body>
                                            <ListGroup variant="flush" className="activity-list">
                                                <ListGroup.Item>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                                                <span className="initial-wrap">Cb</span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <p>
                                                                <span className="text-dark">caoba</span> 正在处理 <Link to="#" className="link-url"><u>https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file</u></Link>
                                                            </p>
                                                            <div className="last-activity-time">15:15</div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="media-head">
                                                                <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                                    <span className="initial-wrap">W</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <p><span className="text-dark">摩根·弗雷格曼</span> 完成了 <Link to="#" className="link-default"><u>组件</u></Link> 的 React 转换</p>
                                                            <div className="last-activity-time">15:15</div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Link role="button" data-bs-toggle="collapse" to="#act_info2" aria-expanded="true">4月23日</Link>
                                    </Card.Header>
                                    <div id="act_info2" className="collapse show">
                                        <Card.Body>
                                            <ListGroup variant="flush" className="activity-list">
                                                <ListGroup.Item>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm avatar-rounded">
                                                                <img src={avatar15} alt="user" className="avatar-img" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <p><span className="text-dark">caoba</span> 正在处理 <Link to="#" className="link-url"><u>https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file</u></Link></p>
                                                            <div className="last-activity-time">15:15</div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm avatar-rounded">
                                                                <img src={avatar12} alt="user" className="avatar-img" />
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <p><span className="text-dark">摩根·弗雷格曼</span> 完成了 <Link to="#" className="link-default"><u>组件</u></Link> 的 React 转换</p>
                                                            <div className="last-activity-time">15:15</div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </SimpleBar>
        </div>
    )
}

export default FileInfo
