import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import HkDropZone from '../../components/@hk-drop-zone/HkDropZone';

const AddNewBoard = ({ show, onHide }) => {
    const [avatarColor, setAvatarColor] = useState("#009B84");

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Body>
                <Button bsPrefix='btn-close' onClick={onHide} >
                    <span aria-hidden="true">×</span>
                </Button>
                <h5>新建看板</h5>
                <p className="mb-4">您被授予有限的许可证，仅用于查看本网站上包含的材料。</p>
                <Form>
                    <Row className="gx-3">
                        <Col sm={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>名称</Form.Label>
                                <Form.Control className="task-name" type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>可见性</Form.Label>
                                <Form.Select>
                                    <option value={1}>公开</option>
                                    <option value={2}>私有</option>
                                </Form.Select>
                                <small className="form-text text-muted">
                                    公开设置将对所有拥有登录凭据的人可见。
                                </small>
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>头像</Form.Label>
                                <Form.Select>
                                    <option value={1}>选择头像文字</option>
                                    <option value={2}>A</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>头像颜色</Form.Label>
                                <InputGroup className="color-picker">
                                    <InputGroup.Text className="colorpicker-input-addon" >
                                        <Form.Control
                                            type="color"
                                            value={avatarColor}
                                            onChange={e => setAvatarColor(e.target.value)}
                                        />
                                    </InputGroup.Text>
                                    <Form.Control type="text" value={avatarColor} />
                                </InputGroup>

                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <HkDropZone className="dropify-square w-60">
                                    上传照片
                                </HkDropZone>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={onHide}>取消</Button>
                <Button variant="primary" onClick={onHide} >添加</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewBoard
