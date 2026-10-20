'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import HkAvatar from '@/components/HkAvatar';
import { Button, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { ArrowDown, CornerUpRight, MoreHorizontal } from 'react-feather';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';

//Images
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';

const GroupChatBody = () => {
    const { states } = useGlobalStateContext();
    const [messages, setMessages] = useState(states.chatState.grpMsg);

    //Get New Messages
    useEffect(() => {
        setMessages(states.chatState.grpMsg);
    }, [states.chatState, messages]);

    // 👇️ scroll to bottom every time messages change
    const scrollRef = useRef(null);
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <SimpleBar id="chat_body" className="chat-body">
            <ul className="list-unstyled chat-single-list">
                <li className="media received">
                    <div className="avatar avatar-xs avatar-rounded">
                        <Image src={avatar8} alt="user" className="avatar-img" />
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                        <Image src={avatar9} alt="user" className="avatar-img" />
                    </div>
                    <div className="media-body msg-docs">
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
                                    <button className="btn btn-sm btn-icon btn-rounded btn-primary"><span className="icon">
                                        <span className="feather-icon">
                                            <ArrowDown />
                                        </span>
                                    </span></button>
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                                <p>我需要你的帮助。</p>
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                        <Image src={avatar10} alt="user" className="avatar-img" />
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
                                    <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
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
                                {elem.avatar.type === "img" && <HkAvatar src={elem.avatar.src} name={elem.name} size={32} className="avatar-img" />}
                                {elem.avatar.type === "init" && <div className={`avatar avatar-xs avatar-${elem.avatar.variant} avatar-rounded`}>
                                    <span className="initial-wrap">{elem.avatar.title}</span>
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
            <div ref={scrollRef} />
        </SimpleBar>
    )
}

export default GroupChatBody;