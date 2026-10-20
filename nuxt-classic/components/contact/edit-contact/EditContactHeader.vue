<template>
  <header class="contact-header">
    <div class="d-flex align-items-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <NuxtLink to="/apps/contact/contact-list">联系人</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">摩根·弗里曼</li>
        </ol>
      </nav>
    </div>
    <div class="contact-options-wrap">
      <div class="d-flex fs-7 align-items-center">1 / 30</div>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover no-caret d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="上一个"
      >
        <span class="icon">
          <feather-icon name="chevron-left"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="下一个"
      >
        <span class="icon">
          <feather-icon name="chevron-right"></feather-icon>
        </span>
      </BButton>
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
import { useLayoutStore } from "@/stores/layout";

// Props
const props = defineProps({
  showSidebar: Boolean,
});

// Store
const layoutStore = useLayoutStore();

// Emits
const emit = defineEmits(['toggle-sidebar']);

// Methods
const toggleSidebar = () => {
  emit('toggle-sidebar');
};

</script>
