import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const ProfileInfo = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} size="lg" centered >
            <Modal.Header>
                <Modal.Title as="h6">个人资料信息</Modal.Title>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>名</Form.Label>
                                <Form.Control type="text" defaultValue="曼达琳" placeholder="名" name="name" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>姓</Form.Label>
                                <Form.Control type="text" defaultValue="肖恩" placeholder="姓" name="lastname" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>邮箱 ID</Form.Label>
                                <Form.Control type="email" defaultValue="contct@caoba.com" placeholder="邮箱 ID" name="emailid" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>电话</Form.Label>
                                <Form.Control type="text" defaultValue="+91-25-4125-2365" placeholder="电话号码" name="phone" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <div className="col-sm-12">
                            <Form.Label>位置</Form.Label>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" defaultValue="Lane 1" placeholder="地址行 1" name="add1" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" defaultValue="纽约" placeholder="地址行 2" name="add2" />
                            </Form.Group>
                        </div>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={hide}>放弃</Button>
                <Button variant="primary" onClick={hide} >更新</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ProfileInfo;
