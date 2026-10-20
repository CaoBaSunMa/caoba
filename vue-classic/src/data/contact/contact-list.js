
//Images
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar3 from '@/assets/img/avatar3.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar13 from '@/assets/img/avatar13.jpg';



//Custom Name Formatter
const nameFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div class="media align-items-center" key={indx} >
                <div class="media-head me-2">
                    <div className={classNames("avatar avatar-xs avatar-rounded", (data.cstmAvt ? `avatar-soft-${data.avtBg}` : ""))}>
                        {data.Img && <Image src={data.Img} alt="用户" className="avatar-img" />}
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

//Custom Mail Formatter
const mailFormatter = (mail) => (
    <span className="text-truncate mw-150p d-block">{mail}</span>
)


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
                    <Button variant="flush-dark" as={Link} href={data.archiveLink} className="btn-icon btn-rounded flush-soft-hover" v-tooltip data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="归档">
                        <span className="icon">
                            <span className="feather-icon">
                                <Archive />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} href={data.editLink} className="btn-icon btn-rounded flush-soft-hover" v-tooltip data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="编辑">
                        <span className="icon">
                            <span className="feather-icon">
                                <Edit />
                            </span>
                        </span>
                    </Button>
                    <Button variant="flush-dark" as={Link} href={data.deleteLink} className="btn-icon btn-rounded flush-soft-hover del-button" v-tooltip data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="删除">
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

export const data = [
    {
        id: 1,
        starred: true,
        name: [{ Img: avatar1, userName: "摩根·弗里曼" }],
        email: "morgan@caoba.com",
        phone: "+145 52 5689",
        tags: [{ title: "促销", bg: "violet" }, { title: "协作者", bg: "danger" }],
        labels: "设计",
        dateCreated: "2020年1月13日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 2,
        starred: true,
        name: [{ Img: avatar9, userName: "乌玛·瑟曼" }],
        email: "huma@clariesup.au",
        phone: "+234 48 2365",
        tags: [{ title: "协作者", bg: "danger" }, { title: "Angular 开发", bg: "success" },],
        labels: "开发",
        dateCreated: "2020年1月13日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 3,
        starred: false,
        name: [{ cstmAvt: "C", avtBg: "info", userName: "查理·卓别林" }],
        email: "charlie@leernoca.monster",
        phone: "+741 56 7896",
        tags: [{ title: "协作者", bg: "danger" },],
        labels: "库存",
        dateCreated: "2019年1月13日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 4,
        starred: true,
        name: [{ Img: avatar10, userName: "温斯顿·丘吉尔" }],
        email: "winston@worthniza.ga",
        phone: "+145 52 5463",
        tags: [{ title: "促销", bg: "danger" }, { title: "广告", bg: "light" },],
        labels: "人力资源",
        dateCreated: "2020年1月13日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 5,
        starred: false,
        name: [{ Img: avatar3, userName: "杰奎琳·乔克" }],
        email: "jaquljoker@caoba.com",
        phone: "+145 53 4715",
        tags: [{ title: "促销", bg: "violet" }, { title: "协作者", bg: "danger" },],
        labels: "设计",
        dateCreated: "2020年7月3日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 6,
        starred: true,
        name: [{ Img: avatar7, userName: "汤姆·克鲁斯" }],
        email: "tomcz@caoba.com",
        phone: "+456 52 4862",
        tags: [{ title: "协作者", bg: "danger" }, { title: "Angular 开发", bg: "warning" },],
        labels: "库存",
        dateCreated: "2019年6月24日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },
    {
        id: 7,
        starred: false,
        name: [{ Img: avatar2, userName: "丹尼尔·克雷格" }],
        email: "danialc@caoba.com",
        phone: "+145 52 5689",
        tags: [{ title: "协作者", bg: "danger" },],
        labels: "开发",
        dateCreated: "2019年6月24日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 8,
        starred: false,
        name: [{ Img: avatar8, userName: "凯瑟琳·琼斯" }],
        email: "joneskath@caoba.com",
        phone: "+741 56 7896",
        tags: [{ title: "促销", bg: "violet" },],
        labels: "库存",
        dateCreated: "2019年6月24日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 9,
        starred: true,
        name: [{ cstmAvt: "Cb", avtBg: "primary", userName: "caoba" }],
        email: "contact@caoba.com",
        phone: "+145 52 5463",
        tags: [{ title: "促销", bg: "violet" },],
        labels: "设计",
        dateCreated: "2019年3月30日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 10,
        starred: true,
        name: [{ Img: avatar13, userName: "迪恩·肖" }],
        email: "dean-shaw@poww.me",
        phone: "+234 48 2365",
        tags: [{ title: "协作者", bg: "danger" }, { title: "Angular 开发", bg: "success" },],
        labels: "设计",
        dateCreated: "2019年2月21日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },

    {
        id: 11,
        starred: false,
        name: [{ cstmAvt: "J", avtBg: "danger", userName: "约翰·布拉泽" }],
        email: "john@cryodrakon.info",
        phone: "+456 52 4862",
        tags: [{ title: "促销", bg: "violet" }, { title: "协作者", bg: "danger" },],
        labels: "人力资源",
        dateCreated: "2019年1月14日",
        actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
    },


];
