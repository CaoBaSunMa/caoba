<template>
  <div class="card card-border mb-0 h-100">
    <div class="card-header card-header-action">
      <h6>
        新客户
        <span class="badge badge-sm badge-light ms-1">240</span>
      </h6>
      <div class="card-action-wrap">
        <button class="btn btn-sm btn-outline-light">
          <span>
            <span class="icon">
              <feather-icon name="upload"></feather-icon>
            </span>
            <span class="btn-text">导入</span>
          </span>
        </button>
        <button class="btn btn-sm btn-primary ms-3">
          <span>
            <span class="icon">
              <feather-icon name="plus"></feather-icon>
            </span>
            <span class="btn-text">添加</span>
          </span>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="contact-list-view">
        <div class="row">
          <div class="col-7 mb-3">
            <div class="contact-toolbar-left">
              <div class="d-xxl-flex d-none align-items-center">
                <div
                  class="btn-group btn-group-sm"
                  role="group"
                  aria-label="基本轮廓按钮示例"
                >
                  <button type="button" class="btn btn-outline-light active">
                    查看全部
                  </button>
                  <button type="button" class="btn btn-outline-light">已监控</button>
                  <button type="button" class="btn btn-outline-light">未监控</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 mb-3">
            <div class="contact-toolbar-right d-flex justify-content-end">
              <div class="dataTables_filter">
                <label>
                  <input
                    type="search"
                    class="form-control form-control-sm"
                    placeholder="搜索"
                    aria-controls="datable_1"
                    v-model="searchTerm"
                  />
                </label>
              </div>
              <button class="btn btn-sm btn-outline-light ms-3">
                <span>
                  <span class="icon">
                    <i class="bi bi-filter"></i>
                  </span>
                  <span class="btn-text">筛选</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 table-responsive">
            <HkDataTable
              :columns="columns"
              :data="Tabledata"
              :rowsPerPage="4"
              :selectable="true"
              :searchQuery="searchTerm"
              showPagination
              paginatorSize="sm"
              responsive
              classes="nowrap w-100 mb-5"
            >
              <!-- name formatter -->
              <template v-slot:name="{ cellValue }">
                <div
                  v-for="(item, index) in cellValue"
                  :key="index"
                  class="media align-items-center"
                >
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-rounded">
                      <img :src="item.Img" alt="用户头像" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="text-high-em">{{ item.productName }}</div>
                    <div class="fs-7">
                      <a href="#" class="table-link-text link-medium-em">{{
                        item.productLink
                      }}</a>
                    </div>
                  </div>
                </div>
              </template>

              <!-- progressbar formatter -->
              <template v-slot:usage="{ cellValue }">
                <div
                  v-for="(item, index) in cellValue"
                  :key="index"
                  class="progress-lb-wrap pb-width"
                >
                  <div class="d-flex align-items-center">
                    <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                      <div
                        :class="['progress-bar', `bg-${item.variant}`, `w-${item.value}`]"
                        role="progressbar"
                        :aria-valuenow="item.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="fs-8 ms-3">{{ item.value }}%</div>
                  </div>
                </div>
              </template>

              <!-- tag formatter -->
              <template v-slot:tags="{ cellValue }">
                <span
                  v-for="(item, index) in cellValue"
                  :key="index"
                  class="badge badge-soft-secondary my-1 me-2"
                  >{{ item }}
                </span>
              </template>

              <!-- action formatter -->
              <template v-slot:actions="{ cellValue }">
                <div
                  v-for="(item, index) in cellValue"
                  :key="index"
                  class="d-flex align-items-center"
                >
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-bs-original-title="编辑"
                    :href="item.editLink"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="edit-2"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-bs-original-title="删除"
                    :href="item.deleteLink"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="trash"></feather-icon>
                      </span>
                    </span>
                  </a>
                </div>
              </template>
            </HkDataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
//Images
import avatar1 from "@/assets/img/logo-avatar-1.png";
import avatar2 from "@/assets/img/logo-avatar-2.png";
import avatar3 from "@/assets/img/logo-avatar-3.png";
import avatar4 from "@/assets/img/logo-avatar-4.png";
import avatar5 from "@/assets/img/logo-avatar-5.png";
import avatar6 from "@/assets/img/logo-avatar-6.png";

export default {
  components: {
    HkDataTable,
  },
  data() {
    return {
      searchTerm: "",
      columns: [
        {
          accessor: "id",
          title: "产品ID",
          hidden: true,
        },
        {
          accessor: "name",
          title: "名称",
          sort: true,
          cellFormatter: "name",
        },
        {
          accessor: "usage",
          title: "使用率",
          sort: true,
          cellFormatter: "usage",
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
          cellFormatter: "tags",
        },
        {
          accessor: "actions",
          title: "",
          cellFormatter: "actions",
        },
      ],
      Tabledata: [
        {
          id: 1,
          name: [{ Img: avatar1, productName: "Phone Pay", productLink: "phonepay.in" }],
          usage: [{ value: 90, variant: "blue-dark-3" }],
          lastUpdate: "2022年6月10日",
          tags: ["管理员", "金融"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },

        {
          id: 2,
          name: [{ Img: avatar2, productName: "Swiggy", productLink: "swiggy.com" }],
          usage: [{ value: 75, variant: "blue" }],
          lastUpdate: "2022年7月9日",
          tags: ["客户数据", "管理员", "+4"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },

        {
          id: 3,
          name: [{ Img: avatar3, productName: "Coursera", productLink: "coursera.com" }],
          usage: [{ value: 50, variant: "primary" }],
          lastUpdate: "2022年8月24日",
          tags: ["教育", "管理员", "+3"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },

        {
          id: 4,
          name: [{ Img: avatar4, productName: "Tinder", productLink: "tinder.com" }],
          usage: [{ value: 60, variant: "primary" }],
          lastUpdate: "2022年5月17日",
          tags: ["社交"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },

        {
          id: 5,
          name: [{ Img: avatar5, productName: "PCD", productLink: "pcdeals.com" }],
          usage: [{ value: 30, variant: "grey" }],
          lastUpdate: "2022年7月13日",
          tags: ["门户", "管理员", "+3"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },
        {
          id: 6,
          name: [{ Img: avatar6, productName: "Icons 8", productLink: "icons8.com" }],
          usage: [{ value: 45, variant: "green-dark-1" }],
          lastUpdate: "2022年7月14日",
          tags: ["素材库", "资源"],
          actions: [{ editLink: "#", deleteLink: "#" }],
        },
      ],
    };
  },
};
</script>
