'use client';
import { useEffect, useState } from 'react';
import { Nav, Tab, } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { fileAPI } from '@/services/modules';
import HkDataTable from '@/components/@hk-data-table'
import React from 'react';
import { Copy, Download, Eye, Info, Link2, MoreHorizontal, SkipForward, Trash2, UserPlus } from 'react-feather';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import Link from 'next/link';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';


//Custom Avatar Container
const nameFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media fmapp-info-trigger" key={indx} >
                <div className="media-head me-3">
                    {data.icons && <div className={classNames("avatar avatar-icon avatar-sm", (`avatar-soft-${data.iconBg}`))}>
                        <span className="initial-wrap">
                            <i className={`ri-${data.icons}`} />
                        </span>
                    </div>}
                    {data.img && <img src={data.img} alt="user" className="d-block img-fluid w-50p" />}
                </div>
                <div className="media-body">
                    <div className="file-name">{data.fileName}</div>
                    <div>{data.fileType}</div>
                </div>
            </div >
        ))
    )
}

//Custom Sharing Container
const sharingFormater = (cell) => {
    return (
        <div className="avatar-group avatar-group-overlapped">
            {cell.map((data, indx) => (
                <React.Fragment key={indx}>
                    {
                        data.img && <HkTooltip placement="top" title={data.userName} >
                            <div className="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Dean" >
                                <img src={data.img} alt="user" className="avatar-img" />
                            </div>
                        </HkTooltip>
                    }
                    {
                        data.intAvt && <HkTooltip placement="top" title={data.userName} >
                            <div className={classNames("avatar avatar-rounded", (`avatar-soft-${data.initAvtBg}`))} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tom">
                                <span className="initial-wrap">{data.intAvt}</span>
                            </div>
                        </HkTooltip>
                    }
                    {data.blank && <span>-</span>}
                </React.Fragment>
            ))}
        </div>
    )
}

//Custom Action Container
const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <span className="text-right" key={indx}>
                <Dropdown>
                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                        <span className="icon">
                            <span className="feather-icon">
                                <MoreHorizontal />
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} href={data.preview} >
                            <span className="feather-icon dropdown-icon">
                                <Eye />
                            </span>
                            <span>预览</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Copy />
                            </span>
                            <span>创建副本</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <SkipForward />
                            </span>
                            <span>移动</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <UserPlus />
                            </span>
                            <span>邀请</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Link2 />
                            </span>
                            <span>共享链接</span>
                        </Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Info />
                            </span>
                            <span>查看详情</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Download />
                            </span>
                            <span>下载</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Trash2 />
                            </span>
                            <span>删除</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </span>
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
        title: "名称",
        sort: true,
        cellFormatter: nameFormater,
    },
    {
        accessor: "sharing",
        title: "共享",
        sort: true,
        cellFormatter: sharingFormater,
    },
    {
        accessor: "modified",
        title: "修改时间",
        sort: true,
    },
    {
        accessor: "size",
        title: "大小",
        sort: true,
    },
    {
        accessor: "actions",
        title: "操作",
        cellFormatter: actionFormater,
    },
];

const mapFileToRow = (file) => ({
    id: file.id,
    starred: file.starred || false,
    name: file.name
        ? (Array.isArray(file.name) ? file.name : [{ icons: file.icon || 'file-text-fill', iconBg: file.iconBg || 'blue', fileName: file.name, fileType: file.type || '' }])
        : [{ fileName: file.fileName || '', fileType: file.fileType || '' }],
    sharing: file.sharing || [{ blank: true }],
    modified: file.modified || file.updatedAt || '',
    size: file.size || '',
    actions: [{ preview: "#" }],
});

const FmList = ({ toggleInfo }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const loadFiles = async () => {
            try {
                const res = await fileAPI.getFiles();
                if (res.data && res.data.length > 0) {
                    setData(res.data.map(mapFileToRow));
                }
            } catch (e) {
                console.error('Failed to load files:', e);
            }
        };
        loadFiles();
    }, []);

    return (
        <div className="fm-body">
            <SimpleBar className="nicescroll-bar">
                <div className="file-list-view">
                    <Tab.Container defaultActiveKey="cloud_doc" >
                        <Nav as="ul" variant="tabs" className="nav-line nav-icon nav-light">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="cloud_doc">
                                    <span className="nav-link-text">云文档</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <span className="nav-link-text">共享给我的</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="cloud_doc">
                                <HkDataTable
                                    column={columns}
                                    rowData={data}
                                    rowSelection={true}
                                    markStarred={true}
                                    classes="nowrap w-100 mb-5"
                                    responsive
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </SimpleBar>
        </div>
    )
}

export default FmList
