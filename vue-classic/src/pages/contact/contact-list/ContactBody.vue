<template>
  <div class="contact-body">
    <simplebar class="nicescroll-bar">
      <div class="collapse" id="collapseQuick">
        <div class="quick-access-form-wrap">
          <form class="quick-access-form border">
            <div class="row gx-3">
              <div class="col-xxl-10">
                <div class="position-relative">
                  <div class="dropify-square">
                    <input type="file" class="dropify-1" />
                  </div>
                  <div class="col-md-12">
                    <div class="row gx-3">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="名*"
                            value=""
                            type="text"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="姓*"
                            value=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="邮箱 ID*"
                            value=""
                            type="text"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="电话"
                            value=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="部门"
                            value=""
                            type="text"
                          />
                        </div>
                        <div class="form-group">
                          <select
                            id="input_tags"
                            class="form-control"
                            multiple="multiple"
                          >
                            <option selected="selected">协作者</option>
                            <option>设计师</option>
                            <option selected="selected">开发</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2">
                <div class="form-group">
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    class="btn btn-block btn-primary"
                  >
                    新建
                  </button>
                </div>
                <div class="form-group">
                  <button
                    data-bs-toggle="collapse"
                    disabled
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    class="btn btn-block btn-outline-secondary"
                  >
                    <i class="ri-close-line me-1"></i>放弃
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="contact-list-view">
        <div class="mb-3">
          <div class="row">
            <div class="col-7 mb-3">
              <div class="contact-toolbar-left">
                <div class="d-xxl-flex d-none align-items-center mb-0">
                  <select
                    class="form-select form-select-sm w-120p"
                    v-model="batchAction"
                  >
                    <option value="" disabled>批量操作</option>
                    <option value="trash">移至回收站</option>
                    <option value="delete">删除</option>
                    <option value="edit">编辑</option>
                  </select>
                  <button class="btn btn-light btn-sm ms-2" @click="applyBatch">
                    应用
                  </button>
                </div>
                <div class="d-xxl-flex d-none align-items-center mb-0">
                  <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                  <select
                    class="form-select form-select-sm w-130p"
                    v-model="sortBy"
                    @change="reload"
                  >
                    <option value="created">创建日期</option>
                    <option value="updated">编辑日期</option>
                    <option value="name">常联系人</option>
                    <option value="recent">最近添加</option>
                  </select>
                </div>
                <select
                  class="form-select form-select-sm d-flex align-items-center w-130p"
                  v-model="exportAction"
                  @change="onExport"
                >
                  <option value="csv">导出 CSV</option>
                  <option value="pdf">导出 PDF</option>
                  <option value="mail">发送消息</option>
                  <option value="delegate">委托访问</option>
                </select>
              </div>
            </div>
            <div class="col-5 mb-3">
              <div class="contact-toolbar-right">
                <div class="dataTables_filter">
                  <label>
                    <input
                      class="form-control form-control-sm"
                      type="search"
                      placeholder="搜索"
                      v-model="searchTerm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
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
          @selection-change="onSelectionChange"
          @star-toggle="onStarToggle"
        >
          <!-- 姓名列 -->
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

          <!-- 邮箱列 -->
          <template v-slot:email="{ cellValue }">
            <span class="text-truncate mw-150p d-block">{{ cellValue }}</span>
          </template>

          <!-- 标签徽章列 -->
          <template v-slot:tags="{ cellValue }">
            <span
              v-for="(item, index) in cellValue"
              :key="index"
              :class="['badge', `badge-soft-${item.bg}`, 'my-1  me-2']"
              >{{ item.title }}</span
            >
          </template>

          <!-- 操作列 -->
          <template v-slot:actions="{ row }">
            <div class="d-flex align-items-center">
              <div class="d-flex">
                <!-- 归档 / 恢复 -->
                <a
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                  v-tooltip
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  :data-bs-original-title="row.archived ? '恢复' : '归档'"
                  href="#"
                  @click.prevent="toggleArchive(row)"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon :name="row.archived ? 'rotate-ccw' : 'archive'"></feather-icon>
                    </span>
                  </span>
                </a>
                <!-- 编辑 -->
                <router-link
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                  v-tooltip
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="编辑"
                  :to="row.editLink"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="edit"></feather-icon>
                    </span>
                  </span>
                </router-link>
                <!-- 删除 -->
                <a
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                  v-tooltip
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="删除"
                  href="#"
                  @click.prevent="deleteContact(row)"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="trash"></feather-icon>
                    </span>
                  </span>
                </a>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="more-vertical"></feather-icon>
                    </span>
                  </span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  <router-link
                    class="dropdown-item"
                    :to="row.editLink"
                  >
                    <span class="feather-icon dropdown-icon">
                      <feather-icon name="edit"></feather-icon>
                    </span>
                    <span>编辑联系人</span>
                  </router-link>
                  <a class="dropdown-item" href="#" @click.prevent="deleteContact(row)">
                    <span class="feather-icon dropdown-icon">
                      <feather-icon name="trash-2"></feather-icon>
                    </span>
                    <span>删除</span>
                  </a>
                  <a class="dropdown-item" href="#" @click.prevent="copyContact(row)">
                    <span class="feather-icon dropdown-icon">
                      <feather-icon name="copy"></feather-icon>
                    </span>
                    <span>复制</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <h6 class="dropdown-header dropdown-header-bold">修改标签组</h6>
                  <a
                    v-for="label in contactStore.allLabels"
                    :key="label"
                    class="dropdown-item"
                    href="#"
                    @click.prevent="toggleLabel(row, label)"
                  >
                    <span class="feather-icon dropdown-icon">
                      <feather-icon
                        :name="row.labelList.includes(label) ? 'check' : 'circle'"
                      ></feather-icon>
                    </span>
                    <span>{{ label }}</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add_new_label"
                  >
                    <span class="feather-icon dropdown-icon">
                      <feather-icon name="plus"></feather-icon>
                    </span>
                    <span>添加标签组</span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </HkDataTable>
        <!-- 加载状态 -->
        <div v-if="contactStore.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">加载中...</span>
          </div>
          <p class="mt-2 text-muted mb-0">正在加载联系人...</p>
        </div>
        <!-- 空状态 -->
        <div v-else-if="!Tabledata.length" class="text-center py-5">
          <span class="feather-icon fs-4 text-muted">
            <feather-icon name="users"></feather-icon>
          </span>
          <p class="mt-2 text-muted mb-0">{{ emptyText }}</p>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import {
  parseLabels,
  fullName,
  exportContactsCSV,
  printPage,
  mailtoContacts,
} from "@/utils/export";

const AVATAR_BG = ["primary", "info", "success", "warning", "danger", "violet", "indigo", "cyan"];
const TAG_BG = ["primary", "info", "success", "warning", "danger", "violet", "indigo", "cyan"];

export default {
  name: "ContactBody",
  components: {
    HkDataTable,
  },
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  created() {
    this.refresh();
  },
  data() {
    return {
      searchTerm: "",
      sortBy: "created",
      batchAction: "",
      exportAction: "csv",
      selectedRowIds: [],
      columns: [
        { accessor: "id", title: "产品 ID", hidden: true },
        { accessor: "starred", title: "", hidden: true },
        { accessor: "name", title: "姓名", cellFormatter: "name" },
        { accessor: "email", title: "邮箱地址", cellFormatter: "email" },
        { accessor: "phone", title: "电话" },
        { accessor: "tags", title: "标签", cellFormatter: "tags" },
        { accessor: "labels", title: "标签组" },
        { accessor: "dateCreated", title: "创建日期" },
        { accessor: "actions", title: "", cellFormatter: "actions" },
      ],
    };
  },
  computed: {
    // 当前视图（筛选/排序后）的联系人表格行
    Tabledata() {
      return this.sortedContacts().map((c) => this.toTableRow(c));
    },
    emptyText() {
      const f = this.contactStore.filter;
      if (f === "starred") return "暂无重要联系人，点击星标即可收藏";
      if (f === "archived") return "归档为空，归档的联系人会显示在这里";
      if (f === "label") return `标签「${this.contactStore.activeLabel}」下暂无联系人`;
      return "暂无联系人，点击「新建联系人」进行创建";
    },
  },
  methods: {
    refresh() {
      this.contactStore.refresh();
    },
    // 排序
    sortedContacts() {
      const list = [...this.contactStore.filteredContacts];
      const sortBy = this.sortBy;
      list.sort((a, b) => {
        if (sortBy === "name") {
          return fullName(a).localeCompare(fullName(b), "zh-CN");
        }
        const field = sortBy === "updated" ? "updatedAt" : "createdAt";
        const aT = a[field] ? new Date(a[field]).getTime() : 0;
        const bT = b[field] ? new Date(b[field]).getTime() : 0;
        return bT - aT;
      });
      return list;
    },
    // 后端联系人 -> 表格行
    toTableRow(c) {
      const labels = parseLabels(c.labels);
      const initial = (c.firstName || "?").trim().charAt(0).toUpperCase();
      const name = fullName(c);
      return {
        id: c.id,
        starred: !!c.starred,
        name: [
          {
            userName: name,
            ...(c.avatar
              ? { Img: c.avatar }
              : { cstmAvt: initial, avtBg: AVATAR_BG[Math.abs(c.id) % AVATAR_BG.length] }),
          },
        ],
        searchText: [name, c.email, c.phone, c.company, c.position, labels.join(" ")]
          .filter(Boolean)
          .join(" ")
          .toLowerCase(),
        email: c.email || "-",
        phone: c.phone || "-",
        tags: labels.map((title, i) => ({ title, bg: TAG_BG[i % TAG_BG.length] })),
        labels: labels.join("、") || "—",
        labelList: labels,
        archived: !!c.archived,
        dateCreated: this.formatDate(c.createdAt),
        editLink: `/apps/contact/edit-contact/${c.id}`,
        actions: [{ id: c.id }],
      };
    },
    formatDate(value) {
      if (!value) return "";
      const d = new Date(value);
      if (isNaN(d.getTime())) return value;
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    },
    // 行选择变化（批量操作）
    onSelectionChange(ids) {
      this.selectedRowIds = ids;
    },
    // 星标切换
    async onStarToggle(row) {
      try {
        await this.contactStore.toggleStar(row.id);
      } catch (err) {
        this.contactStore.refresh();
        Swal.fire({ icon: "error", title: "操作失败", text: (err.response?.data?.message) || err.message });
      }
    },
    // 归档 / 恢复
    async toggleArchive(row) {
      try {
        if (row.archived) {
          await this.contactStore.restoreContact(row.id);
          Swal.fire({ icon: "success", title: "已恢复", timer: 1200, showConfirmButton: false });
        } else {
          await this.contactStore.archiveContact(row.id);
          Swal.fire({ icon: "success", title: "已归档", timer: 1200, showConfirmButton: false });
        }
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: (err.response?.data?.message) || err.message });
      }
    },
    // 删除联系人
    async deleteContact(row) {
      const result = await Swal.fire({
        title: "删除联系人",
        text: `确定删除「${row.name[0].userName}」吗？删除后无法恢复。`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        confirmButtonColor: "#e74c3c",
      });
      if (!result.isConfirmed) return;
      try {
        await this.contactStore.deleteContact(row.id);
        Swal.fire({ icon: "success", title: "已删除", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "删除失败", text: (err.response?.data?.message) || err.message });
      }
    },
    // 复制联系人
    async copyContact(row) {
      const src =
        this.contactStore.contacts.find((c) => c.id === row.id) ||
        this.contactStore.archivedContacts.find((c) => c.id === row.id);
      if (!src) return;
      try {
        await this.contactStore.createContact({
          firstName: src.firstName,
          lastName: src.lastName || "",
          email: src.email || "",
          phone: src.phone || "",
          company: src.company || "",
          position: src.position || "",
          location: src.location || "",
          notes: src.notes || "",
          labels: JSON.stringify(parseLabels(src.labels)),
        });
        Swal.fire({ icon: "success", title: "已复制", text: "新的联系人已创建", timer: 1500, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "复制失败", text: (err.response?.data?.message) || err.message });
      }
    },
    // 切换联系人标签
    async toggleLabel(row, label) {
      try {
        if (row.labelList.includes(label)) {
          await this.contactStore.removeLabel(row.id, label);
        } else {
          await this.contactStore.addLabel(row.id, label);
        }
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: (err.response?.data?.message) || err.message });
      }
    },
    // 批量操作
    applyBatch() {
      const ids = [...this.selectedRowIds];
      if (!ids.length) {
        Swal.fire({ icon: "info", title: "请先勾选联系人", timer: 1500, showConfirmButton: false });
        return;
      }
      const action = this.batchAction;
      if (action === "edit") {
        this.$router.push(`/apps/contact/edit-contact/${ids[0]}`);
        return;
      }
      if (action === "trash") {
        Swal.fire({
          title: "批量归档",
          text: `确定将选中的 ${ids.length} 个联系人移入归档吗？`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "归档",
          cancelButtonText: "取消",
        }).then(async (r) => {
          if (!r.isConfirmed) return;
          for (const id of ids) {
            try {
              await this.contactStore.archiveContact(id);
            } catch (e) {}
          }
          Swal.fire({ icon: "success", title: "已归档", timer: 1500, showConfirmButton: false });
        });
        return;
      }
      if (action === "delete") {
        Swal.fire({
          title: "批量删除",
          text: `确定永久删除选中的 ${ids.length} 个联系人吗？`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          confirmButtonColor: "#e74c3c",
        }).then(async (r) => {
          if (!r.isConfirmed) return;
          for (const id of ids) {
            try {
              await this.contactStore.deleteContact(id);
            } catch (e) {}
          }
          Swal.fire({ icon: "success", title: "已删除", timer: 1500, showConfirmButton: false });
        });
      }
    },
    // 导出等工具栏操作
    onExport() {
      const list = this.contactStore.filteredContacts;
      if (this.exportAction === "csv") {
        exportContactsCSV(list);
      } else if (this.exportAction === "pdf") {
        printPage();
      } else if (this.exportAction === "mail") {
        if (!list.length) {
          Swal.fire({ icon: "info", title: "暂无联系人", timer: 1500, showConfirmButton: false });
          return;
        }
        mailtoContacts(list);
      } else if (this.exportAction === "delegate") {
        this.openDelegate();
      }
    },
    openDelegate() {
      if (!this.contactStore.filteredContacts.length) {
        Swal.fire({ icon: "info", title: "暂无联系人", timer: 1500, showConfirmButton: false });
        return;
      }
      if (!this.contactStore.current) {
        this.contactStore.current = this.contactStore.filteredContacts[0];
      }
      const el = document.getElementById("delegate_access");
      if (el) {
        import("bootstrap").then(({ Modal }) => Modal.getOrCreateInstance(el).show());
      }
    },
    reload() {
      // 保持与排序选择一致的重新渲染（Tabledata 已为计算属性，无需额外逻辑）
    },
  },
};
</script>