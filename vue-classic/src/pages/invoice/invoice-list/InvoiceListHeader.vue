<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <a
        class="invoiceapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>{{ invoiceStore.filterLabel }}</h1>
      </a>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          :class="{ active: invoiceStore.filter === 'all' }"
          @click="setFilter('all')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>全部发票</span>
        </a>
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          :class="{ active: invoiceStore.filter === 'sent' }"
          @click="setFilter('sent')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>已发送</span>
        </a>
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          :class="{ active: invoiceStore.filter === 'archived' }"
          @click="setFilter('archived')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>已归档</span>
        </a>
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          :class="{ active: invoiceStore.filter === 'pending' }"
          @click="setFilter('pending')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="edit"></feather-icon>
          </span>
          <span>待处理</span>
        </a>
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          :class="{ active: invoiceStore.filter === 'deleted' }"
          @click="setFilter('deleted')"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>已删除</span>
        </a>
      </div>
    </div>
    <div class="invoice-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none"
        href="javascript:void(0);"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="刷新"
        @click="refresh"
      >
        <span class="btn-icon-wrap">
          <span class="feather-icon">
            <feather-icon name="refresh-cw"></feather-icon>
          </span>
        </span>
      </a>
      <div class="v-separator d-lg-inline-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret ms-0 d-sm-inline-block d-none"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="btn-icon-wrap">
          <span class="feather-icon">
            <feather-icon name="settings"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="javascript:void(0);" @click="goManage('all')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="upload"></feather-icon>
          </span>
          <span>管理发票</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="goRecurring">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="download"></feather-icon>
          </span>
          <span>周期性发票</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="goEstimate">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="layers"></feather-icon>
          </span>
          <span>创建估算单</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="goTemplates">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="save"></feather-icon>
          </span>
          <span>已保存模板</span>
        </a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="btn-icon-wrap">
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="javascript:void(0);" @click="openSettings">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="settings"></feather-icon>
          </span>
          <span>设置</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="blockedInfo">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="slash"></feather-icon>
          </span>
          <span>屏蔽内容</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="feedback">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="external-link"></feather-icon>
          </span>
          <span>反馈</span>
        </a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="btn-icon-wrap">
          <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
          <feather-icon name="chevron-up" v-else />
        </span>
      </a>
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import { useInvoiceStore } from "@/stores/invoiceStore";
import Swal from "sweetalert2";

export default {
  name: "InvoiceListHeader",
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const invoiceStore = useInvoiceStore();
    return {
      layoutStore,
      invoiceStore,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    setFilter(f) {
      this.invoiceStore.setFilter(f);
    },
    refresh() {
      this.invoiceStore.fetchInvoices();
      Swal.fire({ icon: "success", title: "已刷新", timer: 1200, showConfirmButton: false });
    },
    goManage() {
      this.invoiceStore.setFilter("all");
      this.$router.push("/apps/invoice/invoice-list");
    },
    goRecurring() {
      this.$emit("recurring");
    },
    goEstimate() {
      this.$router.push("/apps/invoice/create-invoice?kind=estimate");
    },
    goTemplates() {
      this.$router.push("/apps/invoice/invoice-templates");
    },
    openSettings() {
      this.$emit("open-settings");
    },
    blockedInfo() {
      Swal.fire({
        icon: "info",
        title: "屏蔽内容",
        text: "发票模块暂无屏蔽内容。如需屏蔽联系人，可在联系人应用中操作。",
        confirmButtonText: "知道了",
      });
    },
    feedback() {
      window.location.href = "mailto:caoba_01@caoba.com?subject=" + encodeURIComponent("发票模块反馈");
    },
  },
};
</script>
