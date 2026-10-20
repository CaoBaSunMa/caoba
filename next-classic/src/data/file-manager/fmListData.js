import React from 'react';
import { Copy, Download, Eye, Info, Link2, MoreHorizontal, SkipForward, Trash2, UserPlus } from 'react-feather';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar12 from '@/assets/img/avatar12.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';
import avatar14 from '@/assets/img/avatar14.jpg';
import mock7 from '@/assets/img/gallery/mock7.jpg';
import mock8 from '@/assets/img/gallery/mock8.jpg';
import Link from 'next/link';
import Image from 'next/image';
import HkTooltip from '@/components/@hk-tooltip/HkTooltip';


//Custom Avatar Container
export const nameFormater = (cell) => {

    return (
        cell.map((data, indx) => (
            <div className="media fmapp-info-trigger" key={indx} >
                <div className="media-head me-3">
                    {data.icons && <div className={classNames("avatar avatar-icon avatar-sm", (`avatar-soft-${data.iconBg}`))}>
                        <span className="initial-wrap">
                            <i className={`ri-${data.icons}`} />
                        </span>
                    </div>}
                    {data.img && <Image src={data.img} alt="user" className="d-block img-fluid w-50p" />}
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
export const sharingFormater = (cell) => {
    return (
        <div className="avatar-group avatar-group-overlapped">
            {cell.map((data, indx) => (
                <React.Fragment key={indx}>
                    {
                        data.img && <HkTooltip placement="top" title={data.userName} >
                            <div className="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Dean" >
                                <Image src={data.img} alt="user" className="avatar-img" />
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
export const actionFormater = (cell) => {
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


export const columns = [
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
        // events: {
        //     onClick: (e) => {
        //         e.preventDefault();
        //         sessionStorage.setItem("FmInfo", true);
        //     }
        // },
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

export const data = [
    {
        id: 1,
        starred: true,
        name: [{ icons: "file-excel-2-fill", iconBg: "blue", fileName: "网站内容.exl", fileType: "exel" }],
        sharing: [{ img: avatar13, userName: "迪恩" }, { img: avatar14, userName: "丹尼尔" }],
        modified: "今天 11:02",
        size: "2,637KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 2,
        starred: false,
        name: [{ img: mock7, fileName: "bruce-mars-fiEG-Pk6ZEZLA", fileType: "png" }],
        sharing: [{ intAvt: "B", initAvtBg: "success", userName: "汤姆" }],
        modified: "昨天 14:40",
        size: "4,178 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 3,
        starred: false,
        name: [{ icons: "folder-2-fill", iconBg: "warning", fileName: "caoba - HTML - v1.0", fileType: "文件夹" }],
        sharing: [{ img: avatar2, userName: "丹尼尔" },],
        modified: "7月13日 13:46",
        size: "501 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 4,
        starred: false,
        name: [{ icons: "folder-zip-fill", iconBg: "blue", fileName: "caoba.zip", fileType: "zip" }],
        sharing: [{ img: avatar12, userName: "丹尼尔" },],
        modified: "6月10日 08:00",
        size: "2.45 GB",
        actions: [{ preview: "#", }]
    },
    {
        id: 5,
        starred: true,
        name: [{ icons: "folder-5-fill", iconBg: "warning", fileName: "caoba", fileType: "文件夹" }],
        sharing: [{ blank: true }],
        modified: "6月24日 18:55",
        size: "1.6 GB",
        actions: [{ preview: "#", }]
    },
    {
        id: 6,
        starred: false,
        name: [{ icons: "file-text-fill", iconBg: "blue", fileName: "会议纪要.doc", fileType: "文档" }],
        sharing: [{ img: avatar12, userName: "迪恩" }, { img: avatar13, userName: "丹尼尔" },],
        modified: "2月18日 12:25",
        size: "20 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 7,
        starred: false,
        name: [{ icons: "file-text-fill", iconBg: "blue", fileName: "开支明细.doc", fileType: "文档" }],
        sharing: [{ img: avatar12, userName: "丹尼尔" },],
        modified: "2月12日 12:30",
        size: "76.3 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 8,
        starred: false,
        name: [{ img: mock8, fileName: "joel-mott-LaK153ghdigdss", fileType: "jpeg" }],
        sharing: [{ blank: true }],
        modified: "1月2日 16:32",
        size: "3,028 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 9,
        starred: false,
        name: [{ icons: "file-word-fill", iconBg: "blue", fileName: "提案.doc", fileType: "Word 文档" }],
        sharing: [{ img: avatar12, userName: "凯瑟琳" }, { img: avatar13, userName: "丹尼尔" }, { img: avatar14, userName: "迪恩" }, { intAvt: "B", initAvtBg: "success", userName: "汤姆" }],
        modified: "1月2日 09:45",
        size: "951 KB",
        actions: [{ preview: "#", }]
    },
    {
        id: 10,
        starred: false,
        name: [{ icons: "file-pdf-fill", iconBg: "danger", fileName: "caoba.pdf", fileType: "pdf" }],
        sharing: [{ blank: true }],
        modified: "今天 16:30",
        size: "21.73 MB",
        actions: [{ preview: "#", }]
    },

];