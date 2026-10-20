<template>
  <header class="integrations-header">
    <div class="d-flex align-items-center flex-1">
      <a href="#" class="integrationsapp-title link-dark flex-shrink-0">
        <h1>所有应用</h1>
      </a>
      <BForm @submit.prevent class="ms-3 w-xl-30 d-md-block d-none" role="search">
        <BFormInput type="text" placeholder="按分类、名称、标签搜索" />
      </BForm>
    </div>
    <div class="integrations-options-wrap">
      <BFormSelect model-value="selected">
        <BFormSelectOption value="selected">热门</BFormSelectOption>
        <BFormSelectOption value="1">新应用</BFormSelectOption>
        <BFormSelectOption value="2">推荐</BFormSelectOption>
        <BFormSelectOption value="3">开发者工具</BFormSelectOption>
      </BFormSelect>

      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="btn-icon-wrap">
          <feather-icon
            :name="layoutStore.$state.topNavCollapse ? 'chevron-down' : 'chevron-up'"
          />
        </span>
      </a>
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";

// Props
const props = defineProps({
  showSidebar: Boolean,
});

// Emit events
const emit = defineEmits(["toggle-sidebar"]);

// Layout store
const layoutStore = useLayoutStore();

// Methods
function toggleSidebar() {
  emit("toggle-sidebar");
}
</script>
