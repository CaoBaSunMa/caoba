<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        href="javascript:void(0);"
        @click="goBack"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="chevron-left"></feather-icon>
          </span>
        </span>
      </a>
      <div class="v-separator d-sm-inline-block d-none"></div>
      <a class="invoiceapp-title link-dark ms-1 ms-sm-0" href="javascript:void(0);">
        <h1>{{ draftStore.title }}预览</h1>
      </a>
    </div>
    <div class="invoice-options-wrap">
      <a
        href="javascript:void(0);"
        class="btn btn-outline-secondary flex-shrink-0 d-md-inline-block d-none"
        @click="printNow"
        >打印 / 导出 PDF</a
      >
      <router-link
        to="/apps/invoice/create-invoice"
        class="btn btn-soft-primary flex-shrink-0 d-md-inline-block d-none"
        >以此模板开始</router-link
      >
      <div class="v-separator d-md-inline-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable ms-0 d-md-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
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
import { useInvoiceDraftStore } from "@/stores/invoiceDraftStore";

export default {
  name: "PreviewHeader",
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const draftStore = useInvoiceDraftStore();
    return {
      layoutStore,
      draftStore,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    printNow() {
      window.print();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>