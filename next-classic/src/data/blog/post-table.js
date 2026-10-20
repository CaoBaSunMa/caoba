import { MoreVertical } from 'react-feather';
import { ArrowsSort, SortAscending, SortDescending } from 'tabler-icons-react';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import HkBadge from '@/components/@hk-badge/@hk-badge';
import Image from 'next/image';

//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';


//Custom Author Formatter
const authorFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.initAvt ? `avatar-soft-${data.avtBg}` : ""))}>
                        {data.Img && <Image src={data.Img} alt="user" className="avatar-img" />}
                        {data.initAvt && <span className="initial-wrap">{data.initAvt}</span>}
                    </div>
                </div>
                <div className="media-body">
                    <span className="d-block">{data.authorName}</span>
                </div>
            </div>
        ))
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


export const columns = [
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
        // sort: true,
        cellFormatter: authorFormatter,
    },
    {
        accessor: "categories",
        title: "分类",
        // sort: true,
    },
    {
        accessor: "tags",
        title: "标签",
        // sort: true,
        cellFormatter: tagFormatter,
    },
    {
        accessor: "status",
        title: "状态",
        // sort: true,
    },
    {
        accessor: "date",
        title: "日期",
        // sort: true,
    },
    {
        accessor: "seo",
        title: "SEO",
        // sort: true,
        cellFormatter: seoFormatter,
    },
    {
        accessor: "actions",
        title: "操作",
        cellFormatter: actionFormatter,
    },
];

export const data = [
    {
        id: 110,
        title: "构建高效的数据面板用户界面设计",
        author: [{ Img: avatar2, authorName: "摩根·弗里曼" }],
        categories: "设计",
        tags: [{ title: "促销", bg: "violet" }, { title: "协作者", bg: "danger" }],
        status: "已发布",
        date: "2020年1月13日",
        seo: "primary",
        actions: [{ actionLink: "#", }]
    },

    {
        id: 109,
        title: "测试文章",
        author: [{ Img: avatar9, authorName: "乌玛·瑟曼" }],
        categories: "开发",
        tags: [{ title: "协作者", bg: "danger" }],
        status: "草稿",
        date: "2020年1月13日",
        seo: "light",
        actions: [{ actionLink: "#", }]
    },

    {
        id: 108,
        title: "未命名文章",
        author: [{ initAvt: "C", avtBg: "success", authorName: "查理·卓别林" }],
        categories: "设计",
        tags: [{ title: "协作者", bg: "danger" },],
        status: "草稿",
        date: "2019年1月13日",
        seo: "light",
        actions: [{ actionLink: "#", }]
    },

    {
        id: 106,
        title: "设计中的远程办公与协作",
        author: [{ Img: avatar10, authorName: "温斯顿·丘吉尔" }],
        categories: "设计",
        tags: [{ title: "促销", bg: "violet" }, { title: "广告", bg: "light" },],
        status: "已发布",
        date: "2020年1月13日",
        seo: "danger",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 105,
        title: "什么是应用中的空状态？",
        author: [{ Img: avatar3, authorName: "杰奎琳·乔克" }],
        categories: "设计",
        tags: [{ title: "促销", bg: "violet" }, { title: "协作者", bg: "danger" },],
        status: "已发布",
        date: "2020年1月13日",
        seo: "warning",
        actions: [{ actionLink: "#", }]
    },

    {
        id: 104,
        title: "如何让代码保持简单有序，任何开发者都能轻松上手？",
        author: [{ Img: avatar7, authorName: "汤姆·克鲁斯" }],
        categories: "开发",
        tags: [{ title: "协作者", bg: "danger" }, { title: "Angular 开发", bg: "success" },],
        status: "已发布",
        date: "2020年1月13日",
        seo: "primary",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 107,
        title: "未命名文章",
        author: [{ initAvt: "D", avtBg: "danger", authorName: "丹尼尔·克雷格" }],
        categories: "设计",
        tags: [{ title: "协作者", bg: "danger" }, { title: "Angular 开发", bg: "success" },],
        status: "草稿",
        date: "2020年1月13日",
        seo: "light",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 103,
        title: "基于 Sass 的可靠核心框架",
        author: [{ initAvt: "Cb", avtBg: "primary", authorName: "caoba" }],
        categories: "用户界面",
        tags: [{ title: "促销", bg: "violet" },],
        status: "草稿",
        date: "2020年1月13日",
        seo: "light",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 102,
        title: "Marvin - Bootstrap 4.5.0 后台管理面板模板",
        author: [{ Img: avatar8, authorName: "乌玛·瑟曼" }],
        categories: "设计",
        tags: [{ title: "促销", bg: "violet" },],
        status: "已发布",
        date: "2020年1月13日",
        seo: "primary",
        actions: [{ actionLink: "#", }]
    },
    {
        id: 101,
        title: "迈向远方",
        author: [{ Img: avatar8, authorName: "乌玛·瑟曼" }],
        categories: "商业",
        tags: [{ title: "促销", bg: "violet" },],
        status: "已发布",
        date: "2020年1月13日",
        seo: "primary",
        actions: [{ actionLink: "#", }]
    },

];
