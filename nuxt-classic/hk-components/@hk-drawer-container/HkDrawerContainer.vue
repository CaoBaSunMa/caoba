<template>
  <div>
    <div
      :class="[
        'hk-drawer',
        drawerContents.classes,
        { 'drawer-toggle': drawerContents.status },
      ]"
    >
      <div class="drawer-header">
        <div class="drawer-text">{{ drawerContents.title }}</div>
        <button type="button" class="drawer-close btn-close" @click="toggleDrawer">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="drawer-body">
        <!-- Replace SimpleBar with a Vue equivalent if needed -->
        <simplebar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <img
              v-if="drawerContents.img"
              :src="drawerContents.img"
              class="img-fluid"
              alt="cart"
            />
            <p>{{ drawerContents.text }}</p>
          </div>
        </simplebar>
      </div>
      <div v-if="drawerContents.footer" class="drawer-footer">
        <p class="p-xs">{{ drawerContents.footer }}</p>
      </div>
    </div>
    <div
      v-if="drawerContents.backdrop"
      class="hk-drawer-backdrop"
      @click="toggleDrawer"
    ></div>
  </div>
</template>

<script setup>
import { useDrawerStore } from "../../stores/drawer";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

const drawerStore = useDrawerStore();

// Computed property to get the drawer contents from the store
const drawerContents = computed(() => drawerStore.drawerContents);

// Method to toggle the drawer status
function toggleDrawer() {
  drawerStore.toggleDrawerStatus();
}

const route = useRoute();
// Watch for changes on the current route
watch(
  () => route.path,
  () => {
    // Set drawerContents.status to false when the route changes
    drawerStore.drawerContents.status = false;
  }
);
</script>
