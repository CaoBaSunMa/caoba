import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { columns, useContactData } from './TableData';
import HkDataTable from '../../../components/@hk-data-table';



const ContactAppBody = () => {
    const { data } = useContactData();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="contact-body">
            <SimpleBar className="nicescroll-bar">
                <div className="collapse" id="collapseQuick">
                    <div className="quick-access-form-wrap">
                        <Form className="quick-access-form border">
                            <Row className="gx-3">
                                <Col xxl={10}>
                                    <div className="position-relative">
                                        <div className="dropify-square">
                                            <input type="file" className="dropify-1" />
                                        </div>
                                        <Col md={12}>
                                            <Row className="gx-3">
                                                <Col lg={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control placeholder="名*" type="text" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control placeholder="姓*" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control placeholder="邮箱 ID*" type="text" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control placeholder="电话" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control placeholder="部门" type="text" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Select id="input_tags" multiple >
                                                            <option value={1}>协作者</option>
                                                            <option value={2} >设计师</option>
                                                            <option value={3}>开发</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                </Col>
                                <Col xxl={2}>
                                    <Form.Group className="mb-3">
                                        <Button variant="primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" className="btn-block">新建
                                        </Button>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Button variant="secondary" data-bs-toggle="collapse" disabled data-bs-target="#collapseExample" aria-expanded="false" className="btn-block">放弃
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="contact-list-view">

                    <Row className="mb-3" >
                        <Col xs={7} mb={3}>
                            <div className="contact-toolbar-left">
                                <Form.Group className="d-xxl-flex d-none align-items-center mb-0">
                                    <Form.Select size='sm' className="w-120p">
                                        <option value={1}>批量操作</option>
                                        <option value={2}>编辑</option>
                                        <option value={3}>移至回收站</option>
                                    </Form.Select>
                                    <Button size="sm" variant="light" className="ms-2">应用</Button>
                                </Form.Group>
                                <Form.Group className="d-xxl-flex d-none align-items-center mb-0">
                                    <label className="flex-shrink-0 mb-0 me-2">排序方式：</label>
                                    <Form.Select size='sm' className="w-130p">
                                        <option value={1}>创建日期</option>
                                        <option value={2}>编辑日期</option>
                                        <option value={3}>常联系人</option>
                                        <option value={4}>最近添加</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Select size="sm" className="d-flex align-items-center w-130p">
                                    <option value={1}>导出 CSV</option>
                                    <option value={2}>导出 PDF</option>
                                    <option value={3}>发送消息</option>
                                    <option value={4}>委托访问</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={5} mb={3}>
                            <div className="contact-toolbar-right">
                                <div className="dataTables_filter">
                                    <Form.Label>
                                        <Form.Control
                                            size="sm"
                                            type="search"
                                            placeholder="搜索"
                                            value={searchTerm}
                                            onChange={e => setSearchTerm(e.target.value)}
                                        />
                                    </Form.Label>
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                                    <ul className="pagination custom-pagination pagination-simple m-0">
                                        <li className="paginate_button page-item previous disabled" id="datable_1_previous">
                                            <a href="#some" data-dt-idx={0} tabIndex={0} className="page-link">
                                                <i className="ri-arrow-left-s-line" />
                                            </a>
                                        </li>
                                        <li className="paginate_button page-item active">
                                            <a href="#some" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <a href="#some" data-dt-idx={2} tabIndex={0} className="page-link">2</a>
                                        </li>
                                        <li className="paginate_button page-item next" id="datable_1_next">
                                            <a href="#some" data-dt-idx={3} tabIndex={0} className="page-link">
                                                <i className="ri-arrow-right-s-line" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <HkDataTable
                        column={columns}
                        rowData={data}
                        rowsPerPage={10}
                        rowSelection={true}
                        markStarred={true}
                        searchQuery={searchTerm}
                        classes="nowrap w-100 mb-5"
                        responsive
                    />

                </div>
            </SimpleBar >
        </div >
    )
}

export default ContactAppBody
