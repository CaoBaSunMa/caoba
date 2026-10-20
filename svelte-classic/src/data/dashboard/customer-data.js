
//Images
import avatar1 from '../../assets/img/logo-avatar-1.png';
import avatar2 from '../../assets/img/logo-avatar-2.png';
import avatar3 from '../../assets/img/logo-avatar-3.png'
import avatar4 from '../../assets/img/logo-avatar-4.png'
import avatar5 from '../../assets/img/logo-avatar-5.png'
import avatar6 from '../../assets/img/logo-avatar-6.png'

//Name cell Formatter
const nameFieldFormater = (cell) => {
    return (
        cell.map((data, index) => (
            `
        <div
            class="media align-items-center"
        >
            <div class="media-head me-2">
            <div class="avatar avatar-xs avatar-rounded">
                <img src=${data.Img} alt="用户头像" class="avatar-img" />
            </div>
            </div>
            <div class="media-body">
            <div class="text-high-em">${data.productName}</div>
            <div class="fs-7">
                <a href="#" class="table-link-text link-medium-em">${data.productLink}</a>
            </div>
            </div>
        </div>
        `
        ))
    )
}

//Custom Ussage Container
const usageFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            `
            <div class="progress-lb-wrap pb-width" key=${indx} style="width: 251px;" > 
                <div class="d-flex align-items-center">
                <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                    class="progress-bar bg-${data.variant} w-${data.value}"
                    role="progressbar"
                    aria-valuenow=${data.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    ></div>
                </div>
                <div class="fs-8 ms-3">${data.value}%</div>
                </div>
            </div>
            `
        ))
    )
}

//Custom Tag Container
const tagFormater = (cell) => {

    console.log(cell);

    return (
        cell.map((data, indx) => (
            `
            <span key=${indx} class="badge badge-soft-secondary my-1 me-2">
                ${data}
            </span>
            `
        )).join('')
    )
}

//Custom Action Container
const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            `
            <div class="d-flex align-items-center" key=${indx}>
                <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                data-bs-toggle="tooltip"
                data-placement="top"
                title=""
                data-bs-original-title="编辑"
                href=${data.editLink}
                >
                <span class="icon">
                    <span class="feather-icon">
                    <!-- https://feathericons.dev/?search=edit2&iconset=feather -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
</svg>

                    </span>
                </span>
                </a>
                <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                data-bs-toggle="tooltip"
                data-placement="top"
                title=""
                data-bs-original-title="删除"
                href=${data.deletLink}
                >
                <span class="icon">
                    <span class="feather-icon">
                        <!-- https://feathericons.dev/?search=trash&iconset=feather -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>

                    </span>
                </span>
                </a>
            </div>`
        ))
    )
}


export const columns = [
    {
        accessor: "id",
        title: "产品ID",
        hidden: true,
    },
    {
        accessor: "name",
        title: "名称",
        sort: true,
        cellFormatter: nameFieldFormater,
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