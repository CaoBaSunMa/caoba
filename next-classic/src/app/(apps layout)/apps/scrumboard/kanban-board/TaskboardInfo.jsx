'use client';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { Plus } from 'react-feather';
import HkCollapse from '@/components/@hk-collapse/@hk-collapse';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import avatar15 from '@/assets/img/avatar15.jpg';

const TaskboardInfo = ({ onHide }) => {
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
                    <HkCollapse
                        bsPrefix="a"
                        href="#"
                        targetId="board_members"
                        title="成员"
                        collapsed={false}
                    >
                        <ul className="hk-list">
                            <li>
                                <div className="avatar avatar-sm avatar-primary avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="云翔">
                                    <span className="initial-wrap">Cb</span>
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="摩根">
                                    <Image src={avatar2} alt="user" className="avatar-img" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="查理">
                                    <Image src={avatar13} alt="user" className="avatar-img" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="汤姆">
                                    <Image src={avatar7} alt="user" className="avatar-img" />
                                    <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="凯瑟琳">
                                    <Image src={avatar9} alt="user" className="avatar-img" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="丹尼尔">
                                    <Image src={avatar10} alt="user" className="avatar-img" />
                                    <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="老板">
                                    <Image src={avatar15} alt="user" className="avatar-img" />
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
                                    <span className="initial-wrap" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="新增">
                                        <span className="feather-icon"><Plus /></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </HkCollapse>
                    <HkCollapse
                        bsPrefix="a"
                        href="#"
                        targetId="board_activity"
                        title="最新动态"
                        collapsed={false}
                    >
                        <ListGroup as="ul" variant="flush" className="activity-list">
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-primary avatar-rounded">
                                            <span className="initial-wrap">Cb</span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">云翔</span> 的文档链接已恢复正常 - <a href="#some" className="link-url"><u>ttps://caoba.com/theme/jampa</u></a></p>
                                        <div className="last-activity-time">2021年10月15日 12:34</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar2} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">摩根·弗里曼</span> 已完成 <a href="#some" className="link-default"><u>组件</u></a> 的 React 转换</p>
                                        <div className="last-activity-time">2021年9月16日 16:54</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar13} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">吉米·卡里</span> 已完成 <a href="#some" className="link-default"><u>元素</u></a> 中的侧边栏菜单</p>
                                        <div className="last-activity-time">2021年9月10日 10:13</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar7} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">查理·卓别林</span> 已删除 <a href="#some" className="link-default"><u>已完成</u></a> 列表中的空卡片</p>
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
                                        <p><span className="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中创建了一条备注</p>
                                        <div className="last-activity-time">2021年9月2日 09:23</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar2} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">摩根·弗里曼</span> 已完成 <a href="#some" className="link-default"><u>组件</u></a> 的 React 转换</p>
                                        <div className="last-activity-time">2021年9月16日 16:54</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar13} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">吉米·卡里</span> 已将共享组件添加到 <a href="#some" className="link-default"><u>基础结构</u></a></p>
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
                                        <p><span className="text-dark">云翔</span> 已在 <a href="#some" className="link-default"><u>基础结构</u></a> 上发表评论</p>
                                        <div className="last-activity-time">2021年9月10日 10:13</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar7} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><span className="text-dark">查理·卓别林</span> 已将组件从所有模块移至进行中</p>
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
                                        <p><span className="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中创建了一条备注</p>
                                        <div className="last-activity-time">2021年9月10日 10:13</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </HkCollapse>
                </div>
            </SimpleBar>
        </div>
    )
}

export default TaskboardInfo
