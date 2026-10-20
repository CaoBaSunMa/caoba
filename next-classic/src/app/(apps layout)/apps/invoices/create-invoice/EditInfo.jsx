'use client';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const EditInfo = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} centered >
            <Modal.Body>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
                <h5 className="mb-5">编辑信息</h5>
                <Form>
                    <Row className="gx-3">
                        <Col sm={12} as={Form.Group} className="mb-3" >
                            <Form.Label>公司名称</Form.Label>
                            <Form.Control type="text" defaultValue="caoba" />
                        </Col>
                        <Col sm={12} as={Form.Group} className="mb-3" >
                            <Form.Label>邮箱地址</Form.Label>
                            <Form.Control type="email" defaultValue="caoba_01@caoba.com" />
                        </Col>
                        <Col sm={12} as={Form.Group} className="mb-3" >
                            <Form.Label>地址第一行</Form.Label>
                            <Form.Control type="text" defaultValue="4747, Pearl Street Rainy day Drive" />
                        </Col>
                        <Col sm={12} as={Form.Group} className="mb-3" >
                            <Form.Label>地址第二行</Form.Label>
                            <Form.Control type="text" defaultValue="Washington DC 42341" />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide} >放弃</Button>
                <Button variant="primary" onClick={hide}>添加</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditInfo
