'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Dropdown } from 'react-bootstrap';
import { ChevronDown, ChevronUp, Sliders } from 'react-feather';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import { useGlobalStateContext } from '@/context/GolobalStateProvider';

const Header = ({ toggleSidebar, show, handleSettings }) => {

    const { states, dispatch } = useGlobalStateContext();

    return (
        <header className="invoice-header">
            <div className="d-flex align-items-center">
                <Dropdown>
                    <Dropdown.Toggle as="a" href="#" className="invoiceapp-title link-dark">
                        <h1>标准模板</h1>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="start">
                        <Dropdown.Item>简约模板</Dropdown.Item>
                        <Dropdown.Item>基础模板</Dropdown.Item>
                        <Dropdown.Item>经典模板</Dropdown.Item>
                        <Dropdown.Item>形式发票模板</Dropdown.Item>
                        <Dropdown.Item>贸易模板</Dropdown.Item>
                        <Dropdown.Item>临时模板</Dropdown.Item>
                        <Dropdown.Item>主要模板</Dropdown.Item>
                        <Dropdown.Item>马特·奥佩尔模板</Dropdown.Item>
                        <Dropdown.Item>自由职业者模板</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="invoice-options-wrap">
                <Button as="a" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover invoiceapp-setting-toggle active me-2" onClick={handleSettings} >
                    <span className="icon">
                        <span className="feather-icon">
                            <Sliders />
                        </span>
                    </span>
                </Button>
                <Button as={Link} href="invoice-preview" variant="outline-secondary" className="flex-shrink-0 d-md-inline-block d-none">预览</Button>
                <Button as="a" variant="primary" href="#" className="mx-2 d-sm-inline-block d-none">保存</Button>
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

export default Header;
