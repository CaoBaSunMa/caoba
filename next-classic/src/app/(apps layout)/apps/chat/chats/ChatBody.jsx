'use client';
import Image from 'next/image';
import HkAvatar from '@/components/HkAvatar';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, Dropdown } from 'react-bootstrap';
import { ArrowDown, CornerUpRight, MoreHorizontal } from 'react-feather';
import SimpleBar from 'simplebar-react';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';

//Images
import giphy from '@/assets/img/giphy.gif'

const ChatBody = () => {
    const { states } = useGlobalStateContext();
    const [messages, setMessages] = useState([]);

    //Get New Messages
    useEffect(() => {
        setMessages(states.chatState.msg);
    }, [states.chatState, messages]);

    // 👇️ scroll to bottom every time messages change
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <SimpleBar style={{ height: "100%" }} id="chat_body" className="chat-body">
            <ul id="dummy_avatar" className="list-unstyled chat-single-list">
                <li className="media received">
                    <div className="avatar avatar-xs avatar-rounded">
                        {states.chatState.avatar.type === "img" && <HkAvatar src={states.chatState.avatar.src} name={states.chatState.userName} size={32} className="avatar-img" />}
                        {states.chatState.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`}>
                            <span className="initial-wrap">{states.chatState.avatar.title}</span>
                        </div>}
                    </div>
                    <div className="media-body">
                        <div className="msg-box">
                            <div>
                                <p>好吧，我们明天再谈吧</p>
                                <span className="chat-time">22:52</span>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="msg-box">
                            <div>
                                <p>新营销页面的图片已经发过去了</p>
                                <span className="chat-time">22:53</span>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="media media-attachment received">
                    <div className="avatar avatar-xs avatar-rounded">
                        {states.chatState.avatar.type === "img" && <HkAvatar src={states.chatState.avatar.src} name={states.chatState.userName} size={32} className="avatar-img" />}
                        {states.chatState.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`}>
                            <span className="initial-wrap">{states.chatState.avatar.title}</span>
                        </div>}
                    </div>
                    <div className="media-body msg-docs">
                        <div className="msg-box">
                            <div>
                                <div className="media">
                                    <div className="avatar avatar-icon avatar-sm avatar-blue">
                                        <span className="initial-wrap fs-3">
                                            <i className="ri-file-excel-2-fill" />
                                        </span>
                                    </div>
                                    <div className="media-body">
                                        <p className="file-name">Website_content.xls</p>
                                        <p className="file-size">2,635 KB</p>
                                    </div>
                                </div>
                                <div className="file-overlay">
                                    <Button variant="primary" size="sm" className="btn-icon btn-rounded">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <ArrowDown />
                                            </span>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="msg-box">
                            <div>
                                <div className="media">
                                    <div className="avatar avatar-icon avatar-sm avatar-warning">
                                        <span className="initial-wrap fs-3">
                                            <i className="ri-file-zip-fill" />
                                        </span>
                                    </div>
                                    <div className="media-body">
                                        <p className="file-name">caoba.zip</p>
                                        <p className="file-size">2.45 GB</p>
                                    </div>
                                </div>
                                <div className="file-overlay">
                                    <Button variant="primary" size="sm" className="btn-icon btn-rounded">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <ArrowDown />
                                            </span>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="day-sep">
                    <span>今天</span>
                </li>
                <li className="media sent">
                    <div className="media-body">
                        <div className="msg-box">
                            <div>
                                <p>对了，我正在做一个你一定会感兴趣的项目。这个项目基于 AngularJS，你是其中的关键人物，我需要你的帮助。</p>
                                <span className="chat-time">23:52</span>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="media media-attachment received">
                    <div className="avatar avatar-xs avatar-rounded">
                        {states.chatState.avatar.type === "img" && <HkAvatar src={states.chatState.avatar.src} name={states.chatState.userName} size={32} className="avatar-img" />}
                        {states.chatState.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`}>
                            <span className="initial-wrap">{states.chatState.avatar.title}</span>
                        </div>}
                    </div>
                    <div className="media-body msg-imgs">
                        <div className="msg-box">
                            <div>
                                <Image className="d-block img-fluid" src={giphy} alt="gif" />
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="media sent">
                    <div className="media-body">
                        <div className="msg-box">
                            <div>
                                <p>哈哈，这个笑话太好笑了。这正是你关于工资的心声吧？😍</p>
                                <span className="chat-time">22:52</span>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="media received">
                    <div className="avatar avatar-xs avatar-rounded">
                        {states.chatState.avatar.type === "img" && <HkAvatar src={states.chatState.avatar.src} name={states.chatState.userName} size={32} className="avatar-img" />}
                        {states.chatState.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`}>
                            <span className="initial-wrap">{states.chatState.avatar.title}</span>
                        </div>}
                    </div>
                    <div className="media-body">
                        <div className="msg-box">
                            <div>
                                <p>嗨本，提醒一下你今天要来会议室开会。我们正提议对客户简报做一些调整。</p>
                                <span className="chat-time">09:20</span>
                            </div>
                            <div className="msg-action">
                                <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <CornerUpRight />
                                        </span>
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <MoreHorizontal />
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#forward">转发</Dropdown.Item>
                                        <Dropdown.Item href="#copy">复制</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </li>
                {
                    messages.map((elem, index) => (
                        <li className={classNames("media", (elem.types))} key={index}>
                            {elem.types === "received" && <div className="avatar avatar-xs avatar-rounded">
                                {states.chatState.avatar.type === "img" && <HkAvatar src={states.chatState.avatar.src} name={states.chatState.userName} size={32} className="avatar-img" />}
                                {states.chatState.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`}>
                                    <span className="initial-wrap">{states.chatState.avatar.title}</span>
                                </div>}
                            </div>}
                            <div className="media-body">
                                <div className="msg-box" id="msg-1" >
                                    <div>
                                        <p>{elem.text}</p>
                                        <span className="chat-time">{elem.time}</span>
                                    </div>
                                    <div className="msg-action">
                                        <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret">
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <CornerUpRight />
                                                </span>
                                            </span>
                                        </Button>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                                                <span className="icon">
                                                    <span className="feather-icon">
                                                        <MoreHorizontal />
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#forward">Forward</Dropdown.Item>
                                                <Dropdown.Item href="#copy">Copy</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div ref={bottomRef} />
        </SimpleBar>
    )
}

export default ChatBody;