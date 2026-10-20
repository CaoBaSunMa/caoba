<template>
  <header class="integrations-header">
    <div class="d-flex flex-1">
      <a class="integrationsapp-title">
        <h1>集成</h1>
      </a>
      <BFormSelect class="d-md-none mw-300p ms-3" model-value="selected">
        <BFormSelectOption value="selected">全部集成</BFormSelectOption>
        <BFormSelectOption value="1">原生集成</BFormSelectOption>
      </BFormSelect>
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
      <BForm @submit.prevent class="mw-300p flex-grow-1 d-lg-flex d-none" role="search">
        <BFormInput type="text" placeholder="按分类、名称、标签搜索" />
      </BForm>
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
