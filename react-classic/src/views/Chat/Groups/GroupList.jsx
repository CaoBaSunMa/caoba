import React, { useState } from 'react';
import { Button, Dropdown, Form, ListGroup, Nav } from 'react-bootstrap';
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
import avatar5 from '../../../assets/img/avatar5.jpg';
import avatar7 from '../../../assets/img/avatar7.jpg';
import avatar8 from '../../../assets/img/avatar8.jpg';

const GroupList = ({ StartConversation, startChating, toggleTopNav, topNavCollapsed }) => {
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
                            <h1>群组</h1>
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
                <SimpleBar style={{ height: "100%" }} className="aside-body">
                    <Form className="aside-search" role="search">
                        <Form.Control type="text" placeholder="搜索联系人" />
                    </Form>
                    <ListGroup as="ul" variant="flush" className="chat-contacts-list">
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-chat active-user">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                        <img src={avatar1} alt="user" className="avatar-img" />
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">开发者舞台</div>
                                        <div className="user-last-chat">代码构建与评审专区</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation}>
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                        <img src={avatar8} alt="user" className="avatar-img" />
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">设计师们</div>
                                        <div className="user-last-chat">不知道我是怎么做到的？😍</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation}>
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                        <span className="initial-wrap">H</span>
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">caoba</div>
                                        <div className="user-last-chat">你好，我正在使用 caoba</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation}>
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                        <img src={avatar5} alt="user" className="avatar-img" />
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">支持团队</div>
                                        <div className="user-last-chat">contact@caoba.com</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation}>
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                        <img src={avatar7} alt="user" className="avatar-img" />
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">caoba 团队</div>
                                        <div className="user-last-chat">忙着创造奇迹 :)</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation}>
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-soft-danger position-relative avatar-rounded">
                                        <span className="initial-wrap">管</span>
                                        <div className="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1">
                                            <div className="badge-icon-wrap">
                                                <i className="ri-group-fill text-light" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                                <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth={3}>
                                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor" />
                                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div className="user-name">管理层</div>
                                        <div className="user-last-chat">不打电话，只用心电感应</div>
                                    </div>
                                    <div>
                                        <Dropdown className="action-drp">
                                            <Dropdown.Toggle href="#some" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                                <span className="btn-icon-wrap">
                                                    <span className="feather-icon">
                                                        <Icons.MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#exit">退出群组</Dropdown.Item>
                                                <Dropdown.Item href="#delete">删除群组</Dropdown.Item>
                                                <Dropdown.Item href="#mute">静音群组</Dropdown.Item>
                                                <Dropdown.Item className="link-danger" href="#block">屏蔽</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="title-xs text-uppercase text-primary mt-4"><span>频道</span></div>
                    <Nav variant="light" className="channels-list flex-column">
                        <Nav.Item>
                            <Nav.Link className="link-dark">#开发者</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#设计师</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#人事管理</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#团队目标</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#caoba支持</Nav.Link>
                        </Nav.Item>
                    </Nav>
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

export default connect(mapStateToProps, { StartConversation, toggleTopNav })(GroupList);
