import React, { useReducer } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Archive, Book, Folder, HardDrive, Plus, Settings, Star, Trash2, Upload } from 'react-feather';
import SimpleBar from 'simplebar-react';
import HkTooltip from '../../components/@hk-tooltip/HkTooltip';
import AddCategory from './AddCategory';
import { GalleryReducer } from './GalleryReducer';

const GallerySidebar = () => {

    const initial = false;
    const [state, dispatch] = useReducer(GalleryReducer, initial);

    return (
        <>
            <Nav className="galleryapp-sidebar">
                <SimpleBar className="nicescroll-bar">
                    <div className="menu-content-wrap">
                        <Button variant="primary" className="btn-rounded btn-block btn-file mb-4">
                            上传图片
                            <Form.Control type="file" className="upload" />
                        </Button>
                        <div className="menu-group">
                            <Nav className="nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <Nav.Link active >
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <HardDrive />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">图库</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Folder />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">合集</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Upload />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">共享给我的</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Star />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">收藏</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <span className="nav-icon-wrap">
                                            <span className="feather-icon">
                                                <Trash2 />
                                            </span>
                                        </span>
                                        <span className="nav-link-text">回收站</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="separator separator-light" />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="title-sm text-primary mb-0">分类</div>
                            <Button variant="light" size="xs" className="btn-icon btn-rounded" onClick={() => dispatch({ type: 'addCat' })} >
                                <HkTooltip placement="top" title="新建分类" className="icon" >
                                    <span className="feather-icon">
                                        <Plus />
                                    </span>
                                </HkTooltip>
                            </Button>
                        </div>
                        <div className="menu-group">
                            <ul className="nav nav-light navbar-nav flex-column">
                                <Nav.Item>
                                    <a className="nav-link" href="#some">
                                        <span className="nav-link-text">图片</span>
                                    </a>
                                </Nav.Item>
                                <Nav.Item>
                                    <a className="nav-link" href="#some">
                                        <span className="nav-link-text">视频</span>
                                    </a>
                                </Nav.Item>
                                <Nav.Item>
                                    <a className="nav-link" href="#some">
                                        <span className="nav-link-text">音频</span>
                                    </a>
                                </Nav.Item>
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
                {/*Sidebar Fixnav*/}
                <div className="galleryapp-fixednav">
                    <div className="hk-toolbar">
                        <Nav className="nav-light">
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
            </Nav>

            <AddCategory show={state.addCat} hide={() => dispatch({ type: 'addCat' })} />
        </>
    )
}

export default GallerySidebar
