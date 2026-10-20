'use client';
import classNames from 'classnames';
import { Button, Dropdown } from 'react-bootstrap';
import { Archive, ChevronDown, ChevronUp, Edit, ExternalLink, MoreVertical, RefreshCw, Settings, Slash, Star, Trash2, Users } from 'react-feather';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';

const InvoiceAppHeader = ({ toggleSidebar, show }) => {
    const { states, dispatch } = useGlobalStateContext();

    return (
        <header className="invoice-header">
            <div className="d-flex align-items-center">
                <Dropdown>
                    <Dropdown.Toggle as="a" href="#" className="invoiceapp-title link-dark">
                        <h1>全部发票</h1>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Users />
                            </span>
                            <span>全部发票</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Star />
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
            </div>
            <div className="invoice-options-wrap">
                <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none" href="#">
                    <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="刷新">
                        <span className="icon">
                            <span className="feather-icon">
                                <RefreshCw />
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
                <div className="v-separator d-lg-inline-block d-none" />
                <Dropdown>
                    <Dropdown.Toggle as="a" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret ms-0  d-sm-inline-block d-none">
                        <span className="icon">
                            <span className="feather-icon">
                                <Settings />
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item>管理发票</Dropdown.Item>
                        <Dropdown.Item>周期性发票</Dropdown.Item>
                        <Dropdown.Item>管理估算单</Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>管理联系人</Dropdown.Item>
                        <Dropdown.Item>已保存模板</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="a" >
                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret">
                        <span className="icon" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="更多">
                            <span className="feather-icon">
                                <MoreVertical />
                            </span>
                        </span>
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
                <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" onClick={() => dispatch({ type: "top_nav_toggle" })} >
                    <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="折叠" >
                        <span className="icon">
                            <span className="feather-icon">
                                {
                                    states.layoutState.topNavCollapse ? <ChevronDown /> : <ChevronUp />
                                }
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
            </div>
            <div className={classNames("hk-sidebar-togglable", { "active": !show })} onClick={toggleSidebar} />
        </header>
    )
}


export default InvoiceAppHeader;
