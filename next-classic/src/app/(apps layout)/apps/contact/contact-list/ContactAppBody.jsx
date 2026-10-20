'use client';
import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Button, Col, Form, Pagination, Row, Table } from 'react-bootstrap';
import HkDataTable from '@/components/@hk-data-table'
import { useContacts } from '@/context';
import Image from "next/image"
import classNames from "classnames";
import HkBadge from "@/components/@hk-badge/@hk-badge";
import { Archive, Copy, Edit, MoreVertical, Star, Trash, Trash2 } from "react-feather";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";


//Custom Star Formatter
const starFormatter = (cell) => (
    <div className="d-flex align-items-center">
        <span className={classNames("contact-star", { "marked": cell })}>
            <span className="feather-icon">
                <Star />
            </span>
        </span>
    </div>
)

//Custom Name Formatter
const nameFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-soft-${data.avtBg}` : ""))}>
                        {data.Img && <Image src={data.Img} alt="user" className="avatar-img" />}
                        {data.cstmAvt && <span className="initial-wrap">{data.cstmAvt}</span>}
                    </div>
                </div>
                <div className="media-body">
                    <span className="d-block text-high-em">{data.userName}</span>
                </div>
            </div>
        ))
    )
}

//Custom Tag Container
const tagFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <HkBadge bg={data.bg} soft className="my-1  me-2" key={indx} >{data.title}</HkBadge>
        ))
    )
}

//Custom Action Container
const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center" key={indx} >
                <div className="d-flex">
                    <Button variant="flush-dark" as={Link} href={data.archiveLink} className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="归档">
                        <span className="icon">
                            <span className="feather-icon">
                                <Archive />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} href={data.editLink} className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                        <span className="icon">
                            <span className="feather-icon">
                                <Edit />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} href={data.deleteLink} className="btn-icon btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
                        <span className="icon">
                            <span className="feather-icon">
                                <Trash />
                            </span>
                        </span>
                    </Button>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                        <span className="icon">
                            <span className="feather-icon">
                                <MoreVertical />
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item as={Link} href={data.editLink}>
                            <span className="feather-icon dropdown-icon">
                                <Edit />
                            </span>
                            <span>编辑联系人</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">
                            <span className="feather-icon dropdown-icon">
                                <Trash2 />
                            </span>
                            <span>删除</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">
                            <span className="feather-icon dropdown-icon">
                                <Copy />
                            </span>
                            <span>复制</span>
                        </Dropdown.Item>
                        <Dropdown.Divider as="div" />
                        <Dropdown.Header className="dropdown-header-bold">修改标签组</Dropdown.Header>
                        <Dropdown.Item as="a" href="#">设计</Dropdown.Item>
                        <Dropdown.Item as="a" href="#">开发</Dropdown.Item>
                        <Dropdown.Item as="a" href="#">库存</Dropdown.Item>
                        <Dropdown.Item as="a" href="#">人力资源</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ))
    )
}


const columns = [
    {
        accessor: "id",
        title: "产品 ID",
        hidden: true,
    },
    {
        accessor: "starred",
        title: "",
        hidden: true,
    },
    {
        accessor: "name",
        title: "姓名",
        sort: true,
        cellFormatter: nameFormater,
    },
    {
        accessor: "email",
        title: "邮箱地址",
        sort: true,
        cellFormatter: (cell) => <span className="text-truncate mw-150p d-block">{cell}</span>,
    },
    {
        accessor: "phone",
        title: "电话",
        sort: true,
    },
    {
        accessor: "tags",
        title: "标签",
        sort: true,
        cellFormatter: tagFormater,
    },
    {
        accessor: "labels",
        title: "标签组",
        sort: true,
    },
    {
        accessor: "dateCreated",
        title: "创建日期",
        sort: true,
    },
    {
        accessor: "actions",
        title: "",
        cellFormatter: actionFormater,
    },
];

const mapContactToRow = (c) => ({
    id: c.id,
    starred: c.starred || c.stared || false,
    name: c.name
        ? [{ userName: c.name, Img: c.avatar || null, cstmAvt: c.initAvatar || null, avtBg: c.avtBg || 'info' }]
        : [{ userName: '' }],
    email: c.email || '',
    phone: c.phone || '',
    tags: c.tags
        ? (Array.isArray(c.tags) ? c.tags : [{ title: c.tags, bg: 'violet' }])
        : [],
    labels: c.labels || c.label || '',
    dateCreated: c.dateCreated || c.createdAt || '',
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
});

const ContactAppBody = () => {

    const { contacts: apiContacts, loading, fetchContacts } = useContacts();
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    useEffect(() => {
        if (apiContacts && apiContacts.length > 0) {
            setData(apiContacts.map(mapContactToRow));
        }
    }, [apiContacts]);

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
