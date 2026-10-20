<template>
  <div class="hk-pg-body py-0">
    <div
      :class="['integrationsapp-wrap', { 'integrationsapp-sidebar-toggle': showSidebar }]"
    >
      <AppSidebar />
      <div class="integrationsapp-content">
        <div class="integrationsapp-detail-wrap">
          <slot
            name="integration-header"
            :showSidebar="showSidebar"
            :toggleSidebar="toggleSidebar"
          />
          <slot name="integration-body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppSidebar from "./AppSidebar.vue";

// Reactive state
const showSidebar = ref(false);

// Methods
function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>
