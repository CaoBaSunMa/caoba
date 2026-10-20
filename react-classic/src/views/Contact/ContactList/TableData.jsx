import { useEffect } from 'react';
import { Archive, Copy, Edit, MoreVertical, Trash, Trash2 } from 'react-feather';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import HkBadge from '../../../components/@hk-badge/@hk-badge';
import { useContacts } from '../../../context/ContactProvider';



//Custom Avatar Container
const nameFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-soft-${data.avtBg}` : ""))}>
                        {data.Img && <img src={data.Img} alt="用户" className="avatar-img" />}
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
                    <Button variant="flush-dark" as={Link} to={data.archiveLink} className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="归档">
                        <span className="icon">
                            <span className="feather-icon">
                                <Archive />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} to={data.editLink} className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                        <span className="icon">
                            <span className="feather-icon">
                                <Edit />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} to={data.deleteLink} className="btn-icon btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
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
                        <Dropdown.Item as={Link} to={data.editLink}>
                            <span className="feather-icon dropdown-icon">
                                <Edit />
                            </span>
                            <span>编辑联系人</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">
                            <span className="feather-icon dropdown-icon">
                                <Trash2 />
                            </span>
                            <span>删除</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">
                            <span className="feather-icon dropdown-icon">
                                <Copy />
                            </span>
                            <span>复制</span>
                        </Dropdown.Item>
                        <Dropdown.Divider as="div" />
                        <Dropdown.Header className="dropdown-header-bold">修改标签组</Dropdown.Header>
                        <Dropdown.Item as={Link} to="#">设计</Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">开发</Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">库存</Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">人力资源</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ))
    )
}


export const columns = [
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

export const useContactData = () => {
    const { contacts, fetchContacts, loading } = useContacts();

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const VARIANT = ['primary', 'info', 'success', 'warning', 'danger', 'secondary'];
    const data = contacts.map((contact) => {
        const name = contact.name || contact.firstName || '';
        const init = !contact.avatar ? name[0] || '?' : undefined;
        return {
        starred: contact.starred || false,
        name: [{ Img: contact.avatar, cstmAvt: init, avtBg: VARIANT[(name.charCodeAt(0) || 0) % VARIANT.length], userName: name }],
        email: contact.email,
        phone: contact.phone,
        tags: contact.tags?.map((t) => ({ title: t.name || t.title, bg: t.bg || t.color })) || [],
        labels: contact.labels?.[0] || '',
        dateCreated: contact.dateCreated || contact.createdAt || '',
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
    };
    });

    return { data, loading };
};
