<template>
  <div class="contact-body">
    <simplebar class="nicescroll-bar">
      <div :class="['contact-card-view', { 'select-multiple': multipleSelection }]">
        <div class="row">
          <div class="col-7 mb-3">
            <div class="contact-toolbar-left">
              <div class="d-xxl-flex d-none align-items-center form-group mb-0">
                <select class="form-select form-select-sm w-120p" v-model="batchAction">
                  <option value="" disabled>批量操作</option>
                  <option value="trash">移至回收站</option>
                  <option value="delete">删除</option>
                  <option value="edit">编辑</option>
                </select>
                <button class="btn btn-sm btn-light ms-2" @click="applyBatch">应用</button>
              </div>
              <div class="d-xxl-flex d-none align-items-center form-group mb-0">
                <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                <select class="form-select form-select-sm w-130p" v-model="sortBy" @change="onSortChange">
                  <option value="created">创建日期</option>
                  <option value="updated">编辑日期</option>
                  <option value="name">常联系人</option>
                  <option value="recent">最近添加</option>
                </select>
              </div>
              <select
                class="d-flex align-items-center w-130p form-select form-select-sm"
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
              <div id="datable_1_filter" class="dataTables_filter">
                <label
                  ><input
                    type="search"
                    class="form-control form-control-sm"
                    placeholder="搜索"
                    v-model="searchTerm"
                /></label>
              </div>
              <div class="dataTables_length" id="datable_1_length">
                <label>
                  查看
                  <select name="datable_1_length" class="form-select form-select-sm" v-model="pageSize" @change="onPageSize">
                    <option :value="10">10</option>
                    <option :value="25">25</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                  </select>
                </label>
              </div>
              <div
                class="dataTables_info"
                id="datable_1_info"
                role="status"
                aria-live="polite"
              >
                {{ pageInfo }}
              </div>
              <div
                class="dataTables_paginate paging_simple_numbers"
                id="datable_1_paginate"
              >
                <ul class="pagination custom-pagination pagination-simple m-0">
                  <li
                    class="paginate_button page-item previous"
                    :class="{ disabled: currentPage <= 1 }"
                    id="datable_1_previous"
                  >
                    <a
                      href="#"
                      data-dt-idx="0"
                      tabindex="0"
                      class="page-link"
                      @click.prevent="goPage(currentPage - 1)"
                      ><i class="ri-arrow-left-s-line"></i
                    ></a>
                  </li>
                  <li
                    v-for="page in pageList"
                    :key="page"
                    class="paginate_button page-item"
                    :class="{ active: page === currentPage }"
                  >
                    <a
                      href="#"
                      :data-dt-idx="page"
                      tabindex="0"
                      class="page-link"
                      @click.prevent="goPage(page)"
                      >{{ page }}</a
                    >
                  </li>
                  <li
                    class="paginate_button page-item next"
                    :class="{ disabled: currentPage >= pageCount }"
                    id="datable_1_next"
                  >
                    <a
                      href="#"
                      :data-dt-idx="pageCount + 1"
                      tabindex="0"
                      class="page-link"
                      @click.prevent="goPage(currentPage + 1)"
                      ><i class="ri-arrow-right-s-line"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 加载状态 -->
        <div v-if="contactStore.loading && !displayCards.length" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">加载中...</span>
          </div>
          <p class="mt-2 text-muted mb-0">正在加载联系人...</p>
        </div>
        <!-- 空状态 -->
        <div v-else-if="!displayCards.length" class="text-center py-5">
          <span class="feather-icon fs-4 text-muted">
            <feather-icon name="users"></feather-icon>
          </span>
          <p class="mt-2 text-muted mb-0">{{ emptyText }}</p>
        </div>

        <div
          v-else
          class="row gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mb-5"
        >
          <div class="col" v-for="c in displayCards" :key="c.id">
            <div class="card card-border contact-card">
              <div class="card-body text-center">
                <span class="form-check form-check-lg">
                  <input
                    type="checkbox"
                    class="form-check-input check-select"
                    :checked="selectedIds.has(c.id)"
                    @change="toggleCheck(c)"
                  />
                  <label class="form-check-label" :for="`chk_sel_${c.id}`"></label>
                </span>

                <div class="card-action-wrap">
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    href="#"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end" role="menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      role="menuitem"
                      @click.prevent="mailto(c, '回复')"
                    >
                      <i class="icon wb-reply me-2" aria-hidden="true"></i>
                      回复
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      role="menuitem"
                      @click.prevent="mailto(c, '转发')"
                    >
                      <i class="icon wb-share me-2" aria-hidden="true"></i>
                      转发
                    </a>
                    <div class="dropdown-divider"></div>
                    <router-link
                      class="dropdown-item"
                      :to="`/apps/contact/edit-contact/${c.id}`"
                      role="menuitem"
                    >
                      <i class="icon wb-user me-2" aria-hidden="true"></i>
                      编辑联系人
                    </router-link>
                    <a
                      class="dropdown-item"
                      href="#"
                      role="menuitem"
                      @click.prevent="copyContact(c)"
                    >
                      <i class="icon wb-copy me-2" aria-hidden="true"></i>
                      复制
                    </a>
                    <a
                      class="dropdown-item link-danger"
                      href="#"
                      role="menuitem"
                      @click.prevent="deleteContact(c)"
                    >
                      <i class="icon wb-trash me-2" aria-hidden="true"></i>
                      删除
                    </a>
                    <div class="dropdown-divider"></div>
                    <h6 class="dropdown-header dropdown-header-bold">修改标签组</h6>
                    <a
                      v-for="label in contactStore.allLabels"
                      :key="label"
                      class="dropdown-item"
                      href="#"
                      role="menuitem"
                      @click.prevent="toggleLabel(c, label)"
                    >
                      <span class="feather-icon dropdown-icon">
                        <feather-icon
                          :name="c._labels.includes(label) ? 'check' : 'circle'"
                        ></feather-icon>
                      </span>
                      <span>{{ label }}</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="#"
                      role="menuitem"
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
                <div v-if="c.avatar" class="avatar avatar-xl avatar-rounded">
                  <img :src="c.avatar" alt="用户" class="avatar-img" />
                </div>
                <div
                  v-else
                  :class="['avatar', 'avatar-xl', 'avatar-rounded', c._avtClass]"
                >
                  <span class="initial-wrap">{{ c._initial }}</span>
                </div>
                <div class="user-name">
                  <span
                    class="contact-star"
                    :class="{ marked: c.starred }"
                    role="button"
                    title="点击切换星标"
                    style="cursor: pointer"
                    @click.prevent="toggleStar(c)"
                  >
                    <feather-icon name="star"></feather-icon>
                  </span>
                  {{ c._name }}
                  <span v-if="c.blocked" class="badge badge-soft-dark ms-1">已屏蔽</span>
                </div>
                <div class="user-email">{{ c.email || "-" }}</div>
                <div class="user-contact">{{ c.phone || "-" }}</div>
                <div class="user-desg">
                  <span
                    :class="[
                      'badge badge-indicator badge-indicator-lg me-2',
                      c._badge,
                    ]"
                  ></span>
                  {{ c.position || "-" }}
                </div>
              </div>
              <div class="card-footer text-muted position-relative">
                <a :href="mailtoHref(c)" class="d-flex align-items-center">
                  <span class="feather-icon me-2">
                    <feather-icon name="inbox"></feather-icon>
                  </span>
                  <span class="fs-7 lh-1">消息</span>
                </a>
                <div class="v-separator-full m-0"></div>
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openDetail(c)"
                >
                  <span class="feather-icon me-2">
                    <feather-icon name="user-check"></feather-icon>
                  </span>
                  <span class="fs-7 lh-1">个人资料</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="displayCards.length" class="row">
          <div
            class="d-flex align-items-center col-sm-12 col-md-5 justify-content-center justify-content-md-start"
          >
            <div class="dataTables_info">{{ pageInfo }}</div>
          </div>
          <div class="col-sm-12 col-md-7">
            <ul
              class="pagination custom-pagination pagination-simple mb-0 justify-content-center justify-content-md-end"
            >
              <li
                class="paginate_button page-item previous"
                :class="{ disabled: currentPage <= 1 }"
              >
                <a
                  href="#"
                  data-dt-idx="0"
                  tabindex="0"
                  class="page-link"
                  @click.prevent="goPage(currentPage - 1)"
                  ><i class="ri-arrow-left-s-line"></i
                ></a>
              </li>
              <li
                v-for="page in pageList"
                :key="'b' + page"
                class="paginate_button page-item"
                :class="{ active: page === currentPage }"
              >
                <a
                  href="#"
                  :data-dt-idx="page"
                  tabindex="0"
                  class="page-link"
                  @click.prevent="goPage(page)"
                  >{{ page }}</a
                >
              </li>
              <li
                class="paginate_button page-item next"
                :class="{ disabled: currentPage >= pageCount }"
              >
                <a
                  href="#"
                  :data-dt-idx="pageCount + 1"
                  tabindex="0"
                  class="page-link"
                  @click.prevent="goPage(currentPage + 1)"
                  ><i class="ri-arrow-right-s-line"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { parseLabels, fullName, exportContactsCSV, printPage, mailtoContacts } from "@/utils/export";

const AVATAR_BG = ["avatar-soft-primary", "avatar-soft-info", "avatar-soft-success", "avatar-soft-warning", "avatar-soft-danger", "avatar-soft-violet", "avatar-soft-indigo", "avatar-soft-cyan"];
const BADGE = ["badge-primary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-violet"];

export default {
  name: "ContactCardBody",
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
      pageSize: 10,
      currentPage: 1,
      batchAction: "",
      exportAction: "csv",
      selectedIds: new Set(),
    };
  },
  computed: {
    // 当前视图 + 搜索 + 排序后的联系人
    sortedContacts() {
      const list = [...this.contactStore.filteredContacts];
      const q = (this.searchTerm || "").trim().toLowerCase();
      const filtered = q
        ? list.filter((c) =>
            [fullName(c), c.email, c.phone, c.company, c.position, c.location, parseLabels(c.labels).join(" ")]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(q)
          )
        : list;
      const sortBy = this.sortBy;
      filtered.sort((a, b) => {
        if (sortBy === "name") {
          return fullName(a).localeCompare(fullName(b), "zh-CN");
        }
        const field = sortBy === "updated" ? "updatedAt" : "createdAt";
        const aT = a[field] ? new Date(a[field]).getTime() : 0;
        const bT = b[field] ? new Date(b[field]).getTime() : 0;
        return bT - aT;
      });
      return filtered;
    },
    totalRows() {
      return this.sortedContacts.length;
    },
    pageCount() {
      return Math.max(1, Math.ceil(this.totalRows / this.pageSize));
    },
    displayCards() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.sortedContacts
        .slice(start, start + this.pageSize)
        .map((c) => this.toCard(c));
    },
    multipleSelection() {
      return this.selectedIds.size > 0;
    },
    pageInfo() {
      if (!this.totalRows) return "0 条";
      const start = (this.currentPage - 1) * this.pageSize + 1;
      const end = Math.min(this.totalRows, start + this.pageSize - 1);
      return `${start} - ${end}，共 ${this.totalRows} 条`;
    },
    pageList() {
      const total = this.pageCount;
      const cur = this.currentPage;
      if (total <= 5) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      let start = Math.max(1, cur - 2);
      let end = Math.min(total, start + 4);
      start = Math.max(1, end - 4);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    emptyText() {
      const f = this.contactStore.filter;
      if (f === "starred") return "暂无重要联系人，点击星标即可收藏";
      if (f === "archived") return "归档为空，归档的联系人会显示在这里";
      if (f === "label") return `标签「${this.contactStore.activeLabel || ""}」下暂无联系人`;
      return "暂无联系人，点击「新建联系人」进行创建";
    },
  },
  watch: {
    searchTerm() {
      this.currentPage = 1;
    },
    "contactStore.filter"() {
      this.currentPage = 1;
      this.selectedIds.clear();
    },
    "contactStore.activeLabel"() {
      this.currentPage = 1;
      this.selectedIds.clear();
    },
  },
  methods: {
    refresh() {
      this.contactStore.refresh();
    },
    onSortChange() {
      this.currentPage = 1;
    },
    onPageSize() {
      this.currentPage = 1;
    },
    goPage(page) {
      if (page < 1 || page > this.pageCount) return;
      this.currentPage = page;
    },
    toCard(c) {
      const labels = parseLabels(c.labels);
      const name = fullName(c);
      const initial = (c.firstName || name || "?").trim().charAt(0).toUpperCase() || "?";
      return {
        ...c,
        _name: name,
        _initial: initial,
        _labels: labels,
        _avtClass: AVATAR_BG[Math.abs(c.id) % AVATAR_BG.length],
        _badge: BADGE[Math.abs(c.id) % BADGE.length],
      };
    },
    mailtoHref(c) {
      return c.email ? `mailto:${c.email}` : "#";
    },
    mailto(c, subject) {
      if (!c.email) {
        Swal.fire({ icon: "info", title: "该联系人暂无邮箱", timer: 1500, showConfirmButton: false });
        return;
      }
      window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(subject ? subject : "来自 caoba 的联系")}`;
    },
    toggleCheck(c) {
      if (this.selectedIds.has(c.id)) {
        this.selectedIds.delete(c.id);
      } else {
        this.selectedIds.add(c.id);
      }
    },
    async toggleStar(c) {
      try {
        const updated = await this.contactStore.toggleStar(c.id);
        c.starred = !!updated.starred;
      } catch (err) {
        this.contactStore.refresh();
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    openDetail(c) {
      this.contactStore.current = c;
      const el = document.getElementById("contact_detail");
      if (el) {
        const m = Modal.getOrCreateInstance(el);
        m.show();
      }
    },
    async deleteContact(c) {
      const result = await Swal.fire({
        title: "删除联系人",
        text: `确定删除「${fullName(c)}」吗？删除后无法恢复。`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        confirmButtonColor: "#e74c3c",
      });
      if (!result.isConfirmed) return;
      try {
        await this.contactStore.deleteContact(c.id);
        this.selectedIds.delete(c.id);
        Swal.fire({ icon: "success", title: "已删除", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "删除失败", text: err.response?.data?.message || err.message });
      }
    },
    async copyContact(c) {
      const src =
        this.contactStore.contacts.find((x) => x.id === c.id) ||
        this.contactStore.archivedContacts.find((x) => x.id === c.id);
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
        Swal.fire({ icon: "error", title: "复制失败", text: err.response?.data?.message || err.message });
      }
    },
    async toggleLabel(c, label) {
      try {
        if (c._labels.includes(label)) {
          await this.contactStore.removeLabel(c.id, label);
        } else {
          await this.contactStore.addLabel(c.id, label);
        }
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    async toggleArchive(c) {
      try {
        if (c.archived) {
          await this.contactStore.restoreContact(c.id);
          Swal.fire({ icon: "success", title: "已恢复", timer: 1200, showConfirmButton: false });
        } else {
          await this.contactStore.archiveContact(c.id);
          Swal.fire({ icon: "success", title: "已归档", timer: 1200, showConfirmButton: false });
        }
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    async applyBatch() {
      const ids = [...this.selectedIds];
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
          this.selectedIds.clear();
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
          this.selectedIds.clear();
          Swal.fire({ icon: "success", title: "已删除", timer: 1500, showConfirmButton: false });
        });
      }
    },
    onExport() {
      const list = this.contactStore.filteredContacts;
      const action = this.exportAction;
      if (action === "csv") {
        exportContactsCSV(list);
      } else if (action === "pdf") {
        printPage();
      } else if (action === "mail") {
        if (!list.length) {
          Swal.fire({ icon: "info", title: "暂无联系人", timer: 1500, showConfirmButton: false });
          return;
        }
        mailtoContacts(list);
      } else if (action === "delegate") {
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
      if (el) Modal.getOrCreateInstance(el).show();
    }
  },
};
</script>
