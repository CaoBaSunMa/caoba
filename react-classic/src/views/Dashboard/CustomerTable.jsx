import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Form, Row, } from 'react-bootstrap';
import { Plus, Upload } from 'react-feather';
import HkBadge from '../../components/@hk-badge/@hk-badge';
import HkDataTable from '../../components/@hk-data-table';
import { columns, data } from './TableData';


const CustomerTable = () => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Card className="card-border mb-0 h-100">
            <Card.Header className="card-header-action">
                <h6>新客户
                    <HkBadge bg="light" size="sm" text="dark" className="ms-1">240</HkBadge>
                </h6>
                <div className="card-action-wrap">
                    <Button variant="outline-light" size="sm">
                        <span>
                            <span className="icon">
                                <span className="feather-icon">
                                    <Upload />
                                </span>
                            </span>
                            <span className="btn-text">导入</span>
                        </span>
                    </Button>
                    <Button variant="primary" size="sm" className="ms-3">
                        <span>
                            <span className="icon">
                                <span className="feather-icon">
                                    <Plus />
                                </span>
                            </span>
                            <span className="btn-text">添加</span>
                        </span>
                    </Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Row className="mb-3">
                    <Col sm={9} >
                        <div className="d-xxl-flex d-none align-items-center">
                            <ButtonGroup size="sm">
                                <Button variant="outline-light">查看全部</Button>
                                <Button variant="outline-light">已监控</Button>
                                <Button variant="outline-light">未监控</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col sm={3} className="text-right d-flex justify-content-end">
                        <Form.Control
                            size='sm'
                            type='search'
                            placeholder='搜索'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-light" size="sm" className="ms-3">
                            <span><span className="icon">
                                <i className="bi bi-filter"></i>
                            </span>
                                <span className="btn-text">筛选</span></span>
                        </Button>
                    </Col>
                </Row>
                <div className="contact-list-view">
                    <HkDataTable
                        column={columns}
                        rowData={data}
                        rowSelection
                        rowsPerPage={4}
                        searchQuery={searchTerm}
                        paginatorSize="sm"
                        classes="display pb-30"
                        responsive
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

export default CustomerTable
