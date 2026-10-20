<template>
  <header class="contact-header">
    <div class="d-flex align-items-center">
      <div class="dropdown">
        <a
          class="contactapp-title dropdown-toggle link-dark"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <h1>{{ titleText }}</h1>
        </a>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            :class="{ active: isActive('all') }"
            href="#"
            @click.prevent="contactStore.setFilter('all')"
          >
            <span class="feather-icon dropdown-icon">
              <feather-icon name="users"></feather-icon>
            </span>
            <span>全部联系人</span>
          </a>
          <a
            class="dropdown-item"
            :class="{ active: isActive('starred') }"
            href="#"
            @click.prevent="contactStore.setFilter('starred')"
          >
            <span class="feather-icon dropdown-icon">
              <feather-icon name="star"></feather-icon>
            </span>
            <span>重要</span>
          </a>
          <a
            class="dropdown-item"
            :class="{ active: isActive('archived') }"
            href="#"
            @click.prevent="contactStore.setFilter('archived')"
          >
            <span class="feather-icon dropdown-icon">
              <feather-icon name="archive"></feather-icon>
            </span>
            <span>归档</span>
          </a>
          <a
            class="dropdown-item"
            :class="{ active: isActive('all') }"
            href="#"
            @click.prevent="contactStore.setFilter('all')"
          >
            <span class="feather-icon dropdown-icon">
              <feather-icon name="edit"></feather-icon>
            </span>
            <span>待处理</span>
          </a>
          <a
            class="dropdown-item"
            :class="{ active: isActive('archived') }"
            href="#"
            @click.prevent="contactStore.setFilter('archived')"
          >
            <span class="feather-icon dropdown-icon">
              <feather-icon name="trash-2"></feather-icon>
            </span>
            <span>已删除</span>
          </a>
        </div>
      </div>
      <div class="dropdown ms-3">
        <button
          class="btn btn-sm btn-outline-secondary flex-shrink-0 dropdown-toggle d-lg-inline-block d-none"
          data-bs-toggle="dropdown"
        >
          新建
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add_new_contact"
            >新建联系人</a
          >
          <a class="dropdown-item" href="#" @click.prevent="toast('新建部门', '请在联系人列表右上角选择「管理联系人」')"
            >新建部门</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add_new_label"
            >添加类别</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add_new_tag"
            >添加标签</a
          >
        </div>
      </div>
    </div>
    <div class="contact-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <feather-icon
            v-if="route.path.match('/apps/contact/contact-list')"
            name="list"
          ></feather-icon>
          <feather-icon
            v-if="route.path.match('/apps/contact/contact-card')"
            name="grid"
          ></feather-icon>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <router-link
          to="/apps/contact/contact-list"
          class="dropdown-item"
          activeClass="active"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>列表视图</span>
        </router-link>
        <router-link
          to="/apps/contact/contact-card"
          class="dropdown-item"
          activeClass="active"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>网格视图</span>
        </router-link>
        <a class="dropdown-item" href="#" @click.prevent="toast('紧凑视图', '当前为列表视图')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="server"></feather-icon>
          </span>
          <span>紧凑视图</span>
        </a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-placement="top"
        title=""
        data-bs-original-title="刷新"
        @click.prevent="refresh"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="refresh-cw"></feather-icon>
          </span>
        </span>
      </a>
      <div class="v-separator d-lg-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-lg-inline-block d-none ms-sm-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-placement="top"
          title=""
          data-bs-original-title="管理联系人"
        >
          <span class="feather-icon">
            <feather-icon name="settings"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="#" @click.prevent="contactStore.setFilter('all')"
          >管理联系人</a
        >
        <a class="dropdown-item" href="#" @click.prevent="triggerImport">导入</a>
        <a class="dropdown-item" href="#" @click.prevent="exportCSV">导出</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" @click.prevent="sendMail">发送消息</a>
        <a class="dropdown-item" href="#" @click.prevent="openDelegate">委托访问</a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-lg-inline-block d-none"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span
          class="icon"
          v-tooltip
          data-bs-toggle="tooltip"
          data-placement="top"
          title=""
          data-bs-original-title="更多"
        >
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a
          class="dropdown-item"
          href="#"
          @click.prevent="contactStore.setFilter('starred')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>星标联系人</span>
        </a>
        <a
          class="dropdown-item"
          href="#"
          @click.prevent="contactStore.setFilter('archived')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档联系人</span>
        </a>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item" to="/apps/email">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="slash"></feather-icon>
          </span>
          <span>屏蔽内容</span>
        </router-link>
        <router-link class="dropdown-item" to="/apps/email">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="external-link"></feather-icon>
          </span>
          <span>反馈</span>
        </router-link>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-placement="top"
        title=""
        data-bs-original-title="收起"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
          <feather-icon name="chevron-up" v-else />
        </span>
      </a>
      <input
        ref="importFile"
        type="file"
        accept=".csv,text/csv"
        class="d-none"
        @change="onImportFile"
      />
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    />
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import { useContactStore } from "@/stores/contactStore";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";
import { exportContactsCSV, parseContactCSV, mailtoContacts } from "@/utils/export";

export default {
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const contactStore = useContactStore();
    const route = useRoute();
    return {
      layoutStore,
      contactStore,
      route,
    };
  },
  computed: {
    titleText() {
      const f = this.contactStore.filter;
      if (f === "starred") return "重要联系人";
      if (f === "archived") return "已归档联系人";
      if (f === "label") return `标签：${this.contactStore.activeLabel || ""}`;
      return "全部联系人";
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    isActive(key) {
      return this.contactStore.filter === key;
    },
    refresh() {
      this.contactStore.refresh();
    },
    exportCSV() {
      exportContactsCSV(this.contactStore.filteredContacts);
    },
    sendMail() {
      const list = this.contactStore.filteredContacts;
      if (!list.length) {
        Swal.fire({ icon: "info", title: "暂无联系人", timer: 1500, showConfirmButton: false });
        return;
      }
      mailtoContacts(list);
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
    },
    toast(title, text) {
      Swal.fire({ icon: "info", title, text, timer: 2000, showConfirmButton: false });
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
          } catch (err) {}
        }
        Swal.fire({ icon: ok ? "success" : "error", title: `导入完成 ${ok}/${rows.length}`, timer: 1800, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "导入失败", text: err.message });
      }
    },
  },
};
</script>