import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import HkDropZone from '../../components/@hk-drop-zone/HkDropZone';
import HkTags from '../../components/@hk-tags/@hk-tags';

const CreateNewContact = ({ show, close }) => {

    const Tags = [];

    return (
        <Modal show={show} onHide={close} centered size="lg" className="add-new-contact" >
            <Modal.Body>
                <Button bsPrefix="btn-close" onClick={close}>
                    <span aria-hidden="true">×</span>
                </Button>
                <h5 className="mb-5">新建联系人</h5>
                <Form>
                    <Row className="gx-3">
                        <Col sm={2} as={Form.Group} className="mb-3" >
                            <HkDropZone className="dropify-square">
                                上传照片
                            </HkDropZone>
                            {/* </div> */}
                        </Col>
                        <Col sm={10} as={Form.Group}>
                            <Form.Control as="textarea" className="mnh-100p" rows={4} placeholder="添加个人简介" />
                        </Col>
                    </Row>
                    <div className="title title-xs title-wth-divider text-primary text-uppercase my-4">
                        <span>基本信息</span>
                    </div>
                    <Row className="gx-3">
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>名</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>中间名</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>姓</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <div className="col-sm-6">
                            <Form.Group className="mb-3">
                                <Form.Label>邮箱 ID</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group className="mb-3">
                                <Form.Label>电话</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>城市</Form.Label>
                                <select className="form-select">
                                    <option value={0}>--</option>
                                    <option value={1}>一</option>
                                    <option value={2}>二</option>
                                    <option value={3}>三</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>州/省</Form.Label>
                                <select className="form-select">
                                    <option value={0}>--</option>
                                    <option value={1}>一</option>
                                    <option value={2}>二</option>
                                    <option value={3}>三</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>国家</Form.Label>
                                <select className="form-select">
                                    <option value={0}>--</option>
                                    <option value={1}>一</option>
                                    <option value={2}>二</option>
                                    <option value={3}>三</option>
                                </select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>公司信息</span></div>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>公司名称</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>职位</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>网站</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>工作电话</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>补充信息</span></div>
                    <Row className="gx-3">
                        <div className="col-sm-12">
                            <Form.Group className="mb-3">
                                <Form.Label>标签</Form.Label>
                                <HkTags
                                    options={Tags}
                                />
                                <small className="form-text text-muted">
                                    每个联系人最多可添加 4 个标签
                                </small>
                            </Form.Group>
                        </div>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Facebook" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Twitter" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="LinkedIn" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Gmail" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={close}>放弃</Button>
                <Button variant="primary" onClick={close}>新建联系人</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateNewContact;
