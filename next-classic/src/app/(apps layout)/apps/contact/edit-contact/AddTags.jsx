'use client';
import HkTags from '@/components/@hk-tags/@hk-tags'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const AddTags = ({ show, hide }) => {

    const multiSelectOpt = [
        { value: "collaborator", label: "协作者" },
        { value: "designer", label: "设计师" },
        { value: "react-developer", label: "React 开发" },
        { value: "promotion", label: "促销" },
        { value: "advertisement", label: "广告" },
    ]

    return (
        <Modal show={show} onHide={hide} centered >
            <Modal.Header>
                <Modal.Title>标签</Modal.Title>
                <Button bsPrefix='btn-close' onClick={hide}>
                    <span aria-hidden="true">×</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="gx-3">
                        <Col sm={12}>
                            <Form.Group>
                                <div className="d-flex flex-wrap">
                                    <HkTags
                                        options={multiSelectOpt}
                                        defaultValue={[multiSelectOpt[0], multiSelectOpt[1], multiSelectOpt[2], multiSelectOpt[3]]}
                                    />
                                </div>
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

export default AddTags
