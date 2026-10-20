<template>
  <header class="fm-header">
    <div class="d-flex align-items-center flex-grow-1">
      <BDropdown variant="link" toggle-class="fmapp-title text-dark p-0 ">
        <template #button-content>
          <h1>我的空间</h1>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="file"></feather-icon>
          </span>
          <span>所有文件</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="file-plus"></feather-icon>
          </span>
          <span>已同步文件</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="upload-cloud"></feather-icon>
          </span>
          <span>云文档</span>
        </BDropdownItem>
      </BDropdown>

      <BForm @submit.prevent class="mx-3 flex-grow-1 mw-400p" role="search">
        <BFormInput type="text" placeholder="搜索文件和文件夹" />
      </BForm>
    </div>
    <div class="fm-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover disabled d-xl-inline-block d-none"
        href="#"
      >
        <span class="icon">
          <feather-icon name="user-plus"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover fmapp-info-toggle"
        href="#"
        @click="toggleInfo"
        :active="showInfo"
      >
        <span class="icon">
          <feather-icon name="info"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator d-xl-inline-block d-none"></div>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="添加新文件夹"
      >
        <span class="icon">
          <feather-icon name="folder-plus"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded btn-file flush-soft-hover d-md-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="上传"
      >
        <span class="icon">
          <feather-icon name="upload-cloud"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator d-lg-inline-block d-none"></div>

      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon flush-soft-hover dropdown-toggle no-caret active ms-lg-0 d-sm-inline-block d-none"
        end
      >
        <template #button-content>
          <span class="icon">
            <feather-icon
              v-if="route.path.match('/apps/file-manager/list-view')"
              name="list"
            ></feather-icon>
            <feather-icon
              v-if="route.path.match('/apps/file-manager/grid-view')"
              name="grid"
            ></feather-icon>
          </span>
        </template>
        <BDropdownItem to="/apps/file-manager/list-view" active-class="active">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>列表视图</span>
        </BDropdownItem>
        <BDropdownItem to="/apps/file-manager/grid-view" active-class="active">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>网格视图</span>
        </BDropdownItem>
      </BDropdown>

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

<script setup>
import { defineProps, defineEmits } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/stores/layout";

// Props
const props = defineProps({
  showSidebar: Boolean,
  showInfo: Boolean,
});

// Emits
const emit = defineEmits(["toggle-sidebar", "toggle-info"]);

// Store and Route
const layoutStore = useLayoutStore();
const route = useRoute();

// Methods
const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const toggleInfo = () => {
  emit("toggle-info");
};
</script>
