'use client';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import HkDataTable from '@/components/@hk-data-table'
import { useInvoices } from '@/context';
import React from 'react';
import { Archive, Edit, Trash2 } from 'react-feather';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import HkBadge from '@/components/@hk-badge/@hk-badge';


//Custom Reciplent Container
const reciplentFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <React.Fragment key={indx}>
                <div className="text-dark">{data.title}</div>
                <div className="fs-7">{data.id}</div>
            </React.Fragment>
        ))
    )
}

//Custom Tag Container
const tagFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <React.Fragment key={indx}>
                <HkBadge bg={data.bg} text={data.color} className="my-1  me-2" >{data.title}</HkBadge>
                <div className="fs-8 mt-1">{data.text}</div>
            </React.Fragment>
        ))
    )
}


//Custom Action Container
const actionFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center" key={indx} >
                <Dropdown as={ButtonGroup} className="btn-group selectable-split-dropdown">
                    <Button variant="outline-light" type="button" className="btn-dyn-text w-100p">编辑</Button>
                    <Dropdown.Toggle variant="outline-light" split className="me-3">
                        <span className="sr-only">切换下拉菜单</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item eventKey="Remind" >提醒</Dropdown.Item>
                        <Dropdown.Item eventKey="Sent" >已发送</Dropdown.Item>
                        <Dropdown.Item eventKey="Active" >有效</Dropdown.Item>
                        <Dropdown.Divider as="div" />
                        <Dropdown.Item eventKey="Edit" >编辑</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex">
                    <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                        <span className="btn-icon-wrap">
                            <span className="feather-icon">
                                <Archive />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover" href={data.actionLink} >
                        <span className="btn-icon-wrap">
                            <span className="feather-icon">
                                <Edit />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                        <span className="btn-icon-wrap">
                            <span className="feather-icon">
                                <Trash2 />
                            </span>
                        </span>
                    </Button>
                </div>
            </div>
        ))
    )
}


const columns = [
    {
        accessor: "id",
        title: "ID",
        hidden: true,
    },
    {
        accessor: "invoice",
        title: "发票编号",
        sort: false,
        cellFormatter: (cell) => <a href="#" className="table-link-text link-high-em">{cell}</a>,
    },
    {
        accessor: "date",
        title: "日期",
        sort: true,
    },
    {
        accessor: "reciplent",
        title: "收票方",
        sort: true,
        cellFormatter: reciplentFormatter,
        sortValue: (cell, row) => (cell.map((data) => (data.title))),
    },
    {
        accessor: "status",
        title: "状态",
        sort: true,
        cellFormatter: tagFormatter,
    },
    {
        accessor: "activity",
        title: "活动",
        sort: true,
    },
    {
        accessor: "amount",
        title: "金额",
        sort: true,
    },
    {
        accessor: "actions",
        title: "操作",
        cellFormatter: actionFormatter,
    },
];

const mapInvoiceToRow = (inv) => ({
    id: inv.id,
    invoice: inv.invoice || inv.number || inv.invoiceNumber || '',
    date: inv.date || inv.issueDate || '',
    reciplent: inv.reciplent || inv.recipient || [{ title: inv.recipientName || '', id: inv.recipientEmail || '' }],
    status: inv.status
        ? (Array.isArray(inv.status)
            ? inv.status
            : [{ title: inv.status, bg: inv.statusBg || 'light', color: inv.statusColor || 'dark', text: inv.statusText || '' }])
        : [{ title: '草稿', bg: 'light', color: 'dark' }],
    activity: inv.activity || '-',
    amount: inv.amount || '',
    actions: [{ actionLink: "#" }],
});

const InvoiceList = () => {

    const { invoices, loading, fetchInvoices } = useInvoices();
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchInvoices();
    }, [fetchInvoices]);

    useEffect(() => {
        if (invoices && invoices.length > 0) {
            setData(invoices.map(mapInvoiceToRow));
        }
    }, [invoices]);

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
                                    <a href="#" className="page-link">
                                        <i className="ri-arrow-left-s-line" />
                                    </a>
                                </li>
                                <li className="paginate_button page-item next disabled" id="datable_1_next">
                                    <a href="#" className="page-link" >
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
