<template>
  <header class="integrations-header">
    <div class="d-flex align-items-center flex-1">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover flex-shrink-0"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
      >
        <span class="btn-icon-wrap">
          <span class="feather-icon">
            <feather-icon name="chevron-left"></feather-icon>
          </span>
        </span>
      </a>
      <div class="v-separator d-sm-inline-block d-none"></div>
      <nav class="ms-1 ms-sm-0" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#">所有应用</a></li>
          <li class="breadcrumb-item"><a href="#">热门</a></li>
          <li class="breadcrumb-item active" aria-current="page">Kickstarter</li>
        </ol>
      </nav>
    </div>
    <div class="integrations-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-md-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
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

export default {
  name: "AppHeader",
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
