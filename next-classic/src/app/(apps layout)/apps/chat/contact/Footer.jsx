'use client';
import { useState } from 'react';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';
import { Button, Dropdown } from 'react-bootstrap';
import { ArrowRight, Share, Smile } from 'react-feather';

const Footer = () => {
    const [message, setMessage] = useState([]);
    const { states, dispatch } = useGlobalStateContext();

    //Get current system time
    const current = new Date();
    const msgTitme = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    //Send a new messages
    const sendMessage = () => {
        dispatch({ type: "contact_msg", contactMsg: { text: message, time: msgTitme, types: "sent" } });
        if (states.chatState.contactMsg) {
            setTimeout(() => {
                dispatch({ type: "contact_msg", contactMsg: { text: "你在说什么？", time: msgTitme, types: "received" } });
            }, 800);
        }
    }

    const handleClick = () => {
        sendMessage();
        setMessage("");
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
            setMessage("");
        }
    }


    return (
        <footer className="chat-footer">
            <Dropdown>
                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0">
                    <span className="icon">
                        <span className="feather-icon">
                            <Share />
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
            <div className="input-group">
                <span className="input-affix-wrapper">
                    <input type="text" id="input_contact_chat" name="send-msg" className="input-msg-send form-control rounded-input" placeholder="输入消息..." value={message} onChange={e => setMessage(e.target.value)} onKeyDown={onKeyDown} />
                    <span className="input-suffix">
                        <Button variant="flush-primary" className="btn-icon btn-rounded btn-send">
                            <span className="icon" onClick={handleClick} >
                                <span className="feather-icon">
                                    <ArrowRight />
                                </span>
                            </span>
                        </Button>
                    </span>
                </span>
            </div>
            <Button className="btn-icon btn-flush-dark btn-rounded flush-soft-hover">
                <span className="icon">
                    <span className="feather-icon">
                        <Smile />
                    </span>
                </span>
            </Button>
        </footer>
    )
}

export default Footer;