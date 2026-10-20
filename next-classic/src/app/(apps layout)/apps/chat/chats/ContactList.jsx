'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HkAvatar from '@/components/HkAvatar';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import * as Icons from 'react-feather';
import { Dropdown, Form, ListGroup } from 'react-bootstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';
import { useChat } from '@/context';

//Images
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar15 from '@/assets/img/avatar15.jpg';


const ContactList = ({ invitePeople }) => {

    const { states, dispatch } = useGlobalStateContext();
    const { conversations, fetchConversations } = useChat();
    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const width = useWindowWidth();

    useEffect(() => {
        fetchConversations();
    }, [fetchConversations]);

    useEffect(() => {
        if (conversations && conversations.length > 0) {
            setList(conversations.map((conv) => ({
                id: conv.id,
                name: conv.name || conv.participantName || '',
                avatar: conv.avatar ? { type: "img", src: conv.avatar } : undefined,
                initAvatar: conv.initAvatar || (conv.name ? { type: "init", title: conv.name[0], variant: "primary" } : undefined),
                time: conv.lastMessageTime || conv.time || '',
                lastChat: conv.lastMessage || conv.lastChat || '',
                status: conv.status || 'Offline',
                unread: conv.unreadCount || conv.unread || 0,
            })));
        }
    }, [conversations]);

    const Conversation = (index, id) => {
        (list[index].avatar) ? dispatch({ type: "set_user", userId: list[index].id, avatar: list[index].avatar, userName: list[index].name, status: list[index].status }) : dispatch({ type: "set_user", userId: list[index].id, avatar: list[index].initAvatar, userName: list[index].name, status: list[index].status })

        const updatedContacts = list.map((contactList) =>
            contactList.id === id ? { ...contactList, unread: 0 } : contactList
        );
        setList(updatedContacts);

        if (width <= 991) {
            dispatch({ type: "start_chat" })
            dispatch({ type: "top_nav_toggle" })
        }

    }

    const searchOnChange = (event) => {
        setSearchValue(event.target.value);
        // Create copy of item list
        var updatedList = [...conversations.map((conv) => ({
            id: conv.id,
            name: conv.name || conv.participantName || '',
            avatar: conv.avatar ? { type: "img", src: conv.avatar } : undefined,
            initAvatar: conv.initAvatar || (conv.name ? { type: "init", title: conv.name[0], variant: "primary" } : undefined),
            time: conv.lastMessageTime || conv.time || '',
            lastChat: conv.lastMessage || conv.lastChat || '',
            status: conv.status || 'Offline',
            unread: conv.unreadCount || conv.unread || 0,
        }))];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => searchValue.length > 1 ? item.name.toString().toLowerCase().includes(searchValue.toLocaleLowerCase()) : item
        );
        // Trigger render with updated values
        setList(updatedList);
    }

    return (
        <>
            <div className="chatapp-aside">
                <header className="aside-header">
                    <Dropdown>
                        <Dropdown.Toggle as="a" className="chatapp-title link-dark" href="#" >
                            <h1>聊天</h1>
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
                            <Dropdown.Toggle as="a" href="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret me-1">
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
                        <a className="btn btn-icon btn-rounded btn-primary" onClick={invitePeople} >
                            <span className="icon">
                                <span className="feather-icon">
                                    <Icons.Plus />
                                </span>
                            </span>
                        </a>
                    </div>
                </header>
                <SimpleBar style={{ height: "100%" }} className="aside-body" >
                    <Form className="aside-search" role="search">
                        <Form.Control type="text" placeholder="搜索聊天记录" value={searchValue} onChange={searchOnChange} />
                    </Form>
                    <div className="frequent-contact">
                        <div className="title-sm text-primary"><span>常用联系人</span></div>
                        <ul className="hk-list">
                            <li>
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
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-primary position-relative avatar-rounded">
                                    <Image src={avatar1} alt="user" className="avatar-img" />
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
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative">
                                    <span className="initial-wrap">W</span>
                                    <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded position-relative">
                                    <Image src={avatar8} alt="user" className="avatar-img" />
                                    <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />
                                </div>
                            </li>
                            <li>
                                <div className="avatar avatar-sm avatar-rounded">
                                    <Image src={avatar15} alt="user" className="avatar-img" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ListGroup variant="flush" className="chat-contacts-list">
                        {
                            list.map((elem, index) => (
                                <ListGroup.Item onClick={() => Conversation(index, elem.id)} key={index} >
                                    <div className={classNames("media", { "active-user": elem.id === states.chatState.userId }, { "read-chat": !elem.unread })}>
                                        <div className="media-head">
                                            {elem.avatar && <div className="avatar avatar-sm avatar-rounded position-relative">
                                                <HkAvatar src={elem.avatar.src} name={elem.name} size={40} className="avatar-img" />
                                                {elem.status === "online" && <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" />}
                                            </div>}
                                            {elem.initAvatar && <div className={`avatar avatar-sm avatar-${elem.initAvatar.variant} avatar-rounded`}>
                                                <span className="initial-wrap">{elem.initAvatar.title}</span>
                                            </div>}
                                        </div>
                                        <div className="media-body">
                                            <div>
                                                <div className="user-name">{elem.name}</div>
                                                <div className="user-last-chat">{elem.lastChat}</div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">{elem.time}</div>
                                                {elem.unread > 0 && <div className="badge badge-primary badge-sm badge-pill">{elem.unread}</div>}
                                                <div className="dropdown action-drp">
                                                    <a href="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-horizontal" /></span></span></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">静音聊天</a>
                                                        <a className="dropdown-item" href="#">归档聊天</a>
                                                        <a className="dropdown-item" href="#">删除聊天</a>
                                                        <a className="dropdown-item link-danger" href="#">屏蔽</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </SimpleBar>
            </div>
        </>
    )
}

export default ContactList;
