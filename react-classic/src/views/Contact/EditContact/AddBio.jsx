import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const AddBio = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} centered >
            <Modal.Header>
                <Modal.Title as="h6">个人简介</Modal.Title>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="gx-3">
                        <Col sm={12}>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={4} placeholder="添加个人简介" defaultValue="你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={hide} >放弃</Button>
                <Button variant="primary" onClick={hide} >更新</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddBio
