<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover"
        href="#"
        @click="goBack"
      >
        <span class="icon">
          <feather-icon name="chevron-left"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator d-sm-inline-block d-none"></div>
      <a class="invoiceapp-title link-dark ms-1 ms-sm-0" href="#">
        <h1>模板预览</h1>
      </a>
    </div>
    <div class="invoice-options-wrap">
      <router-link
        to="/apps/invoice/create-invoice"
        class="btn btn-soft-primary flex-shrink-0 d-md-inline-block d-none"
      >
        以此模板开始
      </router-link>
      <div class="v-separator d-md-inline-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
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

// Router
const router = useRouter();

// Methods
function toggleSidebar() {
  emit("toggle-sidebar");
}

function goBack() {
  router.go(-1);
}
</script>
