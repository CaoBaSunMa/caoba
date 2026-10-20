import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import { Archive, ChevronDown, ChevronUp, Edit, ExternalLink, Grid, List, MoreVertical, RefreshCw, Server, Settings, Slash, Star, Trash2, User } from 'react-feather';
import { connect } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { toggleTopNav } from '../../redux/action/Theme';
import HkTooltip from '../../components/@hk-tooltip/HkTooltip';

const ContactAppHeader = ({ topNavCollapsed, toggleTopNav, toggleSidebar, show }) => {

    const contactListRoute = useRouteMatch("/apps/contacts/contact-list");

    return (
        <header className="contact-header">
            <div className="d-flex align-items-center">
                <Dropdown>
                    <Dropdown.Toggle as="a" className="contactapp-title link-dark" href="#" >
                        <h1>联系人</h1>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <User />
                            </span>
                            <span>全部联系人</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Star />
                            </span>
                            <span>重要</span>
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
                            <span>待处理</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Trash2 />
                            </span>
                            <span>已删除</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="ms-3">
                    <Dropdown.Toggle size="sm" variant="outline-secondary" className="flex-shrink-0 d-lg-inline-block d-none">新建</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>新建联系人</Dropdown.Item>
                        <Dropdown.Item>新建部门</Dropdown.Item>
                        <Dropdown.Item>添加类别</Dropdown.Item>
                        <Dropdown.Item>添加标签</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="contact-options-wrap">
                <Dropdown className="inline-block" >
                    <Dropdown.Toggle as="a" href="#" className="btn btn-icon btn-flush-dark flush-soft-hover no-caret active">
                        <span className="icon">
                            <span className="feather-icon">
                                {contactListRoute ? <List /> : <Grid />}
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item as={NavLink} to="contact-list" activeClassName="active" ><span className="feather-icon dropdown-icon">
                            <List />
                        </span>
                            <span>列表视图</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="contact-cards" activeClassName="active">
                            <span className="feather-icon dropdown-icon">
                                <Grid />
                            </span>
                            <span>网格视图</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Server />
                            </span>
                            <span>紧凑视图</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none" href="#">
                    <HkTooltip title="刷新" placement="top" >
                        <span className="icon">
                            <span className="feather-icon">
                                <RefreshCw />
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
                <div className="v-separator d-lg-block d-none" />
                <Dropdown className="inline-block" >
                    <Dropdown.Toggle as="a" href="#" className="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none ms-sm-0">
                        <HkTooltip placement="top" title="管理联系人">
                            <span className="icon">
                                <span className="feather-icon">
                                    <Settings />
                                </span>
                            </span>
                        </HkTooltip>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item>管理联系人</Dropdown.Item>
                        <Dropdown.Item>导入</Dropdown.Item>
                        <Dropdown.Item>导出</Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>发送消息</Dropdown.Item>
                        <Dropdown.Item>委托访问</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="inline-block ms-1">
                    <Dropdown.Toggle as="a" href="#" className="btn btn-flush-dark btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret d-lg-inline-block d-none">
                        <HkTooltip placement="top" title="更多">
                            <span className="icon">
                                <span className="feather-icon">
                                    <MoreVertical />
                                </span>
                            </span>
                        </HkTooltip>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Star />
                            </span>
                            <span>星标联系人</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Archive />
                            </span>
                            <span>归档联系人</span>
                        </Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Slash />
                            </span>
                            <span>屏蔽内容</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <ExternalLink />
                            </span>
                            <span>反馈</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button as="a" href="#" className="btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" onClick={() => toggleTopNav(!topNavCollapsed)} >
                    <HkTooltip placement={topNavCollapsed ? "bottom" : "top"} title="收起" >
                        <span className="icon">
                            <span className="feather-icon">
                                {
                                    topNavCollapsed ? <ChevronDown /> : <ChevronUp />
                                }
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
            </div>
            <div className={classNames("hk-sidebar-togglable", { "active": show })} onClick={toggleSidebar} />
        </header>
    )
}

const mapStateToProps = ({ theme }) => {
    const { topNavCollapsed } = theme;
    return { topNavCollapsed }
};

export default connect(mapStateToProps, { toggleTopNav })(ContactAppHeader);