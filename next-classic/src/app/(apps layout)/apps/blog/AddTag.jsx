'use client';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import HkTags from '@/components/@hk-tags/@hk-tags';

const AddTag = ({ show, hide }) => {

    const multiSelectOpt = [
        { value: "collaborator", label: "协作者" },
        { value: "designer", label: "设计师" },
        { value: "react-developer", label: "React 开发" },
        { value: "promotion", label: "促销" },
        { value: "advertisement", label: "广告" },
    ]

    return (
        <Modal show={show} onHide={hide} size="sm" centered >
            <Modal.Body>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
                <h6 className="text-uppercase fw-bold mb-3">添加标签</h6>
                <Form>
                    <Row className="gx-3">
                        <Col sm={12}>
                            <Form.Group className="mb-3" >
                                <HkTags
                                    options={multiSelectOpt}
                                    defaultValue={[multiSelectOpt[0], multiSelectOpt[1], multiSelectOpt[2], multiSelectOpt[3]]}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" className="float-end" onClick={hide} >添加</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddTag
