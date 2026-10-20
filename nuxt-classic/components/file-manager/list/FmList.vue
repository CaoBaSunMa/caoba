<template>
  <div class="fm-body">
    <simplebar class="nicescroll-bar">
      <div class="file-list-view">
        <ul class="nav nav-tabs nav-line nav-icon nav-light">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#cloud_doc">
              <span class="nav-link-text">云文档</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#cloud_doc">
              <span class="nav-link-text">共享给我的</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="cloud_doc">
            <div class="table-responsive">
              <HkDataTable
                :columns="columns"
                :data="Tabledata"
                :selectable="true"
                starred
                classes="nowrap w-100 mb-5"
              >
                <!-- name formatter -->
                <template v-slot:name="{ cellValue }">
                  <div
                    v-for="(item, index) in cellValue"
                    :key="index"
                    class="media fmapp-info-trigger"
                    @click="toggleInfo"
                  >
                    <div class="media-head me-3">
                      <div
                        v-if="item.icons"
                        :class="['avatar avatar-icon avatar-sm', item.iconBg]"
                      >
                        <span class="initial-wrap">
                          <i :class="item.icons" />
                        </span>
                      </div>
                      <img
                        v-if="item.img"
                        :src="item.img"
                        alt="用户"
                        class="d-block img-fluid w-50p"
                      />
                    </div>
                    <div class="media-body">
                      <div class="file-name">{{ item.fileName }}</div>
                      <div>{{ item.fileType }}</div>
                    </div>
                  </div>
                </template>

                <!-- sharing formatter -->
                <template v-slot:sharing="{ cellValue }">
                  <div
                    v-for="(item, index) in cellValue"
                    :key="index"
                    class="avatar-group avatar-group-overlapped"
                  >
                    <div
                      v-if="item.img"
                      class="avatar avatar-rounded"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      :title="item.userName"
                    >
                      <img :src="item.img" alt="用户" class="avatar-img" />
                    </div>
                    <div
                      v-else-if="item.intAvt"
                      :class="['avatar avatar-rounded', `avatar-soft-${item.initAvtBg}`]"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      :title="item.userName"
                    >
                      <span class="initial-wrap">{{ item.intAvt }}</span>
                    </div>
                    <span v-if="item.blank">-</span>
                  </div>
                </template>

                <!-- actions formatter -->
                <template v-slot:actions="{ cellValue }">
                  <span
                    v-for="(item, index) in cellValue"
                    :key="index"
                    class="text-right"
                  >
                    <BDropdown
                      variant="flush-dark"
                      toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                      end
                    >
                      <template #button-content>
                        <span class="icon">
                          <feather-icon name="more-horizontal"></feather-icon>
                        </span>
                      </template>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="eye"></feather-icon>
                        </span>
                        <span>预览</span>
                      </BDropdownItem>
                      <BDropdownItem href="#"
                        ><span class="feather-icon dropdown-icon">
                          <feather-icon name="copy"></feather-icon>
                        </span>
                        <span>创建副本</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="skip-forward"></feather-icon>
                        </span>
                        <span>移动</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="user-plus"></feather-icon>
                        </span>
                        <span>邀请</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="link-2"></feather-icon>
                        </span>
                        <span>共享链接</span>
                      </BDropdownItem>
                      <BDropdownDivider />
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="info"></feather-icon>
                        </span>
                        <span>查看详情</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="download"></feather-icon>
                        </span>
                        <span>下载</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <span class="feather-icon dropdown-icon">
                          <feather-icon name="trash-2"></feather-icon>
                        </span>
                        <span>删除</span>
                      </BDropdownItem>
                    </BDropdown>
                  </span>
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
import { defineEmits } from "vue";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";
import avatar14 from "@/assets/img/avatar14.jpg";
import mock7 from "@/assets/img/gallery/mock7.jpg";
import mock8 from "@/assets/img/gallery/mock8.jpg";

// Emits
const emit = defineEmits(["toggle-info"]);

// Methods
const toggleInfo = () => {
  emit("toggle-info");
};

const columns = ref([
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
    title: "名称",
    sort: true,
    cellFormatter: "name",
  },
  {
    accessor: "sharing",
    title: "共享",
    sort: true,
    cellFormatter: "sharing",
  },
  {
    accessor: "modified",
    title: "修改时间",
    sort: true,
  },
  {
    accessor: "size",
    title: "大小",
    sort: true,
  },
  {
    accessor: "actions",
    title: "操作",
    cellFormatter: "actions",
  },
]);

const Tabledata = ref([
  {
    id: 1,
    starred: true,
    name: [
      {
        icons: "ri-file-excel-2-fill",
        iconBg: "avatar-soft-blue",
        fileName: "网站内容.exl",
        fileType: "exel",
      },
    ],
    sharing: [
      { img: avatar13, userName: "迪恩" },
      { img: avatar14, userName: "丹尼尔" },
    ],
    modified: "今天 11:02",
    size: "2,637KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 2,
    starred: false,
    name: [
      {
        img: mock7,
        fileName: "bruce-mars-fiEG-Pk6ZEZLA",
        fileType: "png",
      },
    ],
    sharing: [{ intAvt: "B", initAvtBg: "success", userName: "汤姆" }],
    modified: "昨天 14:40",
    size: "4,178 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 3,
    starred: false,
    name: [
      {
        icons: "ri-folder-2-fill",
        iconBg: "avatar-soft-warning",
        fileName: "caoba - HTML - v1.0",
        fileType: "文件夹",
      },
    ],
    sharing: [{ img: avatar2, userName: "丹尼尔" }],
    modified: "7月13日 13:46",
    size: "501 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 4,
    starred: false,
    name: [
      {
        icons: "ri-folder-zip-fill",
        iconBg: "avatar-soft-blue",
        fileName: "caoba.zip",
        fileType: "zip",
      },
    ],
    sharing: [{ img: avatar12, userName: "丹尼尔" }],
    modified: "6月10日 08:00",
    size: "2.45 GB",
    actions: [{ preview: "#" }],
  },
  {
    id: 5,
    starred: true,
    name: [
      {
        icons: "ri-folder-5-fill",
        iconBg: "avatar-soft-warning",
        fileName: "caoba",
        fileType: "文件夹",
      },
    ],
    sharing: [{ blank: true }],
    modified: "6月24日 18:55",
    size: "1.6 GB",
    actions: [{ preview: "#" }],
  },
  {
    id: 6,
    starred: false,
    name: [
      {
        icons: "ri-file-text-fill",
        iconBg: "avatar-soft-blue",
        fileName: "会议纪要.doc",
        fileType: "文档",
      },
    ],
    sharing: [
      { img: avatar12, userName: "迪恩" },
      { img: avatar13, userName: "丹尼尔" },
    ],
    modified: "2月18日 12:25",
    size: "20 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 7,
    starred: false,
    name: [
      {
        icons: "ri-file-text-fill",
        iconBg: "avatar-soft-blue",
        fileName: "开支明细.doc",
        fileType: "文档",
      },
    ],
    sharing: [{ img: avatar12, userName: "丹尼尔" }],
    modified: "2月12日 12:30",
    size: "76.3 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 8,
    starred: false,
    name: [
      {
        img: mock8,
        fileName: "joel-mott-LaK153ghdigdss",
        fileType: "jpeg",
      },
    ],
    sharing: [{ blank: true }],
    modified: "1月2日 16:32",
    size: "3,028 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 9,
    starred: false,
    name: [
      {
        icons: "ri-file-word-fill",
        iconBg: "avatar-soft-blue",
        fileName: "提案.doc",
        fileType: "Word 文档",
      },
    ],
    sharing: [
      { img: avatar12, userName: "凯瑟琳" },
      { img: avatar13, userName: "丹尼尔" },
      { img: avatar14, userName: "迪恩" },
      { intAvt: "B", initAvtBg: "success", userName: "汤姆" },
    ],
    modified: "1月2日 09:45",
    size: "951 KB",
    actions: [{ preview: "#" }],
  },
  {
    id: 10,
    starred: false,
    name: [
      {
        icons: "ri-file-pdf-fill",
        iconBg: "avatar-soft-danger",
        fileName: "caoba.pdf",
        fileType: "pdf",
      },
    ],
    sharing: [{ blank: true }],
    modified: "今天 16:30",
    size: "21.73 MB",
    actions: [{ preview: "#" }],
  },
]);
</script>
