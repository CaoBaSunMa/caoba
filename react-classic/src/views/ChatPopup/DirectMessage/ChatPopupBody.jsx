import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, Dropdown, ListGroup } from 'react-bootstrap';
import { ArrowDown, MoreHorizontal, MoreVertical } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkBadge from '../../../components/@hk-badge/@hk-badge';

//Redux
import { connect } from 'react-redux';
import { DirectMsg } from '../../../redux/action/ChatPopup';

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
import gify from '../../../assets/img/giphy.gif';

const ChatPopupBody = ({ showContactList, directMsgs, DirectMsg }) => {
    const [messages, setMessages] = useState(directMsgs);
    const [isTyping, setIsTyping] = useState(true);

    //Get New Messages
    useEffect(() => {
        setMessages(directMsgs);
        if (messages.length > 0) {
            setIsTyping(false);
        }
    }, [directMsgs, messages]);

    // 👇️ scroll to bottom every time messages change
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <div className="chat-popup-body">
            <SimpleBar className="nicescroll-bar">
                <div>
                    <div className={classNames("contact-list-wrap", { "d-none": !showContactList })}>
                        <ListGroup as="ul" variant="flush" className="chat-contacts-list">
                            <li>
                                <div className="title title-wth-divider text-primary my-3"><span>A</span></div>
                            </li>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar2} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">艾伦·里克曼</div>
                                            <div className="user-status">今天什么都不想做</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar8} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">阿什莉·朱德</div>
                                            <div className="user-status">我的生活我做主😍</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar11} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">亚当·桑德勒</div>
                                            <div className="user-status">你好，我正在使用 caoba</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <li>
                                <div className="title title-wth-divider text-primary my-3"><span>B</span></div>
                            </li>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar4} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">比利·禅</div>
                                            <div className="user-status">👿带我去那些地方！！</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar1} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">布莱德利·库珀</div>
                                            <div className="user-status">一直忙碌</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar15} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">布拉德·皮特</div>
                                            <div className="user-status">不打电话，只用心电感应</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative">
                                            <span className="initial-wrap">B</span>
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">本·阿弗莱克</div>
                                            <div className="user-status">¬¬¬ 度假中</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar3} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">芭芭拉·哈尔希</div>
                                            <div className="user-status">像蟒蛇一样乏味</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <li>
                                <div className="title title-wth-divider text-primary my-3"><span>C</span></div>
                            </li>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-rounded position-relative">
                                            <img src={avatar7} alt="user" className="avatar-img" />
                                            <HkBadge bg="success" indicator className="badge-indicator-lg position-bottom-end-overflow-1" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">科林·汉克斯</div>
                                            <div className="user-status">不接电话，一直忙碌</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
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
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className="media">
                                    <div className="media-head">
                                        <div className="avatar avatar-sm avatar-soft-info avatar-rounded">
                                            <span className="initial-wrap">C</span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="user-name">克里斯蒂安·贝尔</div>
                                            <div className="user-status">暂无状态</div>
                                        </div>
                                        <div>
                                            <Dropdown className="action-drp">
                                                <Dropdown.Toggle as="a" href="#" className="btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret">
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreHorizontal />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>删除聊天</Dropdown.Item>
                                                    <Dropdown.Item className="link-danger">屏蔽</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <ul className={classNames("list-unstyled", { "d-none": showContactList })}>
                        <li className="media received">
                            <div className="avatar avatar-xs avatar-rounded">
                                <img src={avatar8} alt="user" className="avatar-img" />
                            </div>
                            <div className="media-body">
                                <div className="msg-box">
                                    <div>
                                        <p>好吧，我们明天再谈吧</p>
                                        <span className="chat-time">22:52</span>
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="msg-box">
                                    <div>
                                        <p>新营销页面的图片已经发过去了</p>
                                        <span className="chat-time">22:53</span>
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="day-sep">
                            <span>今天</span>
                        </li>
                        <li className="media media-attachment received">
                            <div className="avatar avatar-xs avatar-rounded">
                                <img src={avatar8} alt="user" className="avatar-img" />
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
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media sent">
                            <div className="media-body">
                                <div className="msg-box">
                                    <div>
                                        <p>对了，我正在做一个你一定会感兴趣的东西。</p>
                                        <span className="chat-time">23:52</span>
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media media-attachment received">
                            <div className="avatar avatar-xs avatar-rounded">
                                <img src={avatar8} alt="user" className="avatar-img" />
                            </div>
                            <div className="media-body msg-imgs">
                                <div className="msg-box">
                                    <div>
                                        <img className="d-block img-fluid" src={gify} alt="gif" />
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media sent">
                            <div className="media-body">
                                <div className="msg-box">
                                    <div>
                                        <p>哈哈，这是个玩笑 😍</p>
                                        <span className="chat-time">22:52</span>
                                        <div className="msg-action">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                    <span className="icon">
                                                        <span className="feather-icon">
                                                            <MoreVertical />
                                                        </span>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>回复</Dropdown.Item>
                                                    <Dropdown.Item>转发</Dropdown.Item>
                                                    <Dropdown.Item>复制</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {
                            messages.map((elem, index) => (
                                <li className={classNames("media", (elem.type))} key={index}>
                                    {elem.type === "received" && <div className="avatar avatar-xs avatar-rounded">
                                        <img src={avatar8} alt="user" className="avatar-img" />
                                    </div>}
                                    <div className="media-body">
                                        <div className="msg-box">
                                            <div>
                                                <p>{elem.text}</p>
                                                <span className="chat-time">{elem.time}</span>
                                                <div className="msg-action">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="flush-dark" size="sm" href="#some" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                                                            <span className="icon">
                                                                <span className="feather-icon">
                                                                    <MoreVertical />
                                                                </span>
                                                            </span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu align="end">
                                                            <Dropdown.Item>回复</Dropdown.Item>
                                                            <Dropdown.Item>转发</Dropdown.Item>
                                                            <Dropdown.Item>复制</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        {isTyping && <li className="media received typing-wrap">
                            <div className="avatar avatar-xs avatar-rounded">
                                <img src={avatar8} alt="user" className="avatar-img" />
                            </div>
                            <div className="media-body">
                                <div className="msg-box">
                                    <div>
                                        <div className="typing">
                                            <div className="dot" />
                                            <div className="dot" />
                                            <div className="dot" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>}
                    </ul>
                    <div ref={bottomRef} />
                </div>
            </SimpleBar>
        </div>
    )
}

const mapStateToProps = ({ chatPopupReducer }) => {
    const { directMsgs } = chatPopupReducer;
    return { directMsgs }
};

export default connect(mapStateToProps, { DirectMsg })(ChatPopupBody);