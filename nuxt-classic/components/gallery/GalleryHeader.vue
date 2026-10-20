<template>
  <header class="gallery-header">
    <div class="d-flex align-items-center flex-grow-1">
      <BDropdown variant="link-dark" toggle-class="galleryapp-title p-0 ">
        <template #button-content>
          <h1>媒体图库</h1>
        </template>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="hard-drive"></feather-icon>
          </span>
          <span>图库</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="folder"></feather-icon>
          </span>
          <span>合集</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="upload"></feather-icon>
          </span>
          <span>共享给我的</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon"> <feather-icon name="star"></feather-icon> </span
          ><span>收藏</span>
        </BDropdownItem>
      </BDropdown>

      <BForm @submit.prevent class="mx-3 flex-grow-1 mw-400p" role="search">
        <BFormInput type="text" placeholder="按名称搜索媒体" />
      </BForm>
    </div>
    <div class="gallery-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover btn-file-download disabled d-xl-inline-block d-none"
        href="#"
      >
        <span class="icon">
          <feather-icon name="download"></feather-icon>
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
      >
        <template #button-content>
          <span class="icon">
            <feather-icon name="list"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#" active>
          <span class="dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>列表视图</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>网格视图</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="server"></feather-icon>
          </span>
          <span>紧凑视图</span>
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
      :class="['hk-sidebar-togglable', { active: !showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useLayoutStore } from "@/stores/layout";

// Props
const props = defineProps({
  showSidebar: Boolean,
  showInfo: Boolean,
});

// Emits
const emit = defineEmits(["toggle-sidebar", "toggle-info"]);

// Store
const layoutStore = useLayoutStore();

// Methods
const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const toggleInfo = () => {
  emit("toggle-info");
};
</script>
