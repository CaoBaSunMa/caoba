<template>
  <div class="contact-body">
    <simplebar class="nicescroll-bar">
      <div class="contact-list-view">
        <div>
          <BRow>
            <BCol cols="7" class="mb-3">
              <div class="contact-toolbar-left">
                <div class="d-xxl-flex d-none align-items-center mb-0">
                  <BFormSelect size="sm" class="w-120p" model-value="1">
                    <BFormSelectOption value="1">批量操作</BFormSelectOption>
                    <BFormSelectOption value="2">编辑</BFormSelectOption>
                    <BFormSelectOption value="3">移至回收站</BFormSelectOption>
                  </BFormSelect>
                  <BButton variant="light" size="sm" class="ms-2">应用</BButton>
                </div>
                <div class="d-xxl-flex d-none align-items-center mb-0">
                  <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                  <BFormSelect size="sm" class="w-130p" model-value="1">
                    <BFormSelectOption value="1">创建日期</BFormSelectOption>
                    <BFormSelectOption value="2">编辑日期</BFormSelectOption>
                    <BFormSelectOption value="3">常联系人</BFormSelectOption>
                    <BFormSelectOption value="4">最近添加</BFormSelectOption>
                  </BFormSelect>
                </div>
                <BFormSelect size="sm" class="align-items-center w-130p" model-value="1">
                  <BFormSelectOption value="1">导出 CSV</BFormSelectOption>
                  <BFormSelectOption value="2">导出 PDF</BFormSelectOption>
                  <BFormSelectOption value="3">发送消息</BFormSelectOption>
                  <BFormSelectOption value="4">委托访问</BFormSelectOption>
                </BFormSelect>
              </div>
            </BCol>
            <BCol cols="5" class="mb-3">
              <div class="contact-toolbar-right">
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
                  <ul class="pagination custom-pagination pagination-simple m-0">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="datable_1_previous"
                    >
                      <a href="#" data-dt-idx="0" tabindex="0" class="page-link">
                        <i class="ri-arrow-left-s-line"></i>
                      </a>
                    </li>
                    <li class="paginate_button page-item active">
                      <a href="#" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                    </li>
                    <li class="paginate_button page-item">
                      <a href="#" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                    </li>
                    <li class="paginate_button page-item next" id="datable_1_next">
                      <a href="#" data-dt-idx="3" tabindex="0" class="page-link">
                        <i class="ri-arrow-right-s-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </BCol>
          </BRow>
        </div>

        <HkDataTable
          :columns="columns"
          :data="Tabledata"
          :rowsPerPage="10"
          :selectable="true"
          :searchQuery="searchTerm"
          starred
          showPagination
          classes="nowrap w-100 mb-5 table-responsive"
        >
          <!-- name formatter -->
          <template v-slot:name="{ cellValue }">
            <div
              v-for="(item, index) in cellValue"
              :key="index"
              class="media align-items-center"
            >
              <div class="media-head me-2">
                <div
                  :class="[
                    'avatar',
                    'avatar-xs',
                    'avatar-rounded',
                    item.cstmAvt ? `avatar-soft-${item.avtBg}` : '',
                  ]"
                >
                  <img v-if="item.Img" :src="item.Img" alt="用户" class="avatar-img" />
                  <span v-if="item.cstmAvt" class="initial-wrap">{{ item.cstmAvt }}</span>
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-high-em">{{ item.userName }}</span>
              </div>
            </div>
          </template>

          <!-- email formatter -->
          <template v-slot:email="{ cellValue }">
            <span className="text-truncate mw-150p d-block">{{ cellValue }}</span>
          </template>

          <!-- tag formatter -->
          <template v-slot:tags="{ cellValue }">
            <HkBadge
              v-for="(item, index) in cellValue"
              :key="index"
              :variant="item.bg"
              class="my-1 me-2"
              soft
            >
              {{ item.title }}
            </HkBadge>
          </template>

          <!-- action formatter -->
          <template v-slot:actions="{ cellValue }">
            <div
              v-for="(item, index) in cellValue"
              :key="index"
              class="d-flex align-items-center"
            >
              <div class="d-flex">
                <BButton
                  variant="flush-dark"
                  class="btn-icon btn-rounded flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="归档"
                  :href="item.archiveLink"
                >
                  <span class="icon">
                    <feather-icon name="archive" />
                  </span>
                </BButton>
                <BButton
                  variant="flush-dark"
                  class="btn-icon btn-rounded flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="编辑"
                  :href="item.editLink"
                >
                  <span class="icon">
                    <feather-icon name="edit" />
                  </span>
                </BButton>
                <BButton
                  variant="flush-dark"
                  class="btn-icon btn-rounded flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="删除"
                  href="#"
                >
                  <span class="icon">
                    <feather-icon name="trash" />
                  </span>
                </BButton>
              </div>

              <BDropdown
                variant="flush-dark"
                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                end
              >
                <template #button-content>
                  <span
                    class="icon"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-bs-original-title="更多"
                  >
                    <feather-icon name="more-vertical"></feather-icon>
                  </span>
                </template>
                <BDropdownItem :href="item.editLink">
                  <span class="feather-icon dropdown-icon">
                    <feather-icon name="edit"></feather-icon>
                  </span>
                  <span>编辑联系人</span>
                </BDropdownItem>
                <BDropdownItem href="#">
                  <span class="feather-icon dropdown-icon">
                    <feather-icon name="trash-2"></feather-icon>
                  </span>
                  <span>删除</span>
                </BDropdownItem>
                <BDropdownItem href="#">
                  <span class="feather-icon dropdown-icon">
                    <feather-icon name="copy"></feather-icon>
                  </span>
                  <span>复制</span>
                </BDropdownItem>
                <BDropdownDivider />
                <BDropdownHeader tag="h6"> 修改标签组 </BDropdownHeader>
                <BDropdownItem href="#">设计</BDropdownItem>
                <BDropdownItem href="#">开发</BDropdownItem>
                <BDropdownItem href="#">库存</BDropdownItem>
                <BDropdownItem href="#">人力资源</BDropdownItem>
              </BDropdown>
            </div>
          </template>
        </HkDataTable>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import { useContactStore } from "~/stores/contactStore";

const contactStore = useContactStore();

// 搜索框双向绑定到 store 的 searchQuery
const searchTerm = computed({
  get: () => contactStore.searchQuery,
  set: (v) => contactStore.search(v),
});

const defaultAvatar = "/img/avatar1.jpg";

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
    title: "姓名",
    sort: true,
    cellFormatter: "name",
  },
  {
    accessor: "email",
    title: "邮箱地址",
    sort: true,
    cellFormatter: "email",
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
    cellFormatter: "tags",
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
    cellFormatter: "actions",
  },
]);

// 把后端 Contact 映射成 HkDataTable 需要的行结构
const Tabledata = computed(() =>
  (contactStore.filteredContacts || []).map((c) => {
    const fullName = [c.firstName, c.lastName].filter(Boolean).join(" ");
    const avatarUrl =
      c.avatar && (c.avatar.startsWith("http") || c.avatar.startsWith("/"))
        ? c.avatar
        : defaultAvatar;
    let tags = [];
    try {
      tags = JSON.parse(c.labels || "[]");
    } catch {
      tags = [];
    }
    const badgeColors = ["violet", "danger", "success", "warning", "info"];
    return {
      id: c.id,
      starred: !!c.starred,
      name: [{ Img: avatarUrl, cstmAvt: "", avtBg: "info", userName: fullName || c.email }],
      email: c.email,
      phone: c.phone || "-",
      tags: tags.map((t, i) => ({ title: t, bg: badgeColors[i % badgeColors.length] })),
      labels: c.company || "-",
      dateCreated: c.createdAt ? String(c.createdAt).slice(0, 10) : "-",
      actions: [{ archiveLink: "#", editLink: "#", deleteLink: "#" }],
    };
  })
);

onMounted(() => {
  contactStore.refresh();
});

function handleDelete(id) {
  contactStore.deleteContact(id);
}
</script>
