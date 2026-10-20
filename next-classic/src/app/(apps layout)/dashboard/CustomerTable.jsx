'use client';
import { useEffect, useState } from 'react';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import HkDataTable from '@/components/@hk-data-table'
import { useContacts } from '@/context';
import { Button, ButtonGroup, Card, Col, Form, Row } from 'react-bootstrap';
import { Edit2, Plus, Trash, Upload } from 'react-feather';
import { ProgressBar } from "react-bootstrap";

//Custom Avatar Container
const avatarFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className="avatar avatar-xs avatar-rounded">
                        {data.Img ? (
                            <img src={data.Img} alt="用户头像" className="avatar-img" />
                        ) : (
                            <span className="initial-wrap">{data.productName?.[0] || '?'}</span>
                        )}
                    </div>
                </div>
                <div className="media-body">
                    <div className="text-high-em">{data.productName}</div>
                    <div className="fs-7"><a href="#" className="table-link-text link-medium-em">{data.productLink}</a></div>
                </div>
            </div>
        ))
    )
}

//Custom Ussage Container
const usageFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="progress-lb-wrap" style={{ width: 251 }} key={indx} >
                <div className="d-flex align-items-center">
                    <ProgressBar variant={data.variant} now={data.value} className="flex-1 progress-bar-rounded progress-bar-xs" />
                    <div className="fs-8 ms-3">{data.value}%</div>
                </div>
            </div>
        ))
    )
}

//Custom Tag Container
const tagFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <HkBadge bg="secondary" soft className="my-1  me-2" key={indx} >{data}</HkBadge>
        ))
    )
}

//Custom Action Container
const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center" key={indx} >
                <Button as="a" href={data.editLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                    <span className="icon">
                        <span className="feather-icon">
                            <Edit2 />
                        </span>
                    </span>
                </Button>
                <Button as="a" href={data.deletLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
                    <span className="icon">
                        <span className="feather-icon">
                            <Trash />
                        </span>
                    </span>
                </Button>
            </div>
        ))
    )
}

const columns = [
    {
        accessor: "id",
        title: "产品ID",
        hidden: true,
    },
    {
        accessor: "name",
        title: "名称",
        sort: true,
        cellFormatter: avatarFormater,
    },
    {
        accessor: "usage",
        title: "使用率",
        sort: true,
        cellFormatter: usageFormater,
    },
    {
        accessor: "lastUpdate",
        title: "最后更新",
        sort: true,
    },
    {
        accessor: "tags",
        title: "标签",
        sort: true,
        cellFormatter: tagFormater,
    },
    {
        accessor: "actions",
        title: "",
        cellFormatter: actionFormater,
    },
];

const mapContactToRow = (contact, index) => ({
    id: contact.id || index + 1,
    name: [{ Img: contact.avatar || null, productName: contact.name, productLink: contact.email || '' }],
    usage: [{ value: contact.usage ?? Math.floor(Math.random() * 80 + 20), variant: "blue" }],
    lastUpdate: contact.lastUpdate || contact.dateCreated || '',
    tags: contact.tags ? (Array.isArray(contact.tags) ? contact.tags.map(t => t.title || t) : contact.tags) : [],
    actions: [{ editLink: "#", deletLink: "#" }],
});

const CustomerTable = () => {

    const { contacts, loading, fetchContacts } = useContacts();
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    useEffect(() => {
        if (contacts && contacts.length > 0) {
            setData(contacts.map(mapContactToRow));
        }
    }, [contacts]);

    return (
        <Card className="card-border mb-0 h-100">
            <Card.Header className="card-header-action">
                <h6>新客户
                    <HkBadge bg="light" size="sm" text="dark" className="ms-1">{data.length}</HkBadge>
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
