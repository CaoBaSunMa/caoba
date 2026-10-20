import React, { useState } from 'react';
import { Badge, Button, Dropdown, Form, ListGroup } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { useWindowWidth } from '@react-hook/window-size';
import { Archive, Calendar, Check, Edit, Inbox, Layout, Mail, RefreshCw, Send, Settings, Star, Trash2 } from 'react-feather';
import ComposeEmail from './ComposeEmail';

//Redux
import { connect } from 'react-redux';
import { StartConversation } from '../../redux/action/Chat';
import { toggleTopNav } from '../../redux/action/Theme';
import { Compose } from '../../redux/action/Email';

//Images
import avatar2 from '../../assets/img/avatar2.jpg';
import avatar3 from '../../assets/img/avatar3.jpg';
import avatar7 from '../../assets/img/avatar7.jpg';
import avatar8 from '../../assets/img/avatar8.jpg';
import avatar9 from '../../assets/img/avatar9.jpg';
import avatar10 from '../../assets/img/avatar10.jpg';

const InboxList = ({ toggleSidebar, show, StartConversation, startChating, toggleTopNav, topNavCollapsed, Compose, composeEmail }) => {
    const [showComposePopup, setShowComposePopup] = useState(false);

    const width = useWindowWidth();
    const Conversation = () => {
        if (width <= 991) {
            StartConversation(!startChating);
            toggleTopNav(!topNavCollapsed);
            console.log(startChating);
        }
    }

    return (
        <>
            <div className="emailapp-aside">
                <header className="aside-header">
                    <Dropdown>
                        <Dropdown.Toggle as="a" className="emailapp-title link-dark" href="#">
                            <h1>收件箱</h1>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <span className="feather-icon dropdown-icon">
                                    <Inbox />
                                </span>
                                <span>收件箱</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <span className="feather-icon dropdown-icon">
                                    <Send />
                                </span>
                                <span>已发送</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <span className="feather-icon dropdown-icon">
                                    <Archive />
                                </span>
                                <span>归档</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <span className="feather-icon dropdown-icon">
                                    <Edit />
                                </span>
                                <span>草稿</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <span className="feather-icon dropdown-icon">
                                    <Trash2 />
                                </span>
                                <span>回收站</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex">
                        <Button as="a" href="#" className="btn-icon btn-flush-dark btn-rounded flush-soft-hover me-0">
                            <span className="icon">
                                <span className="feather-icon">
                                    <RefreshCw />
                                </span>
                            </span>
                        </Button>
                        <Dropdown>
                            <Dropdown.Toggle as="a" href="#" className="btn btn-icon  btn-rounded flush-soft-hover btn-flush-dark dropdown-toggle no-caret me-1">
                                <span className="icon">
                                    <span className="feather-icon">
                                        <Settings />
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" >
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Mail />
                                    </span>
                                    <span>显示未读邮件</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Star />
                                    </span>
                                    <span>显示星标邮件</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Calendar />
                                    </span>
                                    <span>按日期排序</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Layout />
                                    </span>
                                    <span>按分类排序</span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span className="feather-icon dropdown-icon">
                                        <Check />
                                    </span>
                                    <span>全部标为已读</span></Dropdown.Item>
                                <div className="dropdown-divider" />
                                <Dropdown.Item>设置</Dropdown.Item>
                                <Dropdown.Item>帮助</Dropdown.Item>
                                <Dropdown.Item>反馈问题</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button as="a" href="#" className="btn-icon btn-rounded show-compose-popup" onClick={() => Compose(!composeEmail)} >
                            <span className="icon">
                                <span className="feather-icon">
                                    <Edit />
                                </span>
                            </span>
                        </Button>
                    </div>
                    <div className={classNames("hk-sidebar-togglable", { "active": !show })} onClick={toggleSidebar} />
                </header>
                <SimpleBar className="aside-body">
                    <Form className="aside-search" role="search">
                        <Form.Control type="text" placeholder="搜索收件箱" />
                    </Form>
                    <ListGroup as="ul" variant="flush" className="email-list">
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar2} alt="用户" className="avatar-img" />
                                    </div>
                                    <Badge bg="primary" className="badge-indicator badge-indicator-nobdr" />
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">摩根·弗里曼</div>
                                            <div>
                                                <span className="email-star marked">
                                                    <span className="feather-icon">
                                                        <Star />
                                                    </span>
                                                </span>
                                                <div className="email-time">09:30</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">我们第四版的时间线创建</div>
                                        <div className="email-text">
                                            <p>能力与完美伪装，令陌生人也为之着迷。欲知详情……</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar9} alt="用户" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">赫玛·瑟曼</div>
                                            <Badge pill bg="warning" className="badge-sm ">更新</Badge>
                                            <div>
                                                <span className="email-star"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">07:51</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">第三季度提案。</div>
                                        <div className="email-text">
                                            <p>精彩之处在于真诚不减。移除请求令我们共同成长。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email active-user">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-soft-success avatar-rounded">
                                        <span className="initial-wrap">C</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">查理·卓别林</div>
                                            <div>
                                                <span className="email-star"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">昨天</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">为 caoba 构建了稳健的平台。</div>
                                        <div className="email-text">
                                            <p>经典拉丁文何以对世间万物如此敏感？你改变世界的每件事都令人惊叹。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar10} alt="用户" className="avatar-img" />
                                    </div>
                                    <Badge bg="primary" className="badge-indicator badge-indicator-nobdr" />
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">温斯顿·丘吉尔</div>
                                            <div>
                                                <span className="email-star marked"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">3月3日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">您账户中的交易记录。</div>
                                        <div className="email-text">
                                            <p>林地信笺直接促成两人收入的增长。他的偏爱愈发令人钦佩。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar3} alt="用户" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">杰奎琳·乔克</div>
                                            <Badge bg="primary" pill className="badge-sm">团队</Badge>
                                            <div>
                                                <span className="email-star marked"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">3月3日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">发布 caoba 测试版</div>
                                        <div className="email-text">
                                            <p>他瞬间就察觉到了。往昔的羞涩依旧保持着内心的从容。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar7} alt="用户" className="avatar-img" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">汤姆·克鲁斯</div>
                                            <Badge bg="success" pill className="badge-sm">支持</Badge>
                                            <div>
                                                <span className="email-star"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">2月28日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">手续费与经纪方案问题。</div>
                                        <div className="email-text">
                                            <p>儿子读完便看到了其余部分。往昔的怀疑已然消逝，好奇心依然挥之不去。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                        <span className="initial-wrap">D</span>
                                    </div>
                                    <Badge bg="primary" className="badge-indicator badge-indicator-nobdr" />
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">丹尼尔·克雷格</div>
                                            <div>
                                                <span className="email-star"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">2月25日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">设计服务发票。</div>
                                        <div className="email-text">
                                            <p>出色的女儿们为何急于抗拒？赞美化作了恋人们彼此的温暖。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-rounded">
                                        <img src={avatar8} alt="用户" className="avatar-img" />
                                    </div>
                                    <Badge bg="primary" className="badge-indicator badge-indicator-nobdr" />
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">凯瑟琳·琼斯</div>
                                            <div>
                                                <span className="email-star marked">
                                                    <span className="feather-icon">
                                                        <Star />
                                                    </span>
                                                </span>
                                                <div className="email-time">2月22日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">欢迎加入 caoba 团队。</div>
                                        <div className="email-text">
                                            <p>我们不再打扰彼此的安居。那里终将有人为她而驻足。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" onClick={Conversation} >
                            <div className="media read-email">
                                <div className="media-head">
                                    <div className="avatar avatar-sm avatar-success avatar-rounded">
                                        <span className="initial-wrap">Cb</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div>
                                        <div>
                                            <div className="email-head">caoba</div>
                                            <div>
                                                <span className="email-star marked"><span className="feather-icon"><Star /></span></span>
                                                <div className="email-time">1月30日</div>
                                            </div>
                                        </div>
                                        <div className="email-subject">亲爱的丹尼尔，关于退款事宜……</div>
                                        <div className="email-text">
                                            <p>如此不偏不倚的宽容令人称奇。麻木不仁者却总能获得纵容……</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </SimpleBar>
            </div>
            {/* Compose email */}
            <ComposeEmail show={showComposePopup} onClose={() => setShowComposePopup(!showComposePopup)} />
            {/* /Compose email */}
        </>
    )
}

const mapStateToProps = ({ chatReducer, theme, emailReducer }) => {
    const { startChating } = chatReducer;
    const { composeEmail } = emailReducer;
    const { topNavCollapsed } = theme;
    return { startChating, composeEmail, topNavCollapsed }
};

export default connect(mapStateToProps, { StartConversation, toggleTopNav, Compose })(InboxList);
