import React from 'react';
import SimpleBar from 'simplebar-react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { Plus } from 'react-feather';

//Images
import avatar2 from '../../../assets/img/avatar2.jpg';
import avatar7 from '../../../assets/img/avatar7.jpg';
import avatar9 from '../../../assets/img/avatar9.jpg';
import avatar10 from '../../../assets/img/avatar10.jpg';
import avatar13 from '../../../assets/img/avatar13.jpg';
import avatar15 from '../../../assets/img/avatar15.jpg';

const TaskboardInfo = ({onHide}) => {
    return (
        <div className="taskboard-info">
            <SimpleBar className="nicescroll-bar">
                <Button bsPrefix="btn-close" type="button" className="info-close mb-10" onClick={onHide}>
                    <span aria-hidden="true">×</span>
                </Button>
                <Form role="search" className="mt-xl-0 mt-5">
                    <Form.Control type="text" placeholder="在会话中搜索" />
                </Form>
                <div className="collapse-simple mt-4">
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#members" aria-expanded="true">成员</a>
                        </Card.Header>
                        <div id="members" className="collapse show">
                            <Card.Body>
                                <ul className="hk-list">
                                    <li>
                                        <div className="avatar avatar-sm avatar-primary avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="云翔">
                                            <span className="initial-wrap">Cb</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="摩根">
                                            <img src={avatar2} alt="user" className="avatar-img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="查理">
                                            <img src={avatar13} alt="user" className="avatar-img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="汤姆">
                                            <img src={avatar7} alt="user" className="avatar-img" />
                                            <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="凯瑟琳">
                                            <img src={avatar9} alt="user" className="avatar-img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="丹尼尔">
                                            <img src={avatar10} alt="user" className="avatar-img" />
                                            <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="老板">
                                            <img src={avatar15} alt="user" className="avatar-img" />
                                            <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="温斯顿">
                                            <span className="initial-wrap">W</span>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#some" className="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded" data-bs-toggle="modal" data-bs-target="#invite_people">
                                            <span className="initial-wrap" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="添加新成员">
                                                <span className="feather-icon"><Plus /></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <a role="button" data-bs-toggle="collapse" href="#activity" aria-expanded="true">最新动态</a>
                        </Card.Header>
                        <div id="activity" className="collapse show">
                            <Card.Body>
                                <ListGroup as="ul" variant="flush" className="activity-list">
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                                    <span className="initial-wrap">Cb</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">云翔</span> 在文档链接上回复了 - <a href="#some" className="link-url"><u>ttps://caoba.com/theme/jampa</u></a></p>
                                                <div className="last-activity-time">2021年10月15日 12:34</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar2} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">摩根·弗里曼</span> 完成了 <a href="#some" className="link-default"><u>组件</u></a> 的 React 转换</p>
                                                <div className="last-activity-time">2021年9月16日 16:54</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar13} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">吉米·卡里</span> 完成了 <a href="#some" className="link-default"><u>元素</u></a> 的侧边栏菜单</p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar7} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">查理·卓别林</span> 删除了 <a href="#some" className="link-default"><u>已完成</u></a> 上的空卡片</p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                    <span className="initial-wrap">W</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表上创建了笔记</p>
                                                <div className="last-activity-time">2021年9月2日 09:23</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar2} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">摩根·弗里曼</span> 完成了 <a href="#some" className="link-default"><u>组件</u></a> 的 React 转换</p>
                                                <div className="last-activity-time">2021年9月16日 16:54</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar13} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">吉米·卡里</span> 添加了共享组件到 <a href="#some" className="link-default"><u>基础结构</u></a></p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                                    <span className="initial-wrap">Cb</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">云翔</span> 评论了 <a href="#some" className="link-default"><u>基础结构</u></a></p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-rounded">
                                                    <img src={avatar7} alt="user" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">查理·卓别林</span> 将组件从所有模块移至进行中</p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="media">
                                            <div className="media-head">
                                                <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                                    <span className="initial-wrap">W</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <p><span className="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表上创建了笔记</p>
                                                <div className="last-activity-time">2021年9月10日 10:13</div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </SimpleBar>
        </div>
    )
}

export default TaskboardInfo
