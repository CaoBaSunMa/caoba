import React from 'react';
import classNames from 'classnames';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HkDataTable from '../../../components/@hk-data-table';
import { columns, usePostData } from './TableData';


const PostsTable = () => {
    const { data } = usePostData();

    return (
        <>
            <Row className="mb-3" >
                <Col xs={7} mb={3}>
                    <div className="blog-toolbar-left">
                        <Form.Group className="d-xxl-flex d-none align-items-center mb-0">
                            <Form.Select size='sm' className="w-120p">
                                <option value={1} >批量操作</option>
                                <option value={2}>编辑</option>
                                <option value={3}>移至回收站</option>
                            </Form.Select>
                            <Button size="sm" variant="light" className="ms-2">应用</Button>
                        </Form.Group>
                        <Form.Group className="d-xxl-flex d-none align-items-center mb-0">
                            <label className="flex-shrink-0 mb-0 me-2">排序依据：</label>
                            <Form.Select size='sm' className="w-130p">
                                <option value={1}>创建日期</option>
                                <option value={2}>编辑日期</option>
                                <option value={3}>常用联系人</option>
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
                    <div className="blog-toolbar-right">
                        <div className="dataTables_filter">
                            <label>
                                <Form.Control size="sm" type="search" placeholder="搜索" />
                            </label>
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                            <ul className="pagination custom-pagination pagination-simple m-0">
                                <li className={classNames("paginate_button page-item previous")} id="datable_1_previous">
                                    <Link to="#" className="page-link">
                                        <i className="ri-arrow-left-s-line" />
                                    </Link>
                                </li>
                                <li className={classNames("paginate_button page-item next")} id="datable_1_next">
                                    <Link to="#" className="page-link" >
                                        <i className="ri-arrow-right-s-line" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

            <HkDataTable
                column={columns}
                rowData={data}
                rowSelection={true}
                rowsPerPage={10}
                classes="nowrap w-100 mb-5"
                responsive
            />
        </>
    )
}

export default PostsTable
