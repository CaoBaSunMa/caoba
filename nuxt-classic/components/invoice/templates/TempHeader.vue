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
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
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

// Define props and emits
const props = defineProps({
  showSidebar: Boolean,
});
const emit = defineEmits(["toggle-sidebar"]);

// Store reference
const layoutStore = useLayoutStore();

// Toggle sidebar function
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
