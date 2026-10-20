import React from 'react';
import { Archive, Edit, Trash2 } from 'react-feather';
import { ArrowsSort, SortAscending, SortDescending } from 'tabler-icons-react';
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

export const data = [
    {
        id: 1,
        invoice: "11234",
        date: "2020年1月13日",
        reciplent: [{ title: "帕特里克·谢尔顿", id: "morgan@caoba.com" }],
        status: [{ title: "草稿", bg: "light", color: "dark" }],
        activity: "-",
        amount: "¥2,300.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 2,
        invoice: "11235",
        date: "2020年1月13日",
        reciplent: [{ title: "休玛·瑟曼", id: "huma@clariesup.au" }],
        status: [{ title: "未支付", bg: "danger", text: "2020年4月25日到期" }],
        activity: "已发送",
        amount: "¥780.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 3,
        invoice: "11236",
        date: "2020年1月13日",
        reciplent: [{ title: "查理·卓别林", id: "charlie@leernoca.monster" }],
        status: [{ title: "已支付", bg: "primary" }],
        activity: "已完成",
        amount: "¥567.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 4,
        invoice: "11237",
        date: "2020年1月13日",
        reciplent: [{ title: "温斯顿·丘吉尔", id: "winston@worthniza.ga" }],
        status: [{ title: "未支付", bg: "danger", text: "2020年9月12日到期" }],
        activity: "-",
        amount: "¥1,500.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 5,
        invoice: "11238",
        date: "2020年1月13日",
        reciplent: [{ title: "杰奎琳·乔克", id: "jaquljoker@caoba.com" }],
        status: [{ title: "未支付", bg: "danger", text: "2020年10月18日到期" }],
        activity: "已发送",
        amount: "¥900.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 6,
        invoice: "11239",
        date: "2020年7月3日",
        reciplent: [{ title: "汤姆·克鲁斯", id: "tomcz@caoba.com" }],
        status: [{ title: "已支付", bg: "primary" }],
        activity: "已完成",
        amount: "¥4,750.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 7,
        invoice: "11240",
        date: "2019年6月24日",
        reciplent: [{ title: "丹尼尔·克雷格", id: "danialc@caoba.com" }],
        status: [{ title: "已支付", bg: "primary", text: "2020年4月25日到期" }],
        activity: "已完成",
        amount: "¥2,300.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 8,
        invoice: "11241",
        date: "2019年6月24日",
        reciplent: [{ title: "凯瑟琳·琼斯", id: "joneskath@caoba.com" }],
        status: [{ title: "已支付", bg: "primary" }],
        activity: "已完成",
        amount: "¥7,650.00",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 9,
        invoice: "11242",
        date: "2019年6月24日",
        reciplent: [{ title: "caoba", id: "contact@caoba.com" }],
        status: [{ title: "草稿", bg: "light", color: "dark" }],
        activity: "-",
        amount: "¥4,500.00",
        actions: [{ actionLink: "https://caoba.com/", }]
    },


];
