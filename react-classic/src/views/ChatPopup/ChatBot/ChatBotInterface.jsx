import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import { Button, Card, Dropdown, Form, InputGroup } from 'react-bootstrap';
import * as Icons from 'react-feather';
//Redux
import { connect } from 'react-redux';
import { sendMsg } from '../../../redux/action/ChatPopup';
//Image
import logo from '../../../assets/img/logo-light.png';

const ChatBotInterface = ({ show, sendMsg, msg }) => {

    const [showChatbot, setShowChatbot] = useState(show);
    const [showPopup, setshowPopup] = useState(true);
    const [startConversation, setStartConversation] = useState(false);
    const [typing, setTyping] = useState(true);
    const [messages, setMessages] = useState([]);

    //Sent New Messages
    const sendMessage = () => {
        sendMsg({ text: messages, types: "sent" });
        if (msg) {
            setTimeout(() => {
                sendMsg({ text: "你在说什么？", types: "received" });
            }, 800);
        }
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
            setMessages("");
            setTyping(false);
        }
    }

    // 👇️ scroll to bottom every time messages change
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msg, startConversation]);

    return (
        <>
            <div className={classNames("hk-chatbot-popup", { "d-md-block d-flex": showChatbot })}>
                <header className={classNames({ "pb-2": startConversation })} >
                    <div className="chatbot-head-top">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" size="sm" className="btn-icon btn-rounded no-caret">
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.MoreHorizontal />
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <i className="dropdown-icon zmdi zmdi-notifications-active" />
                                    <span>发送推送通知</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <i className="dropdown-icon zmdi zmdi-volume-off" />
                                    <span>静音聊天</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <span className="text-white">与我们聊天</span>
                        <Button variant="dark" size="sm" className="btn-icon btn-rounded" onClick={() => setShowChatbot(!showChatbot)} >
                            <span className="icon">
                                <span className="feather-icon">
                                    <Icons.Minus />
                                </span>
                            </span>
                        </Button>
                    </div>
                    <div className="separator-full separator-light mt-0 opacity-10" />
                    <div className="media-wrap">
                        <div className="media">
                            <div className="media-head">
                                <div className="avatar avatar-sm avatar-soft-primary avatar-icon avatar-rounded position-relative">
                                    <span className="initial-wrap">
                                        <i className="ri-customer-service-2-line" />
                                    </span>
                                    <span className="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1" />
                                </div>
                            </div>
                            <div className="media-body">
                                <div className="user-name">聊天机器人</div>
                                <div className="user-status">在线</div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={classNames("chatbot-popup-body")}>
                    <SimpleBar className={classNames("nicescroll-bar", { "mt-0": startConversation })}>
                        <div>
                            <div className={classNames("init-content-wrap", { "d-none": startConversation })}>
                                <Card className="card-shadow">
                                    <Card.Body>
                                        <Card.Text>你好，我是聊天机器人 😈<br />对我们的工具有任何疑问吗？<br /><br />请选择主题或开始聊天。</Card.Text>
                                        <Button variant="primary" className="btn-block text-nonecase start-conversation" onClick={() => setStartConversation(!startConversation)} >开始对话</Button>
                                    </Card.Body>
                                </Card>
                                <div className="btn-wrap">
                                    <Button variant="soft-primary" className="text-nonecase btn-rounded start-conversation" onClick={() => setStartConversation(!startConversation)}>
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Icons.Eye />
                                                </span>
                                            </span>
                                            <span className="btn-text">随便看看</span>
                                        </span>
                                    </Button>
                                    <Button variant="soft-danger" className="text-nonecase btn-rounded start-conversation" onClick={() => setStartConversation(!startConversation)}>
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Icons.CreditCard />
                                                </span>
                                            </span>
                                            <span className="btn-text">我有关于定价的问题</span>
                                        </span>
                                    </Button>
                                    <Button variant="soft-warning" className="text-nonecase btn-rounded start-conversation" onClick={() => setStartConversation(!startConversation)}>
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Icons.Cpu />
                                                </span>
                                            </span>
                                            <span className="btn-text">需要技术方面的帮助</span>
                                        </span>
                                    </Button>
                                    <Button variant="soft-success" className="text-nonecase btn-rounded start-conversation" onClick={() => setStartConversation(!startConversation)}>
                                        <span>
                                            <span className="icon">
                                                <span className="feather-icon">
                                                    <Icons.Zap />
                                                </span>
                                            </span>
                                            <span className="btn-text">我有购买前的问题</span>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <ul className={classNames("list-unstyled", { "d-none": !startConversation })}>
                                {
                                    msg.map((elem, index) => (
                                        <li className={classNames("media", (elem.types))} key={index}>
                                            {elem.types === "received" && <div className="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded">
                                                <span className="initial-wrap">
                                                    <i className="ri-customer-service-2-line" />
                                                </span>
                                            </div>}
                                            <div className="media-body">
                                                <div className="msg-box">
                                                    <div>
                                                        <p>{elem.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                                {typing && <li className="media received">
                                    <div className="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded">
                                        <span className="initial-wrap">
                                            <i className="ri-customer-service-2-line" />
                                        </span>
                                    </div>
                                    <div className="media-body">
                                        <div className="msg-box typing-wrap">
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
                <footer>
                    <div className={classNames("chatbot-intro-text fs-7", { "d-none": startConversation })}>
                        <div className="separator-full separator-light" />
                        <p className="mb-2">这是 caoba 的测试版本，请立即注册以抢先体验我们的完整版</p>
                        <a className="d-block mb-2" href="#some"><u>提供反馈</u></a>
                    </div>
                    <InputGroup className={classNames({ "d-none": !startConversation })}>
                        <div className="input-group-text overflow-show border-0">
                            <Dropdown>
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon flush-soft-hover btn-rounded no-caret" >
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Icons.Share />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-image-line" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">照片或视频库</span>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-file-4-line" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">文档</span>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-map-pin-line" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">位置</span>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-contacts-line" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">联系人</span>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Form.Control type="text" id="input_msg_chat_popup_2" name="send-msg" className="input-msg-send border-0 shadow-none" placeholder="输入内容..." value={messages} onChange={e => setMessages(e.target.value)} onKeyDown={onKeyDown} />
                        <div className="input-group-text overflow-show border-0">
                            <Button variant="flush-dark" className="btn-icon flush-soft-hover btn-rounded">
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Icons.Smile />
                                    </span>
                                </span>
                            </Button>
                        </div>
                    </InputGroup>
                    <div className="footer-copy-text">由 <a className="brand-link" href="#some"><img src={logo} alt="logo-brand" /></a> 提供支持</div>
                </footer>
            </div>
            <Button variant="primary" size="lg" className="btn-icon btn-floating btn-rounded btn-popup-open" onClick={() => { setShowChatbot(!showChatbot); setshowPopup(false); }} >
                <span className="icon">
                    <span className="feather-icon">
                        <Icons.MessageCircle />
                    </span>
                </span>
            </Button>
            <div className={classNames("chat-popover shadow-xl", { "d-flex": showPopup })}><p>免费试用 caoba 聊天，立即连接你的客户！</p></div>
        </>
    )
}

const mapStateToProps = ({ chatPopupReducer }) => {
    const { msg } = chatPopupReducer;
    return { msg }
};

export default connect(mapStateToProps, { sendMsg })(ChatBotInterface);