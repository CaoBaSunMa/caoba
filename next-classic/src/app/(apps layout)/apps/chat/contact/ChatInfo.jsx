'use client';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Briefcase, Mail, MapPin, Phone } from 'react-feather';
import { faDropbox, faFacebook, faGithub, faGoogle, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import HkCollapse from '@/components/@hk-collapse/@hk-collapse';

//Image
import avatar2 from '@/assets/img/avatar2.jpg';

const ChatInfo = ({ infoToggle }) => {
    return (
        <div className="chat-info">
            <SimpleBar className="nicescroll-bar">
                <Button bsPrefix=" btn-close" className="info-close" onClick={infoToggle} >
                    <span aria-hidden="true">×</span>
                </Button>
                <div className="text-center">
                    <div className="avatar avatar-xxl avatar-rounded">
                        <Image src={avatar2} alt="user" className="avatar-img" />
                    </div>
                    <div className="cp-name text-truncate mt-2">艾伦·里克曼</div>
                    <p className="text-truncate">今天不想做任何事...只想躺在床上</p>
                </div>
                <div className="mt-4">
                    <Form role="search">
                        <Form.Control type="text" placeholder="搜索会话内容" />
                    </Form>
                    <div className="collapse-simple mt-3">
                        <HkCollapse
                            bsPrefix="a"
                            href="#"
                            targetId="contact_gn_info"
                            title="基本信息"
                            collapsed={false}
                        >
                            <ul className="cp-info">
                                <li>
                                    <a href="#">
                                        <span className="cp-icon-wrap"><span className="feather-icon">
                                            <Briefcase />
                                        </span></span>
                                        联合创始人
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="cp-icon-wrap"><span className="feather-icon">
                                            <Mail />
                                        </span></span>
                                        <span className="text-primary">contact@caoba.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="cp-icon-wrap"><span className="feather-icon">
                                            <Phone />
                                        </span></span>
                                        +91-25-4125-2365
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="cp-icon-wrap"><span className="feather-icon">
                                            <MapPin />
                                        </span></span>
                                        奥斯陆，加拿大
                                    </a>
                                </li>
                            </ul>
                        </HkCollapse>

                        <HkCollapse
                            bsPrefix="a"
                            href="#"
                            targetId="contact_social_profile"
                            title="社交资料"
                            collapsed={false}
                        >
                            <ul className="hk-list hk-list-sm">
                                <li>
                                    <Button variant="primary" className="btn-icon btn-rounded"><span className="icon">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </span></Button>
                                </li>
                                <li>
                                    <Button variant="warning" className="btn-icon btn-rounded"><span className="icon">
                                        <FontAwesomeIcon icon={faGoogleDrive} />
                                    </span></Button>
                                </li>
                                <li>
                                    <Button variant="info" className="btn-icon btn-rounded"><span className="icon">
                                        <FontAwesomeIcon icon={faDropbox} />
                                    </span></Button>
                                </li>
                                <li>
                                    <Button variant="dark" className="btn-icon btn-rounded"><span className="icon">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span></Button>
                                </li>
                                <li>
                                    <Button variant="danger" className="btn-icon btn-rounded"><span className="icon">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </span></Button>
                                </li>
                            </ul>
                        </HkCollapse>

                        <HkCollapse
                            bsPrefix="a"
                            href="#"
                            targetId="contact_biography"
                            title="个人简介"
                            collapsed={false}
                        >
                            <div>
                                <p>大家好，艾伦·里克曼是一位出色的联合创始人兼文案撰稿人，为世界 500 强企业服务了近十年。我精通多门外语，并且喜欢产出高品质的内容。</p>
                            </div>
                        </HkCollapse>

                        <HkCollapse
                            bsPrefix="a"
                            href="#"
                            targetId="contact_settings"
                            title="设置"
                            collapsed={false}
                        >
                            <ul className="cp-action">
                                <li>
                                    <a href="#">
                                        清空聊天记录
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="text-danger">屏蔽联系人</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        反馈问题
                                    </a>
                                </li>
                            </ul>
                        </HkCollapse>
                    </div>
                </div>
            </SimpleBar >
        </div >
    )
}

export default ChatInfo
