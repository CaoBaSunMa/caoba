import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HkDataTable from '../../../components/@hk-data-table';
import { columns, useInvoiceData } from './TableData';

const InvoiceList = () => {
    const { data, error } = useInvoiceData();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <Row className="mb-3" >
                <Col xs={7} mb={3}>
                    <div className="invoice-toolbar-left">
                        <Form.Select size="sm" className="d-flex align-items-center w-130p">
                            <option value={1}>导出为 CSV</option>
                            <option value={2}>导出为 PDF</option>
                            <option value={3}>发送消息</option>
                            <option value={4}>授权访问</option>
                        </Form.Select>
                    </div>
                </Col>
                <Col xs={5} mb={3}>
                    <div className="invoice-toolbar-right">
                        <div className="dataTables_filter">
                            <label>
                                <Form.Control
                                    size='sm'
                                    type='search'
                                    placeholder='搜索'
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                            <ul className="pagination custom-pagination pagination-simple m-0">
                                <li className="paginate_button page-item previous disabled" id="datable_1_previous">
                                    <Link to="#" className="page-link">
                                        <i className="ri-arrow-left-s-line" />
                                    </Link>
                                </li>
                                <li className="paginate_button page-item next disabled" id="datable_1_next">
                                    <Link to="#" className="page-link" >
                                        <i className="ri-arrow-right-s-line" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

            {error && (
                <div className="alert alert-danger m-3" role="alert">
                    {error}
                </div>
            )}
            <HkDataTable
                column={columns}
                rowData={data}
                rowSelection={true}
                rowsPerPage={10}
                searchQuery={searchTerm}
                classes="nowrap w-100 mb-5"
                responsive
            />

        </>
    )
}

export default InvoiceList
