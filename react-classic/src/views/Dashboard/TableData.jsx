import { Edit2, Trash } from 'react-feather';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Images
import avatar1 from '../../assets/img/logo-avatar-1.png'
import avatar2 from '../../assets/img/logo-avatar-2.png'
import avatar3 from '../../assets/img/logo-avatar-3.png'
import avatar4 from '../../assets/img/logo-avatar-4.png'
import avatar5 from '../../assets/img/logo-avatar-5.png'
import avatar6 from '../../assets/img/logo-avatar-6.png'
import HkBadge from '../../components/@hk-badge/@hk-badge';
import HkProgressBar from '../../components/@hk-progressbar/HkProgressBar';

//Custom Avatar Container
const avatarFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media align-items-center" key={indx} >
                <div className="media-head me-2">
                    <div className="avatar avatar-xs avatar-rounded">
                        <img src={data.Img} alt="user" className="avatar-img" />
                    </div>
                </div>
                <div className="media-body">
                    <div className="text-high-em">{data.productName}</div>
                    <div className="fs-7"><Link to="#" className="table-link-text link-medium-em">{data.productLink}</Link></div>
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
                    <HkProgressBar variant={data.variant} now={data.value} size="xs" rounded className="flex-1" />
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
                <Button as={Link} to={data.editLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                    <span className="icon">
                        <span className="feather-icon">
                            <Edit2 />
                        </span>
                    </span>
                </Button>
                <Button as={Link} to={data.deletLink} variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
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

export const data = [
    {
        name: [{ Img: avatar1, productName: "Phone Pay", productLink: "phonepay.in", }],
        usage: [{ value: 90, variant: "blue-dark-3" }],
        lastUpdate: "2022年6月10日",
        tags: ["管理员", "金融"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },

    {
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
        name: [{ Img: avatar4, productName: "Tinder", productLink: "tinder.com", }],
        usage: [{ value: 60, variant: "primary" }],
        lastUpdate: "2022年5月17日",
        tags: ["社交"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },

    {
        name: [{ Img: avatar5, productName: "PCD", productLink: "pcdeals.com", }],
        usage: [{ value: 30, variant: "grey" }],
        lastUpdate: "2022年7月13日",
        tags: ["门户", "管理员", "+3"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },
    {
        name: [{ Img: avatar6, productName: "Icons 8", productLink: "icons8.com", }],
        usage: [{ value: 45, variant: "green-dark-1" }],
        lastUpdate: "2022年7月14日",
        tags: ["素材库", "资源"],
        actions: [{ editLink: "#", deletLink: "#" }]
    },


];