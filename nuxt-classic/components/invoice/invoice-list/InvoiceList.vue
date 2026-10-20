<template>
  <div class="invoice-body">
    <simplebar class="nicescroll-bar">
      <div class="invoice-list-view">
        <BRow>
          <BCol cols="7" class="mb-3">
            <div class="invoice-toolbar-left">
              <div class="d-xxl-flex d-none align-items-center mb-0">
                <BFormSelect size="sm" class="w-120p" model-value="1">
                  <BFormSelectOption value="1">批量操作</BFormSelectOption>
                  <BFormSelectOption value="2">编辑</BFormSelectOption>
                  <BFormSelectOption value="3">移至回收站</BFormSelectOption>
                </BFormSelect>
                <BButton variant="light" size="sm" class="ms-2">应用</BButton>
              </div>
              <div class="d-xxl-flex d-none align-items-center mb-0">
                <label class="flex-shrink-0 mb-0 me-2">排序依据：</label>
                <BFormSelect size="sm" class="w-130p" model-value="1">
                  <BFormSelectOption value="1">创建日期</BFormSelectOption>
                  <BFormSelectOption value="2">编辑日期</BFormSelectOption>
                  <BFormSelectOption value="3">常用联系人</BFormSelectOption>
                  <BFormSelectOption value="4">最近添加</BFormSelectOption>
                </BFormSelect>
              </div>
              <BFormSelect size="sm" class="align-items-center w-130p" model-value="1">
                <BFormSelectOption value="1">导出为 CSV</BFormSelectOption>
                <BFormSelectOption value="2">导出为 PDF</BFormSelectOption>
                <BFormSelectOption value="3">发送消息</BFormSelectOption>
                <BFormSelectOption value="4">授权访问</BFormSelectOption>
              </BFormSelect>
            </div>
          </BCol>
          <BCol cols="5" class="mb-3">
            <div class="invoice-toolbar-right">
              <div class="dataTables_filter">
                <label>
                  <BFormInput
                    size="sm"
                    type="search"
                    placeholder="搜索"
                    v-model="searchTerm"
                  />
                </label>
              </div>
              <div
                class="dataTables_paginate paging_simple_numbers"
                id="datable_1_paginate"
              >
                <BPagination
                  hide-goto-end-buttons
                  class="custom-pagination pagination-simple m-0"
                >
                  <template #prev-text>
                    <a href="#" class="page-link">
                      <i class="ri-arrow-left-s-line"></i>
                    </a>
                  </template>
                  <template #next-text>
                    <a href="#" class="page-link">
                      <i class="ri-arrow-right-s-line"></i>
                    </a>
                  </template>
                </BPagination>
              </div>
            </div>
          </BCol>
        </BRow>

        <div class="table-responsive">
          <HkDataTable
            :columns="columns"
            :data="tableData"
            :selectable="true"
            :searchQuery="searchTerm"
            showPagination
            classes="nowrap w-100 mb-5"
          >
            <!-- invoice no Container -->
            <template v-slot:invoice="{ cellValue }">
              <a href="#" class="table-link-text link-high-em">{{ cellValue }}</a>
            </template>

            <!-- Reciplent Container -->
            <template v-slot:reciplent="{ cellValue }">
              <span v-for="(Reciplent, index) in cellValue" :key="index">
                <div class="text-dark">{{ Reciplent.name }}</div>
                <div class="fs-7">{{ Reciplent.mail }}</div>
              </span>
            </template>

            <!-- Status Tag Container -->
            <template v-slot:status="{ cellValue }">
              <HkBadge
                v-for="(badge, index) in cellValue"
                :key="index"
                :variant="badge.bg"
              >
                {{ badge.title }}
              </HkBadge>
            </template>

            <!-- Action Container -->
            <template v-slot:actions="{ cellValue }">
              <div
                v-for="(action, index) in cellValue"
                :key="index"
                class="d-flex align-items-center"
              >
                <BDropdown
                  variant="outline-light"
                  split
                  :text="action.drpText"
                  split-class="btn-dyn-text w-100p"
                  class="me-3"
                  end
                >
                  <BDropdownItem href="#">提醒</BDropdownItem>
                  <BDropdownItem href="#">已发送</BDropdownItem>
                  <BDropdownItem href="#">有效</BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem href="#">编辑</BDropdownItem>
                </BDropdown>

                <div class="d-flex">
                  <BButton
                    variant="flush-dark"
                    class="btn-icon btn-rounded flush-soft-hover"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="归档"
                    :href="action.actionLink"
                  >
                    <span class="btn-icon-wrap">
                      <feather-icon name="archive"></feather-icon>
                    </span>
                  </BButton>
                  <BButton
                    variant="flush-dark"
                    class="btn-icon btn-rounded flush-soft-hover"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="编辑"
                    :href="action.actionLink"
                  >
                    <span class="btn-icon-wrap">
                      <feather-icon name="edit"></feather-icon>
                    </span>
                  </BButton>
                  <BButton
                    variant="flush-dark"
                    class="btn-icon btn-rounded flush-soft-hover del-button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="删除"
                    :href="action.actionLink"
                  >
                    <span class="btn-icon-wrap">
                      <feather-icon name="trash-2"></feather-icon>
                    </span>
                  </BButton>
                </div>
              </div>
            </template>
          </HkDataTable>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { BButton, BCol } from "bootstrap-vue-next";

export default {
  name: "InvoiceList",

  data() {
    return {
      searchTerm: "",
      columns: [
        {
          accessor: "id",
          title: "ID",
          hidden: true,
        },
        {
          accessor: "invoice",
          title: "发票编号",
          sort: false,
          cellFormatter: "invoice",
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
          cellFormatter: "reciplent",
        },
        {
          accessor: "status",
          title: "状态",
          sort: true,
          cellFormatter: "status",
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
          cellFormatter: "actions",
        },
      ],
      tableData: [
        {
          id: 1,
          invoice: "11234",
          date: "2020年1月13日",
          reciplent: [{ name: "帕特里克·谢尔顿", mail: "morgan@caoba.com" }],
          status: [{ title: "草稿", bg: "light", color: "dark" }],
          activity: "-",
          amount: "¥2,300.00",
          actions: [{ drpText: "编辑", actionLink: "#" }],
        },
        {
          id: 2,
          invoice: "11235",
          date: "2020年1月13日",
          reciplent: [{ name: "休玛·瑟曼", mail: "huma@clariesup.au" }],
          status: [{ title: "未支付", bg: "danger", text: "2020年4月25日到期" }],
          activity: "已发送",
          amount: "¥780.00",
          actions: [{ drpText: "提醒", actionLink: "#" }],
        },
        {
          id: 3,
          invoice: "11236",
          date: "2020年1月13日",
          reciplent: [{ name: "查理·卓别林", mail: "charlie@leernoca.monster" }],
          status: [{ title: "已支付", bg: "primary" }],
          activity: "已完成",
          amount: "¥567.00",
          actions: [{ drpText: "有效", actionLink: "#" }],
        },
        {
          id: 4,
          invoice: "11237",
          date: "2020年1月13日",
          reciplent: [{ name: "温斯顿·丘吉尔", mail: "winston@worthniza.ga" }],
          status: [{ title: "未支付", bg: "danger", text: "2020年9月12日到期" }],
          activity: "-",
          amount: "¥1,500.00",
          actions: [{ drpText: "发送", actionLink: "#" }],
        },
        {
          id: 5,
          invoice: "11238",
          date: "2020年1月13日",
          reciplent: [{ name: "杰奎琳·乔克", mail: "jaquljoker@caoba.com" }],
          status: [{ title: "未支付", bg: "danger", text: "2020年10月18日到期" }],
          activity: "已发送",
          amount: "¥900.00",
          actions: [{ drpText: "提醒", actionLink: "#" }],
        },
        {
          id: 6,
          invoice: "11239",
          date: "2020年7月3日",
          reciplent: [{ name: "汤姆·克鲁斯", mail: "tomcz@caoba.com" }],
          status: [{ title: "已支付", bg: "primary" }],
          activity: "已完成",
          amount: "¥4,750.00",
          actions: [{ drpText: "有效", actionLink: "#" }],
        },
        {
          id: 7,
          invoice: "11240",
          date: "2019年6月24日",
          reciplent: [{ name: "丹尼尔·克雷格", mail: "danialc@caoba.com" }],
          status: [{ title: "已支付", bg: "primary", text: "2020年4月25日到期" }],
          activity: "已完成",
          amount: "¥2,300.00",
          actions: [{ drpText: "有效", actionLink: "#" }],
        },
        {
          id: 8,
          invoice: "11241",
          date: "2019年6月24日",
          reciplent: [{ name: "凯瑟琳·琼斯", mail: "joneskath@caoba.com" }],
          status: [{ title: "已支付", bg: "primary" }],
          activity: "已完成",
          amount: "¥7,650.00",
          actions: [{ drpText: "已发送", actionLink: "#" }],
        },
        {
          id: 9,
          invoice: "11242",
          date: "2019年6月24日",
          reciplent: [{ name: "caoba", mail: "contact@caoba.com" }],
          status: [{ title: "草稿", bg: "light", color: "dark" }],
          activity: "-",
          amount: "¥4,500.00",
          actions: [{ drpText: "有效", actionLink: "https://caoba.com/" }],
        },
      ],
    };
  },

  // Your component's logic goes here
};
</script>
