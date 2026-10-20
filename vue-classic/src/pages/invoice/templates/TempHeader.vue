<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <a class="invoiceapp-title link-dark" href="#">
        <h1>发票模板</h1>
      </a>
    </div>
    <div class="invoice-options-wrap">
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

export default {
  name: "TempHeader",
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    return {
      layoutStore,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>
