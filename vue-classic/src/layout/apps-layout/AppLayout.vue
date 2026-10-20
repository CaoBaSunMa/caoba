<template>
  <div
    :class="[
      'hk-wrapper',
      { hk__email__backdrop: emailStore.$state.maximize },
      { 'hk-pg-auth': errorRoute },
    ]"
    data-layout="vertical"
    :data-navbar-style="layoutStates.topNavCollapse ? 'collapsed' : ''"
    :data-layout-style="layoutStates.isSidebarCollapsed ? 'collapsed' : 'default'"
    :data-hover="layoutStates.dataHover ? 'active' : ''"
    data-menu="light"
    data-footer="simple"
  >
    <TopNav />
    <Sidebar />
    <div class="hk-pg-wrapper" :class="{ 'pb-0': appRoutes }">
      <RouterView />
      <PageFooter v-if="!appRoutes" />
    </div>
  </div>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";
import { onMounted, watch, computed, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useEmailStore } from "@/stores/emailStore";
//components
import TopNav from "../Header/TopNav.vue";
import Sidebar from "../Sidebar/Sidebar.vue";
import PageFooter from "../Sidebar/Sidebar.vue";

const layoutStore = useLayoutStore();
const emailStore = useEmailStore();
const route = useRoute();
const layoutStates = layoutStore.$state;

const pathName = computed(() => route.path);
const appRoutes = computed(() => pathName.value.match("/apps/"));
const errorRoute = computed(() => pathName.value.match("/error-404"));

onMounted(() => {
  updateSidebarState();
});

// eslint-disable-next-line no-unused-vars
watch(pathName, (newPath) => {
  updateSidebarState();
});

watch(
  () => layoutStore.isSidebarCollapsed,
  (newVal) => {
    setTimeout(() => {
      layoutStore.setDataHover(newVal);
    }, 250);
  }
);

function updateSidebarState() {
  const isAppGroupPage = appRoutes.value;
  if (isAppGroupPage && window.innerWidth >= 1200) {
    layoutStore.collapseSidebar();
  } else {
    layoutStore.expandSidebar();
  }
}

// Handle window resize
const handleResize = () => {
  updateSidebarState();
};

// Lifecycle hook for when the component is mounted
onMounted(() => {
  window.addEventListener("resize", handleResize);
  updateSidebarState(); // Initial call to set the state correctly
});

// Cleanup event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
