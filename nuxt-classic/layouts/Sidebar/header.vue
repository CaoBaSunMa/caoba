<template>
  <div class="menu-header">
    <span>
      <NuxtLink to="/" class="navbar-brand">
        <img class="brand-img img-fluid" src="@/assets/img/brand-sm.svg" alt="品牌标识" />
        <img class="brand-img img-fluid" src="@/assets/img/caoba.svg" alt="品牌标识" />
      </NuxtLink>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover navbar-toggle"
        @click="toggleSidebar"
      >
        <span class="icon">
          <span class="svg-icon fs-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-bar-to-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="10" y1="12" x2="20" y2="12"></line>
              <line x1="10" y1="12" x2="14" y2="16"></line>
              <line x1="10" y1="12" x2="14" y2="8"></line>
              <line x1="4" y1="4" x2="4" y2="20"></line>
            </svg>
          </span>
        </span>
      </BButton>
    </span>
  </div>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";

// Access the layout store
const layoutStore = useLayoutStore();

// Method to toggle the sidebar
const toggleSidebar = () => {
  layoutStore.toggleSidebar();
};
</script>
