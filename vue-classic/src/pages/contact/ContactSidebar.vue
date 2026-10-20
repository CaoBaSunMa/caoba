<template>
  <nav class="contactapp-sidebar">
    <simplebar data-simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          type="button"
          class="btn btn-primary btn-rounded btn-block mb-4"
          data-bs-toggle="modal"
          data-bs-target="#add_new_contact"
        >
          新建联系人
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a
                class="nav-link link-badge-right"
                :class="{ active: isActive('all') }"
                href="javascript:void(0);"
                @click="contactStore.setFilter('all')"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="inbox"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">全部联系人</span>
                <span class="badge badge-pill badge-sm badge-soft-primary ms-auto">{{
                  contactStore.totalCount
                }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link link-badge-right"
                :class="{ active: isActive('starred') }"
                href="javascript:void(0);"
                @click="contactStore.setFilter('starred')"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="star"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">重要</span>
                <span class="badge badge-pill badge-sm badge-soft-primary ms-auto">{{
                  contactStore.starredCount
                }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link link-badge-right"
                :class="{ active: isActive('archived') }"
                href="javascript:void(0);"
                @click="contactStore.setFilter('archived')"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="archive"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">归档</span>
                <span class="badge badge-pill badge-sm badge-soft-primary ms-auto">{{
                  contactStore.archivedContacts.length
                }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: isActive('pending') }"
                href="javascript:void(0);"
                @click="contactStore.setFilter('all')"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="edit"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">待处理</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: isActive('archived') }"
                href="javascript:void(0);"
                @click="contactStore.setFilter('archived')"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="trash-2"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">已删除</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="exportCSV">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="upload"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">导出</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="triggerImport">
                <span class="nav-icon-wrap">
                  <span class="feather-icon"
                    ><feather-icon name="download"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">导入</span>
                <input
                  ref="importFile"
                  type="file"
                  accept=".csv,text/csv"
                  class="d-none"
                  @change="onImportFile"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="print">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="printer"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">打印</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">标签组</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_new_label"
          >
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="添加标签"
            >
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li
              v-for="label in contactStore.allLabels"
              :key="label"
              class="nav-item"
            >
              <a
                class="nav-link link-badge-right"
                :class="{ active: isActiveLabel(label) }"
                href="javascript:void(0);"
                @click="contactStore.setActiveLabel(label)"
              >
                <span class="nav-link-text">{{ label }}</span>
                <span class="badge badge-pill badge-sm badge-soft-primary ms-auto">{{
                  contactStore.labelCounts[label] || 0
                }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="title-sm text-primary mb-0">标签</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_new_tag"
          >
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="添加标签"
            >
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </a>
        </div>
        <div class="tag-cloud">
          <a
            v-for="label in contactStore.allLabels.slice(0, 8)"
            :key="label"
            href="javascript:void(0);"
            class="badge badge-outline badge-light"
            @click="contactStore.setActiveLabel(label)"
            >{{ label }}</a
          >
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="contactapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="settings"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
              @click="contactStore.setFilter('archived')"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="archive"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="book"></feather-icon>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { exportContactsCSV, parseContactCSV, printPage } from "@/utils/export";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  mounted() {
    // 预取归档数量
    if (!this.contactStore.archivedContacts.length) {
      this.contactStore.fetchArchived();
    }
  },
  methods: {
    isActive(key) {
      if (key === "archived") return this.contactStore.filter === "archived";
      if (key === "label") return this.contactStore.filter === "label";
      return this.contactStore.filter === key;
    },
    isActiveLabel(label) {
      return (
        this.contactStore.filter === "label" &&
        this.contactStore.activeLabel === label
      );
    },
    exportCSV() {
      exportContactsCSV(this.contactStore.filteredContacts);
    },
    print() {
      printPage();
    },
    triggerImport() {
      if (this.$refs.importFile) this.$refs.importFile.click();
    },
    async onImportFile(e) {
      const file = e.target.files && e.target.files[0];
      e.target.value = "";
      if (!file) return;
      try {
        const text = await file.text();
        const rows = parseContactCSV(text);
        if (!rows.length) {
          Swal.fire({ icon: "info", title: "未找到有效数据", text: "请使用「姓名,邮箱,电话,公司」格式的 CSV", timer: 2200, showConfirmButton: false });
          return;
        }
        let ok = 0;
        for (const row of rows) {
          try {
            await this.contactStore.createContact(row);
            ok += 1;
          } catch (err) {
            // 单条失败忽略，继续导入
          }
        }
        Swal.fire({
          icon: ok ? "success" : "error",
          title: `导入完成 ${ok}/${rows.length}`,
          timer: 1800,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire({ icon: "error", title: "导入失败", text: err.message });
      }
    },
  },
};
</script>