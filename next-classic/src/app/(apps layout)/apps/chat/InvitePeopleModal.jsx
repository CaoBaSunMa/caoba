'use client';
import Image from 'next/image';
import { Button, Form, Modal } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
//Images
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar5 from '@/assets/img/avatar5.jpg';
import avatar6 from '@/assets/img/avatar6.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';

const InvitePeopleModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose} centered dialogClassName="mw-400p" >
            <Modal.Header className="header-wth-bg-inv">
                <Modal.Title as="h5">邀请人员</Modal.Title>
                <Button bsPrefix="btn-close" className="text-white" onClick={onClose} >
                    <span aria-hidden="true">×</span>
                </Button>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Form className="m-3" role="search">
                    <Form.Control type="text" className="rounded-input user-search" placeholder="搜索人员" />
                </Form>
                <div className="h-350p">
                    <SimpleBar style={{ height: "100%" }} className="nicescroll-bar">
                        <ul className="invite-user-list">
                            <li>
                                <div className="media d-flex align-items-center">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar2} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">摩根·弗里曼</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck2" />
                                </div>
                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar7} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">乌玛·瑟曼</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck3" />
                                </div>
                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar3} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">查理·卓别林</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck4" />
                                </div>
                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-soft-danger avatar-rounded">
                                            <span className="initial-wrap">W</span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">温斯顿·丘吉尔</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck5" />
                                </div>

                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar1} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">办公室群组</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck6" />
                                </div>

                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar6} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">老板宝贝</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck7" />
                                </div>

                            </li>
                            <li>
                                <div className="media d-flex align-items-center me-3 mb-2">
                                    <div className="media-head me-3">
                                        <div className="avatar avatar-sm avatar-rounded">
                                            <Image src={avatar5} alt="user" className="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-name">杰奎琳·乔克</div>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" id="customCheck8" />
                                </div>

                            </li>
                        </ul>
                    </SimpleBar>
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant='light' className="flex-fill flex-1" onClick={onClose} >取消</Button>
                <Button variant="primary" className="flex-fill flex-1">邀请聊天</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default InvitePeopleModal
