'use client';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const AddCategory = ({ show, hide }) => {
    return (
        <Modal show={show} onHide={hide} size="sm" centered >
            <div className="modal-content">
                <Modal.Body>
                    <Button bsPrefix="btn-close" onClick={hide} >
                        <span aria-hidden="true">×</span>
                    </Button>
                    <h6 className="text-uppercase fw-bold mb-3">新建分类</h6>
                    <Form>
                        <Row className="gx-3">
                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="分类名称" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" className="float-end" onClick={hide} >添加</Button>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    )
}

export default AddCategory;
