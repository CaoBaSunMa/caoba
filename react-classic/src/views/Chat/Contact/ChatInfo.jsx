import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Briefcase, Mail, MapPin, Phone } from 'react-feather';
import { faDropbox, faFacebook, faGithub, faGoogle, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

//Image
import avatar2 from '../../../assets/img/avatar2.jpg';

const ChatInfo = ({ infoToggle }) => {
    return (
        <div className="chat-info">
            <SimpleBar className="nicescroll-bar">
                <Button bsPrefix=" btn-close" className="info-close" onClick={infoToggle} >
                    <span aria-hidden="true">×</span>
                </Button>
                <div className="text-center">
                    <div className="avatar avatar-xxl avatar-rounded">
                        <img src={avatar2} alt="user" className="avatar-img" />
                    </div>
                    <div className="cp-name text-truncate mt-2">艾伦·里克曼</div>
                    <p className="text-truncate">今天什么都不想做.. 我只想躺在床上</p>
                </div>
                <div className="mt-4">
                    <Form role="search">
                        <Form.Control type="text" placeholder="搜索会话内容" />
                    </Form>
                    <div className="collapse-simple mt-3">
                        <Card>
                            <Card.Header>
                                <a role="button" data-bs-toggle="collapse" href="#gn_info" aria-expanded="true">基本信息</a>
                            </Card.Header>
                            <div id="gn_info" className="collapse show">
                                <Card.Body>
                                    <ul className="cp-info">
                                        <li>
                                            <Link to="#">
                                                <span className="cp-icon-wrap"><span className="feather-icon">
                                                    <Briefcase />
                                                </span></span>
                                                开发者
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="cp-icon-wrap"><span className="feather-icon">
                                                    <Mail />
                                                </span></span>
                                                <span className="text-primary">contact@caoba.com</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="cp-icon-wrap"><span className="feather-icon">
                                                    <Phone />
                                                </span></span>
                                                +91-25-4125-2365
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="cp-icon-wrap"><span className="feather-icon">
                                                    <MapPin />
                                                </span></span>
                                                奥斯陆，加拿大
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </div>
                        </Card>
                        <Card>
                            <Card.Header>
                                <a role="button" data-bs-toggle="collapse" href="#social_profile" aria-expanded="true">社交资料 </a>
                            </Card.Header>
                            <div id="social_profile" className="collapse show">
                                <Card.Body>
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
                                </Card.Body>
                            </div>
                        </Card>
                        <Card>
                            <Card.Header>
                                <a role="button" data-bs-toggle="collapse" href="#biography" aria-expanded="true">个人简介 </a>
                            </Card.Header>
                            <div id="biography" className="collapse show">
                                <Card.Body>
                                    <p>大家好，艾伦·里克曼是一位出色的联合创始人兼文案撰稿人，为世界 500 强企业服务了近十年。我精通多门外语，并且喜欢产出高品质的内容。</p>
                                </Card.Body>
                            </div>
                        </Card>
                        <Card>
                            <Card.Header>
                                <a role="button" data-bs-toggle="collapse" href="#settings" aria-expanded="true">设置 </a>
                            </Card.Header>
                            <div id="settings" className="collapse show">
                                <Card.Body>
                                    <ul className="cp-action">
                                        <li>
                                            <Link to="#">
                                                清空聊天记录
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span className="text-danger">屏蔽联系人</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                反馈问题
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link to="#" className="d-block text-dark fs-7 mb-10">反馈并举报会话</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                </div>
            </SimpleBar>
        </div>
    )
}

export default ChatInfo
