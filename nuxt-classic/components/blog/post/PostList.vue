<template>
  <div class="blog-body">
    <simplebar class="nicescroll-bar">
      <div class="post-list">
        <ul class="nav nav-tabs nav-line nav-icon nav-light">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#all_post">
              <div class="d-flex align-items-center">
                <span class="nav-link-text">全部文章</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1"
                  >10</span
                >
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#all_post">
              <div class="d-flex align-items-center">
                <span class="nav-link-text">已发布</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">6</span>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#all_post">
              <div class="d-flex align-items-center">
                <span class="nav-link-text">回收站</span>
                <span class="badge badge-pill badge-sm badge-soft-secondary ms-1">4</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="all_post">
            <BRow class="mb-3">
              <BCol cols="7" class="mb-3">
                <div class="blog-toolbar-left">
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
                  <BFormSelect
                    size="sm"
                    class="d-flex align-items-center w-130p"
                    model-value="1"
                  >
                    <BFormSelectOption value="1">导出 CSV</BFormSelectOption>
                    <BFormSelectOption value="2">导出 PDF</BFormSelectOption>
                    <BFormSelectOption value="3">发送消息</BFormSelectOption>
                    <BFormSelectOption value="4">委托访问</BFormSelectOption>
                  </BFormSelect>
                </div>
              </BCol>
              <BCol cols="5" class="mb-3">
                <div class="blog-toolbar-right">
                  <div class="dataTables_filter">
                    <label>
                      <BFormInput
                        type="search"
                        size="sm"
                        placeholder="搜索"
                        v-model="searchTerm"
                      />
                    </label>
                  </div>
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="datable_1_paginate"
                  >
                    <!-- <BPagination
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
                    </BPagination> -->
                    <ul class="pagination custom-pagination pagination-simple m-0">
                      <li
                        class="paginate_button page-item previous"
                        id="datable_1_previous"
                      >
                        <a href="#" class="page-link">
                          <i class="ri-arrow-left-s-line"></i>
                        </a>
                      </li>
                      <li class="paginate_button page-item next" id="datable_1_next">
                        <a href="#" class="page-link">
                          <i class="ri-arrow-right-s-line"></i>
                        </a>
                      </li>
                    </ul>
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
                <!-- author formatter -->
                <template v-slot:author="{ cellValue }">
                  <div
                    v-for="(data, index) in cellValue"
                    :key="index"
                    class="media align-items-center"
                  >
                    <div class="media-head me-2">
                      <div v-if="data.img" class="avatar avatar-xs">
                        <img
                          :src="data.img"
                          alt="用户"
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div
                        v-if="data.initAvt"
                        :class="['avatar avatar-xs avatar-rounded', data.avtBg]"
                      >
                        <span class="initial-wrap">{{ data.initAvt }}</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <span class="d-block">{{ data.authorName }}</span>
                    </div>
                  </div>
                </template>

                <!-- tag formatter -->
                <template v-slot:tags="{ cellValue }">
                  <HkBadge
                    v-for="(tag, index) in cellValue"
                    :key="index"
                    :variant="tag.bg"
                    class="my-1 me-2"
                    soft
                  >
                    {{ tag.title }}
                  </HkBadge>
                </template>

                <!-- seo formatter -->
                <template v-slot:seo="{ cellValue }">
                  <HkBadge :variant="cellValue" indicator indicatorSize="xl" />
                </template>

                <!-- actions formatter -->
                <template v-slot:actions="{ cellValue }">
                  <div class="d-flex align-items-center">
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-vertical"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">操作</BDropdownItem>
                      <BDropdownItem href="#">另一个操作</BDropdownItem>
                      <BDropdownItem href="#">此处显示其他内容</BDropdownItem>
                      <BDropdownDivider />
                      <BDropdownItem href="#">分隔链接</BDropdownItem>
                    </BDropdown>
                  </div>
                </template>
              </HkDataTable>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";

const searchTerm = ref("");
const tableData = ref([
  {
    id: 110,
    title: "构建高效的数据面板用户界面设计",
    author: [{ img: avatar2, authorName: "摩根·弗里曼" }],
    categories: "设计",
    tags: [
      { title: "促销", bg: "violet" },
      { title: "协作者", bg: "danger" },
    ],
    status: "已发布",
    date: "2020年1月13日",
    seo: "primary",
    actions: [{ actionLink: "#" }],
  },

  {
    id: 109,
    title: "测试文章",
    author: [{ img: avatar9, authorName: "乌玛·瑟曼" }],
    categories: "开发",
    tags: [{ title: "协作者", bg: "danger" }],
    status: "草稿",
    date: "2020年1月13日",
    seo: "light",
    actions: [{ actionLink: "#" }],
  },

  {
    id: 108,
    title: "未命名文章",
    author: [
      { initAvt: "C", avtBg: "avatar-soft-success", authorName: "查理·卓别林" },
    ],
    categories: "设计",
    tags: [{ title: "协作者", bg: "danger" }],
    status: "草稿",
    date: "2019年1月13日",
    seo: "light",
    actions: [{ actionLink: "#" }],
  },

  {
    id: 106,
    title: "设计中的远程办公与协作",
    author: [{ img: avatar10, authorName: "温斯顿·丘吉尔" }],
    categories: "设计",
    tags: [
      { title: "促销", bg: "violet" },
      { title: "广告", bg: "light" },
    ],
    status: "已发布",
    date: "2020年1月13日",
    seo: "danger",
    actions: [{ actionLink: "#" }],
  },
  {
    id: 105,
    title: "什么是应用中的空状态？",
    author: [{ img: avatar3, authorName: "杰奎琳·乔克" }],
    categories: "设计",
    tags: [
      { title: "促销", bg: "violet" },
      { title: "协作者", bg: "danger" },
    ],
    status: "已发布",
    date: "2020年1月13日",
    seo: "warning",
    actions: [{ actionLink: "#" }],
  },

  {
    id: 104,
    title: "如何让代码保持简单有序，任何开发者都能轻松上手？",
    author: [{ img: avatar7, authorName: "汤姆·克鲁斯" }],
    categories: "开发",
    tags: [
      { title: "协作者", bg: "danger" },
      { title: "Angular 开发", bg: "success" },
    ],
    status: "已发布",
    date: "2020年1月13日",
    seo: "primary",
    actions: [{ actionLink: "#" }],
  },
  {
    id: 107,
    title: "未命名文章",
    author: [{ initAvt: "D", avtBg: "avatar-soft-danger", authorName: "丹尼尔·克雷格" }],
    categories: "设计",
    tags: [
      { title: "协作者", bg: "danger" },
      { title: "Angular 开发", bg: "success" },
    ],
    status: "草稿",
    date: "2020年1月13日",
    seo: "light",
    actions: [{ actionLink: "#" }],
  },
  {
    id: 103,
    title: "基于 Sass 的可靠核心框架",
    author: [{ initAvt: "Cb", avtBg: "avatar-soft-primary", authorName: "caoba" }],
    categories: "用户界面",
    tags: [{ title: "促销", bg: "violet" }],
    status: "草稿",
    date: "2020年1月13日",
    seo: "light",
    actions: [{ actionLink: "#" }],
  },
  {
    id: 102,
    title: "Marvin - Bootstrap 4.5.0 后台管理面板模板",
    author: [{ img: avatar8, authorName: "乌玛·瑟曼" }],
    categories: "设计",
    tags: [{ title: "促销", bg: "violet" }],
    status: "已发布",
    date: "2020年1月13日",
    seo: "primary",
    actions: [{ actionLink: "#" }],
  },
  {
    id: 101,
    title: "迈向远方",
    author: [{ img: avatar8, authorName: "乌玛·瑟曼" }],
    categories: "商业",
    tags: [{ title: "促销", bg: "violet" }],
    status: "已发布",
    date: "2020年1月13日",
    seo: "primary",
    actions: [{ actionLink: "#" }],
  },
]);

const columns = ref([
  {
    accessor: "id",
    title: "ID",
  },
  {
    accessor: "title",
    title: "标题",
    tdClass: "mw-250p text-truncate text-high-em",
    sort: true,
  },
  {
    accessor: "author",
    title: "作者",
    cellFormatter: "author",
  },
  {
    accessor: "categories",
    title: "分类",
  },
  {
    accessor: "tags",
    title: "标签",
    cellFormatter: "tags",
  },
  {
    accessor: "status",
    title: "状态",
  },
  {
    accessor: "date",
    title: "日期",
  },
  {
    accessor: "seo",
    title: "SEO",
    cellFormatter: "seo",
  },
  {
    accessor: "actions",
    title: "操作",
    cellFormatter: "actions",
  },
]);
</script>
