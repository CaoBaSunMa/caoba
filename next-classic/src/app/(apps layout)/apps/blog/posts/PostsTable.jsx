'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import HkDataTable from '@/components/@hk-data-table'
import { blogAPI } from '@/services/modules';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import { MoreVertical } from 'react-feather';


//Custom Author Container
// `row.author` is normalised to an array of `{ authorName }`; rendering the raw
// object as a React child throws, so unwrap it here.
const authorFormatter = (cell) => {
    const authors = Array.isArray(cell) ? cell : [cell];
    return (
        <span>
            {authors
                .map((a) => (typeof a === 'string' ? a : a?.authorName))
                .filter(Boolean)
                .join('、')}
        </span>
    )
}

//Custom Tag Container
const tagFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <HkBadge bg={data.bg} soft className="my-1  me-2" key={indx} >{data.title}</HkBadge>
        ))
    )
}

//Custom Seo Formatter
const seoFormatter = (cell) => {
    return <HkBadge bg={cell} indicator className="badge-indicator-xl" />
}

//Custom Action Container
const actionFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center" key={indx} >
                <Dropdown>
                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                        <span className="icon">
                            <span className="feather-icon">
                                <MoreVertical />
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item as="a" href={data.actinLink} >操作</Dropdown.Item>
                        <Dropdown.Item>另一个操作</Dropdown.Item>
                        <Dropdown.Item>此处显示其他内容</Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>分隔链接</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ))
    )
}


const columns = [
    {
        accessor: "id",
        title: "ID",
    },
    {
        accessor: "title",
        title: "标题",
        sort: true,
        cellFormatter: (cell) => <span>{cell}</span>,
        tdClasses: "mw-250p text-truncate text-high-em"
    },
    {
        accessor: "author",
        title: "作者",
        cellFormatter: authorFormatter,
    },
    {
        accessor: "categories",
        title: "分类",
        cellFormatter: authorFormatter,
    },
    {
        accessor: "tags",
        title: "标签",
        cellFormatter: tagFormatter,
    },
    {
        accessor: "status",
        title: "状态",
    },
    {
        accessor: "date",
        title: "日期",
    },
    {
        accessor: "seo",
        title: "SEO",
        cellFormatter: seoFormatter,
    },
    {
        accessor: "actions",
        title: "操作",
        cellFormatter: actionFormatter,
    },
];

const mapPostToRow = (post) => ({
    id: post.id,
    title: post.title || '',
    author: post.author
        ? (Array.isArray(post.author) ? post.author : [{ authorName: post.author }])
        : [{ authorName: '未知' }],
    categories: post.categories || post.category || '',
    tags: post.tags
        ? (Array.isArray(post.tags) ? post.tags : [{ title: post.tags, bg: 'violet' }])
        : [],
    status: post.status || '',
    date: post.date || post.createdAt || '',
    seo: post.seo || 'light',
    actions: [{ actionLink: "#" }],
});

const PostsTable = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const res = await blogAPI.getPosts();
                if (res.data && res.data.length > 0) {
                    setData(res.data.map(mapPostToRow));
                }
            } catch (e) {
                console.error('Failed to load posts:', e);
            }
        };
        loadPosts();
    }, []);

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
                                <Form.Control
                                    size="sm"
                                    type="search"
                                    placeholder="搜索"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                            <ul className="pagination custom-pagination pagination-simple m-0">
                                <li className={classNames("paginate_button page-item previous")} id="datable_1_previous">
                                    <a href="#" className="page-link">
                                        <i className="ri-arrow-left-s-line" />
                                    </a>
                                </li>
                                <li className={classNames("paginate_button page-item next")} id="datable_1_next">
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

export default PostsTable
