import React from 'react';
import classNames from 'classnames';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { AlignCenter, ChevronDown, ChevronUp, Clock, Droplet, List } from 'react-feather';
import { connect } from 'react-redux';
import HkTooltip from '../../../components/@hk-tooltip/HkTooltip';
import { toggleTopNav } from '../../../redux/action/Theme';
import { Link } from 'react-router-dom';

const TodoHeader = ({ topNavCollapsed, toggleTopNav, toggleSidebar, showSidebar, toggleInfo }) => {
    return (
        <header className="todo-header">
            <div className="d-flex align-items-center">
                <Dropdown>
                    <Dropdown.Toggle as={Link} to="#" className="todoapp-title link-dark" >
                        <h1>所有任务</h1>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <AlignCenter />
                            </span><span>所有任务</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <List />
                            </span><span>我的任务</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Clock />
                            </span><span>待处理任务</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Droplet />
                            </span><span>进行中任务</span>
                        </Dropdown.Item>
                        <Dropdown.Divider as="div" />
                        <Dropdown.Item>紧急优先</Dropdown.Item>
                        <Dropdown.Item>高优先</Dropdown.Item>
                        <Dropdown.Item>低优先</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="todo-options-wrap">
                <Form className="d-sm-block d-none" role="search">
                    <Form.Control type="text" placeholder="搜索任务" />
                </Form>
                <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable" onClick={() => toggleTopNav(!topNavCollapsed)} >
                    <HkTooltip placement={topNavCollapsed ? "bottom" : "top"} title="折叠" >
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
            <div className={classNames("hk-sidebar-togglable", { "active": showSidebar })} onClick={toggleSidebar} />
        </header>
    )
}

const mapStateToProps = ({ theme }) => {
    const { topNavCollapsed } = theme;
    return { topNavCollapsed }
};

export default connect(mapStateToProps, { toggleTopNav })(TodoHeader);