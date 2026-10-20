import React, { useEffect } from 'react';
import { Archive, Edit, Trash2 } from 'react-feather';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HkBadge from '../../../components/@hk-badge/@hk-badge';
import { useInvoices } from '../../../context/InvoiceProvider';



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


export const columns = [
    {
        accessor: "id",
        title: "ID",
        hidden: true,
    },
    {
        accessor: "invoice",
        title: "发票编号",
        sort: false,
        cellFormatter: (cell) => <Link to="#" className="table-link-text link-high-em">{cell}</Link>,
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

const STATUS_MAP = {
    DRAFT:   { title: '草稿',   bg: 'light',   text: '草稿',   color: 'dark' },
    SENT:    { title: '已发送', bg: 'primary',  text: '已发送', color: 'white' },
    PAID:    { title: '已付款', bg: 'success',  text: '已付款', color: 'white' },
    OVERDUE: { title: '逾期',   bg: 'danger',   text: '逾期',   color: 'white' },
};

export const useInvoiceData = () => {
    const { invoices, fetchInvoices, loading, error } = useInvoices();

    useEffect(() => {
        fetchInvoices();
    }, [fetchInvoices]);

    const data = invoices.map((invoice) => {
        const statusKey = typeof invoice.status === 'string' ? invoice.status : 'DRAFT';
        const statusInfo = STATUS_MAP[statusKey] || STATUS_MAP.DRAFT;

        const clientName = invoice.clientName || invoice.customerName || invoice.customer || '';
        const clientEmail = invoice.clientEmail || invoice.customerEmail || '';

        const issueDate = invoice.issueDate || invoice.date || invoice.createdAt || '';

        const total = invoice.total ?? invoice.amount ?? '';

        return {
            id: invoice.id,
            invoice: invoice.invoiceNumber || invoice.invoice || invoice.number || '',
            date: issueDate,
            reciplent: [{ title: clientName, id: clientEmail }],
            status: [{ ...statusInfo }],
            activity: invoice.activity || invoice.statusActivity || '-',
            amount: total,
            actions: [{ actionLink: `/apps/invoices/invoice-detail/${invoice.id}` }],
        };
    });

    return { data, loading, error };
};
