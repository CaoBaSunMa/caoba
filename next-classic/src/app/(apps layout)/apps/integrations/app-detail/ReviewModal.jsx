'use client';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const ReviewModal = ({ show, closeModal }) => {
    return (
        <Modal centered show={show} id="add_new_review" onHide={closeModal} className="add-new-task" >
            <Modal.Body>
                <Button bsPrefix="btn-close" onClick={closeModal} >
                    <span aria-hidden="true">×</span>
                </Button>
                <h5 className="mb-4">写评价</h5>
                <Form>
                    <Row sm>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>你的评分</Form.Label>
                                <div>
                                    <Rating initialValue={1} allowFraction size="20" className="d-flex align-items-center me-2" />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>评价类型</Form.Label>
                                <Form.Select>
                                    <option value={1}>设计质量</option>
                                    <option value={2}>客服支持</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div className="form-label-group">
                                    <Form.Label>评论</Form.Label>
                                    <small className="text-muted">2000</small>
                                </div>
                                <Form.Control as="textarea" rows={3} placeholder="请描述你的评分理由" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={closeModal} >取消</Button>
                <Button variant="primary">提交评价</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewModal
