<template>
  <header class="integrations-header">
    <div class="d-flex align-items-center flex-1">
      <a href="#" class="integrationsapp-title link-dark flex-shrink-0">
        <h1>所有应用</h1>
      </a>
      <form class="ms-3 w-xl-30 d-md-block d-none" role="search" @submit.prevent>
        <input
          type="text"
          class="form-control"
          placeholder="按分类、名称、标签搜索"
          :value="searchValue"
          @input="$emit('update:searchValue', $event.target.value)"
        />
      </form>
    </div>
    <div class="integrations-options-wrap">
      <select
        class="form-select"
        :value="sortBy"
        @change="$emit('update:sortBy', $event.target.value)"
      >
        <option value="hot">热门</option>
        <option value="new">新应用</option>
        <option value="name">按名称</option>
        <option value="downloads">按下载量</option>
      </select>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable flex-shrink-0 d-sm-inline-block d-none"
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
  name: "AppsHeader",
  props: {
    showSidebar: Boolean,
    searchValue: {
      type: String,
      default: "",
    },
    sortBy: {
      type: String,
      default: "hot",
    },
  },
  emits: ["toggle-sidebar", "update:searchValue", "update:sortBy"],
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
