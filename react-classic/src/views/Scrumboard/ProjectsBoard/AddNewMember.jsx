import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import HkDropZone from '../../../components/@hk-drop-zone/HkDropZone';

const AddNewMember = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} centered >
                <Modal.Body>
                    <Button bsPrefix="btn-close" onClick={hide} >
                        <span aria-hidden="true">×</span>
                    </Button>
                    <h5 className="mb-4">添加新成员</h5>
                    <Form>
                        <Row className="gx-3">
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>名称</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>邮箱</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <HkDropZone className="dropify-square w-30">
                                        上传照片
                                    </HkDropZone>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="align-items-center">
                    <Button variant="secondary" onClick={hide} >取消</Button>
                    <Button variant="primary" onClick={hide}>添加</Button>
                </Modal.Footer>
        </Modal>
    )
}

export default AddNewMember
