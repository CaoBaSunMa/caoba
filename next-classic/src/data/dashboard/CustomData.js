import React from 'react';
import Image from "next/image";
import Link from "next/link";

//Images
import avatar1 from '@/assets/img/logo-avatar-1.png';
import avatar2 from '@/assets/img/logo-avatar-2.png';
import avatar3 from '@/assets/img/logo-avatar-3.png'
import avatar4 from '@/assets/img/logo-avatar-4.png'
import avatar5 from '@/assets/img/logo-avatar-5.png'
import avatar6 from '@/assets/img/logo-avatar-6.png'

// import HkProgressBar from "@/components/@hk-progressbar/HkProgressBar";
import { Button, ProgressBar } from "react-bootstrap";
import HkBadge from "@/components/@hk-badge/@hk-badge";
import { Edit2, Trash } from "react-feather";

//Name cell Formatter
const nameFieldFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className="avatar avatar-xs avatar-rounded">
                        <Image src={data.Img} alt="用户头像" className="avatar-img" />
                    </div>
                </div>
                <div className="media-body">
                    <div className="text-high-em">{data.productName}</div>
                    <div className="fs-7">
                        <Link href="#" className="table-link-text link-medium-em">{data.productLink}</Link>
                    </div>
                </div>
            </div>
        ))
    )
}

//Custom Ussage Container
const usageFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="progress-lb-wrap" style={{ width: 251 }} key={indx} >
                <div className="d-flex align-items-center">
                    {/* <HkProgressBar variant={data.variant} value={data.value} size="xs" rounded className="flex-1" /> */}
                    <ProgressBar variant={data.variant} now={data.value} className="flex-1 progress-bar-rounded progress-bar-xs" />
                    <div className="fs-8 ms-3">{data.value}%</div>
                </div>
            </div>
        ))
    )
}

//Custom Tag Container
const tagFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <HkBadge bg="secondary" soft className="my-1  me-2" key={indx} >{data}</HkBadge>
        ))
    )
}


//Custom Action Container
const actionFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="d-flex align-items-center" key={indx} >
                <Button as={Link} href={data.editLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                    <span className="icon">
                        <span className="feather-icon">
                            <Edit2 />
                        </span>
                    </span>
                </Button>
                <Button as={Link} href={data.deletLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
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

export const columns = [
    {
        name: '名称',
        selector: row => row.name,
        sortable: true,
        cell: row => nameFieldFormatter(row.name),
    },
    {
        name: '使用率',
        cell: row => usageFormatter(row.usage),
        selector: row => row.usage,
        sortable: true,
    },
    {
        name: '最后更新',
        selector: row => row.lastUpdate,
        sortable: true,
    },
    {
        name: '标签',
        cell: row => tagFormatter(row.tags),
        selector: row => row.tags,
        sortable: true,
    },
    {
        name: '',
        cell: row => actionFormatter(row.actions),
        selector: row => row.actions,
    },

];

export const data = [
    {
        id: 1,
        name: [{ Img: avatar1, productName: "Phone Pay", productLink: "phonepay.in", }],
        usage: [{ value: 90, variant: "blue-dark-3" }],
        lastUpdate: "2022年6月10日",
        tags: ["管理员", "金融"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },
    {
        id: 2,
        name: [{ Img: avatar2, productName: "Swiggy", productLink: "swiggy.com", }],
        usage: [{ value: 75, variant: "blue" }],
        lastUpdate: "2022年7月9日",
        tags: ["客户数据", "管理员", "+4"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },
    {
        id: 3,
        name: [{ Img: avatar3, productName: "Coursera", productLink: "coursera.com", }],
        usage: [{ value: 50, variant: "primary" }],
        lastUpdate: "2022年8月24日",
        tags: ["教育", "管理员", "+3"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },

    {
        id: 4,
        name: [{ Img: avatar4, productName: "Tinder", productLink: "tinder.com", }],
        usage: [{ value: 60, variant: "primary" }],
        lastUpdate: "2022年5月17日",
        tags: ["社交"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },

    {
        id: 5,
        name: [{ Img: avatar5, productName: "PCD", productLink: "pcdeals.com", }],
        usage: [{ value: 30, variant: "grey" }],
        lastUpdate: "2022年7月13日",
        tags: ["门户", "管理员", "+3"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },
    {
        id: 6,
        name: [{ Img: avatar6, productName: "Icons 8", productLink: "icons8.com", }],
        usage: [{ value: 45, variant: "green-dark-1" }],
        lastUpdate: "2022年7月14日",
        tags: ["素材库", "资源"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },
]