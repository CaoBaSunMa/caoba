'use client';
import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Archive, Book, Edit, Flag, Grid, Plus, Settings, Star, Tag, Trash2, Users } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';
import AddNewCategory from './AddNewCategory';
import AddTag from './AddTag';
import Link from 'next/link';

const BlogAppSidebar = () => {
    const [addCategory, setAddCategory] = useState(false);
    const [addTags, setAddTags] = useState(false);

    return (
        <>
            <nav className="blogapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Link href="add-new-post" className="btn btn-primary btn-rounded btn-block mb-4">
                            新建文章
                        </Link>
                        <div className="menu-group">
                            <Nav as="ul" defaultActiveKey="post" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li" >
                                    <Nav.Link eventKey="post" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Users />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">文章</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="published" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">已发布</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="archived" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Archive />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">已归档</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="draft" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Edit />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">草稿</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="deleted" >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Trash2 />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">已删除</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="menu-gap" />
                        <div className="nav-header">
                            <span>管理</span>
                        </div>
                        <div className="menu-group">
                            <Nav as="ul" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Flag />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">管理文章</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Grid />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">管理分类</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Tag />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">管理标签</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">分类</div>
                            <Button size="xs" variant="light" className="btn-icon btn-rounded" onClick={() => setAddCategory(!addCategory)}>
                                <span className="icon">
                                    <HkTooltip placement="top" title="新建分类" >
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </HkTooltip>
                                </span>
                            </Button>
                        </div>
                        <div className="menu-group">
                            <Nav as="ul" className="nav-light navbar-nav flex-column">
                                <Nav.Item as="li">
                                    <Nav.Link className="link-badge-right">
                                        <span className="nav-link-text">设计</span>
                                        <HkBadge pill size="sm" soft bg="primary" className="ms-auto" >136</HkBadge>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="link-badge-right">
                                        <span className="nav-link-text">开发</span>
                                        <HkBadge pill size="sm" soft bg="primary" className="ms-auto" >2</HkBadge>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="link-badge-right">
                                        <span className="nav-link-text">用户界面</span>
                                        <HkBadge pill size="sm" soft bg="primary" className="ms-auto" >86</HkBadge>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className="link-badge-right">
                                        <span className="nav-link-text">商业</span>
                                        <HkBadge pill size="sm" soft bg="primary" className="ms-auto" >34</HkBadge>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="title-sm text-primary mb-0">标签</div>
                            <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => setAddTags(!addTags)} >
                                <HkTooltip placement="top" title="添加标签" >
                                    <span className="icon">
                                        <span className="feather-icon">
                                            <Plus />
                                        </span>
                                    </span>
                                </HkTooltip>
                            </Button>
                        </div>
                        <div className="menu-group">
                            <div className="tag-cloud">
                                <Link href="#" className="badge badge-outline badge-light">协作</Link>
                                <Link href="#" className="badge badge-outline badge-light">React 开发</Link>
                                <Link href="#" className="badge badge-outline badge-light">Angular 开发</Link>
                                <Link href="#" className="badge badge-outline badge-light">促销</Link>
                                <Link href="#" className="badge badge-outline badge-light">广告</Link>
                            </div>
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="blogapp-fixednav">
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
                                    <HkTooltip id="tooltip3" placement="top" title="归档" >
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
            {/* Add Category */}
            <AddNewCategory show={addCategory} hide={() => setAddCategory(!addCategory)} />
            {/* Add Tag */}
            <AddTag show={addTags} hide={() => setAddTags(!addTags)} />
        </>
    )
}

export default BlogAppSidebar
