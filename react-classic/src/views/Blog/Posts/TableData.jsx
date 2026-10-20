import { useEffect, useState } from 'react';
import { MoreVertical } from 'react-feather';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import HkBadge from '../../../components/@hk-badge/@hk-badge';
import { blogAPI } from '../../../services/modules';


//Custom Author Formatter
const authorFormatter = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.initAvt ? `avatar-soft-${data.avtBg}` : ""))}>
                        {data.Img && <img src={data.Img} alt="用户" className="avatar-img" />}
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
                        <Dropdown.Item as={Link} to={data.actinLink} >操作</Dropdown.Item>
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

export const usePostData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await blogAPI.getPosts();
                if (!cancelled) {
                    setData((res.data || []).map((post) => ({
                        id: post.id,
                        title: post.title || post.name || '',
                        author: post.author
                            ? (Array.isArray(post.author) ? post.author : [{ Img: post.authorAvatar || post.authorImage, authorName: post.author }])
                            : [{ initAvt: "Cb", avtBg: "primary", authorName: post.authorName || '' }],
                        categories: post.categories || post.category || '',
                        tags: post.tags?.map((t) => ({ title: t.name || t.title, bg: t.bg || t.color || 'violet' })) || [],
                        status: post.status || '',
                        date: post.date || post.createdAt || '',
                        seo: post.seo || 'light',
                        actions: [{ actionLink: "#" }],
                    })));
                }
            } catch (e) {
                // silent fail
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchPosts();
        return () => { cancelled = true; };
    }, []);

    return { data, loading };
};
