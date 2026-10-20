'use client';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const MoreInfo = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} size="lg" centered >
            <Modal.Header>
                <Modal.Title as="h6">更多信息</Modal.Title>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>职位</Form.Label>
                                <Form.Control type="text" defaultValue="曼达琳" placeholder="名" name="name1" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>公司</Form.Label>
                                <Form.Control type="text" defaultValue="肖恩" placeholder="姓" name="lastname1" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>语言</Form.Label>
                                <Form.Control type="email" defaultValue="contct@caoba.com" placeholder="邮箱 ID" name="emailid1" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>生日</Form.Label>
                                <Form.Control type="text" defaultValue="10/24/1984" placeholder="电话号码" name="birthday1" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={hide}>放弃</Button>
                <Button variant="primary" onClick={hide}>更新</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MoreInfo
