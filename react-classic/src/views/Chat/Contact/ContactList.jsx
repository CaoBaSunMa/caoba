import React, { useState } from 'react'
import { Button, Dropdown, Form, ListGroup } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import * as Icons from 'react-feather';
import InvitePeopleModal from '../InvitePeopleModal';
import { useWindowWidth } from '@react-hook/window-size';

//Redux
import { connect } from 'react-redux';
import { StartConversation } from '../../../redux/action/Chat';
import { toggleTopNav } from '../../../redux/action/Theme';

//Images
import avatar1 from '../../../assets/img/avatar1.jpg';
import avatar2 from '../../../assets/img/avatar2.jpg';
import avatar3 from '../../../assets/img/avatar3.jpg';
import avatar4 from '../../../assets/img/avatar4.jpg';
import avatar7 from '../../../assets/img/avatar7.jpg';
import avatar8 from '../../../assets/img/avatar8.jpg';
import avatar9 from '../../../assets/img/avatar9.jpg';
import avatar11 from '../../../assets/img/avatar11.jpg';
import avatar15 from '../../../assets/img/avatar15.jpg';


const ContactList = ({ StartConversation, startChating, toggleTopNav, topNavCollapsed }) => {
    const [showInviteModal, setShowInviteModal] = useState(false);
    const width = useWindowWidth();
    const Conversation = () => {
        if (width <= 991) {
            StartConversation(!startChating);
            toggleTopNav(!topNavCollapsed);
        }
    }

    return (
        <>
            <InvitePeopleModal show={showInviteModal} onClose={() => setShowInviteModal(!showInviteModal)} />
            <div className="chatapp-aside">
                <header className="aside-header">
                    <Dropdown>
                        <Dropdown.Toggle as="a" href="#" className="chatapp-title link-dark" >
                            <h1>联系人</h1>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="chats.html">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.MessageSquare />
                                </span>
                                <span>聊天记录</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="chats-contact.html">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.Book />
                                </span>
                                <span>联系人</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="chats-group.html">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.User />
                                </span>
                                <span>群组</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#some">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.Archive />
                                </span>
                                <span>已归档</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#some">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.Star />
                                </span>
                                <span>收藏</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex">
                        <Dropdown>
                            <Dropdown.Toggle as="a" href="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret me-1">
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.Settings />
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" >
                                <Dropdown.Item href="#some">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.UserCheck />
                                    </span>
                                    <span>活跃联系人</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#some">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.MessageSquare />
                                    </span>
                                    <span>聊天请求</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#some">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Archive />
                                    </span>
                                    <span>已归档的聊天</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#some">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.ToggleRight />
                                    </span>
                                    <span>未读聊天</span>
                                </Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Item href="#some">设置</Dropdown.Item>
                                <Dropdown.Item href="#some">帮助</Dropdown.Item>
                                <Dropdown.Item href="#some">反馈问题	</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="primary" className="btn-icon btn-rounded" onClick={() => setShowInviteModal(!showInviteModal)} >
                            <span className="icon">
                                <span className="feather-icon">
                                    <Icons.Plus />
                                </span>
                            </span>
                        </Button>
                    </div>
                </header>
                <SimpleBar className="aside-body">
                    <Form className="aside-search" role="search">
                        <input type="text" className="form-control" placeholder="搜索联系人" />
                    </Form>
                    <ListGroup as="ul" variant="flush" className="chat-contacts-list">
                        <li>
                            <div className="title title-wth-divider text-primary my-3"><span>A</span></div>
                        </li>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-chat active-user">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar2} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">艾伦·里克曼</div>
                                        <div className="user-status">今天什么都不想做</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar8} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">阿什莉·朱德</div>
                                        <div className="user-status">我的生活我做主😍</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar11} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">亚当·桑德勒</div>
                                        <div className="user-status">你好，我正在使用 caoba</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <li>
                            <div className="title title-wth-divider text-primary my-3"><span>B</span></div>
                        </li>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar4} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">比利·禅</div>
                                        <div className="user-status">👿带我去那些地方！！</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar1} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">布莱德利·库珀</div>
                                        <div className="user-status">一直忙碌</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar15} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">布拉德·皮特</div>
                                        <div className="user-status">不打电话，只用心电感应</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative">
                                        <span className="initial-wrap">本</span>
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">本·阿弗莱克</div>
                                        <div className="user-status">¬¬¬ 度假中</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar3} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">芭芭拉·哈尔希</div>
                                        <div className="user-status">像蟒蛇一样乏味</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <li>
                            <div className="title title-wth-divider text-primary my-3"><span>C</span></div>
                        </li>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded position-relative">
                                        <img src={avatar7} alt="user" className="avatar-img" />
                                        <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">科林·汉克斯</div>
                                        <div className="user-status">不接电话，一直忙碌</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar9} alt="user" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">查克·诺里斯</div>
                                        <div className="user-status">你好，我正在使用 caoba</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-soft-info avatar-rounded">
                                        <span className="initial-wrap">克</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">克里斯蒂安·贝尔</div>
                                        <div className="user-status">暂无状态</div>
                                    </div>
                                    <div>
                                        <div className="dropdown action-drp">
                                            <a href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#some">删除聊天</a>
                                                <a className="dropdown-item link-danger" href="#some">屏蔽</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </SimpleBar>
            </div>
        </>
    )
}

const mapStateToProps = ({ chatReducer, theme }) => {
    const { startChating } = chatReducer;
    const { topNavCollapsed } = theme;
    return { startChating, topNavCollapsed }
};

export default connect(mapStateToProps, { StartConversation, toggleTopNav })(ContactList);
