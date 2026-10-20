'use client';
import Link from 'next/link';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Plus } from 'react-feather';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';

const AddNewTask = ({ show, hide }) => {

    const hideCalender = (ev, picker) => {
        picker.container.find(".calendar-table").hide();
    };

    return (
        <Modal show={show} onHide={hide} centered className="add-new-contact">
            <Modal.Body>
                <Button bsPrefix="btn-close" onClick={hide} >
                    <span aria-hidden="true">×</span>
                </Button>
                <Modal.Title as="h5" className="mb-4">新建任务</Modal.Title>
                <Form>
                    <div className="title title-xs title-wth-divider text-primary text-uppercase mt-1 mb-4"><span>基本信息</span></div>
                    <Row className="gx-3">
                        <Col sm={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>名称</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>编码</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <div className="form-label-group">
                                    <Form.Label>备注/描述</Form.Label>
                                    <small className="text-muted">200</small>
                                </div>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>开始日期</Form.Label>
                                <DateRangePicker
                                    initialSettings={{
                                        singleDatePicker: true,
                                        showDropdowns: true,
                                        startDate: new Date(),
                                    }}
                                >
                                    <Form.Control type="text" name="single-date-pick1" />
                                </DateRangePicker>
                                <Form.Check type="checkbox" className="form-check-sm mt-2">
                                    <Form.Check.Input type="checkbox" defaultChecked />
                                    <Form.Check.Label>标记为里程碑</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>开始时间</Form.Label>
                                <DateRangePicker
                                    initialSettings={{
                                        singleDatePicker: true,
                                        timePicker: true,
                                        timePicker24Hour: true,
                                        timePickerIncrement: 1,
                                        timePickerSeconds: true,
                                        locale: {
                                            format: 'HH:mm:ss'
                                        }
                                    }}
                                    onShow={hideCalender}
                                >
                                    <Form.Control className="input-timepicker" type="text" name="time" />
                                </DateRangePicker>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>结束日期</Form.Label>
                                <DateRangePicker
                                    initialSettings={{
                                        singleDatePicker: true,
                                        showDropdowns: true,
                                        startDate: new Date(),
                                    }}
                                >
                                    <Form.Control type="text" name="single-date-pick1" />
                                </DateRangePicker>
                                <Form.Check type="checkbox" className="form-check-sm mt-2">
                                    <Form.Check.Input type="checkbox" defaultChecked />
                                    <Form.Check.Label>标记为里程碑</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>结束时间</Form.Label>
                                <DateRangePicker
                                    initialSettings={{
                                        singleDatePicker: true,
                                        timePicker: true,
                                        timePicker24Hour: true,
                                        timePickerIncrement: 1,
                                        timePickerSeconds: true,
                                        locale: {
                                            format: 'HH:mm:ss'
                                        }
                                    }}
                                    onShow={hideCalender}
                                >
                                    <Form.Control className="input-single-timepicker" type="text" name="time" />
                                </DateRangePicker>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>类别</Form.Label>
                                <Form.Select>
                                    <option value={0}>项目</option>
                                    <option value={1}>一</option>
                                    <option value={2}>二</option>
                                    <option value={3}>三</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>状态</Form.Label>
                                <Form.Select>
                                    <option value={0}>待办</option>
                                    <option value={1}>暂停</option>
                                    <option value={2}>进行中</option>
                                    <option value={3}>已完成</option>
                                    <option value={4}>待处理</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gx-3">
                        <Col sm={12}>
                            <div className="form-inline">
                                <Form.Group className="mb-3">
                                    <Form.Label>设置优先级：</Form.Label>
                                    <Form.Check inline type="radio" className="ms-2" id="customRadioc2">
                                        <Form.Check.Input type="radio" name="customRadioc2" />
                                        <Form.Check.Label htmlFor="customRadioc2">高</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check inline type="radio" id="customRadioc3">
                                        <Form.Check.Input type="radio" name="customRadioc2" />
                                        <Form.Check.Label htmlFor="customRadioc3">中</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check inline type="radio" id="customRadioc4">
                                        <Form.Check.Input type="radio" name="customRadioc2" />
                                        <Form.Check.Label htmlFor="customRadioc4">低</Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>分配给</span></div>
                    <div className="repeater">
                        <div data-repeater-list="category-group">
                            <div className="d-flex">
                                <Row className="gx-3 flex-1">
                                    <Col sm={6} as={Form.Group} className="mb-0">
                                        <Form.Label>添加人员</Form.Label>
                                    </Col>
                                    <Col sm={6} as={Form.Group} className="mb-0">
                                        <Form.Label>角色</Form.Label>
                                    </Col>
                                </Row>
                                <HkTooltip placement="top" title="添加人员" >
                                    <Link href="#" className="btn btn-xs btn-icon btn-rounded btn-light mb-2">
                                        <span className="icon">
                                            <span className="feather-icon">
                                                <Plus />
                                            </span>
                                        </span>
                                    </Link>
                                </HkTooltip>
                            </div>
                            <div className="d-flex">
                                <Row className="gx-3 flex-1">
                                    <Col sm={6} as={Form.Group}>
                                        <Form.Control placeholder="--" type="text" />
                                    </Col>
                                    <Col sm={6} as={Form.Group}>
                                        <Form.Control placeholder="--" type="text" />
                                    </Col>
                                </Row>
                                <Link href="#" className="btn btn-xs btn-icon btn-rounded btn-light ms-2 mt-1">
                                    <span className="icon">
                                        <i className="ri-delete-bin-6-line" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
                <Button variant="secondary" onClick={hide}>放弃</Button>
                <Button variant="primary" onClick={hide} >添加</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewTask
