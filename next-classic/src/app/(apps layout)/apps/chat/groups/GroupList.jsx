'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HkAvatar from '@/components/HkAvatar';
import classNames from 'classnames';
import { Button, Dropdown, Form, ListGroup, Nav } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import * as Icons from 'react-feather';
import InvitePeopleModal from '../InvitePeopleModal';
import { useWindowWidth } from '@react-hook/window-size';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';
import { useChat } from '@/context';
import Link from 'next/link';

// 后端返回的会话类型是大写的 'GROUP'（'DIRECT' 为单聊），
// 这里做大小写无关的判断，避免严格相等导致群组列表被过滤成空数组。
const isGroupConversation = (c) =>
    String(c?.type ?? '').trim().toUpperCase() === 'GROUP' ||
    c?.isGroup === true ||
    String(c?.isGroup ?? '').trim().toLowerCase() === 'true';

const GroupList = () => {

    const { states, dispatch } = useGlobalStateContext();
    const { conversations, fetchConversations } = useChat();
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showInviteModal, setShowInviteModal] = useState(false);

    const width = useWindowWidth();

    useEffect(() => {
        fetchConversations();
    }, [fetchConversations]);

    useEffect(() => {
        if (conversations && conversations.length > 0) {
            const groups = conversations.filter(isGroupConversation);
            setList(groups.map((conv) => ({
                id: conv.id,
                group: conv.name || conv.groupName || '',
                avatar: conv.avatar ? { type: "img", src: conv.avatar } : undefined,
                initAvatar: conv.initAvatar || (conv.name ? { type: "init", title: conv.name[0], variant: "primary" } : undefined),
                lastChat: conv.lastMessage || conv.lastChat || '',
                status: conv.status || 'Active',
            })));
        }
    }, [conversations]);

    const Conversation = (index) => {

        (list[index].avatar) ? dispatch({ type: "select_group", grpId: list[index].id, grpAvatar: list[index].avatar, groupName: list[index].group, grpStatus: list[index].status }) : dispatch({ type: "select_group", grpId: list[index].id, grpAvatar: list[index].initAvatar, groupName: list[index].group, grpStatus: list[index].status })

        if (width <= 991) {
            dispatch({ type: "start_chat" })
            dispatch({ type: "top_nav_toggle" })
        }
    }

    const searchFilter = (event) => {
        setSearchTerm(event.target.value);
        // Create copy of item list
        var updatedList = conversations.filter(isGroupConversation).map((conv) => ({
            id: conv.id,
            group: conv.name || conv.groupName || '',
            avatar: conv.avatar ? { type: "img", src: conv.avatar } : undefined,
            initAvatar: conv.initAvatar || (conv.name ? { type: "init", title: conv.name[0], variant: "primary" } : undefined),
            lastChat: conv.lastMessage || conv.lastChat || '',
            status: conv.status || 'Active',
        }));
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => searchTerm.length > 1 ? item.group.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase()) : item
        );
        // Trigger render with updated values
        setList(updatedList);
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
                            <Dropdown.Item as={Link} href="chats">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.MessageSquare />
                                </span>
                                <span>聊天记录</span>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href="contact">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.Book />
                                </span>
                                <span>联系人</span>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href="groups">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.User />
                                </span>
                                <span>群组</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span className="feather-icon dropdown-icon">
                                    <Icons.Archive />
                                </span>
                                <span>已归档</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
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
                                <Dropdown.Item href="#">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.UserCheck />
                                    </span>
                                    <span>活跃联系人</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.MessageSquare />
                                    </span>
                                    <span>聊天请求</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.Archive />
                                    </span>
                                    <span>已归档的聊天</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span className="feather-icon dropdown-icon">
                                        <Icons.ToggleRight />
                                    </span>
                                    <span>未读聊天</span>
                                </Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Item href="#">设置</Dropdown.Item>
                                <Dropdown.Item href="#">帮助</Dropdown.Item>
                                <Dropdown.Item href="#">反馈问题</Dropdown.Item>
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
                        <Form.Control type="text" placeholder="搜索联系人" value={searchTerm} onChange={searchFilter} />
                    </Form>
                    <ListGroup as="ul" variant="flush" className="chat-contacts-list">
                        {list.map((item, index) => (
                            <ListGroup.Item as="li" onClick={() => Conversation(index)} key={index}>
                                <div className={classNames("media", { "active-user read-chat": item.id === states.chatState.grpId })}>
                                    <div className="media-head">
                                        <div className={item.avatar ? "avatar avatar-sm position-relative avatar-rounded avatar-primary" : `avatar avatar-sm position-relative avatar-rounded avatar-${item.initAvatar.variant}`}>
                                            {item.avatar && <HkAvatar src={item.avatar.src} name={item.name} size={40} className="avatar-img" />}
                                            {item.initAvatar && <span className="initial-wrap">{item.initAvatar.title}</span>}
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
                                            <div className="user-name">{item.group}</div>
                                            <div className="user-last-chat">{item.lastChat}</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle href="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
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
                        ))}
                    </ListGroup>
                    <div className="title-xs text-uppercase text-primary mt-4"><span>频道</span></div>
                    <Nav variant="light" className="channels-list flex-column">
                        <Nav.Item>
                            <Nav.Link className="link-dark">#Developer</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#Designer&apos;ss</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#HRManagement</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#Team_goals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-dark">#Support_caoba</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </SimpleBar>
            </div >
        </>
    )
}

export default GroupList;
