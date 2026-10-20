<template>
  <header class="todo-header">
    <div class="d-flex align-items-center">
      <BDropdown variant="link" toggle-class="todoapp-title text-dark p-0 ">
        <template #button-content>
          <h1>所有任务</h1>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="align-center"></feather-icon>
          </span>
          <span>所有任务</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>我的任务</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="clock"></feather-icon>
          </span>
          <span>待处理任务</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="droplet"></feather-icon>
          </span>
          <span>进行中任务</span>
        </BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem href="#">紧急优先级</BDropdownItem>
        <BDropdownItem href="#">高优先级</BDropdownItem>
        <BDropdownItem href="#">低优先级</BDropdownItem>
      </BDropdown>
    </div>
    <div class="todo-options-wrap">
      <BForm @submit.prevent class="d-sm-block d-none" role="search">
        <BFormInput type="text" placeholder="搜索任务" />
      </BForm>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon
            :name="layoutStore.$state.topNavCollapse ? 'chevron-down' : 'chevron-up'"
          />
        </span>
      </BButton>
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
  name: "GalleryHeader",
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
