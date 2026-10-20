'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Form, Nav } from 'react-bootstrap';
import { Archive, Book, Box, Briefcase, CheckSquare, Code, GitBranch, GitHub, Grid, Heart, PenTool, RefreshCw, Settings, Tool, Zap } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';

const AppsSidebar = () => {
    const pathName = usePathname();
    const allAppRoute = pathName.match("/all-apps");

    return (
        <nav className="integrationsapp-sidebar">
            <SimpleBar className="nicescroll-bar">
                <div className="menu-content-wrap">
                    {!allAppRoute && <Form className="mb-4" role="search">
                        <Form.Control type="text" className="form-control" placeholder="按分类、名称搜索" />
                    </Form>}
                    <div className="menu-group">
                        <Nav as="ul" className="nav-light navbar-nav flex-column">
                            <Nav.Item as="li">
                                <Nav.Link as={Link} href="integration" className={pathName === "/apps/integrations/integration" ? "active" : ""} >
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Box />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">集成</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <RefreshCw />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">更新</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="menu-gap" />
                    <div className="nav-header">
                        <span>浏览</span>
                    </div>
                    <div className="menu-group">
                        <Nav as="ul" className="nav-light navbar-nav flex-column">
                            <Nav.Item as="li">
                                <Nav.Link as={Link} href="all-apps" className={pathName === "/apps/integrations/all-apps" ? "active" : ""} >
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Grid />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">所有应用</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Heart />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">热门</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} href="app-detail" className={pathName === "/apps/integrations/app-detail" ? "active" : ""} >
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Zap />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">新应用</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <CheckSquare />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">为你推荐</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <GitBranch />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">开发者工具</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="menu-gap" />
                    <div className="nav-header">
                        <span>分类</span>
                    </div>
                    <div className="menu-group">
                        <Nav as="ul" className="nav nav-light navbar-nav flex-column">
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <PenTool />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">设计</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <GitHub />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">营销</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Code />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">技术</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Zap />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">API</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Tool />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">SEO 工具</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-icon-wrap">
                                        <span className="feather-icon">
                                            <Briefcase />
                                        </span>
                                    </span>
                                    <span className="nav-link-text">管理</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </SimpleBar>
            {/*Sidebar Fixnav*/}
            <div className="integrationsapp-fixednav">
                <div className="hk-toolbar">
                    <Nav as="ul" className="nav-light">
                        <Nav.Item className="nav-link">
                            <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                <HkTooltip id="tooltip2" placement="top" title="设置" >
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Settings />
                                        </span>
                                    </span>
                                </HkTooltip>
                            </Button>
                        </Nav.Item>
                        <Nav.Item className="nav-link">
                            <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                <HkTooltip id="tooltip3" placement="top" title="存档" >
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Archive />
                                        </span>
                                    </span>
                                </HkTooltip>
                            </Button>
                        </Nav.Item>
                        <Nav.Item className="nav-link">
                            <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                <HkTooltip id="tooltip2" placement="top" title="帮助" >
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Book />
                                        </span>
                                    </span>
                                </HkTooltip>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            {/*/ Sidebar Fixnav*/}
        </nav>
    )
}

export default AppsSidebar
