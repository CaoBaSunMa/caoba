<template>
  <header class="integrations-header">
    <div class="d-flex flex-1">
      <a class="integrationsapp-title">
        <h1>集成</h1>
      </a>
      <select class="form-select d-md-none mw-300p ms-3">
        <option selected="">全部集成</option>
        <option value="1">原生集成</option>
      </select>
    </div>

    <div class="h-100 d-md-flex d-none">
      <ul class="nav nav-line nav-tabs nav-icon nav-light flex-shrink-0 px-2">
        <li class="nav-item">
          <a
            class="d-flex align-items-center h-100 nav-link active"
            data-bs-toggle="tab"
            href="#"
          >
            <span class="nav-icon-wrap">
              <span class="feather-icon">
                <feather-icon name="check-square"></feather-icon>
              </span>
            </span>
            <span class="nav-link-text">全部集成</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="d-flex align-items-center h-100 nav-link"
            data-bs-toggle="tab"
            href="#"
          >
            <span class="nav-icon-wrap">
              <span class="feather-icon">
                <feather-icon name="globe"></feather-icon>
              </span>
            </span>
            <span class="nav-link-text">原生集成</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="integrations-options-wrap justify-content-end flex-1 d-md-flex d-none">
      <form class="mw-300p flex-grow-1 d-lg-flex d-none" role="search">
        <input
          type="text"
          class="form-control"
          placeholder="按分类、名称、标签搜索"
        />
      </form>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
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
  name: "IntegrationHeader",
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
